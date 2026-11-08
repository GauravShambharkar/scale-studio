"use client";

import React, { useState } from "react";
import { DesignTokens } from "../../types/design";

interface PreviewProps {
  tokens: DesignTokens;
  inspectMode: boolean;
  canvasTheme?: string;
}

export function ProductCardPreview({ tokens, inspectMode, canvasTheme }: PreviewProps) {
  const padY = tokens.paddingUniform ? tokens.padding : tokens.paddingY;
  const padX = tokens.paddingUniform ? tokens.padding : tokens.paddingX;
  const gapY = tokens.gapUniform ? tokens.gap : tokens.gapY;
  const gapX = tokens.gapUniform ? tokens.gap : tokens.gapX;

  const isLight = canvasTheme === "figma-light" || canvasTheme === "pure-white";

  return (
    <div
      style={{
        borderRadius: `${tokens.borderRadius}px`,
        borderWidth: `${tokens.borderWidth}px`,
        margin: `${Math.round(tokens.margin * 0.5)}px`,
      }}
      className={`w-full max-w-sm shadow-2xl overflow-hidden flex flex-col border ${
        isLight ? "bg-white border-slate-300" : "bg-slate-950 border-slate-800"
      } ${inspectMode ? "ring-2 ring-pink-500/50" : ""}`}
    >
      {/* Product Image Area */}
      <div className="relative h-36 bg-gradient-to-tr from-slate-900 via-indigo-950/40 to-slate-900 flex items-center justify-center p-4 border-b border-slate-800">
        <div
          style={{
            borderRadius: `${tokens.borderRadius}px`,
            width: "64px",
            height: "64px",
          }}
          className="bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-2xl shadow-inner"
        >
          🎧
        </div>
        <span
          style={{
            borderRadius: `${tokens.borderRadius}px`,
            fontSize: "10px",
            top: "10px",
            left: "10px",
          }}
          className="absolute bg-rose-500/90 text-white font-bold px-2 py-0.5 uppercase tracking-wider"
        >
          30% OFF
        </span>
      </div>

      {/* Product Content with Padding */}
      <div
        style={{
          paddingTop: `${padY}px`,
          paddingBottom: `${padY}px`,
          paddingLeft: `${padX}px`,
          paddingRight: `${padX}px`,
          rowGap: `${gapY}px`,
        }}
        className={`flex flex-col flex-1 justify-between ${
          inspectMode ? "inspect-padding-pattern" : ""
        }`}
      >
        <div>
          <div className="flex items-center gap-1 text-amber-400 text-xs mb-1">
            {"★".repeat(5)}
            <span className="text-slate-400 text-[10px] ml-1">(4.9/5)</span>
          </div>

          <h4
            style={{ fontSize: `${tokens.subheadingFontSize}px` }}
            className={`font-bold tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}
          >
            Acoustic Pro Studio Wireless
          </h4>

          <p
            style={{ fontSize: `${tokens.bodyFontSize}px`, lineHeight: tokens.lineHeightRatio }}
            className={isLight ? "text-slate-600 mt-1" : "text-slate-400 mt-1"}
          >
            Spatial audio with dynamic head tracking. Testing padding ({padY}px) against dense product specifications.
          </p>
        </div>

        {/* Pricing & Cart Action Row */}
        <div
          style={{
            columnGap: `${gapX}px`,
            paddingTop: `${Math.max(6, Math.round(gapY * 0.5))}px`,
          }}
          className="flex items-center justify-between border-t border-slate-800/80 mt-2"
        >
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-mono block">Price</span>
            <div className="flex items-baseline gap-1.5">
              <span
                style={{ fontSize: `${Math.max(18, Math.round(tokens.headingFontSize * 0.8))}px` }}
                className={`font-extrabold ${isLight ? "text-slate-900" : "text-white"}`}
              >
                $249
              </span>
              <span className="text-xs text-slate-400 line-through">$350</span>
            </div>
          </div>

          {/* Add to Cart button */}
          <button
            style={{
              borderRadius: `${tokens.borderRadius}px`,
              paddingTop: `${tokens.buttonPaddingY}px`,
              paddingBottom: `${tokens.buttonPaddingY}px`,
              paddingLeft: `${tokens.buttonPaddingX}px`,
              paddingRight: `${tokens.buttonPaddingX}px`,
              fontSize: `${tokens.buttonFontSize}px`,
            }}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-indigo-600/30"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
