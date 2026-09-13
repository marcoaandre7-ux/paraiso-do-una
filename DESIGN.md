---
name: Paraíso do Una
description: A photographic woodland retreat with a calm natural canvas.
colors:
  forest: "#253b2f"
  ink: "#263a2e"
  paper: "#f6f5f0"
  muted: "#596457"
  line: "#d5d9cf"
  forest-hover: "#3c5440"
  leaf: "#60764b"
  pale-leaf: "#e3e9c9"
  cabin-surface: "#e8ecdf"
  location-surface: "#eceee7"
  white: "#ffffff"
  focus: "#8d9b57"
  error: "#9b3025"
typography:
  display:
    fontFamily: "'Gilda Display', Georgia, serif"
    fontSize: "clamp(3.7rem, 6.4vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-.035em"
  headline:
    fontFamily: "'Gilda Display', Georgia, serif"
    fontSize: "clamp(2.7rem, 4.1vw, 4.3rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-.025em"
  title:
    fontFamily: "'Gilda Display', Georgia, serif"
    fontSize: "38px"
    fontWeight: 400
    lineHeight: 1.13
    letterSpacing: "-.02em"
  body:
    fontFamily: "'Manrope', Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "'Manrope', Arial, sans-serif"
    fontSize: "14px"
rounded:
  photo: "2px"
  control: "3px"
  circular: "50%"
spacing:
  gallery-gap: "16px"
  section-desktop: "110px"
  section-tablet: "80px"
  section-mobile: "66px"
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "15px 25px"
  button-primary-hover:
    backgroundColor: "{colors.forest-hover}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "15px 25px"
  button-light-hover:
    backgroundColor: "{colors.white}"
  button-small:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "11px 18px"
  date-input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "15px 12px"
    height: "54px"
---

# Design System: Paraíso do Una

## Overview

**Creative North Star: "A veranda onto the landscape"**

A real woodland retreat opens like a veranda onto its own photographic landscape. The original monochrome logo and supplied photographs anchor a calm, spacious visual system; forest tones and a pale natural canvas connect the interface to the timber, river and vegetation visible in the images.

This records the implemented website, not a formal official brand guide. Gilda Display supplies the expressive voice while Manrope keeps navigation, descriptions and enquiries clear.

**Key Characteristics:**

- Original monochrome logo and real location photography.
- Large serif invitations with quiet sans-serif controls.
- Flat natural surfaces, restrained corners and purposeful motion.

## Colors

Forest is the primary action and footer color. Leaf accents italic headings; pale leaf accents headings over photography. Paper, ink, muted text and line form the neutral foundation. Cabin and location surfaces supply gentle tonal separation. Focus and error colors carry interaction feedback.

The palette is derived from the supplied forest photography and implemented art direction; the logo itself remains monochrome. Frontmatter records the reusable source values from `dist/style.css`.

## Typography

Display, headline and title use locally hosted Gilda Display with Georgia fallback. Body and controls use locally hosted Manrope with Arial fallback. Headings stay at regular weight and combine upright and italic text. Paragraphs are capped at 65ch; the narrow mobile introduction uses 45ch.

Desktop roles are recorded above. At 700px and below, the hero uses `clamp(3rem,10.7vw,4.2rem)` with 1.07 line height; general section headings use 2.75rem. Component-specific sizes remain in the stylesheet.

## Layout

Section containers have a 1380px maximum width, centered with 6% horizontal padding. At 960px and below, typical sections use 5% gutters; at 700px and below, 7% gutters and a single-column reading order. These are observed values, not a generalized spacing scale.

The photographic gallery uses three columns with one tall image on desktop and two columns with a spanning first image on mobile. The navigation collapses at 700px. The sticky header remains 100px high on desktop and 80px on mobile, including its scrolled state; only its border changes on scroll. Date fields remain paired.

## Elevation & Depth

The interface uses tonal surfaces and photographic overlays rather than box shadows. Dark directional gradients protect text over photographs. The full-screen image dialog uses a deep forest backdrop. There is no generalized shadow scale.

## Shapes

Photographs and controls are predominantly rectangular with the small radii recorded above. The introduction's portrait image has an arched top (`48% 48% 2px 2px`). Circular controls are reserved for expanding, closing and stepping through photographs. Thin rules distinguish tabs, features and navigation states.

## Components

Buttons are restrained filled rectangles with an inline arrow. Primary, pale and compact variants share the same geometry. Hover changes the fill and moves the arrow 3px; text links use an underline and widen their arrow gap. Focusable links, buttons and inputs use a 3px focus outline with a 6px offset.

Navigation uses quiet Manrope links with a growing underline. The mobile menu button exposes its expanded state and closes on link activation or Escape.

The home page uses a five-item chalet directory with a featured first card and direct links to individual accommodation pages. Detail pages use a distinct split hero, accommodation facts, photographic gallery and enquiry area.

The native modal gallery provides labelled controls, captions, seven images on the home page and three mapped images on each detail page, with arrow-key navigation, Escape dismissal, swipe navigation and focus restoration. Detail-page date and guest inputs have visible labels and native required validation; submission checks arrival and departure order, announces errors politely and opens a prepared WhatsApp enquiry naming the selected chalé. Confirmation remains with the host.

Motion is limited to the hero entrance, photo/tab transitions, hover feedback and dialog entrance. Reduced-motion preference disables CSS animation and smooth scrolling, minimizes transitions and bypasses the scripted tab animations.

## Do's and Don'ts

- Do preserve the original logo, real property photography and visible photographic credit.
- Do retain readable photographic overlays, keyboard focus and reduced-motion behavior.
- Do use the established serif/sans pairing and responsive spacing.

- Don't present the inferred nature palette as an official brand specification.
- Don't substitute invented property imagery or unsupported accommodation claims.
- Don't imply that a date enquiry confirms a reservation.
