const OFFER_MAP: Record<string, number> = {
  vpn: 926,
  adblock: 1498,
  altnumber: 1691,
  altid: 1421,
  antivirus: 934,
  scamcheck: 1843,
  one: 1249,
  surfshark: 6,  // generic Surfshark all-products offer
};

// Short alias map for legacy compact routes.
const SHORT_ALIAS: Record<string, string> = {
  vp: "vpn",
  ab: "adblock",
  pn: "altnumber",
  id: "altid",
  av: "antivirus",
};

const AFFILIATE_ID = 45462;
const GA4_BLOG_MEASUREMENT_ID = 'G-NT7MLPX9FE';
const GA4_YOUTUBE_MEASUREMENT_ID = 'G-F3896NTQ05';

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const segments = url.pathname.split('/').filter(Boolean);

    // Resolve product + path-style sub_id.
    // New source-specific routes:
    //   /yt/{subid}              YouTube redirect (future videos)
    //   /blog/{product}          Blog redirect (?sub= for sub_id)
    //   /blog/{product}/{subid}  Blog redirect with path-style sub_id
    // Legacy routes retained:
    //   /sk/{subid}              YouTube redirect (old video descriptions/comments)
    // Routes accepted:
    //   /go/{product}            (?sub= / ?yt= for sub_id)
    //   /go/{product}/{subid}    (path-style sub_id)
    //   /{alias}                 product short alias
    //   /{alias}/{subid}         short alias + path sub_id
    let product: string | undefined;
    let pathSub = '';
    let routeSource = 'legacy';
    let channel = 'direct';
    let ga4MeasurementId = GA4_BLOG_MEASUREMENT_ID;

    if ((segments[0] === 'yt' || segments[0] === 'sk') && segments.length >= 1) {
      product = 'surfshark';
      routeSource = segments[0];
      channel = 'yt';
      ga4MeasurementId = GA4_YOUTUBE_MEASUREMENT_ID;
      if (segments.length >= 2) pathSub = segments[1];
    } else if (segments[0] === 'blog' && segments.length >= 2) {
      product = segments[1];
      routeSource = 'blog';
      channel = 'blog';
      ga4MeasurementId = GA4_BLOG_MEASUREMENT_ID;
      if (segments.length >= 3) pathSub = segments[2];
    } else if (segments[0] === 'go' && segments.length >= 2) {
      product = segments[1];
      routeSource = 'go';
      if (segments.length >= 3) pathSub = segments[2];
    } else if (segments.length >= 1 && SHORT_ALIAS[segments[0]]) {
      product = SHORT_ALIAS[segments[0]];
      routeSource = segments[0];
      if (segments.length >= 2) pathSub = segments[1];
    } else {
      return new Response('Not found', { status: 404 });
    }

    const offerId = OFFER_MAP[product];
    if (!offerId) {
      return new Response(`Unknown product: ${product}`, { status: 404 });
    }

    // Sub-ID resolution priority: path-segment → ?sub= → ?yt= → ?utm_source= → default
    const sub =
      pathSub ||
      url.searchParams.get('sub') ||
      url.searchParams.get('yt') ||
      url.searchParams.get('utm_source') ||
      `direct-${product}`;

    // Multi-dimension attribution (Simon msg 1714, 2026-05-08)
    // aff_sub  = slug (article/video identifier)
    // aff_sub2 = channel (yt/blog/quora/direct; source routes override Referer)
    // aff_sub3 = country (Cloudflare CF-IPCountry header, e.g. US/UK/HK)
    // aff_sub4 = device (mobile/desktop/tablet, derived from User-Agent)
    // aff_sub5 = reserved
    const referer = request.headers.get('referer') || '';
    if (channel === 'direct') {
      if (/youtube\.com|youtu\.be/i.test(referer)) channel = 'yt';
      else if (/snipstack\.io/i.test(referer)) channel = 'blog';
      else if (/quora\.com/i.test(referer)) channel = 'quora';
      else if (/medium\.com/i.test(referer)) channel = 'medium';
      else if (/hashnode\.dev|hashnode\.com/i.test(referer)) channel = 'hashnode';
      else if (/reddit\.com/i.test(referer)) channel = 'reddit';
      else if (/google\.com|google\.[a-z]{2,3}/i.test(referer)) channel = 'google';
      else if (/bing\.com/i.test(referer)) channel = 'bing';
      else if (referer) channel = 'other';
    }

    const country = (request.headers.get('cf-ipcountry') || '').toUpperCase() || 'XX';

    const ua = (request.headers.get('user-agent') || '').toLowerCase();
    let device = 'desktop';
    if (/ipad|tablet/i.test(ua)) device = 'tablet';
    else if (/iphone|android|mobile/i.test(ua)) device = 'mobile';

    // Sanitize values for URL parameter (allow alnum, dash, underscore)
    const sanitize = (s: string, max: number = 64) =>
      s.replace(/[^a-zA-Z0-9_\-]/g, '_').slice(0, max);

    const target = new URL('https://get.surfshark.net/aff_c');
    target.searchParams.set('offer_id', offerId.toString());
    target.searchParams.set('aff_id', AFFILIATE_ID.toString());
    // TUNE/HasOffers standard parameters (Surfshark official format verified 2026-05-08)
    target.searchParams.set('aff_sub', sanitize(sub));
    target.searchParams.set('aff_sub2', channel);
    target.searchParams.set('aff_sub3', country);
    target.searchParams.set('aff_sub4', device);
    // Keep legacy sub_id for backward compat with any downstream tracker
    target.searchParams.set('sub_id', sanitize(sub));

    const targetUrl = target.toString();
    const safeProduct = product.replace(/[^a-z0-9_-]/gi, '');
    const safeRouteSource = routeSource.replace(/[^a-z0-9_-]/gi, '');
    const safeSub = sub.replace(/'/g, "\\'").replace(/[<>"]/g, '');

    // JS interstitial: fire GA4 event then redirect (~600ms)
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>Loading…</title>
<script async src="https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${ga4MeasurementId}', {
    page_path: '/${safeRouteSource}/${safeProduct}',
    page_title: 'Affiliate redirect: ${safeProduct}'
  });
  gtag('event', 'affiliate_redirect', {
    'product': '${safeProduct}',
    'sub_id': '${safeSub}',
    'channel': '${channel}',
    'route_source': '${safeRouteSource}',
    'country': '${country}',
    'device': '${device}',
    'event_category': 'affiliate',
    'event_label': '${safeSub}'
  });
  setTimeout(function() {
    location.href = ${JSON.stringify(targetUrl)};
  }, 600);
</script>
<meta http-equiv="refresh" content="2;url=${targetUrl.replace(/"/g, '&quot;')}">
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    margin: 0; padding: 0; background: #f8f9fa; color: #333;
    display: flex; align-items: center; justify-content: center; min-height: 100vh; }
  .box { text-align: center; }
  .spinner { display: inline-block; width: 32px; height: 32px;
    border: 3px solid #e1e3e6; border-top-color: #0064ff;
    border-radius: 50%; animation: spin 0.8s linear infinite;
    margin-bottom: 16px; }
  @keyframes spin { to { transform: rotate(360deg); } }
  p { margin: 0; font-size: 14px; color: #666; }
  a { color: #0064ff; }
</style>
</head>
<body>
  <div class="box">
    <div class="spinner"></div>
    <p>Redirecting to our recommended provider…</p>
    <p style="margin-top:8px;font-size:12px"><a href="${targetUrl}">Click here if not redirected automatically</a></p>
  </div>
</body>
</html>`;

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
        'X-Robots-Tag': 'noindex,nofollow',
      },
    });
  },
};
