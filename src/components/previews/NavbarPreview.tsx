"use client";

import React, { useState } from "react";
import { DesignTokens } from "../../types/design";

interface PreviewProps {
  tokens: DesignTokens;
  inspectMode: boolean;
  canvasTheme?: string;
}

export function NavbarPreview({ tokens, inspectMode, canvasTheme }: PreviewProps) {
  const padY = tokens.paddingUniform ? tokens.padding : tokens.paddingY;
  const padX = tokens.paddingUniform ? tokens.padding : tokens.paddingX;
  const gapX = tokens.gapUniform ? tokens.gap : tokens.gapX;
  const fontSize = tokens.bodyFontSize;

  const [activeTab, setActiveTab] = useState("Explore");
  const tabs = ["Overview", "Explore", "Components", "Tokens"];
  const isLight = canvasTheme === "figma-light" || canvasTheme === "pure-white";

  return (
    <div
      style={{
        borderRadius: `${tokens.borderRadius}px`,
        borderWidth: `${tokens.borderWidth}px`,
        paddingTop: `${Math.max(6, Math.round(padY * 0.5))}px`,
        paddingBottom: `${Math.max(6, Math.round(padY * 0.5))}px`,
        paddingLeft: `${Math.max(12, padX)}px`,
        paddingRight: `${Math.max(12, padX)}px`,
        margin: `${Math.round(tokens.margin * 0.5)}px`,
      }}
      className={`w-full max-w-lg shadow-2xl flex items-center justify-between border ${
        isLight ? "bg-white border-slate-300" : "bg-slate-950 border-slate-800"
      } ${inspectMode ? "inspect-padding-pattern" : ""}`}
    >
      {/* Brand logo */}
      <div className="flex items-center gap-2">
        <div
          style={{
            borderRadius: `${tokens.borderRadius}px`,
            width: `${Math.max(24, Math.round(fontSize * 1.5))}px`,
            height: `${Math.max(24, Math.round(fontSize * 1.5))}px`,
          }}
          className="bg-indigo-600 flex items-center justify-center font-bold text-white text-xs shadow"
        >
          ✦
        </div>
        <span
          style={{ fontSize: `${Math.max(12, Math.round(fontSize * 0.95))}px` }}
          className={`font-bold tracking-tight hidden sm:inline ${isLight ? "text-slate-900" : "text-white"}`}
        >
          Studio
        </span>
      </div>

      {/* Nav Tabs with Gap */}
      <div
        style={{
          columnGap: `${Math.max(4, Math.round(gapX * 0.5))}px`,
        }}
        className="flex items-center"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                borderRadius: `${tokens.borderRadius}px`,
                paddingTop: `${Math.max(4, Math.round(tokens.buttonPaddingY * 0.4))}px`,
                paddingBottom: `${Math.max(4, Math.round(tokens.buttonPaddingY * 0.4))}px`,
                paddingLeft: `${Math.max(8, Math.round(tokens.buttonPaddingX * 0.5))}px`,
                paddingRight: `${Math.max(8, Math.round(tokens.buttonPaddingX * 0.5))}px`,
                fontSize: `${Math.max(11, Math.round(tokens.buttonFontSize * 0.8))}px`,
              }}
              className={`font-medium transition-all cursor-pointer ${
                isActive
                  ? isLight
                    ? "bg-slate-200 text-slate-900 shadow-sm"
                    : "bg-slate-800 text-white shadow-sm"
                  : isLight
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Right action button */}
      <button
        style={{
          borderRadius: `${tokens.borderRadius}px`,
          paddingTop: `${Math.max(4, Math.round(tokens.buttonPaddingY * 0.45))}px`,
          paddingBottom: `${Math.max(4, Math.round(tokens.buttonPaddingY * 0.45))}px`,
          paddingLeft: `${Math.max(10, Math.round(tokens.buttonPaddingX * 0.6))}px`,
          paddingRight: `${Math.max(10, Math.round(tokens.buttonPaddingX * 0.6))}px`,
          fontSize: `${Math.max(11, Math.round(tokens.buttonFontSize * 0.8))}px`,
        }}
        className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all cursor-pointer whitespace-nowrap shadow-sm"
      >
        Sign In
      </button>
    </div>
  );
}
