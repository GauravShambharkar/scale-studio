"use client";

import React, { useState } from "react";
import { DesignTokens } from "../../types/design";

interface PreviewProps {
  tokens: DesignTokens;
  inspectMode: boolean;
  canvasTheme?: string;
}

export function FormControlsPreview({ tokens, inspectMode, canvasTheme }: PreviewProps) {
  const padY = tokens.paddingUniform ? tokens.padding : tokens.paddingY;
  const padX = tokens.paddingUniform ? tokens.padding : tokens.paddingX;
  const gapY = tokens.gapUniform ? tokens.gap : tokens.gapY;
  const gapX = tokens.gapUniform ? tokens.gap : tokens.gapX;

  const [inputVal, setInputVal] = useState("gaurav@designstudio.dev");
  const [checked, setChecked] = useState(true);

  const isLight = canvasTheme === "figma-light" || canvasTheme === "pure-white";

  return (
    <div
      style={{
        rowGap: `${gapY}px`,
        margin: `${Math.round(tokens.margin * 0.5)}px`,
      }}
      className="w-full max-w-md flex flex-col"
    >
      {/* 1. Search Bar with Button integrated */}
      <div
        style={{
          borderRadius: `${tokens.borderRadius}px`,
          borderWidth: `${tokens.borderWidth}px`,
          padding: `${Math.max(4, Math.round(padY * 0.25))}px`,
          columnGap: `${Math.max(6, Math.round(gapX * 0.4))}px`,
        }}
        className={`flex items-center shadow-lg border ${
          isLight ? "bg-white border-slate-300" : "bg-slate-950 border-slate-700"
        }`}
      >
        <div className={`pl-3 ${isLight ? "text-slate-400" : "text-slate-500"}`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search components or tokens..."
          style={{
            fontSize: `${tokens.bodyFontSize}px`,
            paddingTop: `${Math.max(4, Math.round(padY * 0.3))}px`,
            paddingBottom: `${Math.max(4, Math.round(padY * 0.3))}px`,
          }}
          className={`w-full bg-transparent placeholder-slate-400 focus:outline-none ${
            isLight ? "text-slate-900" : "text-slate-100"
          }`}
        />
        <button
          style={{
            borderRadius: `${Math.max(2, tokens.borderRadius - 4)}px`,
            paddingLeft: `${tokens.buttonPaddingX}px`,
            paddingRight: `${tokens.buttonPaddingX}px`,
            paddingTop: `${Math.max(6, Math.round(tokens.buttonPaddingY * 0.7))}px`,
            paddingBottom: `${Math.max(6, Math.round(tokens.buttonPaddingY * 0.7))}px`,
            fontSize: `${Math.max(12, Math.round(tokens.buttonFontSize * 0.85))}px`,
          }}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium whitespace-nowrap cursor-pointer transition-colors"
        >
          Search
        </button>
      </div>

      {/* 2. Text Input Field with Label & Helper */}
      <div className="flex flex-col gap-1.5">
        <label
          style={{ fontSize: `${Math.max(11, Math.round(tokens.bodyFontSize * 0.85))}px` }}
          className={`font-medium flex items-center justify-between ${
            isLight ? "text-slate-700" : "text-slate-300"
          }`}
        >
          <span>Email Address</span>
          <span className="text-[10px] text-slate-400 font-mono">Required</span>
        </label>
        <div className="relative">
          <input
            type="email"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            style={{
              paddingTop: `${padY}px`,
              paddingBottom: `${padY}px`,
              paddingLeft: `${padX}px`,
              paddingRight: `${padX}px`,
              borderRadius: `${tokens.borderRadius}px`,
              borderWidth: `${tokens.borderWidth}px`,
              fontSize: `${tokens.bodyFontSize}px`,
            }}
            className={`w-full focus:border-indigo-500 focus:outline-none shadow-sm transition-all border ${
              isLight ? "bg-white border-slate-300 text-slate-900" : "bg-slate-900 border-slate-700 text-slate-100"
            }`}
          />
        </div>
        <p
          style={{ fontSize: `${Math.max(10, Math.round(tokens.captionFontSize))}px` }}
          className={isLight ? "text-slate-500" : "text-slate-400"}
        >
          Input padding is set to {padY}px (Y) × {padX}px (X) with {tokens.borderRadius}px corner radius.
        </p>
      </div>

      {/* 3. Checkbox & Radio flex row */}
      <div
        style={{
          columnGap: `${gapX}px`,
        }}
        className="flex items-center pt-1"
      >
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            style={{
              borderRadius: `${Math.max(2, Math.min(8, Math.round(tokens.borderRadius * 0.25)))}px`,
              width: `${Math.max(16, Math.round(tokens.bodyFontSize * 1.1))}px`,
              height: `${Math.max(16, Math.round(tokens.bodyFontSize * 1.1))}px`,
            }}
            className="accent-indigo-600 cursor-pointer"
          />
          <span
            style={{ fontSize: `${Math.max(12, Math.round(tokens.bodyFontSize * 0.875))}px` }}
            className={isLight ? "text-slate-700" : "text-slate-300"}
          >
            Remember my Figma scale preferences
          </span>
        </label>
      </div>
    </div>
  );
}
