"use client";

import React from "react";
import { FigmaIcon, RulerIcon, CodeIcon, RefreshIcon } from "./Icons";
import { Preset, PRESETS, DesignTokens } from "../types/design";

interface NavbarProps {
  tokens: DesignTokens;
  onSelectPreset: (preset: Preset) => void;
  onReset: () => void;
  activePresetId: string | null;
  inspectMode: boolean;
  onToggleInspect: () => void;
  scaleFactor: number;
  onChangeScale: (scale: number) => void;
  canvasTheme: "figma-dark" | "figma-light" | "pure-white";
  onChangeCanvasTheme: (theme: "figma-dark" | "figma-light" | "pure-white") => void;
  onOpenCssModal: () => void;
}

export function Navbar({
  tokens,
  onSelectPreset,
  onReset,
  activePresetId,
  inspectMode,
  onToggleInspect,
  scaleFactor,
  onChangeScale,
  canvasTheme,
  onChangeCanvasTheme,
  onOpenCssModal,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/95 backdrop-blur-md px-4 sm:px-6 py-2.5">
      <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-neutral-900 border border-neutral-800 shadow-sm">
            <FigmaIcon className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-bold text-sm tracking-tight text-white font-['Google_Sans_Flex']">
            Scale Studio
          </span>
          {/* Badge per skills.md */}
          <span className="shadow-sm shadow-black/10 ring-1 ring-black bg-white text-neutral-900 text-[10px] font-semibold px-2 py-0.5 rounded-full">
            1:1 Pixels
          </span>
        </div>

        {/* Quick Presets */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <span className="text-[11px] font-medium text-neutral-400 mr-1 hidden sm:inline">Presets:</span>
          {PRESETS.map((p) => {
            const isActive = activePresetId === p.id;
            return (
              <button
                key={p.id}
                onClick={() => onSelectPreset(p)}
                className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_8px_rgba(29,78,216,0.35)]"
                    : "bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800"
                }`}
              >
                {p.name}
              </button>
            );
          })}
          <button
            onClick={onReset}
            title="Reset"
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800 cursor-pointer ml-1"
          >
            <RefreshIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Tools: Canvas Theme, Zoom, X-Ray, Get CSS */}
        <div className="flex items-center gap-2">
          {/* Canvas Theme */}
          <div className="hidden sm:flex items-center bg-neutral-900 border border-neutral-800 rounded-lg p-0.5 text-xs">
            <button
              onClick={() => onChangeCanvasTheme("figma-dark")}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                canvasTheme === "figma-dark" ? "bg-neutral-800 text-white" : "text-neutral-400 hover:text-white"
              }`}
            >
              Dark
            </button>
            <button
              onClick={() => onChangeCanvasTheme("figma-light")}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                canvasTheme === "figma-light" ? "bg-neutral-200 text-neutral-900 font-semibold" : "text-neutral-400 hover:text-white"
              }`}
            >
              Figma Gray
            </button>
            <button
              onClick={() => onChangeCanvasTheme("pure-white")}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                canvasTheme === "pure-white" ? "bg-white text-black font-semibold" : "text-neutral-400 hover:text-white"
              }`}
            >
              White
            </button>
          </div>

          {/* Zoom */}
          <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-lg p-0.5 text-xs">
            {[
              { val: 1.0, label: "100%" },
              { val: 0.75, label: "75%" },
              { val: 0.5, label: "50%" },
            ].map((z) => (
              <button
                key={z.val}
                onClick={() => onChangeScale(z.val)}
                className={`px-1.5 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                  scaleFactor === z.val ? "bg-blue-600 text-white" : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {z.label}
              </button>
            ))}
          </div>

          {/* X-Ray Spacing */}
          <button
            onClick={onToggleInspect}
            className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
              inspectMode
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "bg-neutral-900 text-neutral-300 border border-neutral-800 hover:bg-neutral-800"
            }`}
            title="Inspect box model (green=padding, purple=gap)"
          >
            <RulerIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden md:inline">X-Ray</span>
          </button>

          {/* Get CSS */}
          <button
            onClick={onOpenCssModal}
            className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-lg font-semibold bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_8px_rgba(29,78,216,0.35)] hover:brightness-110 cursor-pointer active:scale-95 transition-all"
          >
            <CodeIcon className="w-3.5 h-3.5" />
            <span>CSS</span>
          </button>
        </div>
      </div>
    </header>
  );
}
