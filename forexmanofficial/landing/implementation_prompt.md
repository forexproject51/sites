# Forexman Landing Page — Implementation Prompt

You are a senior frontend developer and UI designer. Your task is to build a high-quality, production-ready landing page for the **Forexman** Telegram trading channel.

---

## Your Context Files

You have been given three context files. Read and follow ALL of them:

1. **`sections.md`** — The complete section plan. This defines WHAT sections to build, in what order, and what content each section contains. Follow this structure exactly.
2. **`styleguide_X.md`** — The visual design system. This defines HOW the page should look — colors, typography, layout, components, animations, spacing, and mood. Follow this guide precisely for all visual decisions.
3. **`content.md`** — The actual copy, statistics, and text content. Use this as the source of truth for all written content, numbers, and testimonials. Do not invent your own statistics.

**Priority hierarchy:** Styleguide > Sections > Content. If the styleguide suggests a layout approach that conflicts with sections, follow the styleguide's visual direction while keeping all section content.

---

## Your Task

Build a **single-page landing website** as a standalone HTML file. The page must contain all sections defined in `sections.md`, styled according to the provided styleguide, using copy from `content.md`.

### Output

Create the following file structure:

```
landing/variant-{N}/
├── index.html    (main page — self-contained or referencing local assets)
```

Where `{N}` corresponds to the styleguide number (1, 2, or 3).

**Strongly prefer a single `index.html` file** with all CSS and JS inlined. Only use separate files if complexity absolutely demands it (e.g., a very large JS animation library).

---

## Technical Requirements

### Must Follow

- **Vanilla HTML/CSS/JS only.** No frameworks (React, Vue, etc.). No build tools.
- **Single HTML file preferred.** Inline `<style>` and `<script>` blocks.
- **Mobile-first and responsive.** Design for phones first (most traffic comes from Telegram on mobile). Then enhance for tablet and desktop. Test mental model: "Does this look great on a 375px-wide screen?"
- **Semantic HTML.** Proper heading hierarchy (one `h1`, section `h2`s, etc.). Accessible buttons with clear text. `alt` attributes on images. Landmark elements (`main`, `section`, `footer`).
- **Smooth, performant animations.** Use CSS transitions, CSS animations, and `requestAnimationFrame`. Never cause jank. Use `will-change` hints on heavy animations. Use `IntersectionObserver` for scroll-triggered reveals.
- **Fast loading.** No unnecessary external requests. Lazy-load heavy elements. Keep DOM light.
- **Cross-browser compatible.** Target modern browsers (Chrome, Safari, Firefox, Edge — last 2 versions).

### External Resources Allowed

- **Google Fonts** — load only the weights you actually use. Use `display=swap`.
- **CDN libraries** (optional, only if needed for complex animations):
  - GSAP (`https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js`)
  - GSAP ScrollTrigger plugin
  - particles.js (only for Styleguide 3 if implementing particle background)
  - Three.js (only if implementing a 3D scene — unlikely to be needed, CSS 3D is preferred)
- **No other external dependencies.** Everything else must be inline.

### Assets

- **Logo:** Reference as `../../assets/logo.png` (the HTML file is in `landing/variant-{N}/`)
- **Founder photo (optional):** Available at `../../assets/photo.png` if needed — but the styleguides prefer brand-only design, so only use if the About section specifically benefits from it.
- **No other images.** All visual elements must be CSS, SVG, or canvas-generated.

---

## Implementation Rules

### Layout & Structure

1. **Build every section from `sections.md`.** Don't skip sections. Don't add sections that aren't defined.
2. **Follow the section order** as specified in `sections.md` (Hero → Stats → Features → Performance → VIP → Education → Copy Trading → About → Disclaimer → Footer CTA).
3. **Each section gets a micro-CTA** — either a button linking to the Telegram channel or a text link. The user should never scroll more than one section without seeing a way to join.
4. **The primary CTA links to `https://t.me/PLACEHOLDER_LINK`** with `target="_blank"` and `rel="noopener noreferrer"`.
5. **The VIP CTA** mentions sending "VIP" to `@forexman_official`.

### Visual Design

6. **Follow the styleguide religiously.** Use the exact color tokens, font pairings, border-radius values, shadow definitions, spacing scale, and animation specs. The styleguide is your design system — don't improvise.
7. **Use CSS custom properties** (variables) for all design tokens (colors, shadows, radii, fonts). Define them in `:root`. This makes the design system maintainable.
8. **Implement ALL component styles** described in the styleguide — cards, buttons (primary + secondary), stat displays, checklists, badges, etc.
9. **Implement the animations** described in the styleguide. Page load sequences, scroll reveals, hover states, stat counters. These are critical to the variant's identity.
10. **Respect the styleguide's mood.** Re-read the "Overall Mood" section before you start. Let it guide micro-decisions (how much glow? how fast the animation? how much spacing?).

### Content & Copy

11. **Use content from `content.md`** for all text. Stats, headlines, descriptions, VIP checklist, disclaimers, testimonials — all sourced from the content file.
12. **Do not invent statistics.** The numbers in `content.md` are authoritative. Don't change "87%" to "90%" or "40,000+" to "50,000+".
13. **Adapt the tone** to match the styleguide's overall mood, but keep the voice consistent with the Tone of Voice section (friendly, modern, casual but credible).
14. **Disclaimer must be included verbatim** from `content.md`. Do not paraphrase the legal text.

### Responsiveness

15. **Mobile-first CSS.** Write base styles for mobile (375px). Use `min-width` media queries to enhance for larger screens.
16. **Test in your mind at 3 sizes:** 375px (phone), 768px (tablet), 1280px (desktop).
17. **CTA buttons are full-width on mobile.** No tiny tappable targets.
18. **Font sizes must scale down** appropriately for mobile. Use the size tables in the styleguide.
19. **Disable expensive animations on mobile** (particle effects, 3D tilt, complex parallax). Use simpler alternatives (fade + translate).
20. **Touch-friendly spacing.** Minimum 44px tap targets. Adequate spacing between interactive elements.

### Performance

21. **Animate only `transform` and `opacity`** when possible. These are GPU-composited and won't cause layout reflow.
22. **Use `IntersectionObserver`** for scroll-triggered animations, not scroll event listeners.
23. **Debounce/throttle** any remaining scroll or resize handlers.
24. **Lazy-trigger** animations: don't run animations that aren't visible.
25. **`will-change` hints** on elements with complex animations. Remove after animation completes if one-shot.

### Code Quality

26. **Clean, readable code.** Consistent indentation (2 spaces). Logical section organization in CSS and HTML.
27. **CSS organization:** Reset/base → CSS variables → typography → layout → components → sections → animations → responsive overrides.
28. **Group HTML sections clearly** with comments: `<!-- HERO -->`, `<!-- STATS -->`, etc.
29. **JS at the bottom** of `<body>`, or use `defer`. Initialize after DOM is ready.
30. **No console.log or debug code** in the final output.

---

## Common Mistakes to Avoid

- **Don't center everything.** Follow the styleguide's alignment rules. Many variants use left-alignment for editorial feel.
- **Don't make text too small on mobile.** Body text minimum 15px. Headlines minimum 24px.
- **Don't over-animate.** More animation ≠ better. Follow the styleguide's animation philosophy.
- **Don't use generic colors.** Use the exact hex/rgba values from the styleguide's color table.
- **Don't forget the disclaimer section.** It's legally important and must use the exact text from `content.md`.
- **Don't use placeholder text.** All content is provided in `content.md`. Fill every section with real copy.
- **Don't use `<img>` for decorative elements.** Use CSS backgrounds, gradients, pseudo-elements, or inline SVGs.
- **Don't make the page too long.** Each section should be concise. The full page should feel substantial but not endless. Aim for a 2–3 minute scroll experience on desktop.
- **Don't forget the Telegram icon in the CTA.** Use an inline SVG of the Telegram paper-plane icon in the primary CTA button.

---

## Telegram Icon SVG

Use this inline SVG for the Telegram icon in CTA buttons:

```html
<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
</svg>
```

---

## Quality Checklist

Before considering the work complete, verify:

- [ ] All 10 sections from `sections.md` are implemented
- [ ] Every section has a micro-CTA (button or link to Telegram)
- [ ] All design tokens from the styleguide are used (colors, fonts, spacing)
- [ ] Animations work: page load sequence, scroll reveals, stat counters, hover states
- [ ] Page is fully responsive: looks great at 375px, 768px, and 1280px
- [ ] CTA buttons are prominent and impossible to miss
- [ ] Statistics match `content.md` exactly (40K+, 87%, 2000 pips, etc.)
- [ ] Disclaimer section is present with verbatim legal text
- [ ] Logo displays correctly (`../../assets/logo.png`)
- [ ] All links use `target="_blank" rel="noopener noreferrer"`
- [ ] No horizontal scroll on any screen size
- [ ] Smooth 60fps animations, no jank
- [ ] Page loads fast — no unnecessary network requests
- [ ] Code is clean, organized, and well-structured
- [ ] The overall mood matches the styleguide's "Overall Mood" description

---

## Final Note

You are building **one variant** of three. Each variant must feel like a completely different website — not a color swap. The styleguide you've been given defines a unique visual identity. Lean into it. Make it distinctive. Make it beautiful. Make someone want to tap that CTA button.
