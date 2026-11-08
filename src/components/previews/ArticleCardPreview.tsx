"use client";

import React, { useState } from "react";
import { DesignTokens } from "../../types/design";

interface PreviewProps {
  tokens: DesignTokens;
  inspectMode: boolean;
  canvasTheme?: string;
}

export function ArticleCardPreview({ tokens, inspectMode, canvasTheme }: PreviewProps) {
  const padY = tokens.paddingUniform ? tokens.padding : tokens.paddingY;
  const padX = tokens.paddingUniform ? tokens.padding : tokens.paddingX;
  const gapY = tokens.gapUniform ? tokens.gap : tokens.gapY;
  const gapX = tokens.gapUniform ? tokens.gap : tokens.gapX;

  const isLight = canvasTheme === "figma-light" || canvasTheme === "pure-white";

  const [title, setTitle] = useState("Design System Token Verification");
  const [desc, setDesc] = useState("Notice how card padding (" + padY + "px/" + padX + "px) and border radius (" + tokens.borderRadius + "px) affect readable whitespace on desktop and mobile.");

  return (
    <div
      style={{
        margin: `${Math.round(tokens.margin * 0.5)}px`,
        borderRadius: `${tokens.borderRadius}px`,
        borderWidth: `${tokens.borderWidth}px`,
      }}
      className={`w-full max-w-sm shadow-2xl overflow-hidden transition-all duration-150 border ${
        isLight ? "bg-white border-slate-300" : "bg-slate-950 border-slate-800"
      } ${inspectMode ? "ring-2 ring-amber-500/50" : ""}`}
    >
      {/* Media Header / Image simulation */}
      <div className="relative h-36 bg-gradient-to-br from-indigo-900/60 via-purple-900/40 to-slate-900 flex items-center justify-center p-4 border-b border-slate-800/80">
        <div className="text-center">
          <span className="text-xs font-mono text-indigo-300 font-semibold uppercase tracking-wider block mb-1">
            Component Showcase
          </span>
          <span className="text-sm font-bold text-white">Responsive Card Media</span>
        </div>
        <span
          style={{
            borderRadius: `${tokens.borderRadius}px`,
            fontSize: `${Math.max(10, Math.round(tokens.bodyFontSize * 0.65))}px`,
            top: `${Math.max(8, padY * 0.4)}px`,
            right: `${Math.max(8, padX * 0.4)}px`,
          }}
          className="absolute bg-indigo-600/90 text-white font-semibold px-2 py-0.5 backdrop-blur-md shadow-md"
        >
          Figma 1:1
        </span>
      </div>

      {/* Card Body with Padding */}
      <div
        style={{
          paddingTop: `${padY}px`,
          paddingBottom: `${padY}px`,
          paddingLeft: `${padX}px`,
          paddingRight: `${padX}px`,
          rowGap: `${gapY}px`,
        }}
        className={`flex flex-col ${inspectMode ? "inspect-padding-pattern" : ""}`}
      >
        {/* Title */}
        <h3
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => setTitle(e.currentTarget.textContent || "")}
          style={{
            fontSize: `${tokens.subheadingFontSize}px`,
            lineHeight: `${tokens.lineHeightRatio}`,
          }}
          className={`font-bold tracking-tight outline-none cursor-text px-1 rounded hover:bg-indigo-500/10 ${
            isLight ? "text-slate-900" : "text-white"
          }`}
          title="Click to edit text"
        >
          {title}
        </h3>

        {/* Excerpt */}
        <p
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => setDesc(e.currentTarget.textContent || "")}
          style={{
            fontSize: `${tokens.bodyFontSize}px`,
            lineHeight: `${tokens.lineHeightRatio}`,
          }}
          className={`outline-none cursor-text px-1 rounded hover:bg-indigo-500/10 ${
            isLight ? "text-slate-600" : "text-slate-300"
          }`}
          title="Click to edit text"
        >
          {desc}
        </p>

        {/* Author / Meta Row with Flex Gap */}
        <div
          style={{
            columnGap: `${gapX}px`,
            marginTop: "4px",
          }}
          className="flex items-center pt-2 border-t border-slate-800/80"
        >
          <div
            style={{
              width: `${Math.max(28, Math.round(tokens.bodyFontSize * 1.8))}px`,
              height: `${Math.max(28, Math.round(tokens.bodyFontSize * 1.8))}px`,
              borderRadius: `${tokens.borderRadius}px`,
            }}
            className="bg-gradient-to-tr from-pink-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xs shrink-0"
          >
            UI
          </div>
          <div className="flex flex-col min-w-0">
            <span
              style={{ fontSize: `${Math.max(11, Math.round(tokens.bodyFontSize * 0.85))}px` }}
              className={`font-semibold truncate ${isLight ? "text-slate-800" : "text-slate-100"}`}
            >
              Figma Lead Designer
            </span>
            <span
              style={{ fontSize: `${Math.max(10, Math.round(tokens.captionFontSize))}px` }}
              className="text-slate-400 font-mono"
            >
              Oct 24 • 4 min read
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
