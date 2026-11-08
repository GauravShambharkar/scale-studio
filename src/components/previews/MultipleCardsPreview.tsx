"use client";

import React from "react";
import { DesignTokens } from "../../types/design";

interface PreviewProps {
  tokens: DesignTokens;
  inspectMode: boolean;
  canvasTheme?: string;
}

export function MultipleCardsPreview({ tokens, inspectMode, canvasTheme }: PreviewProps) {
  const padY = tokens.paddingUniform ? tokens.padding : tokens.paddingY;
  const padX = tokens.paddingUniform ? tokens.padding : tokens.paddingX;
  const gapX = tokens.gapUniform ? tokens.gap : tokens.gapX;
  const gapY = tokens.gapUniform ? tokens.gap : tokens.gapY;

  const titleFont = Math.max(14, Math.round(tokens.headingFontSize * 0.65));
  const bodyFont = tokens.bodyFontSize;
  const btnFont = tokens.buttonFontSize;

  const cards = [
    {
      badge: "Starter",
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
      price: "$29",
      period: "/month",
      desc: "Perfect for testing individual Figma layouts in real code.",
      features: ["Up to 10 Figma frames", "Live code scale inspector", "CSS Tokens Export"],
      btnText: "Choose Starter",
      highlight: false,
    },
    {
      badge: "Pro Scale",
      badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/30",
      price: "$79",
      period: "/month",
      desc: "Full design-system scale alignment across desktop and mobile.",
      features: ["Unlimited frames", "X-Ray DevTools overlays", "Tailwind & Figma sync", "Priority support"],
      btnText: "Choose Pro",
      highlight: true,
    },
  ];

  const isLight = canvasTheme === "figma-light" || canvasTheme === "pure-white";

  return (
    <div
      style={{
        columnGap: `${gapX}px`,
        rowGap: `${gapY}px`,
        margin: `${Math.round(tokens.margin * 0.5)}px`,
      }}
      className={`w-full max-w-xl flex flex-col sm:flex-row items-stretch justify-center ${
        inspectMode ? "inspect-gap-pattern p-2 rounded-xl" : ""
      }`}
    >
      {cards.map((c, i) => (
        <div
          key={i}
          style={{
            paddingTop: `${padY}px`,
            paddingBottom: `${padY}px`,
            paddingLeft: `${padX}px`,
            paddingRight: `${padX}px`,
            borderRadius: `${tokens.borderRadius}px`,
            borderWidth: `${tokens.borderWidth}px`,
            rowGap: `${gapY}px`,
          }}
          className={`flex-1 flex flex-col justify-between transition-all ${
            isLight
              ? c.highlight
                ? "bg-white border-indigo-500 shadow-xl ring-2 ring-indigo-500/30"
                : "bg-slate-50 border-slate-300 shadow-md"
              : c.highlight
                ? "bg-gradient-to-b from-indigo-950/70 to-slate-950 border-indigo-500/60 shadow-2xl ring-1 ring-indigo-500/40"
                : "bg-slate-950 border-slate-800 shadow-xl"
          } ${inspectMode ? "inspect-padding-pattern" : ""}`}
        >
          {/* Card Top Header */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span
                style={{
                  borderRadius: `${tokens.borderRadius}px`,
                  fontSize: `${Math.max(10, Math.round(bodyFont * 0.7))}px`,
                }}
                className={`font-mono font-semibold px-2 py-0.5 border ${c.badgeColor}`}
              >
                {c.badge}
              </span>
              <span className={`text-[10px] font-mono ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                Card #{i + 1}
              </span>
            </div>

            <div className="flex items-baseline gap-1 mt-1">
              <span
                style={{ fontSize: `${Math.max(20, Math.round(tokens.headingFontSize * 0.9))}px` }}
                className={`font-extrabold tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}
              >
                {c.price}
              </span>
              <span className={`text-xs ${isLight ? "text-slate-600" : "text-slate-400"}`}>{c.period}</span>
            </div>

            <p
              style={{ fontSize: `${Math.max(11, Math.round(bodyFont * 0.85))}px`, lineHeight: tokens.lineHeightRatio }}
              className={`${isLight ? "text-slate-600" : "text-slate-300"} mt-0.5`}
            >
              {c.desc}
            </p>
          </div>

          {/* Features bullet list */}
          <ul
            style={{
              rowGap: `${Math.max(4, Math.round(gapY * 0.5))}px`,
              fontSize: `${Math.max(11, Math.round(bodyFont * 0.82))}px`,
              marginTop: "8px",
              marginBottom: "8px",
            }}
            className="flex flex-col"
          >
            {c.features.map((f, fi) => (
              <li key={fi} className={`flex items-center gap-1.5 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                <span className="text-emerald-400 font-bold text-xs">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {/* Card Action Button */}
          <button
            style={{
              borderRadius: `${tokens.borderRadius}px`,
              borderWidth: `${tokens.borderWidth}px`,
              paddingTop: `${tokens.buttonPaddingY}px`,
              paddingBottom: `${tokens.buttonPaddingY}px`,
              paddingLeft: `${tokens.buttonPaddingX}px`,
              paddingRight: `${tokens.buttonPaddingX}px`,
              fontSize: `${btnFont}px`,
            }}
            className={`w-full font-bold transition-all cursor-pointer shadow-md text-center ${
              c.highlight
                ? "bg-indigo-600 hover:bg-indigo-500 text-white border-transparent"
                : isLight
                  ? "bg-slate-200 hover:bg-slate-300 text-slate-800 border-slate-300"
                  : "bg-slate-800 hover:bg-slate-700 text-slate-100 border-slate-700"
            }`}
          >
            {c.btnText}
          </button>
        </div>
      ))}
    </div>
  );
}

