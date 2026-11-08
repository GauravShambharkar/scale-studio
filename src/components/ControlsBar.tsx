"use client";

import React, { useState } from "react";
import { DesignTokens } from "../types/design";
import { LinkIcon, UnlinkIcon, SlidersIcon, SparklesIcon } from "./Icons";

interface ControlsBarProps {
  tokens: DesignTokens;
  onChangeTokens: (updated: Partial<DesignTokens>) => void;
  canvasTheme: "figma-dark" | "figma-light" | "pure-white";
  onChangeCanvasTheme: (theme: "figma-dark" | "figma-light" | "pure-white") => void;
}

export function ControlsBar({
  tokens,
  onChangeTokens,
  canvasTheme,
  onChangeCanvasTheme,
}: ControlsBarProps) {
  const [showDetailedMode, setShowDetailedMode] = useState(false);

  // When updating base / body font in linked mode, scale heading and subheading proportionally
  const handleBodyFontChange = (val: number) => {
    const clamped = Math.max(8, Math.min(128, isNaN(val) ? 16 : val));
    if (tokens.linkFontScales) {
      const ratioH1 = tokens.headingFontSize / (tokens.bodyFontSize || 16);
      const ratioH2 = tokens.subheadingFontSize / (tokens.bodyFontSize || 16);
      onChangeTokens({
        bodyFontSize: clamped,
        headingFontSize: Math.round(clamped * (ratioH1 > 0.5 ? ratioH1 : 1.5)),
        subheadingFontSize: Math.round(clamped * (ratioH2 > 0.5 ? ratioH2 : 1.2)),
        buttonFontSize: clamped,
      });
    } else {
      onChangeTokens({ bodyFontSize: clamped });
    }
  };

  const handleHeadingFontChange = (val: number) => {
    const clamped = Math.max(8, Math.min(160, isNaN(val) ? 32 : val));
    onChangeTokens({ headingFontSize: clamped });
  };

  const handleSubheadingFontChange = (val: number) => {
    const clamped = Math.max(8, Math.min(120, isNaN(val) ? 24 : val));
    onChangeTokens({ subheadingFontSize: clamped });
  };

  const handleButtonFontChange = (val: number) => {
    const clamped = Math.max(8, Math.min(96, isNaN(val) ? 16 : val));
    onChangeTokens({ buttonFontSize: clamped });
  };

  const handlePaddingChange = (val: number) => {
    const clamped = Math.max(0, Math.min(128, isNaN(val) ? 0 : val));
    if (tokens.paddingUniform) {
      onChangeTokens({ padding: clamped, paddingX: clamped, paddingY: clamped });
    } else {
      onChangeTokens({ padding: clamped });
    }
  };

  const handlePadXChange = (val: number) => {
    const clamped = Math.max(0, Math.min(128, isNaN(val) ? 0 : val));
    onChangeTokens({ paddingX: clamped });
  };

  const handlePadYChange = (val: number) => {
    const clamped = Math.max(0, Math.min(128, isNaN(val) ? 0 : val));
    onChangeTokens({ paddingY: clamped });
  };

  const handleMarginChange = (val: number) => {
    const clamped = Math.max(0, Math.min(96, isNaN(val) ? 0 : val));
    onChangeTokens({ margin: clamped });
  };

  const handleGapChange = (val: number) => {
    const clamped = Math.max(0, Math.min(96, isNaN(val) ? 0 : val));
    if (tokens.gapUniform) {
      onChangeTokens({ gap: clamped, gapX: clamped, gapY: clamped });
    } else {
      onChangeTokens({ gap: clamped });
    }
  };

  const handleGapXChange = (val: number) => {
    const clamped = Math.max(0, Math.min(96, isNaN(val) ? 0 : val));
    onChangeTokens({ gapX: clamped });
  };

  const handleGapYChange = (val: number) => {
    const clamped = Math.max(0, Math.min(96, isNaN(val) ? 0 : val));
    onChangeTokens({ gapY: clamped });
  };

  const handleRadiusChange = (val: number) => {
    const clamped = Math.max(0, Math.min(9999, isNaN(val) ? 0 : val));
    onChangeTokens({ borderRadius: clamped });
  };

  const padY = tokens.paddingUniform ? tokens.padding : tokens.paddingY;
  const padX = tokens.paddingUniform ? tokens.padding : tokens.paddingX;
  const gapY = tokens.gapUniform ? tokens.gap : tokens.gapY;
  const gapX = tokens.gapUniform ? tokens.gap : tokens.gapX;

  return (
    <div className="bg-slate-900/95 border-b border-slate-800 shadow-2xl backdrop-blur-md px-4 sm:px-6 py-4">
      <div className="max-w-[1700px] mx-auto">
        {/* Top bar with Direct Mode switcher & Canvas background selector */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pb-2 border-b border-slate-800/60 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <SlidersIcon className="w-3.5 h-3.5 text-indigo-400" />
              Scale Controls:
            </span>
            <button
              onClick={() => setShowDetailedMode(false)}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                !showDetailedMode
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              Standard Filters
            </button>
            <button
              onClick={() => setShowDetailedMode(true)}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                showDetailedMode
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              Fine-Tune Each Pixel Field (H1, Sub, Body, Button)
            </button>
          </div>

          {/* Canvas Background Color Switcher (Figma Canvas Simulation) */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-400 font-medium">Canvas Background:</span>
            <div className="flex items-center bg-slate-950 border border-slate-800 rounded-lg p-0.5">
              <button
                onClick={() => onChangeCanvasTheme("figma-dark")}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                  canvasTheme === "figma-dark"
                    ? "bg-slate-800 text-white border border-slate-700"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Figma Dark (#1E1E1E)
              </button>
              <button
                onClick={() => onChangeCanvasTheme("figma-light")}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                  canvasTheme === "figma-light"
                    ? "bg-slate-200 text-slate-900 font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Figma Gray (#E5E5E5)
              </button>
              <button
                onClick={() => onChangeCanvasTheme("pure-white")}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                  canvasTheme === "pure-white"
                    ? "bg-white text-black font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Pure White
              </button>
            </div>
          </div>
        </div>

        {/* PRIMARY 5 FILTER BOXES */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {/* 1. Font Size Filter */}
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 hover:border-indigo-500/50 transition-colors shadow-inner flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-indigo-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                Font Size
              </label>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min="8"
                  max="96"
                  value={tokens.bodyFontSize}
                  onChange={(e) => handleBodyFontChange(parseInt(e.target.value))}
                  className="w-14 bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded px-1.5 py-0.5 text-right font-mono text-xs font-bold text-white focus:outline-none"
                />
                <span className="text-[11px] text-slate-400 font-mono">px</span>
              </div>
            </div>
            <input
              type="range"
              min="10"
              max="64"
              value={tokens.bodyFontSize}
              onChange={(e) => handleBodyFontChange(parseInt(e.target.value))}
              className="w-full accent-indigo-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
            <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 font-mono border-t border-slate-800/60 pt-1.5">
              <span title="Heading 1 size">H1: <strong className="text-slate-200">{tokens.headingFontSize}px</strong></span>
              <span title="Subheading size">H2: <strong className="text-slate-200">{tokens.subheadingFontSize}px</strong></span>
              <span title="Body size">Body: <strong className="text-indigo-400">{tokens.bodyFontSize}px</strong></span>
            </div>
          </div>

          {/* 2. Padding Filter */}
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 hover:border-emerald-500/50 transition-colors shadow-inner flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5">
                <label className="text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Padding
                </label>
                <button
                  onClick={() => onChangeTokens({ paddingUniform: !tokens.paddingUniform })}
                  className="text-slate-400 hover:text-white p-0.5 rounded cursor-pointer"
                  title={tokens.paddingUniform ? "Uniform padding enabled (click to split X / Y)" : "Split padding enabled (click for uniform)"}
                >
                  {tokens.paddingUniform ? <LinkIcon className="w-3 h-3 text-emerald-400" /> : <UnlinkIcon className="w-3 h-3 text-amber-400" />}
                </button>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min="0"
                  max="96"
                  value={tokens.paddingUniform ? tokens.padding : tokens.paddingY}
                  onChange={(e) => handlePaddingChange(parseInt(e.target.value))}
                  className="w-14 bg-slate-900 border border-slate-700 focus:border-emerald-500 rounded px-1.5 py-0.5 text-right font-mono text-xs font-bold text-white focus:outline-none"
                />
                <span className="text-[11px] text-slate-400 font-mono">px</span>
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="64"
              value={tokens.paddingUniform ? tokens.padding : tokens.paddingY}
              onChange={(e) => handlePaddingChange(parseInt(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
            <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 font-mono border-t border-slate-800/60 pt-1.5">
              {tokens.paddingUniform ? (
                <>
                  <span>All sides: <strong className="text-emerald-400">{tokens.padding}px</strong></span>
                  <button
                    onClick={() => onChangeTokens({ paddingUniform: false })}
                    className="text-[9px] text-slate-400 hover:text-emerald-300 underline cursor-pointer"
                  >
                    Split X/Y
                  </button>
                </>
              ) : (
                <>
                  <span>
                    Y: <input type="number" value={tokens.paddingY} onChange={(e) => handlePadYChange(parseInt(e.target.value))} className="w-8 bg-slate-900 border border-slate-700 rounded text-center text-white" />px
                  </span>
                  <span>
                    X: <input type="number" value={tokens.paddingX} onChange={(e) => handlePadXChange(parseInt(e.target.value))} className="w-8 bg-slate-900 border border-slate-700 rounded text-center text-white" />px
                  </span>
                </>
              )}
            </div>
          </div>

          {/* 3. Margin Filter */}
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 hover:border-amber-500/50 transition-colors shadow-inner flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                Margin
              </label>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min="0"
                  max="96"
                  value={tokens.margin}
                  onChange={(e) => handleMarginChange(parseInt(e.target.value))}
                  className="w-14 bg-slate-900 border border-slate-700 focus:border-amber-500 rounded px-1.5 py-0.5 text-right font-mono text-xs font-bold text-white focus:outline-none"
                />
                <span className="text-[11px] text-slate-400 font-mono">px</span>
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="64"
              value={tokens.margin}
              onChange={(e) => handleMarginChange(parseInt(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
            <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 font-mono border-t border-slate-800/60 pt-1.5">
              <span>Outer offset: <strong className="text-amber-400">{tokens.margin}px</strong></span>
              <div className="flex gap-1">
                {[0, 16, 24].map((m) => (
                  <button
                    key={m}
                    onClick={() => handleMarginChange(m)}
                    className="hover:text-amber-300 underline cursor-pointer"
                  >
                    {m}px
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Gaps Filter */}
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 hover:border-purple-500/50 transition-colors shadow-inner flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5">
                <label className="text-xs font-semibold text-purple-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  Gaps
                </label>
                <button
                  onClick={() => onChangeTokens({ gapUniform: !tokens.gapUniform })}
                  className="text-slate-400 hover:text-white p-0.5 rounded cursor-pointer"
                  title={tokens.gapUniform ? "Uniform gap enabled (click to split Row / Column)" : "Split gaps enabled (click for uniform)"}
                >
                  {tokens.gapUniform ? <LinkIcon className="w-3 h-3 text-purple-400" /> : <UnlinkIcon className="w-3 h-3 text-amber-400" />}
                </button>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min="0"
                  max="96"
                  value={tokens.gapUniform ? tokens.gap : tokens.gapX}
                  onChange={(e) => handleGapChange(parseInt(e.target.value))}
                  className="w-14 bg-slate-900 border border-slate-700 focus:border-purple-500 rounded px-1.5 py-0.5 text-right font-mono text-xs font-bold text-white focus:outline-none"
                />
                <span className="text-[11px] text-slate-400 font-mono">px</span>
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="64"
              value={tokens.gapUniform ? tokens.gap : tokens.gapX}
              onChange={(e) => handleGapChange(parseInt(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
            <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 font-mono border-t border-slate-800/60 pt-1.5">
              {tokens.gapUniform ? (
                <>
                  <span>Flex & Stack: <strong className="text-purple-400">{tokens.gap}px</strong></span>
                  <button
                    onClick={() => onChangeTokens({ gapUniform: false })}
                    className="text-[9px] text-slate-400 hover:text-purple-300 underline cursor-pointer"
                  >
                    Split Row/Col
                  </button>
                </>
              ) : (
                <>
                  <span>
                    Row (Y): <input type="number" value={tokens.gapY} onChange={(e) => handleGapYChange(parseInt(e.target.value))} className="w-8 bg-slate-900 border border-slate-700 rounded text-center text-white" />px
                  </span>
                  <span>
                    Col (X): <input type="number" value={tokens.gapX} onChange={(e) => handleGapXChange(parseInt(e.target.value))} className="w-8 bg-slate-900 border border-slate-700 rounded text-center text-white" />px
                  </span>
                </>
              )}
            </div>
          </div>

          {/* 5. Roundness / Border Radius Filter */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1 bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 hover:border-pink-500/50 transition-colors shadow-inner flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-pink-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                Roundness
              </label>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min="0"
                  max="9999"
                  value={tokens.borderRadius === 9999 ? 999 : tokens.borderRadius}
                  onChange={(e) => handleRadiusChange(parseInt(e.target.value))}
                  className="w-14 bg-slate-900 border border-slate-700 focus:border-pink-500 rounded px-1.5 py-0.5 text-right font-mono text-xs font-bold text-white focus:outline-none"
                />
                <span className="text-[11px] text-slate-400 font-mono">px</span>
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="64"
              value={tokens.borderRadius > 64 ? 64 : tokens.borderRadius}
              onChange={(e) => handleRadiusChange(parseInt(e.target.value))}
              className="w-full accent-pink-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
            <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 font-mono border-t border-slate-800/60 pt-1.5">
              <button onClick={() => handleRadiusChange(0)} className="hover:text-pink-300 cursor-pointer">0px</button>
              <button onClick={() => handleRadiusChange(8)} className="hover:text-pink-300 cursor-pointer">8px</button>
              <button onClick={() => handleRadiusChange(16)} className="hover:text-pink-300 cursor-pointer">16px</button>
              <button onClick={() => handleRadiusChange(32)} className="hover:text-pink-300 cursor-pointer font-bold text-pink-400">32px</button>
              <button onClick={() => handleRadiusChange(9999)} className="hover:text-pink-300 cursor-pointer">Pill</button>
            </div>
          </div>
        </div>

        {/* DETAILED / EXPLICIT PIXEL INPUT DRAWER */}
        {showDetailedMode && (
          <div className="mt-3 p-3.5 bg-slate-950/90 border border-indigo-500/30 rounded-xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs animate-in fade-in">
            {/* Heading Font Px */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-slate-300">Heading 1 (px)</label>
              <input
                type="number"
                value={tokens.headingFontSize}
                onChange={(e) => handleHeadingFontChange(parseInt(e.target.value))}
                className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white font-mono"
              />
            </div>

            {/* Subheading Font Px */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-slate-300">Subheading 2 (px)</label>
              <input
                type="number"
                value={tokens.subheadingFontSize}
                onChange={(e) => handleSubheadingFontChange(parseInt(e.target.value))}
                className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white font-mono"
              />
            </div>

            {/* Body Font Px */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-slate-300">Body Text (px)</label>
              <input
                type="number"
                value={tokens.bodyFontSize}
                onChange={(e) => handleBodyFontChange(parseInt(e.target.value))}
                className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white font-mono"
              />
            </div>

            {/* Button Font Px */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-slate-300">Button Font (px)</label>
              <input
                type="number"
                value={tokens.buttonFontSize}
                onChange={(e) => handleButtonFontChange(parseInt(e.target.value))}
                className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white font-mono"
              />
            </div>

            {/* Button Padding Y */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold text-slate-300">Btn Pad Y / X (px)</label>
              <div className="flex gap-1">
                <input
                  type="number"
                  value={tokens.buttonPaddingY}
                  onChange={(e) => onChangeTokens({ buttonPaddingY: parseInt(e.target.value) || 0 })}
                  className="w-1/2 bg-slate-900 border border-slate-700 rounded px-1.5 py-1 text-white font-mono"
                  placeholder="Y"
                />
                <input
                  type="number"
                  value={tokens.buttonPaddingX}
                  onChange={(e) => onChangeTokens({ buttonPaddingX: parseInt(e.target.value) || 0 })}
                  className="w-1/2 bg-slate-900 border border-slate-700 rounded px-1.5 py-1 text-white font-mono"
                  placeholder="X"
                />
              </div>
            </div>

            {/* Relative Scale Link Toggle */}
            <div className="flex flex-col justify-end">
              <button
                onClick={() => onChangeTokens({ linkFontScales: !tokens.linkFontScales })}
                className={`w-full py-1.5 px-2 rounded font-medium text-[11px] flex items-center justify-center gap-1.5 cursor-pointer ${
                  tokens.linkFontScales
                    ? "bg-indigo-600/30 text-indigo-300 border border-indigo-500/40"
                    : "bg-slate-800 text-slate-300 border border-slate-700"
                }`}
              >
                {tokens.linkFontScales ? <LinkIcon className="w-3.5 h-3.5 text-indigo-400" /> : <UnlinkIcon className="w-3.5 h-3.5 text-amber-400" />}
                <span>{tokens.linkFontScales ? "Linked Scale" : "Unlinked Scale"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
