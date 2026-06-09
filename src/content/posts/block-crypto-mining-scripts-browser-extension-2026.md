---
title: "How to Block Crypto Mining Scripts with a Browser Extension in 2026"
description: "Your phone overheating for no reason? Cryptojacking scripts may be the cause. Here's how to block them on mobile and desktop in 2026."
publishDate: 2026-06-07
heroImage: "/og/block-crypto-mining-scripts-browser-extension-2026.png"
tags: ["ad blocker", "privacy", "review"]
---

![How to block crypto mining scripts with a browser extension in 2026](/og/block-crypto-mining-scripts-browser-extension-2026.png)

Your phone gets hot. The battery drains faster than it should. The browser tab that was just showing a news article is now spinning every CPU core your phone has. You did not install anything. You just visited a website.

This is cryptojacking — and it is more common in 2026 than most people realize. Malicious JavaScript embedded in websites silently uses your device's processing power to mine cryptocurrency for someone else, while you pay in battery life, thermal throttling, and mobile data.

The good news: blocking it is straightforward once you know which tools actually work.

> **Quick Verdict:** [uBlock Origin](https://snipstack.io/ublock-origin-not-working-chrome-alternatives-2026/) in Firefox for Android is the most effective free browser extension for blocking crypto mining scripts — its filter lists specifically target known cryptomining domains and block the script requests before they load. On iOS, where real extensions are not possible, Brave browser's built-in shields offer the closest equivalent. For protection beyond the browser — covering every app on your phone — a VPN-level blocker like Surfshark's CleanWeb catches requests to malicious domains system-wide. The two approaches are complementary, not competing.

**[Block malicious scripts across every app on your phone](/blog/adblock?sub=block-crypto-mining-scripts-browser-extension-2026__above-fold)** — CleanWeb works at the network level while your browser extension handles in-page filtering.

---

## What Is Cryptojacking and Why Does It Hit Mobile Hard?

Cryptojacking is the unauthorized use of someone else's computing resources to mine cryptocurrency. No installation required from the victim's side — just a browser visit to a page running a malicious or compromised script.

The script uses WebAssembly (WASM) or standard JavaScript to run hashing calculations in the background. Your CPU does the work. The site operator (or the hacker who compromised the site) collects the payout.

### Why Mobile Devices Feel It More

On a desktop, a CPU-heavy script might be barely noticeable. On a smartphone, the impact is immediate and physical:

- **Battery drain:** Mining is computationally intensive. An active cryptojacking script can cut battery life by 30–50% compared to normal browsing.
- **Overheating:** Phone CPUs and the thin chassis around them are not designed for sustained 100% load. The device gets warm to the touch within minutes.
- **Thermal throttling:** When a phone overheats, the processor automatically reduces its clock speed to protect the hardware. Your device becomes sluggish — not because of malware per se, but because the mining script pushed it past its thermal limits.
- **Data costs:** The script itself needs to be downloaded, and communication with the mining pool generates ongoing network traffic. On a metered mobile data plan, this is a direct cost.

A desktop user might close a tab and forget about it. A mobile user feels it in their pocket.

---

## How Crypto Mining Scripts Work in a Browser

Understanding the mechanics helps you understand what a blocker actually needs to stop.

### The Script Delivery Chain

1. You visit a website — legitimately or not. The site could be malicious outright, or it could be a reputable site that was compromised by injecting a third-party script into its pages.
2. The browser loads the page's JavaScript. Among those scripts, a mining script either connects to a known mining pool domain to receive work packages, or in some cases runs entirely within the page using WebAssembly.
3. The script begins its hashing loop, consuming CPU cycles continuously until you close the tab.

### What a Blocker Targets

Most browser extensions and DNS-level blockers operate against the **connection** step. Known mining script services operate from identifiable domains. A blocklist-based tool — whether it is a browser extension's filter list or a DNS resolver's blocklist — can refuse to connect to those domains. The script either fails to load entirely or fails to communicate with the mining pool, making it non-functional.

This approach works well against scripts that rely on known third-party mining pool infrastructure. It is less effective against a self-hosted miner running entirely on the same domain as the site content — but that scenario is significantly less common and technically harder for attackers to sustain.

![How browser extensions intercept crypto mining script requests before they execute](/og/block-crypto-mining-scripts-browser-extension-2026-inline-1.png)

---

## The Best Browser Extensions to Block Crypto Mining Scripts

### [uBlock Origin](https://snipstack.io/ublock-origin-vs-adguard-which-is-better-2026/) — The Strongest Free Option

[uBlock Origin](https://snipstack.io/ublock-origin-mobile-2026/) remains the most comprehensive free browser extension for blocking cryptomining scripts in 2026. It ships with multiple active filter lists that cover mining domains:

- **Online [Malicious URL](https://snipstack.io/malicious-url-scanner-free-2026/) Blocklist** — included by default, covers known cryptojacking domains and malware distribution infrastructure
- **uBlock filters** — the project's own maintained list, updated regularly to catch newly identified cryptomining domains
- **Peter Lowe's Ad and Tracking Server List** — additional coverage of tracking and malicious server infrastructure

The practical effect: when a page attempts to load a script from a recognized cryptomining domain, uBlock Origin cancels the network request before the browser contacts the server. The mining script never loads, the hashing loop never starts.

uBlock Origin is available in Firefox for Android — making it the primary recommendation for Android users who want in-browser cryptomining protection. It is not available on iOS due to Apple's platform restrictions.

**Setup on Firefox for Android:**
1. Install Firefox from the Play Store.
2. Tap the three-dot menu, then Add-ons.
3. Search for uBlock Origin and tap Add to Firefox.
4. No additional configuration needed — the default lists cover crypto mining domain blocking.

Optional: open the uBlock Origin dashboard and verify that the Online Malicious URL Blocklist is enabled under the Malware category.

---

### Brave Browser — Built-in Shields Without an Extension

Brave's built-in Shields block trackers, fingerprinting scripts, and connections to known malicious domains, which includes a significant portion of cryptomining infrastructure. Because Shields are baked into the browser, no extension installation is required.

Brave is available on both Android and iOS, which makes it one of the few solid options for iPhone users looking for crypto-mining protection in a mobile browser. On iOS, no browser supports real third-party extensions — Brave Shields is about as close to uBlock Origin-level protection as you can get on an iPhone browser.

**What it covers:** Known cryptomining domains that appear in Brave's tracker and malicious domain blocklists.

**Limitation:** Brave Shields does not claim dedicated cryptomining filter lists. Coverage depends on the domains appearing in its general tracker and malware blocklists. For users who want maximum coverage, the uBlock Origin route on Firefox remains more comprehensive on Android.

---

### AdGuard Browser Extension — Explicit Cryptomining Filtering

AdGuard explicitly targets cryptocurrency mining scripts in its Base filter, which the company describes as covering "scripts that mine cryptocurrency without user consent." This makes AdGuard one of the clearest about its anti-cryptojacking coverage in its published filter policy.

The AdGuard browser extension is available for Firefox on Android. On desktop, it supports Chrome, Firefox, Edge, and Safari. If you are already using AdGuard for general ad blocking, the cryptomining protection is already active with default settings.

---

## What Browser Extensions Cannot Do

This is the part most articles on this topic skip.

A browser extension only sees traffic that runs through that browser. Open a different browser tab, switch apps, or use any native app — the extension sees none of that. This matters for two reasons:

**First:** Many users switch between browsers. If a cryptojacking-compromised page is opened in Chrome (no extension), or Safari on iOS (extensions limited by Apple), your uBlock Origin in Firefox does nothing.

**Second:** Cryptomining is not only a browser problem. Scripts can be embedded in apps that use webviews — lightweight in-app browsers — which again bypass your browser extension entirely.

For full device coverage, you need something that operates at a level below any individual app.

---

## System-Wide Protection: CleanWeb at the Network Level

[Surfshark's CleanWeb](/blog/adblock?sub=block-crypto-mining-scripts-browser-extension-2026__mid) is a VPN-integrated feature that filters connections to known malicious domains before they reach any app on your device — browser, webview, or otherwise. When a script on any page or in any app attempts to connect to a domain on CleanWeb's blocklist (which includes malware and malicious domain categories that cover known mining pool infrastructure), the connection is dropped at the network layer.

This is a different layer of protection than a browser extension:

- A browser extension intercepts requests inside one browser's traffic
- CleanWeb intercepts requests at the DNS/VPN level, covering every app simultaneously

The two approaches do different things. Running both — uBlock Origin in Firefox for browser-level script filtering, plus CleanWeb for network-level domain blocking across your whole phone — gives you overlapping coverage. If a mining domain slips past one layer, it is more likely to be caught by the other.

![Surfshark CleanWeb blocking malicious domain requests system-wide across all apps](/og/block-crypto-mining-scripts-browser-extension-2026-inline-2.png)

**What CleanWeb covers:** Connections to malware and malicious domains across all apps and browsers on the device. Cookie pop-ups (CleanWeb 2.0). Ads and trackers. Data breach alerts.

**What CleanWeb does not cover:** In-page script execution from a same-domain or already-loaded source. A miner running entirely from a first-party domain will not be caught at the DNS level by any tool. Browser extensions have an advantage here in cosmetic and scriptlet-level filtering.

**Setup:**
1. Install the Surfshark app (Android or iOS).
2. Go to Settings, then Features, then CleanWeb.
3. Toggle CleanWeb on and connect to any server.

---

## Comparison: Your Options in 2026

```
Tool                       | Platform       | Mining scripts | In-app coverage | Setup
---------------------------|----------------|----------------|-----------------|--------
uBlock Origin (Firefox)    | Android only   | Strong         | Browser only    | 2 min
AdGuard Extension          | Android/Desktop| Explicit       | Browser only    | 2 min
Brave Shields              | Android + iOS  | Moderate       | Browser only    | 0 min
Surfshark CleanWeb         | Android + iOS  | Malicious doms | All apps        | 3 min
uBO + CleanWeb combined    | Android        | Strongest      | Full device     | 5 min
```

"Malicious doms" means CleanWeb catches known mining pool and malware domains at the network level — it does not perform in-page script analysis.

---

## [How to Tell](https://snipstack.io/how-to-tell-if-a-website-is-legitimate-2026/) If a Site Is Running a Mining Script

Before installing anything, you can do a quick check if you suspect a site:

**On Android (Chrome or Firefox):**
- Open the browser's developer tools if available, or check battery usage in Settings after a browsing session. An unexplained battery spike after visiting a site is a strong indicator.
- Task manager: if your phone supports it, check CPU usage while the browser tab is open. Sustained high CPU with minimal visual activity on the page is a signal.

**General signs:**
- Device becomes noticeably warm after visiting a specific site
- Browser slows down on one particular tab
- Fan noise increases on laptop (not phone-specific, but diagnostic)
- Closing a tab immediately reduces CPU usage

If you identify a specific site running a miner, you can report it to Google's Safe Browsing at safebrowsing.google.com/safebrowsing/report_badware.

---

## Frequently Asked Questions

**Do I need a dedicated cryptomining extension, or does a regular [ad blocker](https://snipstack.io/ad-blocker-impact-on-website-revenue-explained-2026/) cover it?**

A good general-purpose [ad blocker](https://snipstack.io/ad-blocker-for-chromecast-streaming-device-2026/) with maintained filter lists — uBlock Origin in particular — covers the majority of cryptomining domains already. Dedicated anti-mining extensions like No Coin and minerBlock were popular when Coinhive (a well-known in-browser mining service) was active, but those tools have seen minimal updates since Coinhive shut down in 2019. uBlock Origin's active community filter lists now cover the current landscape of mining domains more comprehensively than those older specialized tools. Stick with uBlock Origin or AdGuard rather than hunting for a dedicated mining-only extension.

**Can crypto mining scripts harm my phone permanently?**

Sustained thermal stress from prolonged cryptojacking — phone running hot for hours — can, over time, contribute to battery degradation. Lithium batteries age faster under heat. A single visit is unlikely to cause lasting damage; a compromised site you visit regularly without protection is a different situation. This is why blocking matters: not just for the immediate annoyance, but for device longevity.

**Does [Surfshark CleanWeb](https://snipstack.io/surfshark-cleanweb-review-2026/) specifically market cryptojacking protection?**

CleanWeb's documented protections are ads, trackers, malware domains, phishing domains, cookie pop-ups, and data breach alerts. Known cryptomining pool domains fall under the malware and malicious domain categories that CleanWeb blocks. The protection is real, but it operates as domain blocking — if a mining script runs from an already-cached or first-party domain, CleanWeb will not catch it. Browser extensions handle those cases better. [Try CleanWeb alongside your browser extension](/blog/adblock?sub=block-crypto-mining-scripts-browser-extension-2026__faq)

**Why can't I use these extensions on iPhone (iOS)?**

Apple requires all browsers on iOS to use the WebKit rendering engine and its content-blocking API, which is more limited than full extension support. Firefox for iOS cannot run uBlock Origin. Your best iOS options are Brave browser (built-in shields cover mining domain blocking) or Safari with a content blocker like AdGuard. For system-wide coverage on iOS, CleanWeb works at the VPN level and is not subject to this browser restriction.

**Will blocking mining scripts break legitimate websites?**

Blocking known malicious mining domains does not affect how legitimate websites function. The only scenarios where false positives can occur are: a site using a CDN or infrastructure that shares a domain with a blocklisted mining service (rare), or a site that explicitly asks users to opt into browser-based mining as an alternative to ads (a very small number of experimental publishing setups). Standard news sites, e-commerce, social media — none of these depend on cryptomining infrastructure. Your uBlock Origin and AdGuard filter lists are maintained precisely to avoid legitimate domain false positives.

**Is browser-based crypto mining ever legitimate?**

There have been experiments with "consensual" browser mining — sites that ask permission and run mining in place of showing ads, with the user aware and agreeing. This was a small trend around 2017–2018. It has largely faded, partly because the economics became unfavorable for site operators. In 2026, encountering an in-browser miner almost always means you did not consent and the site is either malicious or compromised. If you ever want to whitelist a specific site running consensual mining, uBlock Origin lets you disable blocking for individual domains.

---

Cryptojacking is a background threat — you often do not know it is happening until you notice the warmth in your pocket or wonder why your battery is at 40% before noon. The solution is not complicated: uBlock Origin on Firefox for Android covers the browser side comprehensively and for free, Brave handles it on iOS with no setup, and CleanWeb at the network level catches mining domain requests that any individual browser might miss.

**[Add system-wide mining domain protection to your phone](/blog/adblock?sub=block-crypto-mining-scripts-browser-extension-2026__cta)** — CleanWeb pairs with your browser extension to cover the gaps no extension can reach alone.
