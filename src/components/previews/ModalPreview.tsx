"use client";

import React from "react";
import { DesignTokens } from "../../types/design";

interface PreviewProps {
  tokens: DesignTokens;
  inspectMode: boolean;
  canvasTheme?: string;
}

export function ModalPreview({ tokens, inspectMode, canvasTheme }: PreviewProps) {
  const padY = tokens.paddingUniform ? tokens.padding : tokens.paddingY;
  const padX = tokens.paddingUniform ? tokens.padding : tokens.paddingX;
  const gapX = tokens.gapUniform ? tokens.gap : tokens.gapX;
  const gapY = tokens.gapUniform ? tokens.gap : tokens.gapY;

  const isLight = canvasTheme === "figma-light" || canvasTheme === "pure-white";

  return (
    <div
      style={{
        borderRadius: `${tokens.borderRadius}px`,
        borderWidth: `${tokens.borderWidth}px`,
        margin: `${Math.round(tokens.margin * 0.5)}px`,
      }}
      className={`w-full max-w-md shadow-2xl overflow-hidden border ${
        isLight ? "bg-white border-slate-300" : "bg-slate-950 border-slate-700/80"
      } ${inspectMode ? "ring-2 ring-emerald-500/50" : ""}`}
    >
      {/* Modal Header */}
      <div
        style={{
          paddingTop: `${Math.max(10, Math.round(padY * 0.75))}px`,
          paddingBottom: `${Math.max(10, Math.round(padY * 0.75))}px`,
          paddingLeft: `${padX}px`,
          paddingRight: `${padX}px`,
        }}
        className={`flex items-center justify-between border-b ${
          isLight ? "bg-slate-50 border-slate-200" : "bg-slate-900/60 border-slate-800"
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
          <h4
            style={{ fontSize: `${tokens.subheadingFontSize}px` }}
            className={`font-bold tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}
          >
            Export Figma Tokens
          </h4>
        </div>
        <button className={`p-1 rounded transition-colors cursor-pointer ${isLight ? "text-slate-500 hover:text-black" : "text-slate-400 hover:text-white"}`}>
          ✕
        </button>
      </div>

      {/* Modal Body */}
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
        <p
          style={{
            fontSize: `${tokens.bodyFontSize}px`,
            lineHeight: tokens.lineHeightRatio,
          }}
          className={isLight ? "text-slate-600" : "text-slate-300"}
        >
          Check if this dialog proportions feel right. When padding is set to {padY}px and roundness to {tokens.borderRadius}px, modal corners and padding must maintain proper breathing room.
        </p>

        {/* Token summary pill box */}
        <div
          style={{
            padding: `${Math.max(8, Math.round(padY * 0.5))}px`,
            borderRadius: `${Math.max(4, tokens.borderRadius - 4)}px`,
            columnGap: `${Math.max(6, Math.round(gapX * 0.5))}px`,
          }}
          className={`flex items-center border text-xs font-mono ${
            isLight ? "bg-slate-100 border-slate-200 text-slate-700" : "bg-slate-900 border-slate-800 text-slate-300"
          }`}
        >
          <span className="text-indigo-400 font-bold">Preview:</span>
          <span>pad: {padY}px</span>
          <span>•</span>
          <span>rad: {tokens.borderRadius}px</span>
          <span>•</span>
          <span>gap: {gapX}px</span>
        </div>
      </div>

      {/* Modal Footer with Action Buttons */}
      <div
        style={{
          paddingTop: `${Math.max(10, Math.round(padY * 0.65))}px`,
          paddingBottom: `${Math.max(10, Math.round(padY * 0.65))}px`,
          paddingLeft: `${padX}px`,
          paddingRight: `${padX}px`,
          columnGap: `${gapX}px`,
        }}
        className={`flex items-center justify-end border-t ${
          isLight ? "bg-slate-50 border-slate-200" : "bg-slate-900/40 border-slate-800"
        }`}
      >
        <button
          style={{
            paddingTop: `${tokens.buttonPaddingY}px`,
            paddingBottom: `${tokens.buttonPaddingY}px`,
            paddingLeft: `${tokens.buttonPaddingX}px`,
            paddingRight: `${tokens.buttonPaddingX}px`,
            borderRadius: `${tokens.borderRadius}px`,
            fontSize: `${tokens.buttonFontSize}px`,
          }}
          className={`bg-transparent font-medium transition-colors cursor-pointer ${
            isLight ? "hover:bg-slate-200 text-slate-600" : "hover:bg-slate-800 text-slate-400 hover:text-white"
          }`}
        >
          Dismiss
        </button>
        <button
          style={{
            paddingTop: `${tokens.buttonPaddingY}px`,
            paddingBottom: `${tokens.buttonPaddingY}px`,
            paddingLeft: `${tokens.buttonPaddingX}px`,
            paddingRight: `${tokens.buttonPaddingX}px`,
            borderRadius: `${tokens.borderRadius}px`,
            fontSize: `${tokens.buttonFontSize}px`,
          }}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors cursor-pointer shadow-md"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
