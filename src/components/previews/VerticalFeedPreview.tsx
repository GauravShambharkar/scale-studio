"use client";

import React from "react";
import { DesignTokens } from "../../types/design";

interface PreviewProps {
  tokens: DesignTokens;
  inspectMode: boolean;
  canvasTheme?: string;
}

export function VerticalFeedPreview({ tokens, inspectMode, canvasTheme }: PreviewProps) {
  const padY = tokens.paddingUniform ? tokens.padding : tokens.paddingY;
  const padX = tokens.paddingUniform ? tokens.padding : tokens.paddingX;
  const gapY = tokens.gapUniform ? tokens.gap : tokens.gapY;
  const fontSize = tokens.bodyFontSize;

  const isLight = canvasTheme === "figma-light" || canvasTheme === "pure-white";

  const items = [
    {
      title: "Design scale synchronized with Figma",
      time: "2m ago",
      iconColor: "bg-indigo-500",
      desc: "Base font set to " + fontSize + "px with " + padY + "px vertical padding.",
    },
    {
      title: "Corner roundness updated to " + tokens.borderRadius + "px",
      time: "15m ago",
      iconColor: "bg-pink-500",
      desc: "Component borders smoothed to match vector curvature.",
    },
    {
      title: "Flex gap rhythm adjusted",
      time: "1h ago",
      iconColor: "bg-purple-500",
      desc: "Vertical spacing between items set to " + gapY + "px.",
    },
  ];

  return (
    <div
      style={{
        rowGap: `${gapY}px`,
        margin: `${Math.round(tokens.margin * 0.5)}px`,
      }}
      className={`w-full max-w-md flex flex-col ${
        inspectMode ? "inspect-gap-pattern p-2 rounded-xl" : ""
      }`}
    >
      <div className="flex items-center justify-between px-1">
        <span className="text-[10px] font-mono text-purple-400 font-semibold uppercase tracking-wider">
          Vertical Stack Flow (Vertical Gap: {gapY}px)
        </span>
        <span className={`text-[10px] font-mono ${isLight ? "text-slate-500" : "text-slate-400"}`}>
          {items.length} items stacked
        </span>
      </div>

      {items.map((item, idx) => (
        <div
          key={idx}
          style={{
            paddingTop: `${Math.max(8, padY)}px`,
            paddingBottom: `${Math.max(8, padY)}px`,
            paddingLeft: `${Math.max(12, padX)}px`,
            paddingRight: `${Math.max(12, padX)}px`,
            borderRadius: `${tokens.borderRadius}px`,
            borderWidth: `${tokens.borderWidth}px`,
          }}
          className={`flex items-start gap-3 border shadow-md transition-all ${
            isLight
              ? "bg-white border-slate-300 hover:border-slate-400"
              : "bg-slate-950 border-slate-800 hover:border-slate-700"
          } ${inspectMode ? "inspect-padding-pattern" : ""}`}
        >
          <div
            style={{
              width: `${Math.max(24, Math.round(fontSize * 1.5))}px`,
              height: `${Math.max(24, Math.round(fontSize * 1.5))}px`,
              borderRadius: `${tokens.borderRadius}px`,
            }}
            className={`${item.iconColor} shrink-0 mt-0.5 flex items-center justify-center text-white text-[10px] font-bold shadow`}
          >
            ✓
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h4
                style={{ fontSize: `${Math.max(12, Math.round(fontSize * 0.95))}px` }}
                className={`font-semibold truncate ${isLight ? "text-slate-900" : "text-slate-100"}`}
              >
                {item.title}
              </h4>
              <span
                style={{ fontSize: `${Math.max(9, Math.round(tokens.captionFontSize))}px` }}
                className="text-slate-400 font-mono shrink-0"
              >
                {item.time}
              </span>
            </div>
            <p
              style={{
                fontSize: `${Math.max(11, Math.round(fontSize * 0.82))}px`,
                lineHeight: tokens.lineHeightRatio,
              }}
              className={isLight ? "text-slate-600 mt-1" : "text-slate-400 mt-1"}
            >
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
