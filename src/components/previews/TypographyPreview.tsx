"use client";

import React, { useState } from "react";
import { DesignTokens } from "../../types/design";

interface PreviewProps {
  tokens: DesignTokens;
  inspectMode: boolean;
  canvasTheme?: string;
}

export function TypographyPreview({ tokens, inspectMode, canvasTheme }: PreviewProps) {
  const padY = tokens.paddingUniform ? tokens.padding : tokens.paddingY;
  const padX = tokens.paddingUniform ? tokens.padding : tokens.paddingX;
  const gapY = tokens.gapUniform ? tokens.gap : tokens.gapY;

  const [h1Text, setH1Text] = useState("Visual Hierarchy at Real Scale");
  const [subText, setSubText] = useState("Compare design mockups against real browser rendering");
  const [bodyText, setBodyText] = useState("In Figma, 32px or 24px often looks balanced on high-res zoom. In code, it can dominate viewport space. Click any text to edit directly!");

  const isLight = canvasTheme === "figma-light" || canvasTheme === "pure-white";

  return (
    <div
      style={{
        paddingTop: `${padY}px`,
        paddingBottom: `${padY}px`,
        paddingLeft: `${padX}px`,
        paddingRight: `${padX}px`,
        borderRadius: `${tokens.borderRadius}px`,
        borderWidth: `${tokens.borderWidth}px`,
        rowGap: `${gapY}px`,
        margin: `${Math.round(tokens.margin * 0.5)}px`,
      }}
      className={`w-full max-w-lg flex flex-col shadow-2xl transition-all duration-150 ${
        isLight
          ? "bg-white border-slate-300 text-slate-800"
          : "bg-slate-950/90 border-slate-800 text-slate-100"
      } ${inspectMode ? "inspect-padding-pattern ring-1 ring-emerald-500/50" : ""}`}
    >
      {/* Heading 1 */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-mono text-indigo-400 font-semibold uppercase tracking-wider">
            Heading 1 ({tokens.headingFontSize}px)
          </span>
          <span className={`text-[10px] font-mono ${isLight ? "text-slate-500" : "text-slate-400"}`}>
            {(tokens.headingFontSize / 16).toFixed(2)}rem
          </span>
        </div>
        <h1
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => setH1Text(e.currentTarget.textContent || "")}
          style={{
            fontSize: `${tokens.headingFontSize}px`,
            lineHeight: `${tokens.lineHeightRatio}`,
          }}
          className={`font-extrabold tracking-tight outline-none cursor-text px-1 rounded hover:bg-indigo-500/10 ${
            isLight ? "text-slate-900" : "text-white"
          }`}
          title="Click to edit text"
        >
          {h1Text}
        </h1>
      </div>

      {/* Subheading */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-mono text-violet-400 font-semibold uppercase tracking-wider">
            Subheading ({tokens.subheadingFontSize}px)
          </span>
          <span className={`text-[10px] font-mono ${isLight ? "text-slate-500" : "text-slate-400"}`}>
            {(tokens.subheadingFontSize / 16).toFixed(2)}rem
          </span>
        </div>
        <h2
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => setSubText(e.currentTarget.textContent || "")}
          style={{
            fontSize: `${tokens.subheadingFontSize}px`,
            lineHeight: `${tokens.lineHeightRatio}`,
          }}
          className={`font-semibold outline-none cursor-text px-1 rounded hover:bg-violet-500/10 ${
            isLight ? "text-slate-800" : "text-slate-200"
          }`}
          title="Click to edit text"
        >
          {subText}
        </h2>
      </div>

      {/* Body Text */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-mono text-sky-400 font-semibold uppercase tracking-wider">
            Body Text ({tokens.bodyFontSize}px)
          </span>
          <span className={`text-[10px] font-mono ${isLight ? "text-slate-500" : "text-slate-400"}`}>
            {(tokens.bodyFontSize / 16).toFixed(2)}rem
          </span>
        </div>
        <p
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => setBodyText(e.currentTarget.textContent || "")}
          style={{
            fontSize: `${tokens.bodyFontSize}px`,
            lineHeight: `${tokens.lineHeightRatio}`,
          }}
          className={`font-normal outline-none cursor-text px-1 rounded hover:bg-sky-500/10 ${
            isLight ? "text-slate-600" : "text-slate-300"
          }`}
          title="Click to edit text"
        >
          {bodyText}
        </p>
      </div>

      {/* Caption / Metadata */}
      <div className="flex items-center justify-between border-t border-slate-800/80 pt-2 text-[10px] font-mono">
        <span className={isLight ? "text-slate-500" : "text-slate-400"}>
          Caption: {tokens.captionFontSize}px • Radius: {tokens.borderRadius}px • Pad: {padY}px/{padX}px
        </span>
        <span className="text-indigo-400 hover:underline cursor-pointer">
          Editable in preview
        </span>
      </div>
    </div>
  );
}
