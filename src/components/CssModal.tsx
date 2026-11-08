"use client";

import React, { useState } from "react";
import { DesignTokens } from "../types/design";
import { CloseIcon, CopyIcon, CheckIcon } from "./Icons";

interface CssModalProps {
  tokens: DesignTokens;
  isOpen: boolean;
  onClose: () => void;
}

export function CssModal({ tokens, isOpen, onClose }: CssModalProps) {
  const [activeFormat, setActiveFormat] = useState<"css" | "tailwind" | "figma">("css");
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const padY = tokens.paddingUniform ? tokens.padding : tokens.paddingY;
  const padX = tokens.paddingUniform ? tokens.padding : tokens.paddingX;
  const gapY = tokens.gapUniform ? tokens.gap : tokens.gapY;
  const gapX = tokens.gapUniform ? tokens.gap : tokens.gapX;

  const cssVariablesSnippet = `:root {
  /* Typography Scale */
  --font-size-h1: ${tokens.headingFontSize}px;
  --font-size-h2: ${tokens.subheadingFontSize}px;
  --font-size-base: ${tokens.bodyFontSize}px;
  --font-size-btn: ${tokens.buttonFontSize}px;
  --font-size-sm: ${tokens.captionFontSize}px;
  --line-height-base: ${tokens.lineHeightRatio};

  /* Spacing & Layout */
  --padding-y: ${padY}px;
  --padding-x: ${padX}px;
  --btn-padding-y: ${tokens.buttonPaddingY}px;
  --btn-padding-x: ${tokens.buttonPaddingX}px;
  --margin-base: ${tokens.margin}px;
  --gap-x: ${gapX}px;
  --gap-y: ${gapY}px;

  /* Shape & Borders */
  --border-radius: ${tokens.borderRadius === 9999 ? "9999px" : `${tokens.borderRadius}px`};
  --border-width: ${tokens.borderWidth}px;
}

/* Sample Container Usage */
.card-container {
  font-size: var(--font-size-base);
  padding: var(--padding-y) var(--padding-x);
  border-radius: var(--border-radius);
  border: var(--border-width) solid #334155;
  display: flex;
  flex-direction: column;
  gap: var(--gap-y);
}

.button-action {
  font-size: var(--font-size-btn);
  padding: var(--btn-padding-y) var(--btn-padding-x);
  border-radius: var(--border-radius);
}`;

  const tailwindSnippet = `// tailwind.config.js / @theme definition
export default {
  theme: {
    extend: {
      fontSize: {
        'h1': ['${tokens.headingFontSize}px', { lineHeight: '${tokens.lineHeightRatio}' }],
        'h2': ['${tokens.subheadingFontSize}px', { lineHeight: '${tokens.lineHeightRatio}' }],
        'base': ['${tokens.bodyFontSize}px', { lineHeight: '${tokens.lineHeightRatio}' }],
        'btn': ['${tokens.buttonFontSize}px', { lineHeight: '1.25' }],
        'sm': ['${tokens.captionFontSize}px', { lineHeight: '1.4' }],
      },
      spacing: {
        'pad-y': '${padY}px',
        'pad-x': '${padX}px',
        'btn-y': '${tokens.buttonPaddingY}px',
        'btn-x': '${tokens.buttonPaddingX}px',
        'gap-x': '${gapX}px',
        'gap-y': '${gapY}px',
      },
      borderRadius: {
        'custom': '${tokens.borderRadius === 9999 ? "9999px" : `${tokens.borderRadius}px`}',
      },
    },
  },
};`;

  const figmaJsonSnippet = JSON.stringify(
    {
      name: "Figma Tokens Sync",
      values: {
        "font-size-heading": `${tokens.headingFontSize}px`,
        "font-size-subheading": `${tokens.subheadingFontSize}px`,
        "font-size-base": `${tokens.bodyFontSize}px`,
        "font-size-button": `${tokens.buttonFontSize}px`,
        "padding-y": `${padY}px`,
        "padding-x": `${padX}px`,
        "button-padding-y": `${tokens.buttonPaddingY}px`,
        "button-padding-x": `${tokens.buttonPaddingX}px`,
        "margin": `${tokens.margin}px`,
        "gap-horizontal": `${gapX}px`,
        "gap-vertical": `${gapY}px`,
        "border-radius": `${tokens.borderRadius}px`,
      },
    },
    null,
    2
  );

  const getActiveCode = () => {
    switch (activeFormat) {
      case "css":
        return cssVariablesSnippet;
      case "tailwind":
        return tailwindSnippet;
      case "figma":
        return figmaJsonSnippet;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getActiveCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>Export Design Tokens & CSS</span>
            </h3>
            <p className="text-xs text-slate-400">
              Paste these tokens directly into your CSS or Tailwind setup to match this exact scale
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 cursor-pointer transition-colors"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Format Selector */}
        <div className="flex items-center justify-between px-6 py-3 bg-slate-900/90 border-b border-slate-800">
          <div className="flex items-center gap-2">
            {[
              { id: "css", label: "CSS Variables" },
              { id: "tailwind", label: "Tailwind Config" },
              { id: "figma", label: "Figma JSON Tokens" },
            ].map((fmt) => (
              <button
                key={fmt.id}
                onClick={() => setActiveFormat(fmt.id as any)}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeFormat === fmt.id
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-slate-800 text-slate-300 hover:text-white"
                }`}
              >
                {fmt.label}
              </button>
            ))}
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-semibold bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer shadow-md transition-all active:scale-95"
          >
            {copied ? (
              <>
                <CheckIcon className="w-4 h-4 text-white" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <CopyIcon className="w-4 h-4 text-white" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>

        {/* Code Block */}
        <div className="p-6 bg-slate-950 overflow-auto font-mono text-xs text-emerald-300 select-all leading-relaxed max-h-[500px]">
          <pre>{getActiveCode()}</pre>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/80 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Active: H1 {tokens.headingFontSize}px • Body {tokens.bodyFontSize}px • Pad {padY}px • Rad {tokens.borderRadius}px</span>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white font-medium cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
