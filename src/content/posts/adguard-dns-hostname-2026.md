---
title: "What is AdGuard DNS Hostname (And Do You Need It?) 2026"
description: "AdGuard DNS hostname explained: dns.adguard-dns.com, DoT vs DoH, Private DNS setup on Android & iOS, and when to use each server."
publishDate: 2026-05-10
heroImage: "/og/adguard-dns-hostname-2026.png"
tags: ["ad blocker", "privacy", "review"]
---

If you've ever opened Android's Private DNS setting or tried to configure encrypted DNS on iOS, you've probably hit a wall: the field asks for a hostname, and suddenly you're staring at a blank box wondering exactly what to type. AdGuard DNS has three different servers, two different encrypted protocols, and a handful of IP addresses — and none of the official docs make it obvious which one you actually need.

This guide explains every AdGuard DNS hostname, what each one does, why the hostname format matters more than an IP address, and which setup makes sense for your situation.

![AdGuard DNS hostname setup on Android Private DNS](/og/adguard-dns-hostname-2026.png)

## Quick Verdict

For most users: set `dns.adguard-dns.com` as your Private DNS hostname on Android (Settings > Network > Private DNS) or install AdGuard's DoH profile on iOS. That single change encrypts all your DNS traffic and blocks ads and trackers across every app — no account, no install. If you want a second layer of protection that catches what DNS alone misses, [pair it with Surfshark CleanWeb](/blog/adblock?sub=adguard-dns-hostname-2026__above-fold) — VPN-layer filtering that covers ads served from allowed domains, malware blocking, and tracker stripping in one toggle.

---

## What Is an AdGuard DNS Hostname?

A DNS hostname is a text-based address for a DNS resolver that supports encrypted connections. Instead of pointing your device at a raw IP address like `94.140.14.14` (which uses plain, unencrypted DNS on port 53), you use a hostname like `dns.adguard-dns.com` — and your device negotiates an encrypted TLS or HTTPS connection to that server automatically.

Two protocols use hostnames:

- **DNS-over-TLS (DoT)** — connects on port 853, wraps DNS queries in a TLS tunnel. Android's "Private DNS" feature uses DoT exclusively. The hostname format is just the domain: `dns.adguard-dns.com`.
- **DNS-over-HTTPS (DoH)** — connects on port 443, sends DNS queries inside normal HTTPS requests. Used by iOS configuration profiles, Firefox, and most desktop DoH clients. The hostname format is a full URL: `https://dns.adguard-dns.com/dns-query`.

Both protocols deliver the same practical result: your ISP, router, or anyone on the same network cannot see or tamper with your DNS queries. The difference is how the traffic looks on the wire. DoH traffic is indistinguishable from regular HTTPS browsing. DoT uses a dedicated port, which makes it slightly easier for a network admin to identify — though not to decrypt.

---

## The Three AdGuard DNS Hostnames You Need to Know

### dns.adguard-dns.com — Default (Ad Blocking)

This is the hostname for AdGuard's standard public resolver. It blocks ads, trackers, phishing domains, and malware distribution sites using a block list covering over 1.5 million domains, updated daily.

- **DoT (Android Private DNS):** `dns.adguard-dns.com`
- **DoH URL:** `https://dns.adguard-dns.com/dns-query`
- **Plain IP (unencrypted fallback):** `94.140.14.14` / `94.140.14.15`

Use this if you want the broadest ad and tracker blocking with zero configuration. It requires no account. News sites load faster, in-app banners from third-party ad networks stop loading, and phishing domains resolve to nothing. This is the right default for the vast majority of users.

![AdGuard DNS hostname format for DoT vs DoH configuration](/og/adguard-dns-hostname-2026-inline-1.png)

### family.adguard-dns.com — Family Protection

The Family Protection resolver adds adult content filtering on top of the standard ad/tracker block lists. Every device using this hostname — phones, tablets, smart TVs — gets content filtering enforced at the DNS layer, with no per-device parental control app needed.

- **DoT (Android Private DNS):** `family.adguard-dns.com`
- **DoH URL:** `https://family.adguard-dns.com/dns-query`
- **Plain IP (unencrypted fallback):** `94.140.14.15` / `94.140.15.16`

This hostname also blocks crypto-mining scripts and scam domains beyond the standard list. If you manage a shared device or a household network where you want a content floor enforced at the network level, this is the cleaner option compared to juggling parental control apps that users can uninstall.

### unfiltered.adguard-dns.com — No Filtering

The unfiltered resolver gives you AdGuard's DNS infrastructure — DoT/DoH encryption, DNSSEC validation, AdGuard's anycast network, and a no-log policy — without any block lists.

- **DoT (Android Private DNS):** `unfiltered.adguard-dns.com`
- **DoH URL:** `https://unfiltered.adguard-dns.com/dns-query`
- **Plain IP (unencrypted fallback):** `94.140.14.140` / `94.140.14.141`

Who needs this? Power users running their own local ad blocking (Pi-hole, AdGuard Home, uBlock Origin) who want a fast, privacy-respecting upstream resolver without double-filtering. You get the privacy benefits of encrypted DNS without delegating content decisions to AdGuard's remote block lists.

---

## Why Hostname Beats IP Address

You can set your DNS to `94.140.14.14` and get basic ad blocking. But there are three reasons the hostname approach is better:

**1. Encryption is automatic.** A raw IP on port 53 sends queries in plain text. Any Wi-Fi operator, your ISP, or a man-in-the-middle can read exactly which domains you're resolving. With `dns.adguard-dns.com`, Android or iOS negotiates a TLS handshake and all queries travel encrypted. This is not a marginal privacy gain — it's the difference between a postcard and a sealed letter.

**2. Certificate validation.** When you connect by hostname, your device verifies the TLS certificate belongs to AdGuard. An attacker cannot impersonate the resolver without a valid cert for that hostname. Raw IP connections have no equivalent check.

**3. Resilience.** AdGuard's anycast network routes your queries to the nearest physical server based on your location. If an IP changes or a server goes offline, the hostname still resolves correctly. Hard-coded IPs require manual updates.

---

## How to Set AdGuard DNS Hostname on Android

Android 9 and later include a built-in Private DNS setting that uses DoT. Here's the exact path:

1. Open **Settings > Network & Internet > Advanced > Private DNS** (on stock Android). Samsung: **Settings > Connections > More Connection Settings > Private DNS**. Pixel: **Settings > Network & Internet > Private DNS**.
2. Select **Private DNS provider hostname**.
3. Enter `dns.adguard-dns.com` (for default ad blocking) or your chosen hostname from the list above.
4. Tap **Save**.

That's it. Android tests the connection immediately and shows a checkmark if it succeeds. From this point, all DNS queries from every app — not just your browser — travel through AdGuard's encrypted resolver. The setting persists across reboots, network switches, and cellular/Wi-Fi handoffs.

One caveat: Android's Private DNS uses DoT on port 853. Some networks (corporate Wi-Fi, some hotel networks) block port 853. If you see "Couldn't connect," your current network is blocking it. In that case, either use a VPN that includes DNS filtering or switch to a DoH-based approach via the AdGuard app.

---

## How to Set AdGuard DNS Hostname on iOS

iOS 14 and later support encrypted DNS via configuration profiles. Apple does not expose a system DNS setting in the Settings UI — you configure it by installing a `.mobileconfig` file.

The simplest approach:

1. Visit **adguard-dns.io** in Safari on your iPhone.
2. Download the configuration profile for your preferred server (Default, Family, or Non-filtering) and select DoH or DoT.
3. Tap **Allow** on the profile download prompt.
4. Go to **Settings > General > VPN & Device Management**, find the downloaded profile, and tap **Install**. Enter your passcode when prompted.
5. Tap **Install** again to confirm.

The profile applies system-wide encrypted DNS to all apps and all network connections. It survives app reinstalls and cannot be bypassed by switching browsers. This is meaningfully different from changing DNS inside a single app — it covers your entire device.

![iOS configuration profile installation for AdGuard DNS DoH](/og/adguard-dns-hostname-2026-inline-2.png)

For iOS users who want DoH specifically: the profile specifies `https://dns.adguard-dns.com/dns-query`. You do not type this URL anywhere manually — it's encoded in the profile. If you want to configure DoH in a client that accepts a URL directly (like Firefox's custom DoH setting), paste that URL into the relevant field.

---

## DoT vs DoH: Which Should You Use?

The protocol choice matters less than getting encryption enabled at all — both are dramatically better than plain DNS. That said, here's when each makes sense:

**Use DoT (Android Private DNS) when:**
- You're on Android — it's built into the OS, zero friction
- You want the simplest possible setup with no extra apps
- You're on a network that allows port 853

**Use DoH when:**
- You're on iOS (configuration profile is the cleanest implementation)
- Your network blocks port 853 (DoH uses port 443, indistinguishable from HTTPS)
- You want queries to be harder to identify at the network level

In practice, Android users should use the Private DNS setting with the DoT hostname. iOS users should install the AdGuard configuration profile (DoH). Both deliver encrypted, ad-blocking DNS with no ongoing maintenance.

---

## When AdGuard DNS Alone Is Not Enough

AdGuard DNS is powerful, but it has one fundamental limitation: it blocks entire domains. If an ad is served from the same domain as content — Google's own ad units on YouTube, for example, or "native" ads embedded directly in editorial content — DNS cannot distinguish the ad request from the content request.

This is where a VPN with built-in ad filtering closes the gap. [Surfshark CleanWeb](/blog/adblock?sub=adguard-dns-hostname-2026__mid) works at the network connection level inside the VPN tunnel: it can block specific ad-serving URLs even when they share a domain with legitimate content, strip tracking parameters from outbound URLs, and block malware domains in real-time. Running AdGuard DNS alongside CleanWeb gives you two independent blocking layers:

- AdGuard DNS removes requests to known ad/tracker domains before they leave your device
- CleanWeb catches ad traffic that slips through DNS filtering within the encrypted VPN tunnel

The combination removes roughly 90%+ of mobile ad scenarios vs the ~60% that DNS alone handles on a typical news site. For users who want maximum coverage without rooting their phone or sideloading APKs, this is the practical ceiling.

---

## AdGuard DNS vs CleanWeb: Honest Comparison

Both tools block ads and trackers, but they operate at different layers and suit different needs.

| | AdGuard DNS (hostname) | Surfshark CleanWeb |
|---|---|---|
| Setup | Android: Private DNS setting. iOS: config profile | Install Surfshark app, toggle on |
| Cost | Free | Included in Surfshark subscription |
| Encryption | DNS queries only (DoT/DoH) | Full traffic (VPN tunnel) |
| Blocking scope | Domain-level | URL-level + domain-level |
| Covers all apps | Yes | Yes |
| Works on public Wi-Fi | Yes (DNS encrypted) | Yes (VPN + DNS encrypted) |
| Malware blocking | Yes | Yes |
| Family filter option | Yes (family.adguard-dns.com) | No separate mode |
| No-log policy | Yes | Yes (audited) |

AdGuard DNS is the better pick if you want free, always-on DNS-level blocking with no subscription. CleanWeb is the better pick if you also want a VPN, URL-level blocking, and a single app that handles both. For maximum coverage, use both together: set `dns.adguard-dns.com` as your Private DNS, then layer CleanWeb on top when you want full-tunnel protection.

[Get Surfshark with CleanWeb included](/blog/adblock?sub=adguard-dns-hostname-2026__cta) — one subscription, unlimited devices, both ad blocking and VPN in one app.

---

## FAQ

### What hostname do I enter for AdGuard DNS on Android?

For standard ad blocking, enter `dns.adguard-dns.com` in Settings > Network & Internet > Advanced > Private DNS. For family protection, use `family.adguard-dns.com`. For no-filtering (encrypted DNS only), use `unfiltered.adguard-dns.com`. All three use DNS-over-TLS on port 853.

### What is the AdGuard DNS DoH URL?

The DoH URL for the default resolver is `https://dns.adguard-dns.com/dns-query`. For family protection: `https://family.adguard-dns.com/dns-query`. For no-filtering: `https://unfiltered.adguard-dns.com/dns-query`. Use these in apps or clients that accept a full HTTPS URL rather than a bare hostname.

### Does AdGuard DNS hostname work on cellular data, not just Wi-Fi?

Yes. Android's Private DNS setting and iOS configuration profiles apply to all network interfaces — Wi-Fi, 4G, 5G, and any future cellular standard. Unlike router-level DNS changes (which only affect devices on that specific Wi-Fi network), device-level hostname configuration follows your device everywhere.

### What happens if my network blocks port 853 (DoT)?

Android's Private DNS will show a connection error and fall back to unencrypted DNS. In that case, install the AdGuard DoH configuration profile (iOS) or use the AdGuard app directly, which supports DoH natively. Alternatively, [a VPN like Surfshark](/blog/adblock?sub=adguard-dns-hostname-2026__faq) routes all traffic through an encrypted tunnel, bypassing network-level DNS restrictions entirely.

### Is dns.adguard-dns.com the same as 94.140.14.14?

They point to the same service, but they're not functionally equivalent. The IP address uses plain unencrypted DNS on port 53 by default. The hostname `dns.adguard-dns.com` triggers an encrypted DoT or DoH connection. Use the hostname whenever your OS or app supports it — the encryption is not optional overhead, it's the whole point.

### Does AdGuard DNS log my queries?

AdGuard's free public DNS operates under a no-log policy — query data is not stored or linked to users. For AdGuard Personal DNS (the paid tier with your own dashboard), you can opt into temporary query logging for your own debugging, but it's off by default and under your control.

### Can I use AdGuard DNS and Surfshark CleanWeb at the same time?

Yes, and this is the recommended setup for maximum coverage. Set `dns.adguard-dns.com` as your Android Private DNS or install the iOS profile for always-on DNS blocking. Enable CleanWeb in Surfshark for URL-level and tracker-parameter blocking when you want the VPN layer active. The two systems complement each other rather than conflicting.

### Why does the hostname matter more than the IP address for family filtering?

The IP address `94.140.14.15` corresponds to the Family Protection server, but if you enter that IP, your device connects on port 53 with no encryption. Anyone on your network can see and modify those queries — undermining the filtering. Using `family.adguard-dns.com` instead enforces an encrypted connection so the content filtering cannot be intercepted or disabled at the network level by a tech-savvy household member.
