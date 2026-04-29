const OFFER_MAP: Record<string, number> = {
  vpn: 926,
  adblock: 1498,
  altnumber: 1691,
  altid: 1421,
  antivirus: 934,
  scamcheck: 1843,
  one: 1249,
};

const AFFILIATE_ID = 45462;

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const segments = url.pathname.split('/').filter(Boolean);

    // Expecting /go/{product}
    if (segments[0] !== 'go' || segments.length < 2) {
      return new Response('Not found', { status: 404 });
    }

    const product = segments[1];
    const offerId = OFFER_MAP[product];
    if (!offerId) {
      return new Response(`Unknown product: ${product}`, { status: 404 });
    }

    const sub = url.searchParams.get('sub') ?? '';
    const target = new URL('https://get.surfshark.net/aff_c');
    target.searchParams.set('offer_id', offerId.toString());
    target.searchParams.set('aff_id', AFFILIATE_ID.toString());
    if (sub) target.searchParams.set('sub_id', sub);

    return Response.redirect(target.toString(), 302);
  },
};
