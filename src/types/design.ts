export interface DesignTokens {
  // Font sizes in px
  headingFontSize: number;
  subheadingFontSize: number;
  bodyFontSize: number;
  buttonFontSize: number;
  captionFontSize: number;
  lineHeightRatio: number;

  // Master link mode: if true, editing master font changes heading/subheading proportionally
  linkFontScales: boolean;

  // Spacing in px
  paddingUniform: boolean;
  padding: number;
  paddingX: number;
  paddingY: number;

  buttonPaddingY: number;
  buttonPaddingX: number;

  margin: number;

  // Gaps in px
  gapUniform: boolean;
  gap: number;
  gapX: number;
  gapY: number;

  // Radius & borders in px
  borderRadius: number;
  borderWidth: number;
}

export interface Preset {
  id: string;
  name: string;
  description: string;
  tokens: DesignTokens;
}

export const DEFAULT_TOKENS: DesignTokens = {
  headingFontSize: 32,
  subheadingFontSize: 24,
  bodyFontSize: 16,
  buttonFontSize: 16,
  captionFontSize: 13,
  lineHeightRatio: 1.45,
  linkFontScales: true,

  paddingUniform: true,
  padding: 24,
  paddingX: 24,
  paddingY: 24,

  buttonPaddingY: 12,
  buttonPaddingX: 20,

  margin: 20,

  gapUniform: true,
  gap: 16,
  gapX: 16,
  gapY: 16,

  borderRadius: 16,
  borderWidth: 1,
};

export const PRESETS: Preset[] = [
  {
    id: "user-request",
    name: "User Spec (32px / 24px / 32px)",
    description: "32px font, 24px padding, 32px rounded border",
    tokens: {
      headingFontSize: 32,
      subheadingFontSize: 24,
      bodyFontSize: 32, // User explicitly noted font of 32px
      buttonFontSize: 32,
      captionFontSize: 20,
      lineHeightRatio: 1.4,
      linkFontScales: false,
      paddingUniform: true,
      padding: 24,
      paddingX: 24,
      paddingY: 24,
      buttonPaddingY: 24,
      buttonPaddingX: 28,
      margin: 24,
      gapUniform: true,
      gap: 24,
      gapX: 24,
      gapY: 24,
      borderRadius: 32,
      borderWidth: 1,
    },
  },
  {
    id: "standard-web",
    name: "Web / SaaS Baseline",
    description: "Standard web ratio (H1 32px, Sub 22px, Body 16px, Pad 16px, Rad 8px)",
    tokens: {
      headingFontSize: 32,
      subheadingFontSize: 22,
      bodyFontSize: 16,
      buttonFontSize: 15,
      captionFontSize: 12,
      lineHeightRatio: 1.5,
      linkFontScales: true,
      paddingUniform: true,
      padding: 20,
      paddingX: 20,
      paddingY: 20,
      buttonPaddingY: 10,
      buttonPaddingX: 18,
      margin: 16,
      gapUniform: true,
      gap: 16,
      gapX: 16,
      gapY: 16,
      borderRadius: 8,
      borderWidth: 1,
    },
  },
  {
    id: "figma-default",
    name: "Figma Artboard Standard",
    description: "Common desktop 1440px canvas scale (H1 40px, Sub 28px, Body 18px, Pad 24px, Rad 16px)",
    tokens: {
      headingFontSize: 40,
      subheadingFontSize: 28,
      bodyFontSize: 18,
      buttonFontSize: 18,
      captionFontSize: 14,
      lineHeightRatio: 1.45,
      linkFontScales: true,
      paddingUniform: true,
      padding: 24,
      paddingX: 24,
      paddingY: 24,
      buttonPaddingY: 14,
      buttonPaddingX: 24,
      margin: 20,
      gapUniform: true,
      gap: 20,
      gapX: 20,
      gapY: 20,
      borderRadius: 16,
      borderWidth: 1,
    },
  },
  {
    id: "dense-saas",
    name: "Compact / High-Density",
    description: "Data-dense dashboards (H1 24px, Sub 18px, Body 13px, Pad 12px, Rad 6px)",
    tokens: {
      headingFontSize: 24,
      subheadingFontSize: 18,
      bodyFontSize: 13,
      buttonFontSize: 13,
      captionFontSize: 11,
      lineHeightRatio: 1.35,
      linkFontScales: true,
      paddingUniform: false,
      padding: 12,
      paddingX: 14,
      paddingY: 10,
      buttonPaddingY: 8,
      buttonPaddingX: 12,
      margin: 12,
      gapUniform: true,
      gap: 10,
      gapX: 10,
      gapY: 10,
      borderRadius: 6,
      borderWidth: 1,
    },
  },
  {
    id: "modern-plump",
    name: "Modern Pill / Curved",
    description: "Generous rounded borders & airy whitespace (H1 36px, Pad 28px, Pill Rad 9999px)",
    tokens: {
      headingFontSize: 36,
      subheadingFontSize: 24,
      bodyFontSize: 18,
      buttonFontSize: 16,
      captionFontSize: 13,
      lineHeightRatio: 1.5,
      linkFontScales: true,
      paddingUniform: true,
      padding: 28,
      paddingX: 28,
      paddingY: 28,
      buttonPaddingY: 14,
      buttonPaddingX: 24,
      margin: 24,
      gapUniform: true,
      gap: 20,
      gapX: 20,
      gapY: 20,
      borderRadius: 9999,
      borderWidth: 1,
    },
  },
];
