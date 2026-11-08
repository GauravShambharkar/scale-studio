# Figma-to-Code Scale Studio 📐

A visual testing workbench built to eliminate the common discrepancy where design specs in Figma (font sizes, padding, margins, flex gaps, and border radiuses) look balanced on canvas but feel disproportionately large or awkward when rendered in actual browser code.

## 🚀 Key Features

- **Direct Pixel Inputs & Sliders**:
  - **Font Size (px)**: Base body font with automatic relative scaling for H1, H2, and captions.
  - **Padding (px)**: Uniform or independent horizontal (Pad X) and vertical (Pad Y) padding.
  - **Margin (px)**: Outer offset for cards and containers.
  - **Gaps (px)**: Spacing for horizontal flex rows (`gap-x`) and vertical stacks (`gap-y`).
  - **Roundness (px)**: Border radius for buttons, input fields, badges, cards, and modal dialogs (0px to 9999px pill).
  - **Border Width & Line Height**: Micro-adjust borders and leading ratios.
- **Two-Column Component Grid (N Rows)**:
  - 10 realistic UI components centered inside aesthetic canvas preview cards:
    1. **Typography Hierarchy**: H1, H2, Body, Caption with live rem/px badges.
    2. **Buttons & Actions**: Primary, Secondary, Outline, and Segmented Control groups.
    3. **Form Controls & Inputs**: Search bar with inline button, text inputs with labels and helper text, checkboxes.
    4. **Article & Content Card**: Feature media, category badge, heading, excerpt, author meta.
    5. **Horizontal Flex Items**: Filter tags row, stats badges, and team avatar stack showing horizontal gap dynamics.
    6. **Vertical Stack & Feed**: Chronological notification list illustrating vertical gap accumulation.
    7. **Analytics KPI Cards**: Revenue and sync metrics with rounded gradient progress bars.
    8. **Modal & Dialog Window**: Dialog header, body whitespace, pill token summary, action footer.
    9. **App Navigation Bar**: Brand logo, horizontal tabs with rounded active pill, sign-in CTA.
    10. **E-Commerce Product Card**: Product thumbnail, discount badge, star ratings, price, and Add to Cart action.
- **X-Ray Spacing Inspector**:
  - Highlights padding in green (`inspect-padding-pattern`), margins in orange, and gaps in purple to show exact box-model anatomy.
- **Scale & Viewport Simulators**:
  - 100% True Pixel vs 75% / 50% Zoom (to simulate how Figma canvas viewports shrink pixels).
  - Container width limits: Full Screen, 1280px (Desktop), 768px (Tablet), and 390px (Mobile).
- **One-Click CSS & Tokens Export**:
  - Export CSS Variables, Tailwind theme extensions, or Figma JSON Tokens.

## 🛠️ How to Run Locally

```bash
cd designguide
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
