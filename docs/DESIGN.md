---
name: Mayank Narla Personal Website
description: Motorsport-adjacent kinetic telemetry and neurosymbolic systems engineering portfolio.
colors:
  bg-canvas: "#121316"
  bg-card: "#18191E"
  bg-surface: "#1E2027"
  bg-surface-hover: "#242731"
  bg-glass-card: "rgba(24, 25, 31, 0.65)"
  border-subtle: "#20222A"
  border-card: "#282A34"
  border-highlight: "#3D4150"
  border-glass: "rgba(255, 255, 255, 0.08)"
  accent: "#5E212A"
  accent-hover: "#752B36"
  accent-dim: "rgba(94, 33, 42, 0.25)"
  accent-glow: "rgba(94, 33, 42, 0.45)"
  color-status-active: "#10B981"
  text-headline: "#F4F4F2"
  text-body: "#9E9EA4"
  text-muted: "#8E909B"
  text-inverse: "#FFFFFF"
typography:
  display:
    fontFamily: "Barlow Condensed, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(4.5rem, 9vw, 8rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "Barlow Condensed, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Chivo, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.85rem"
    fontWeight: 500
rounded:
  none: "0px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.bg-card}"
    textColor: "{colors.text-headline}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  card-default:
    backgroundColor: "{colors.bg-card}"
    rounded: "{rounded.none}"
    padding: "32px"
---

## Overview

A high-velocity, motorsport-adjacent telemetry portfolio for Mayank Narla. Built with sharp industrial lines, tactile smoked glass layers, and high-contrast typography, completely rejecting generic AI tropes (rounded-3xl cards, purple-cyan glow blobs, side-tab stripes).

## Colors

- **Canvas Base (`#121316`):** Deep textured charcoal with a 48px hairline grid.
- **Card Surfaces (`#18191E` & `#1E2027`):** Layered graphite planes providing visual hierarchy.
- **Primary Accent (`#5E212A`):** Deep Oxblood Burgundy used strictly for active indicators, progress metrics, and key CTAs (~5% visual ratio).
- **Status Green (`#10B981`):** Active telemetry status signal.
- **Text Layers:** Off-white (`#F4F4F2`) for maximum heading readability, muted slate (`#8E909B`) for accessible 4.7:1 WCAG AA contrast, and pure white (`#FFFFFF`) for inverted buttons.

## Typography

- **Display Headers:** *Barlow Condensed* (Weights: 800, 900) in ALL CAPS for aerodynamic velocity.
- **Body:** *Plus Jakarta Sans* (Weights: 400, 500, 600) for effortless legibility.
- **Telemetry & Labels:** *JetBrains Mono* (Weights: 500, 700) for tabular stats, coordinates, timestamps, and tech badges.

## Layout

- **Asymmetric Grid System:** Wide 1200px max-width container with prominent whitespace and hairline `1px` borders.
- **Sticky Smoked HUD Header:** `backdrop-filter: blur(16px)` with live Pacific Time clock, status indicator, and scroll progress line.
- **Hero:** Asymmetric split between oversized title lockup and 3 large tabular metric cards.
- **Range-First Roster:** Lead with Computer Vision & Agentic AI before domain-specific motorsport telemetry.

## Elevation & Depth

- Zero soft drop-shadows. Depth is achieved via crisp `1px` structural borders (`#282A34`), smoked glass translucency (`rgba(18, 19, 23, 0.82)`), and high-contrast surface steps (`#121316` $\rightarrow$ `#18191E` $\rightarrow$ `#1E2027`).

## Shapes

- **Strict `0px` Border Radius:** All cards, tags, buttons, and badges use razor-sharp edges. Rounded corners are explicitly banned to prevent generic AI UI aesthetics.

## Components

- **Telemetry HUD:** Fixed header displaying brand mark, live clock, status dot, and scroll progress beam.
- **Metric Cards:** Tabular numeric tickers counting up mechanically with rapid ease-out and top accent border.
- **Project Cards:** Split cards with category tags, title arrow nudges (`↗`), and live metric callouts.
- **Kinetic Custom Cursor:** Minimal crosshair follower (`+`) expanding to `[ ↗ ]` on interactive links.

## Do's and Don'ts

### Do:
- Keep the Electric Crimson accent limited to ~5% visual surface area.
- Use tabular figures for all numeric counters.
- Ensure all hover states snap with mechanical easing (`cubic-bezier(0.16, 1, 0.3, 1)`).
- Preserve strict sharp corners (`0px`) on all UI elements.
- Ensure all mobile touch targets meet or exceed 44×44px.

### Don't:
- Do not use bulbous border radii (e.g. `border-radius: 16px` or `24px`).
- Do not add purple-to-blue gradient washes or blurry floating glowing orbs.
- Do not add thick colored side borders ("side-tabs") on cards.
- Do not use clichéd racing clip-art (helmets, checkered flags). Keep the motorsport inspiration abstract and technical.
