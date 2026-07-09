<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->
---
name: Walid's Portfolio
description: Dark, atmospheric developer portfolio
---

# Design System: Walid's Portfolio

## 1. Overview

**Creative North Star: "The Midnight Workshop"**

A dark, atmospheric developer portfolio that feels like stepping into a creative workshop at night — violet neon against dark concrete, a warm amber desk lamp casting glow across the workspace. The aesthetic is technical but personal, refined but not corporate. Every pixel has intent; nothing is decorative for its own sake.

This system explicitly rejects the AI-generated portfolio look — no gradient text, no glassmorphism, no numbered section markers, no eyebrow kickers. The visual language is committed and original, not templated.

**Key Characteristics:**
- Dark concrete foundation (near-black bg) with violet primary carrying the brand
- Warm amber accent as the only secondary color — a deliberate glow against the cool violet
- Geometric sans display + mono typography — clean, technical, developer-forward
- Choreographed motion — scroll-driven reveals and entrance sequences with restraint
- Cards used deliberately, never nested
- Premium motion materials (blur, clip-path, shadow) used to enhance, not decorate

## 2. Colors

The palette is anchored by a violet primary (`oklch(0.62 0.16 294.3)`) on a near-black stage. One committed saturated color carries 30–60% of the surface; the warm amber accent is the counterpoint — a desk-lamp glow against the cool night.

### Primary
- **Violet Night** (`oklch(0.62 0.16 294.3)`): The brand color. Used for interactive elements, section backgrounds, primary buttons, and signature surfaces. Carries the identity.

### Neutral
- **Concrete** (`oklch(0.04 0 0)`): Body background. Near-black, pure neutral. The foundation.
- **Slab** (`oklch(0.09 0.005 294)`): Surface background. Cards, panels, sections — a step off pure black with the faintest violet sheen.
- **Paper** (`oklch(0.93 0.008 294)`): Primary text. Near-white with a barely perceptible violet warmth.
- **Stone** (`oklch(0.60 0.008 294)`): Secondary text. For metadata, captions, muted content.

### Accent
- **Desk Lamp** (`oklch(0.72 0.18 75)`): Warm amber glow. Used sparingly for highlights, focus states, call-to-action elements, and signature accents. The counterpoint to violet.

### Named Rules
**The Committed Rule.** Violet Night carries 30–60% of any given surface. Its prevalence is intentional — this is an identity-driven site, not a neutral frame for content. The amber accent, by contrast, is used on ≤10% of any screen. Its rarity is the point.

**The No-Warm-Bg Rule.** Warmth lives in the accent and typography, not in the background. The body background is pure neutral. Always.

## 3. Typography

**Display Font:** Geometric sans (`[font pairing to be chosen at implementation]`)
**Body Font:** Geometric sans (`[font pairing to be chosen at implementation]`)
**Mono Font:** Monospace (`[font pairing to be chosen at implementation]`)

**Character:** Clean, technical, developer-forward. A single geometric sans family in multiple weights carries both display and body roles; a monospace face provides technical contrast for code snippets and metrics.

### Hierarchy
- **Display** (bold, `clamp(2.5rem, 6vw, 4.5rem)`, 1.0 line-height, `-0.03em` letter-spacing): Hero headings only. `text-wrap: balance`.
- **Headline** (semibold, `clamp(1.5rem, 4vw, 2.5rem)`, 1.1 line-height): Section headings.
- **Title** (medium, `clamp(1.125rem, 3vw, 1.5rem)`, 1.2 line-height): Card titles, subheadings.
- **Body** (normal 400, `1rem`/`16px`, 1.6 line-height): Paragraphs, descriptions. Max line length 70ch.
- **Mono** (normal 400, `0.875rem`/`14px`): Code snippets, inline code, technical metadata.

### Named Rules
**The One-Family Rule.** One geometric sans across display and body. No serif, no secondary sans. Cohesion through constraint.

## 4. Elevation

Layered depth through tonal shifts, not shadows. Surfaces separate from each other by moving up the lightness ramp (concrete → slab), not by casting shadows. This keeps the dark atmosphere clean and avoids the Material Design shadow aesthetic the anti-reference rejects.

### Named Rules
**The Shadowless Rule.** No box-shadows. Depth is conveyed through tonal layering, not drop shadows. The one exception: subtle glow effects on interactive elements using `box-shadow` with the Desk Lamp accent color.

## 5. Components

[No components exist yet. This section will be populated once code is written.]

## 6. Do's and Don'ts

### Do:
- **Do** use Violet Night as the dominant brand surface color across 30–60% of the page.
- **Do** use Desk Lamp amber sparingly — it's the accent, not the voice.
- **Do** let content breathe through layered tonal surfaces (concrete → slab).
- **Do** use choreographed motion — scroll-driven reveals, staggered entrances, blur transitions.
- **Do** use `text-wrap: balance` on all headings.

### Don't:
- **Don't** use gradient text (`background-clip: text` + gradient). Ever.
- **Don't** use glassmorphism (frosted glass, backdrop-blur as a decorative surface treatment).
- **Don't** use numbered section markers (01 / 02 / 03) as default scaffolding above sections.
- **Don't** use tiny uppercase tracked eyebrows ("ABOUT", "PROJECTS", "SKILLS") above every section heading.
- **Don't** use side-stripe borders (`border-left`/`border-right` >1px as colored accent).
- **Don't** use card grids with identical structure repeated endlessly.
- **Don't** use shadows for elevation — use tonal layering.
- **Don't** nest cards.
- **Don't** use the hero-metric template (big number + small label + supporting stats).
