"use client";

import React, { useState } from "react";
import { DesignTokens } from "../../types/design";

interface PreviewProps {
  tokens: DesignTokens;
  inspectMode: boolean;
  canvasTheme?: string;
}

export function TextsAtFlexPreview({ tokens, inspectMode, canvasTheme }: PreviewProps) {
  const padY = tokens.paddingUniform ? tokens.padding : tokens.paddingY;
  const padX = tokens.paddingUniform ? tokens.padding : tokens.paddingX;
  const gapX = tokens.gapUniform ? tokens.gap : tokens.gapX;
  const gapY = tokens.gapUniform ? tokens.gap : tokens.gapY;

  const isLight = canvasTheme === "figma-light" || canvasTheme === "pure-white";

  const [headingText, setHeadingText] = useState("Responsive Layout Engine");
  const [subheadingText, setSubheadingText] = useState("Flex Row & Column Text Scaling");
  const [bodyText, setBodyText] = useState("Notice how horizontal flex gap (gapX) and vertical stack gap (gapY) affect text breathing room. Click any text to edit live!");

  return (
    <div
      style={{
        rowGap: `${gapY}px`,
        margin: `${Math.round(tokens.margin * 0.5)}px`,
      }}
      className={`w-full max-w-xl flex flex-col ${
        inspectMode ? "inspect-gap-pattern p-3 rounded-xl" : ""
      }`}
    >
      {/* 1. Horizontal Flex Text Row */}
      <div
        style={{
          paddingTop: `${padY}px`,
          paddingBottom: `${padY}px`,
          paddingLeft: `${padX}px`,
          paddingRight: `${padX}px`,
          borderRadius: `${tokens.borderRadius}px`,
          borderWidth: `${tokens.borderWidth}px`,
        }}
        className={`${
          isLight ? "bg-white border-slate-300 shadow-md" : "bg-slate-950 border-slate-800 shadow-xl"
        } flex flex-col gap-2 ${inspectMode ? "inspect-padding-pattern" : ""}`}
      >
        <div className="flex items-center justify-between border-b border-slate-800/60 pb-1.5">
          <span className="text-[10px] font-mono text-indigo-400 font-semibold uppercase tracking-wider">
            Feature 1: Horizontal Flex Text Row (Gap X: {gapX}px)
          </span>
          <span className={`text-[10px] font-mono ${isLight ? "text-slate-500" : "text-slate-400"}`}>
            flex-row items-center
          </span>
        </div>

        {/* Live Flex Row */}
        <div
          style={{
            columnGap: `${gapX}px`,
            rowGap: `${gapY}px`,
          }}
          className="flex flex-wrap items-center pt-1"
        >
          <span
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setHeadingText(e.currentTarget.textContent || "")}
            style={{
              fontSize: `${Math.max(16, Math.round(tokens.headingFontSize * 0.8))}px`,
              lineHeight: tokens.lineHeightRatio,
            }}
            className={`font-bold tracking-tight outline-none cursor-text px-1 rounded hover:bg-indigo-500/10 ${
              isLight ? "text-slate-900" : "text-white"
            }`}
            title="Click to edit text"
          >
            {headingText}
          </span>

          <span
            style={{
              borderRadius: `${tokens.borderRadius}px`,
              paddingTop: `${Math.max(2, Math.round(padY * 0.25))}px`,
              paddingBottom: `${Math.max(2, Math.round(padY * 0.25))}px`,
              paddingLeft: `${Math.max(8, Math.round(padX * 0.4))}px`,
              paddingRight: `${Math.max(8, Math.round(padX * 0.4))}px`,
              fontSize: `${Math.max(10, Math.round(tokens.bodyFontSize * 0.7))}px`,
            }}
            className="bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 font-mono font-semibold whitespace-nowrap"
          >
            LIVE SYNC
          </span>

          <span
            style={{
              fontSize: `${Math.max(12, Math.round(tokens.bodyFontSize * 0.9))}px`,
            }}
            className={`font-mono font-semibold ${isLight ? "text-slate-600" : "text-slate-400"}`}
          >
            Gap: {gapX}px
          </span>

          <a
            href="#details"
            onClick={(e) => e.preventDefault()}
            style={{
              fontSize: `${Math.max(12, Math.round(tokens.bodyFontSize * 0.85))}px`,
            }}
            className="text-pink-400 hover:text-pink-300 underline font-medium whitespace-nowrap ml-auto"
          >
            Inspect Flex Specs →
          </a>
        </div>
      </div>

      {/* 2. Vertical Flex Text Column */}
      <div
        style={{
          paddingTop: `${padY}px`,
          paddingBottom: `${padY}px`,
          paddingLeft: `${padX}px`,
          paddingRight: `${padX}px`,
          borderRadius: `${tokens.borderRadius}px`,
          borderWidth: `${tokens.borderWidth}px`,
          rowGap: `${gapY}px`,
        }}
        className={`${
          isLight ? "bg-white border-slate-300 shadow-md" : "bg-slate-950 border-slate-800 shadow-xl"
        } flex flex-col ${inspectMode ? "inspect-padding-pattern" : ""}`}
      >
        <div className="flex items-center justify-between border-b border-slate-800/60 pb-1.5">
          <span className="text-[10px] font-mono text-purple-400 font-semibold uppercase tracking-wider">
            Feature 2: Vertical Flex Text Stack (Gap Y: {gapY}px)
          </span>
          <span className={`text-[10px] font-mono ${isLight ? "text-slate-500" : "text-slate-400"}`}>
            flex-col
          </span>
        </div>

        {/* Heading */}
        <h3
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => setSubheadingText(e.currentTarget.textContent || "")}
          style={{
            fontSize: `${tokens.subheadingFontSize}px`,
            lineHeight: tokens.lineHeightRatio,
          }}
          className={`font-extrabold tracking-tight outline-none cursor-text px-1 rounded hover:bg-purple-500/10 ${
            isLight ? "text-slate-900" : "text-slate-100"
          }`}
          title="Click to edit text"
        >
          {subheadingText}
        </h3>

        {/* Body Paragraph */}
        <p
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => setBodyText(e.currentTarget.textContent || "")}
          style={{
            fontSize: `${tokens.bodyFontSize}px`,
            lineHeight: tokens.lineHeightRatio,
          }}
          className={`outline-none cursor-text px-1 rounded hover:bg-purple-500/10 ${
            isLight ? "text-slate-600" : "text-slate-300"
          }`}
          title="Click to edit text"
        >
          {bodyText}
        </p>

        {/* Flex wrap metadata row */}
        <div
          style={{
            columnGap: `${gapX}px`,
            rowGap: `${Math.max(4, Math.round(gapY * 0.4))}px`,
          }}
          className="flex flex-wrap items-center pt-2 border-t border-slate-800/60"
        >
          {["Heading: " + tokens.headingFontSize + "px", "Sub: " + tokens.subheadingFontSize + "px", "Body: " + tokens.bodyFontSize + "px", "Pad: " + padY + "px", "Radius: " + tokens.borderRadius + "px"].map((pill, idx) => (
            <span
              key={idx}
              style={{
                borderRadius: `${tokens.borderRadius}px`,
                fontSize: `${Math.max(10, Math.round(tokens.captionFontSize))}px`,
                paddingTop: `${Math.max(2, Math.round(padY * 0.2))}px`,
                paddingBottom: `${Math.max(2, Math.round(padY * 0.2))}px`,
                paddingLeft: `${Math.max(6, Math.round(padX * 0.35))}px`,
                paddingRight: `${Math.max(6, Math.round(padX * 0.35))}px`,
              }}
              className="bg-slate-900 text-slate-300 border border-slate-700/80 font-mono"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

