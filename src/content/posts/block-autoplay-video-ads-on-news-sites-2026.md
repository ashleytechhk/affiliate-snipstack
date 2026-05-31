---
title: "What is Block Autoplay Video Ads On News Sites (And Do You Need It?) on Mobile 2026"
description: "Autoplay video ads on news sites drain your battery and data on mobile. Learn exactly how to block them system-wide on iPhone and Android in 2026."
publishDate: 2026-06-01
heroImage: "/og/block-autoplay-video-ads-on-news-sites-2026.png"
tags: ["ad blocker", "privacy", "review"]
---

You tap a news headline on your phone. Half a second later, a video ad blasts into the article — sometimes with sound, always before the text has finished loading. You scroll past it. It keeps playing. You scroll back to find the close button. There is no close button.

This is the autoplay video ad, and it is the single most intrusive ad format on mobile news in 2026. Unlike a static banner you can ignore, an autoplay video consumes your data, taxes your battery, and in many cases starts its audio track regardless of whether your phone is on silent. Understanding how to **block autoplay video ads on news sites** on your phone is not just about comfort — it is about reclaiming real performance from your device.

This guide explains exactly why autoplay video ads behave differently from other ad formats, why the built-in controls on your phone do not fully stop them, and what actually works.

![Mobile news article with autoplay video ad blocked using Surfshark CleanWeb](/og/block-autoplay-video-ads-on-news-sites-2026.png)

---

## Quick Verdict

Autoplay video ads on news sites are not just annoying — they are the heaviest ad unit by data and battery cost, and they continue loading even after you scroll past them. Browser autoplay settings mute the sound but do not stop the video from loading. The only solution that blocks the ad request before it reaches your device is a network-level DNS blocker. [Surfshark CleanWeb](https://snipstack.io/surfshark-cleanweb-review-2026/) operates at that layer, covering every app on your phone — not just the browser — from a single toggle. **[See how CleanWeb blocks autoplay video ads system-wide →](/blog/adblock?sub=block-autoplay-video-ads-on-news-sites-2026__above-fold)**

---

## What Is an Autoplay Video Ad on a News Site?

An autoplay video ad is a video advertising unit embedded in an article page that begins playing automatically when the page loads or when the unit scrolls into the viewport — without any input from you. On desktop, these units are disruptive. On mobile, they are significantly worse for three reasons.

First, mobile connections are metered. Video is the highest-bandwidth ad format by a wide margin. A single autoplay video unit downloads 2–5 MB of compressed video data. News sites that serve three or four of them per article page can consume 10–20 MB of your mobile data before you finish reading the first paragraph.

Second, video decoding is CPU-intensive. Your phone's processor has to decode the video stream in real time, which generates heat and draws down your battery at a measurably faster rate than static content.

Third, and most critically: **scrolling past an autoplay video does not stop the download.** Most news site video ad implementations continue buffering the full ad unit in memory after the player has left the viewport. The data cost and the CPU cost continue even when you can no longer see the ad.

### How News Sites Trigger Autoplay

News publishers use a combination of techniques to force video ad playback:

- **Sticky players** — the video unit detaches from its original position and floats in a corner as you scroll, following you down the article
- **Viewport-triggered autoplay** — the unit begins playing the moment it enters the visible area of your screen, even for half a second
- **Muted autoplay** — browsers block autoplay with sound by default, so advertisers play the video muted to satisfy browser policy, then prompt you to unmute
- **Lazy-loaded units** — the video request is deliberately delayed by a few seconds after page load to evade content blockers that run their checks at initial page render

Each of these is a deliberate design choice by the ad network. The goal is maximum ad play-through rate, regardless of what the user wants.

---

## Why Your Phone's Built-In Autoplay Controls Do Not Block These Ads

This is the part most guides skip. Both iOS and Android have settings that appear to address autoplay video. They do not stop the ads the way you think they do.

### Safari's Per-Site "Auto-Play" Setting

On iPhone, you can go to **Settings → Safari → Auto-Play** and set it to "Stop Media with Sound" or "Never Auto-Play." This tells Safari's rendering engine not to start video playback automatically.

What it actually stops: the video player's JavaScript `play()` call, if it tries to play with audio.

What it does not stop: the underlying network request that downloads the video ad file. The video is still fetched from the ad server, your phone still burns the data, and the CPU still has to process the response. You simply do not see it moving. Muted autoplay units also fully bypass this setting, since they comply with the muted-autoplay policy Safari allows.

### iOS Low Data Mode

Enabling Low Data Mode in **Settings → Cellular → Cellular Data Options** signals to apps that you prefer to minimize data usage. Safari and some apps respect this by deferring non-essential loads.

What it actually limits: background app refresh, automatic downloads, and some iCloud syncing.

What it does not control: ad network requests from third-party code embedded in news sites. The JavaScript that calls the ad server is part of the page you chose to load. Low Data Mode cannot distinguish between "the article text you wanted" and "the video ad you did not."

### Android Chrome's "Autoplay" Permissions

Chrome on Android has a site-level permission under **Settings → Site Settings → Media** that can block autoplay. Like Safari, this controls the JavaScript playback call, not the download.

![Comparison of browser autoplay controls vs. DNS-level blocking: what each approach actually stops](/og/block-autoplay-video-ads-on-news-sites-2026-inline-1.png)

The bottom line: every built-in control works at the **playback layer**. Blocking the playback layer stops the video from moving. It does not prevent your phone from fetching the ad file, tracking your device, or burning your data and battery on the download.

To stop all of that, you need to block the request before it ever reaches your phone.

---

## How DNS-Level Blocking Stops Autoplay Video Ads Completely

Every autoplay video ad on a news site originates from a domain controlled by an advertising company. The video file does not live on the news site's server — it lives on a server operated by SpotX, Google Video Partners, Teads, JW Player advertising, Dailymotion ads, or one of dozens of similar video ad networks.

When your phone loads a news article, it makes a DNS lookup for each of those advertising domains. The DNS lookup is the phone asking: "What is the IP address of `ad.doubleclick.net`?" or "Where do I find `cdn.teads.tv`?"

A DNS-level blocker intercepts those lookups and returns nothing for known ad domains. The video ad request dies at the DNS stage — before a single byte of video data is downloaded, before the CPU starts decoding anything, before a tracking pixel fires. The news article text loads normally. The video ad slot loads nothing.

This is categorically different from browser-level blocking or browser autoplay controls. It operates below the application layer, which means it applies equally to every app on your device — not just the browser, but also native news apps, news aggregators, and any in-app browser that loads article content.

---

## How Surfshark CleanWeb Blocks Autoplay Video Ads on Mobile

Surfshark CleanWeb is a DNS and network filtering layer built into the Surfshark VPN app. When you enable it, your phone's DNS queries are routed through Surfshark's filtering servers, which compare each domain request against a continuously updated blocklist covering ad networks, tracking domains, and known malvertising sources.

For autoplay video ads specifically, here is [what happens when](https://snipstack.io/what-happens-when-email-is-in-data-breach-2026/) you load a news article with CleanWeb enabled:

1. The page begins loading
2. The article text and editorial images are fetched normally
3. The page's JavaScript attempts to call video ad network domains
4. CleanWeb's DNS resolver identifies those domains as ad networks and returns no response
5. The video ad unit receives no data and fails to load — no download, no decoding, no data charge

This process takes milliseconds and is invisible to you. The article page loads faster because it is not waiting on video ad responses that time out.

**[Block autoplay video ads across every app on your phone — try CleanWeb →](/blog/adblock?sub=block-autoplay-video-ads-on-news-sites-2026__mid)**

### What CleanWeb Catches That Autoplay Settings Miss

| What is being blocked | Browser autoplay setting | CleanWeb DNS blocking |
|---|---|---|
| Video ad download | No — file is still fetched | Yes — request dropped at DNS |
| Muted autoplay units | No — muted play is permitted | Yes — same domain blocked |
| Video ads in native news apps | No — browser setting only | Yes — covers all apps |
| Tracking pixels inside ad units | No | Yes |
| Retargeting scripts | No | Yes |
| Battery drain from video decoding | Partial (no decode if muted playback blocked) | Yes — no fetch means no decode |

### What CleanWeb Cannot Do

CleanWeb works at the DNS layer, not the cosmetic layer. When a video ad unit is blocked, the news site's HTML still contains a placeholder container where the ad would have appeared. That container may show as blank whitespace. CleanWeb does not remove the empty HTML element — a browser extension with cosmetic filtering handles that, and the two can run alongside each other without conflict.

CleanWeb also cannot block ads that are served from the same domain as the news site itself. First-party ad serving — where the news site hosts the ad file directly — is not common, but some publishers do it to defeat blocklists. Those ads get through.

---

## Setting Up CleanWeb on iPhone and Android

Setup takes under three minutes on either platform.

![Surfshark app settings screen showing CleanWeb toggle — iPhone and Android setup](/og/block-autoplay-video-ads-on-news-sites-2026-inline-2.png)

### iPhone Setup

1. Download the Surfshark app from the App Store
2. Log in to your account
3. Tap **Settings** at the bottom of the screen
4. Select **VPN Settings**, then tap **CleanWeb** and toggle it on
5. Return to the main screen and connect to any server

With CleanWeb enabled and the VPN connected, autoplay video ad requests from every app on your iPhone are filtered at the DNS level. This includes Safari, Chrome, Apple News, Google News, Flipboard, and any news publisher app.

### Android Setup

1. Download the Surfshark app from Google Play
2. Log in to your account
3. Tap the **Settings** gear icon
4. Tap **VPN Settings**, then enable **CleanWeb**
5. Connect to any server

The mechanism is identical on Android. All DNS queries from the device route through Surfshark's filtering layer, so coverage extends equally across Chrome, Firefox, Samsung Internet, and every news app installed on the device.

### Pairing with a Browser-Level Blocker

For coverage of cosmetic clutter inside the browser — empty ad containers, cookie consent banners, and comment section cruft — a browser content blocker like AdGuard for iOS or [uBlock Origin](https://snipstack.io/ublock-origin-not-working-chrome-alternatives-2026/) for Firefox complements CleanWeb well. The DNS blocker handles the network requests; the browser extension handles the visual cleanup. The two layers do not conflict.

---

## The Real Cost of Autoplay Video Ads on Mobile Data Plans

For mobile users on limited data plans, autoplay video ads are not just irritating — they are a measurable monthly expense.

A typical news browsing session on a heavily monetized news site (major national newspapers, entertainment news, sports coverage) might involve 8–12 article pageviews. If each page fires two or three video ad units at 3 MB each, a single session consumes 50–100 MB on video ads alone. Across a month of regular news reading, that adds up to 1–2 GB of data that went to advertising servers rather than the content you wanted.

Blocking those requests with CleanWeb does not just improve your experience — it directly reclaims data allowance on plans where every gigabyte counts.

---

## Frequently Asked Questions

**Why do autoplay video ads still play even when my phone is on silent?**

Muted autoplay is a deliberate technique that complies with browser autoplay policies while still forcing playback. Browsers allow video to autoplay if it starts without sound. The ad plays silently, then shows a "tap to unmute" prompt. Your silent mode setting controls the phone's speaker, but the browser's autoplay permission is separate — so the video loads and plays regardless. The only way to prevent the download entirely is to block the ad network domain before the request is made. **[See how DNS blocking stops the download before it starts →](/blog/adblock?sub=block-autoplay-video-ads-on-news-sites-2026__faq)**

**Does blocking autoplay video ads break the news site?**

No. The article text, editorial images, and video content the journalist embedded load normally. Only requests to known ad network domains are dropped. If a news site hosts a genuine video report, that file lives on the publisher's own domain and is not affected by ad network blocklists.

**Will news sites detect that I am blocking their video ads?**

Some news sites run ad-blocker detection scripts and display a message asking you to disable blocking or subscribe. These detection scripts primarily target browser extension blockers by looking for known extension fingerprints. DNS-level blocking via CleanWeb has no browser fingerprint — the site cannot distinguish a blocked ad request from a timeout on the ad server's end. Detection rates are significantly lower for DNS-based blocking.

**Does CleanWeb block video ads inside news apps like Apple News or Flipboard?**

Yes. Apple News, Flipboard, and most publisher-specific news apps load content through their own networking stacks, bypassing the browser entirely. A Safari content blocker cannot see those requests. CleanWeb operates at the device's DNS layer, so it filters requests from every app equally — native news apps, aggregators, and browsers all go through the same filter.

**Does this work on Android as well as iPhone?**

Yes. CleanWeb works identically on both platforms because DNS filtering is a network-layer function, not specific to iOS or Android. The Surfshark app establishes a VPN profile on either device, and all DNS queries are routed through the filtering servers regardless of which operating system is running.

**Is it legal to block autoplay video ads?**

Yes. Configuring software to filter content on your own device is legal in every major jurisdiction. Some news site terms of service request that you not use blockers, but these clauses are unenforceable as a legal matter — they are site policies, not law. Your device, your network requests, your choice.

**Can I selectively allow autoplay video ads on news sites I want to support?**

Yes. The Surfshark app allows you to add domains to an allowlist, which bypasses CleanWeb filtering for those specific sites. If you subscribe to a publication and want to support it with your ad views, you can allowlist that domain while keeping blocking active everywhere else.

---

## Bottom Line

Autoplay video ads on news sites are the worst performing ad format on mobile: highest data cost, highest battery drain, and designed to keep loading even after you scroll past them. The built-in autoplay controls on iOS and Android address playback, not the underlying network request — so your phone is still fetching and decoding the ad, just not displaying it visibly.

Blocking at the DNS layer is the only approach that stops the download from happening. Surfshark CleanWeb does this across every app on your phone from a single toggle, covering native news apps and every browser simultaneously with no separate configuration required.

The setup takes three minutes. The data, battery, and reading experience improvement starts immediately.

**[Stop autoplay video ads on every app — see Surfshark CleanWeb →](/blog/adblock?sub=block-autoplay-video-ads-on-news-sites-2026__cta)**

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why do autoplay video ads still play even when my phone is on silent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Muted autoplay is a deliberate technique that complies with browser autoplay policies while still forcing playback. Browsers allow video to autoplay if it starts without sound. Your silent mode setting controls the phone speaker, but the browser autoplay permission is separate. The only way to prevent the download entirely is to block the ad network domain before the request is made."
      }
    },
    {
      "@type": "Question",
      "name": "Does blocking autoplay video ads break the news site?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The article text, editorial images, and video content the journalist embedded load normally. Only requests to known ad network domains are dropped. If a news site hosts a genuine video report on its own domain, that file is not affected by ad network blocklists."
      }
    },
    {
      "@type": "Question",
      "name": "Will news sites detect that I am blocking their video ads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some news sites run ad-blocker detection scripts that primarily target browser extension blockers by looking for known extension fingerprints. DNS-level blocking has no browser fingerprint, so the site cannot distinguish a blocked ad request from a timeout on the ad server. Detection rates are significantly lower for DNS-based blocking."
      }
    },
    {
      "@type": "Question",
      "name": "Does CleanWeb block video ads inside news apps like Apple News or Flipboard?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Apple News, Flipboard, and most publisher-specific news apps load content through their own networking stacks, bypassing the browser entirely. A Safari content blocker cannot see those requests. CleanWeb operates at the device DNS layer, so it filters requests from every app equally."
      }
    },
    {
      "@type": "Question",
      "name": "Does this work on Android as well as iPhone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. CleanWeb works identically on both platforms because DNS filtering is a network-layer function, not specific to iOS or Android. The Surfshark app establishes a VPN profile on either device and all DNS queries are routed through the filtering servers."
      }
    },
    {
      "@type": "Question",
      "name": "Is it legal to block autoplay video ads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Configuring software to filter content on your own device is legal in every major jurisdiction. Some news site terms of service request that you not use blockers, but these clauses are unenforceable as a legal matter."
      }
    },
    {
      "@type": "Question",
      "name": "Can I selectively allow autoplay video ads on news sites I want to support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Surfshark app allows you to add domains to an allowlist, which bypasses CleanWeb filtering for those specific sites. You can allowlist a publication you subscribe to while keeping blocking active everywhere else."
      }
    }
  ]
}
</script>
