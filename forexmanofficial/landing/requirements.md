# Landing compliance requirements

Standardized checklist for applying **cookie consent**, **privacy policy modal**, and **Chatterfy tracker** to any static HTML landing.

**Reference implementation:** [`variant-2-main-404/index.html`](variant-2-main-404/index.html)  
**Chatterfy upload artifact:** [`variant-2-main-404/chatterfy.zip`](variant-2-main-404/chatterfy.zip)

This document covers **compliance and tracker integration only**. It does not prescribe page design, layout, colors, or copy — adapt styling to each site's existing design system.

---

## 1. Scope

| In scope | Out of scope |
|----------|--------------|
| GDPR-style cookie consent banner | Ad-moderation copy changes (ticker removal, trigger words, etc.) |
| In-page privacy policy modal | Page layout / visual design |
| Chatterfy `tracker` attribute on Telegram CTAs | Chatterfy campaign / source setup in dashboard |
| Footer legal links | External hosted privacy policy URL (modal is used instead) |

---

## 2. Chatterfy custom landing

Docs: [Chatterfy — Landings](https://help.chatterfy.ai/tracker/funkcional-tracker/landings)

### 2.1 Archive format

- Upload a **ZIP** file containing **`index.html` at the archive root** (flat structure, no subfolders).
- Build command:

```bash
cd /path/to/your-landing && zip -j chatterfy.zip index.html
```

- Upload in Chatterfy: **Tracker → Landings → Create Landing → Page Settings → Custom → Upload Archive**.

### 2.2 Tracker attribute

Every **primary Telegram join CTA** (nav button, hero button, section CTAs, footer CTA) must use the `tracker` attribute so Chatterfy injects the campaign link at runtime.

**Required pattern:**

```html
<a tracker target="_blank" rel="noopener noreferrer" class="…">
  Join on Telegram
</a>
```

**Rules:**

| Rule | Detail |
|------|--------|
| Use `tracker` on Chatterfy-managed CTAs | Chatterfy replaces the destination URL — do **not** hardcode `https://t.me/…` invite links on these elements |
| No `href` on tracker CTAs | Attribute-only link; Chatterfy handles navigation |
| Multiple CTAs allowed | Any number of elements may have `tracker` |
| Direct Telegram links OK elsewhere | Support/contact links (e.g. `@brand_official` for VIP instructions) may keep explicit `https://t.me/…` URLs — these are **not** tracker CTAs |

**Audit:** grep the HTML for `tracker` and confirm every Telegram join button/link that should be tracked has it; confirm no hardcoded invite URLs remain on tracker elements.

### 2.3 Chatterfy dashboard (manual, outside HTML)

- Create landing in Chatterfy with internal **Name** and **Description**.
- Set **Page Settings → Custom** and upload the ZIP.
- If using a **manually created Telegram invite link** inside the landing (not recommended for tracker CTAs), create a campaign source of type **telegram** with that invite URL — see [Chatterfy FAQ](https://help.chatterfy.ai/tracker/funkcional-tracker/landings).

---

## 3. Cookie consent (vanilla-cookieconsent)

**Do not use Cookiebot** for multi-domain landings — Cookiebot free tier is limited to one domain; additional domains require paid subscriptions per domain.

Use **[vanilla-cookieconsent](https://github.com/orestbida/cookieconsent) v3.1.0** via CDN. Same HTML file works on all domains with no per-domain config.

### 3.1 Head includes

Add before other styles/scripts (after `<meta>` tags):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.css" />
```

Add before `</body>`:

```html
<script type="module">
  import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

  document.documentElement.classList.add('cc--darkmode'); /* or omit for light sites */

  CookieConsent.run({ /* see §3.3 */ });
</script>
```

### 3.2 Banner layout

| Setting | Required value |
|---------|----------------|
| `consentModal.layout` | `'bar'` |
| `consentModal.position` | `'bottom'` |
| Full-width bar | CSS overrides on `#cc-main` (see reference) — bar background edge-to-edge; inner content may be centered with `max-width` |

### 3.3 Configuration (functional requirements)

| Setting | Value | Notes |
|---------|-------|-------|
| `mode` | `'opt-in'` | Non-essential cookies blocked until consent |
| `revision` | `1` | Increment when cookie policy changes to re-prompt users |
| `cookie.name` | `{brand}_cc` | e.g. `forexman_cc` — unique per brand, not per domain |
| `cookie.expiresAfterDays` | `182` | ~6 months |
| Categories | `necessary` (readOnly) + `analytics` | Add more only if the site uses additional cookie types |
| Consent modal buttons | Accept all / Reject all / Manage preferences | All three required |
| Privacy link in banner | `<a href="#privacy-policy" class="js-open-privacy">Privacy Policy</a>` | Opens in-page modal, not external URL |

**Required copy blocks (English):**

- Consent title: *We value your privacy*
- Consent description: explains essential cookies + optional analytics; mentions accept / reject / manage
- Preferences sections: *Strictly necessary*, *Analytics*, *More information* (with privacy link)
- Footer reopen control: **Cookie settings** button (see §3.4)

### 3.4 Footer control

In the footer legal line, include:

```html
<a href="#privacy-policy" class="js-open-privacy">Privacy Policy</a>
·
<button type="button" class="footer-cookie-btn" data-cc="show-preferencesModal">Cookie settings</button>
```

Style `.footer-cookie-btn` to match footer link appearance (underline, inherit font, no default button chrome).

### 3.5 Theme customization (design-agnostic)

Map cookie banner colors to the **target site's design tokens** via CSS variables on `#cc-main`:

```css
#cc-main {
  --cc-z-index: 2147483646;
  --cc-font-family: /* site's body font */;
  --cc-bg: /* card/surface background */;
  --cc-primary-color: /* primary text */;
  --cc-secondary-color: /* muted text */;
  --cc-btn-primary-bg: /* primary accent */;
  --cc-btn-primary-color: /* text on primary accent */;
  /* …remaining --cc-* vars: see reference implementation */
  --cc-modal-border-radius: 0; /* full-width bar */
}
```

Also add full-width bar overrides:

```css
#cc-main .cm-wrapper,
#cc-main #cm { width: 100%; max-width: 100%; margin: 0; border-radius: 0; }
#cc-main #cm .cm__body { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
```

Adjust `1200px` and colors per site — **do not copy Forexman hex values** unless the target site shares the same palette.

### 3.6 Analytics gating (when added later)

Any analytics script (GTM, Meta Pixel, etc.) must load **only after** `analytics` category consent. vanilla-cookieconsent supports script blocking via category config — wire new scripts to the `analytics` category, not unconditionally in `<head>`.

---

## 4. Privacy policy modal

In-page modal replaces an external privacy URL. Required for cookie banner compliance and footer link.

### 4.1 HTML structure

Place before `</body>` (outside `<main>`):

```html
<div id="privacyModal" class="privacy-modal" hidden
     role="dialog" aria-modal="true" aria-labelledby="privacy-title" aria-hidden="true">
  <div class="privacy-modal__backdrop" data-close-privacy aria-hidden="true"></div>
  <div class="privacy-modal__panel">
    <header class="privacy-modal__header">
      <h2 class="privacy-modal__title" id="privacy-title">Privacy Policy</h2>
      <button type="button" class="privacy-modal__close" data-close-privacy aria-label="Close privacy policy">&times;</button>
    </header>
    <div class="privacy-modal__body">
      <!-- policy sections — see §4.3 -->
    </div>
    <footer class="privacy-modal__footer">
      <button type="button" class="btn-secondary" data-open-cookie-settings>Cookie settings</button>
      <button type="button" class="btn-primary" data-close-privacy>Close</button>
    </footer>
  </div>
</div>
```

**CSS class naming:** keep BEM-style `privacy-modal__*` classes; restyle with site tokens (background, border, typography, button classes).

### 4.2 JavaScript behavior

Implement in a `DOMContentLoaded` handler:

| Behavior | Requirement |
|----------|-------------|
| Open triggers | Click on `.js-open-privacy` or `a[href="#privacy-policy"]` → `preventDefault()` → open modal |
| Close triggers | `[data-close-privacy]`, `Escape` key |
| Cookie settings from modal | `[data-open-cookie-settings]` → close modal → trigger `[data-cc="show-preferencesModal"]` click |
| Body scroll lock | `document.body.style.overflow = 'hidden'` while open |
| Focus | Focus close button on open; restore focus to trigger on close |
| Hash routing | `#privacy-policy` in URL opens modal; clear hash with `history.replaceState` after open |
| Hash change | `hashchange` listener for `#privacy-policy` |

### 4.3 Policy content (minimum sections)

Replace `{Brand}`, `{Contact}`, and `{Date}` per site. Keep structure; adjust wording only if the business model differs.

1. **Who we are** — brand description; Telegram community; landing purpose  
2. **Information we collect** — technical data, cookie preferences, communications; no payment cards on site  
3. **How we use your information** — operate site, remember consent, aggregate analytics (if consented), support, improvements  
4. **Cookies** — necessary vs optional analytics; link to Cookie settings control  
5. **Third-party services** — Telegram, analytics (if consented), CDN/fonts  
6. **Legal basis (EEA/UK)** — consent, legitimate interest, legal obligations  
7. **Data retention** — consent ~6 months; analytics per provider; correspondence as needed  
8. **Your rights** — access, correction, deletion, restriction, withdraw consent, complaint; contact method  
9. **Children** — not directed at under-18  
10. **Changes** — update "Last updated" date  
11. **Contact** — Telegram or email  

Include `<p class="privacy-modal__meta">Last updated: {Date}</p>` at the top.

### 4.4 Z-index stacking

| Layer | z-index |
|-------|---------|
| Privacy modal | `2147483647` |
| Cookie consent (`#cc-main`) | `2147483646` via `--cc-z-index` |

Privacy modal must appear **above** the cookie banner when both are visible.

---

## 5. Cross-component integration

All privacy links across the page must use the same hook:

```html
<a href="#privacy-policy" class="js-open-privacy">Privacy Policy</a>
```

This includes:

- Footer legal line  
- Cookie consent banner footer  
- Cookie preferences modal "More information" section  

**Do not** use `href="#"` or external URLs for privacy on these landings.

---

## 6. Site-specific customization checklist

Before shipping a new landing, fill in:

| Placeholder | Example | Where |
|-------------|---------|-------|
| Brand name | Forexman | Privacy modal copy, copyright footer |
| Contact handle | `@forexman_official` | Privacy sections 8 & 11 |
| Last updated date | July 15, 2026 | Privacy modal meta |
| Cookie name | `forexman_cc` | `CookieConsent.run({ cookie: { name } })` |
| `#cc-main` CSS variables | Map to site palette | `<style>` block |
| `.privacy-modal` styles | Map to site palette | `<style>` block |
| `.footer-cookie-btn` styles | Match footer links | `<style>` block |
| Button classes in modal footer | Use site's existing `.btn-primary` / `.btn-secondary` | Modal footer |

---

## 7. Verification checklist

### Chatterfy

- [ ] `index.html` is the only file in the ZIP root  
- [ ] Every Telegram **join** CTA has `tracker` (no hardcoded invite `href`)  
- [ ] Support/contact Telegram links (non-CTA) still work with explicit URLs  
- [ ] ZIP uploads successfully in Chatterfy Custom landing settings  

### Cookie consent

- [ ] Banner appears on first visit (bar, bottom, full width)  
- [ ] Accept all / Reject all / Manage preferences all work  
- [ ] Consent persists on reload (`{brand}_cc` cookie set)  
- [ ] Footer **Cookie settings** reopens preferences modal  
- [ ] Banner Privacy Policy link opens privacy modal  
- [ ] Banner colors match target site (not copied blindly from reference)  

### Privacy modal

- [ ] Footer Privacy Policy opens modal  
- [ ] `#privacy-policy` hash opens modal and clears from URL  
- [ ] Backdrop click, Close button, and Escape close modal  
- [ ] Cookie settings button inside modal opens cookie preferences  
- [ ] Modal appears above cookie banner (z-index)  
- [ ] All 11 policy sections present with site-specific brand/contact  
- [ ] Body scroll locked while modal open  

---

## 8. Implementation order (recommended)

1. Add privacy modal HTML + CSS + JS (test open/close independently)  
2. Add cookie consent library + config + theme CSS  
3. Wire privacy links in footer and cookie banner to modal  
4. Add footer Cookie settings button  
5. Add `tracker` to Telegram CTAs; remove hardcoded invite URLs from those elements  
6. Build `chatterfy.zip` and verify in Chatterfy preview  
7. Run full verification checklist (§7)  

---

## 9. Reference snippets (copy/adapt, do not paste blindly)

Full working code lives in [`variant-2-main-404/index.html`](variant-2-main-404/index.html):

| Feature | Approx. lines |
|---------|---------------|
| Cookie CSS variables + bar width | `#cc-main` block in `<style>` |
| Privacy modal CSS | `.privacy-modal` block in `<style>` |
| Footer legal row | `.footer-bottom` in HTML |
| Privacy modal HTML | `#privacyModal` before scripts |
| Privacy modal JS | `PRIVACY POLICY MODAL` section in first `<script>` |
| Cookie consent init | `<script type="module">` before `</body>` |

When porting to a new site, **transplant behavior and structure**, then **restyle** using that site's existing CSS variables, fonts, and button classes.
