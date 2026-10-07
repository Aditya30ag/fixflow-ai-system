# FixNet Design Tokens (Deepdale-Inspired System)

These tokens map the calm, institutional, high-trust visual language of Deepdale directly into FixNet's design system, tailored for property operations directors and asset managers.

---

## 1. Color Palette Tokens

### Surface & Background Colors
```css
--ff-canvas-main: #f5f5f7;          /* Primary page background (warm neutral) */
--ff-canvas-subtle: #f3f3f5;        /* Secondary page fill */
--ff-canvas-muted: #eef1f6;         /* Process steps & subtle section background */
--ff-canvas-dark: #040611;          /* Obsidian dark canvas for Capabilities bento */
--ff-canvas-card-light: #ffffff;    /* Card fill on light canvas */
--ff-canvas-card-dark: rgba(255, 255, 255, 0.02); /* Glass card fill on dark canvas */
```

### Text & Ink Colors
```css
/* Light Surface Inks */
--ff-text-title: #0b0d12;           /* Primary display ink (Hero & display headers) */
--ff-text-heading: #1c202b;         /* Section headers */
--ff-text-body: #404555;            /* Body text, balanced readability */
--ff-text-muted: #6b7386;           /* Eyebrows, UI labels, metadata */
--ff-text-subtle: #8a90a3;          /* Secondary metadata, hints */

/* Dark Surface Inks */
--ff-text-dark-title: #ffffff;      /* Dark section headers */
--ff-text-dark-body: #d5d2e3;       /* Dark section explanatory text */
--ff-text-dark-muted: #9aa3b5;      /* Dark section secondary labels */
```

### Borders & Dividers
```css
--ff-border-subtle: #eaedf3;        /* Hairline borders */
--ff-border-light: #d8dde7;         /* Standard card borders */
--ff-border-strong: #d1d5de;        /* Interactive elements / pills */
--ff-border-dark: rgba(184, 174, 223, 0.35); /* Capabilities glass border */
--ff-border-dark-active: rgba(201, 193, 241, 0.65); /* Capabilities active card */
```

### Accents & Indicators
```css
--ff-accent-cyan: #18aae3;          /* AI waveform & telemetry pulse */
--ff-accent-blue: #1e6cf7;          /* Brand primary active accent */
--ff-accent-magenta: #d82a87;       /* Gradient accent stop */
--ff-accent-emerald: #22c55e;       /* Live voice agent / 99.8% SLA indicator */
--ff-accent-amber: #f59e0b;         /* Urgent escalation indicator */
--ff-accent-navy: #081b45;          /* Institutional deep navy */
```

---

## 2. Typography Scale

```css
/* Typography Scale */
--ff-font-sans: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
--ff-font-display: 'Plus Jakarta Sans', 'Inter', sans-serif;
--ff-font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;

/* Font Size Scales */
--ff-text-hero: clamp(2.75rem, 5.5vw, 4.4rem);   /* line-height: 1.04; tracking: -0.04em */
--ff-text-h2: clamp(2.35rem, 4.2vw, 4.1rem);     /* line-height: 1.06; tracking: -0.038em */
--ff-text-h3: clamp(1.33rem, 1.6vw, 2.15rem);    /* line-height: 1.15; tracking: -0.02em */
--ff-text-h4: 1.25rem;                           /* line-height: 1.3; tracking: -0.01em */
--ff-text-subtitle: clamp(1.05rem, 1.25vw, 1.25rem); /* line-height: 1.45 */
--ff-text-body: 1rem;                            /* line-height: 1.55 */
--ff-text-small: 0.875rem;                       /* line-height: 1.4 */
--ff-text-micro: 0.75rem;                        /* line-height: 1.3 */
```

---

## 3. Shadows & Surface Elevations

```css
/* Light Elevation Shadows */
--ff-shadow-sm: 0 1px 2px rgba(18, 24, 35, 0.05);
--ff-shadow-card: 0 10px 30px rgba(18, 24, 35, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04);
--ff-shadow-dropdown: 0 24px 60px rgba(9, 13, 24, 0.16);
--ff-shadow-hero: 0 26px 90px rgba(18, 22, 33, 0.20);

/* Signature Deepdale Dark Inset Rim Glow (for Capabilities Glass Cards) */
--ff-shadow-glass-dark: 
  0 36.6px 52.6px -33.8px rgba(255, 255, 255, 0.00) inset,
  0 6.6px 10.3px -3.8px rgba(255, 255, 255, 0.50) inset,
  0 -77.1px 63.9px -60.1px rgba(96, 68, 144, 0.30) inset,
  0 92.1px 94.0px -45.1px rgba(202, 172, 255, 0.30) inset,
  0 3.8px 16.9px 0 rgba(154, 146, 210, 0.30) inset,
  0 0.94px 37.6px 0 rgba(227, 237, 239, 0.20) inset;
```

---

## 4. Radii & Layout Containers

```css
/* Border Radii */
--ff-radius-sm: 8px;
--ff-radius-md: 13px;       /* Primary buttons & interactive items */
--ff-radius-lg: 16px;       /* Standard cards */
--ff-radius-xl: 20px;       /* Large surface cards & bento boxes */
--ff-radius-2xl: 28px;      /* Hero frame, dark section enclosures */
--ff-radius-full: 9999px;   /* Pills & status indicators */

/* Layout Max Widths */
--ff-container-nav: 1312px;
--ff-container-hero: 1280px;
--ff-container-default: 1360px;
--ff-container-wide: 1560px;
```

---

## 5. Motion Tokens

```css
/* Easing Curves */
--ff-ease-signature: cubic-bezier(0.22, 1, 0.36, 1); /* Deepdale signature fast-in gentle-settle */
--ff-ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
--ff-ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);

/* Transition Durations */
--ff-duration-fast: 180ms;    /* Buttons hover / press */
--ff-duration-normal: 240ms;  /* Card hover lift / border transition */
--ff-duration-panel: 320ms;   /* Tabs / Accordion slide */
--ff-duration-reveal: 600ms;  /* Scroll in-view element reveal */
--ff-duration-marquee: 25s;   /* Continuous partner marquee loop */
```
