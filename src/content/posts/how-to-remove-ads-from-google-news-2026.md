---
title: "How To Remove Ads From Google News 2026"
description: "Three types of ads appear in Google News — and each needs a different fix. Here's exactly how to remove ads from Google News on Android and iPhone."
publishDate: 2026-05-28
heroImage: "/og/how-to-remove-ads-from-google-news-2026.png"
tags: ["ad blocker", "privacy", "review"]
---

You open Google News on your phone. Between the second and third headline, there is a sponsored story card labeled "Promoted." Scroll down the Discover feed on your home screen and you find another three. Tap through to the actual article and you hit a full-screen interstitial before the first paragraph loads.

That is three separate ad surfaces — and most guides treat them as one problem. They are not. Knowing **[how to remove](https://snipstack.io/how-to-remove-ads-from-amazon-music-2026/) ads from Google News** properly means knowing which surface you are dealing with and which tool actually reaches it.

This guide breaks each surface down, explains why standard content blockers miss most of them, and walks through the setup that handles all three with one tool.

![Google News app showing sponsored story cards between headlines — before and after ad blocking](/og/how-to-remove-ads-from-google-news-2026.png)

---

## Quick Verdict

Google News serves ads from three distinct surfaces: sponsored story cards inside the app, ads in the Discover feed, and publisher ads on the sites you tap through to. A Safari content blocker only catches the last type, and only in a browser. A DNS-level network blocker like [Surfshark CleanWeb](https://snipstack.io/surfshark-cleanweb-review-2026/) reaches all three from one toggle because it filters at the network layer, covering every app on your device — including Google News itself. **[See how CleanWeb blocks Google News ads system-wide →](/blog/adblock?sub=how-to-remove-ads-from-google-news-2026__above-fold)**

---

## What Are the Ads in Google News, Exactly?

Google News is a free product, and advertising pays for it. But the ad inventory is spread across multiple layers, which is why blocking it is more complicated than it looks.

### Layer 1 — Sponsored Story Cards in the App

Inside the Google News app (Android and iOS), "Promoted" labels appear between organic news cards. These are served directly by Google's ad infrastructure and look almost identical to regular news items except for the small label. On a typical session, you will see two to five of these per screen-scroll.

Because these are served from Google's own ad domains — pagead2.googlesyndication.com and similar — a blocklist that covers Google Ad services will intercept them at the DNS level. A browser content blocker, however, never sees them at all. They load through the app's own networking stack, completely outside any browser.

### Layer 2 — Promoted Stories in the Google Discover Feed

The Discover feed on Android (the swipe-left panel from the home screen) and inside Chrome's New Tab page also surfaces "Sponsored" content cards from Google Ads. These are not news — they are paid placements from advertisers targeting your interest profile. They blend into the organic feed with a subtler label than the in-app sponsored cards.

The same DNS-level approach that catches Layer 1 ads will catch these, because the underlying ad request domains are the same Google Ads infrastructure.

### Layer 3 — Publisher Ads on Tap-Through Articles

When you tap a headline in Google News, you leave the app and land on the publisher's website. That site has its own ad stack — Taboola widgets, OutBrain "recommended stories" boxes, Google Display Network banners, auto-play video pre-rolls, and interstitial overlays. These are served by the publisher, not by Google News.

This is the layer that a [browser content blocker](https://snipstack.io/ad-blocker-for-iphone-browser-2026/) on Safari or Chrome can reach, but only if you are reading in a browser rather than in the in-app WebView that Google News opens by default.

---

## Why Standard Fixes Only Cover Part of the Problem

![Google News ad layers diagram — app layer, Discover layer, and publisher layer each require different blocking approaches](/og/how-to-remove-ads-from-google-news-2026-inline-1.png)

Understanding the layers makes the failure modes of common fixes obvious.

### Reader Mode

Safari's Reader Mode and Chrome's Simplified View strip a page down to article text. They help with Layer 3 publisher clutter when you are reading in a browser, but they have no effect whatsoever on sponsored cards inside the Google News app or the Discover feed. Reader Mode also does not block the underlying network requests — trackers still fire in the background.

### Safari Content Blockers (AdGuard, 1Blocker, Wipr)

iOS Content Blockers are excellent tools for their intended scope: filtering ad requests inside Safari's rendering engine. That scope does not include any traffic from the Google News app or the Discover feed. Open Google News and you are in a different app — the content blocker is simply not present.

Even when you tap a Google News headline and the article loads in the Google News in-app browser (not Safari), a Safari content blocker typically does not apply. The in-app WebView is sandboxed from Safari's extension environment.

### AdGuard for Android

AdGuard's Android app can run as a local VPN to extend filtering beyond the browser. This covers more ground than iOS browser-only solutions. The tradeoff is that running a local VPN with active filtering has measurable battery impact, and the configuration is more involved than most users want to manage.

**[Block all three Google News ad layers at once — try CleanWeb →](/blog/adblock?sub=how-to-remove-ads-from-google-news-2026__mid)**

---

## [How to Remove](https://snipstack.io/how-to-remove-ads-from-news-sites-2026/) Ads From Google News: The Complete Approach

A network-level DNS blocker is the only single tool that covers all three layers. Here is how it works and how to set it up.

### How DNS-Level Blocking Works

Every ad that loads — whether a sponsored card in the Google News app, a Discover feed placement, or a banner on a publisher's site — requires a network request to an advertising domain. DoubleClick, pagead2.googlesyndication.com, Taboola, OutBrain, media.net, and hundreds of others all resolve through DNS before any content is fetched.

A DNS-level blocker intercepts that resolution step. When an ad domain appears in the request, the blocker returns nothing — the domain does not resolve, the request goes nowhere, and the ad never loads. Crucially, this happens at the network layer, upstream of every app on your phone. The Google News app, the Discover feed widget, and any browser you open all route through the same DNS filter.

### What Surfshark CleanWeb Blocks in Google News

Surfshark's CleanWeb feature is a DNS and network filter built into the Surfshark VPN app. When it is active, it covers:

- **Sponsored story cards** in the Google News app (ad network domain requests dropped)
- **Discover feed promoted placements** (same Google Ads domain infrastructure)
- **Publisher banner ads and video pre-rolls** on tap-through articles
- **Taboola and OutBrain widgets** at the bottom of publisher articles
- **Third-party tracking pixels** across all three surfaces
- **Some malvertising domains** that occasionally appear in ad network inventory

### What CleanWeb Cannot Block

First-party served ads — placements where the publisher serves ads from their own domain rather than a third-party ad network — are outside DNS-level blocking's reach. Google's own search ads on google.com are also unaffected; CleanWeb avoids blocking Google's core search infrastructure to prevent breaking search functionality.

Cosmetic filtering (removing empty HTML containers left after an ad is blocked) also requires a browser extension. You may see blank spaces where Taboola widgets used to be on publisher sites. The content is gone, but the placeholder remains.

---

## Step-by-Step Setup

Setup takes under three minutes on either platform.

![Surfshark app showing CleanWeb toggle in VPN Settings — one switch blocks Google News ads across all surfaces](/og/how-to-remove-ads-from-google-news-2026-inline-2.png)

### Android Setup (Google News is Preinstalled)

Google News comes preinstalled on most Android devices. Because it runs as a standalone app, DNS-level filtering is the only way to block its ads without rooting the device.

1. Download the Surfshark app from Google Play
2. Sign in to your account
3. Tap the **Settings** gear icon
4. Select **VPN Settings**, then enable the **CleanWeb** toggle
5. Return to the main screen and connect to any server location

Once connected, open Google News and scroll through the feed. The "Promoted" story cards will either be absent or replaced by blank space. The Discover feed on your home screen will show the same reduction in sponsored placements.

### iPhone Setup

1. Download the Surfshark app from the App Store
2. Sign in to your account
3. Tap **Settings** at the bottom
4. Select **VPN Settings**, then toggle **CleanWeb** on
5. Connect to any server

CleanWeb is now active across every app on your iPhone — including Google News, Safari, Chrome, and any other browser or app you use.

### Optional: Pair With a Safari Content Blocker

For belt-and-suspenders coverage inside Safari specifically, you can install AdGuard for iOS or [Wipr](https://snipstack.io/ad-blocker-for-iphone-browser-2026/) alongside CleanWeb. The content blocker handles cosmetic filtering and cookie consent banners inside Safari. CleanWeb handles everything outside it. The two work at different layers and do not conflict.

---

## Does Blocking Google News Ads Actually Change Anything?

The short answer: yes, in ways you notice immediately.

**Faster article loading.** When you tap a Google News headline, the publisher page loads significantly faster without ad network requests. News publisher pages are among the worst offenders for third-party script load — averaging 80–100 separate network requests per page on mobile. Removing those cuts load time measurably on any mobile connection.

**Less data consumption.** Video ad units are large. A single auto-play video ad can consume 2–5 MB. On a news reading session of ten to fifteen articles, that adds up quickly on limited mobile plans.

**Reduced cross-site tracking.** The tracking pixels and retargeting scripts embedded in Google News publisher articles feed ad profiles that [follow you across the web](https://snipstack.io/how-to-stop-tracking-ads-follow-me-2026/). Blocking the underlying domain requests prevents those data points from being recorded.

**Fewer malvertising exposures.** Ad networks occasionally serve scripts from compromised inventory that redirect to phishing pages or push fake update prompts. DNS-level blocking prevents the device from connecting to those domains at all, which is a meaningful [security benefit](https://snipstack.io/check-suspicious-link-before-clicking-2026/) on mobile where users are more likely to tap without scrutinizing URLs.

---

## Frequently Asked Questions

**Does this work on the Google News web app at news.google.com?**

Yes. When you open news.google.com in Safari or Chrome on your phone, CleanWeb's DNS filtering applies to the browser traffic. Sponsored story cards served from Google Ads domains are blocked. Publisher ads on tap-through articles are also blocked. The coverage is the same as for the native app. **[Check CleanWeb pricing and trial terms →](/blog/adblock?sub=how-to-remove-ads-from-google-news-2026__faq)**

**Will blocking ads break the Google News app?**

No. Organic news cards, article text, images, and video from publishers all load normally — only ad domain requests are dropped. The app itself functions normally. The only visible change is that sponsored story cards are absent or replaced by blank space in the feed.

**Can Google tell I am using an [ad blocker](https://snipstack.io/ad-blocker-for-online-learning-platforms-2026/)?**

Google News can detect some browser-extension [ad blocker](https://snipstack.io/ad-blocker-for-slow-internet-connections-2026/)s through JavaScript fingerprinting. DNS-level blocking is much harder to detect. The ad request simply appears to time out from Google's perspective — the same as a slow network connection to an ad server. There is no browser signature to identify.

**Does this affect the rest of my Google services?**

CleanWeb targets ad network domains, not core Google services. Gmail, Google Maps, Google Drive, Google Search, and YouTube's main video content all load normally. YouTube ads are partially blocked at the DNS level, though YouTube uses techniques specifically designed to resist DNS-level blocking. For [YouTube ad blocking](https://snipstack.io/best-ad-blocker-for-youtube-2026/) specifically, a browser extension with YouTube-specific rules performs better.

**Is there a free way to block Google News ads?**

Browser-only free tools like AdGuard for iOS work inside Safari on publisher articles (Layer 3 only). For the sponsored cards inside the Google News app and Discover feed, you need a network-level solution. Surfshark CleanWeb is included in a Surfshark subscription, which comes with a risk-free trial period — there is no standalone free tier for the VPN-based DNS filter.

**Does CleanWeb slow down my internet connection?**

A small amount of latency is added by routing DNS through Surfshark's servers. In practice this is not noticeable during normal use — the round-trip for a DNS lookup is measured in milliseconds. Page load times are faster overall because far fewer requests are made once ad domains are filtered out.

---

## Bottom Line

Google News ads are not one problem — they are three. Sponsored cards in the app, promoted placements in the Discover feed, and publisher ads on the sites you tap through all require a blocker that operates at the network layer, not just inside one browser.

A DNS-level filter like CleanWeb is the only single tool that covers all three. Set it up once, connect to a server, and every surface is covered — no per-app configuration, no browser-specific workarounds.

The setup takes less time than reading this article took.

**[Block Google News ads on every surface — see Surfshark CleanWeb →](/blog/adblock?sub=how-to-remove-ads-from-google-news-2026__cta)**

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does this work on the Google News web app at news.google.com?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. When you open news.google.com in a browser on your phone, DNS-level filtering applies to the browser traffic. Sponsored story cards served from Google Ads domains are blocked, and publisher ads on tap-through articles are also filtered. Coverage is the same as for the native app."
      }
    },
    {
      "@type": "Question",
      "name": "Will blocking ads break the Google News app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Organic news cards, article text, images, and publisher video all load normally — only ad domain requests are dropped. The app functions normally; the only visible change is that sponsored story cards are absent or replaced by blank space."
      }
    },
    {
      "@type": "Question",
      "name": "Can Google tell I am using an [ad blocker](https://snipstack.io/ad-blocker-for-parental-control-devices-2026/)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Google News can detect some browser-extension [ad blocker](https://snipstack.io/ad-blocker-for-nintendo-switch-browser-2026/)s through JavaScript fingerprinting. DNS-level blocking is much harder to detect — the ad request simply appears to time out from Google's perspective, the same as a slow connection to an ad server."
      }
    },
    {
      "@type": "Question",
      "name": "Does CleanWeb affect other Google services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CleanWeb targets ad network domains, not core Google services. Gmail, Google Maps, Google Drive, Google Search, and YouTube's main video content all load normally. YouTube ads are partially blocked at the DNS level, though YouTube uses techniques specifically designed to resist DNS-level blocking."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a free way to block Google News ads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Browser-only free tools like AdGuard for iOS work inside Safari on publisher articles only. For the sponsored cards inside the Google News app and Discover feed, you need a network-level solution. Surfshark CleanWeb is included with a Surfshark subscription — there is no standalone free tier for VPN-based DNS filtering."
      }
    },
    {
      "@type": "Question",
      "name": "Does CleanWeb slow down my internet connection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A small amount of latency is added by routing DNS through Surfshark's servers, measured in milliseconds. Page load times are faster overall because far fewer requests are made once ad domains are filtered out."
      }
    }
  ]
}
</script>
