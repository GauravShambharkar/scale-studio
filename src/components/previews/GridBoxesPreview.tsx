"use client";

import React from "react";

interface GridBoxesProps {
  gapX: number;
  gapY: number;
  radius: number;
  padding: number;
  inspectMode?: boolean;
  canvasTheme?: string;
}

export function GridBoxesPreview({
  gapX,
  gapY,
  radius,
  padding,
  inspectMode = false,
  canvasTheme = "figma-dark",
}: GridBoxesProps) {
  const isLight = canvasTheme === "figma-light" || canvasTheme === "pure-white";

  // Create 12 boxes of size 40px x 30px
  const boxes = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-lg flex flex-col items-center justify-center">
      <div
        style={{
          padding: `${padding}px`,
          borderRadius: `${radius}px`,
        }}
        className={`w-full flex flex-col items-center justify-center border shadow-xl transition-all ${
          isLight ? "bg-white border-neutral-300" : "bg-neutral-950 border-neutral-800"
        } ${inspectMode ? "inspect-padding-pattern ring-1 ring-emerald-500/50" : ""}`}
      >
        {/* Info Header */}
        <div className="w-full flex items-center justify-between border-b border-neutral-800/60 pb-2 mb-4 text-[11px] font-mono">
          <span className="text-neutral-400 font-semibold uppercase tracking-wider">
            Grid of 40×30 Boxes
          </span>
          <span className="text-neutral-500">
            Gap: {gapX}px (X) × {gapY}px (Y) • Rad: {radius}px
          </span>
        </div>

        {/* The Grid of 40x30 Boxes */}
        <div
          style={{
            columnGap: `${gapX}px`,
            rowGap: `${gapY}px`,
          }}
          className={`grid grid-cols-4 sm:grid-cols-6 items-center justify-center ${
            inspectMode ? "inspect-gap-pattern p-3 rounded-lg" : ""
          }`}
        >
          {boxes.map((num) => (
            <div
              key={num}
              style={{
                width: "40px",
                height: "30px",
                borderRadius: `${Math.min(15, radius)}px`,
              }}
              className={`flex items-center justify-center text-[10px] font-mono font-bold transition-all shadow-sm select-none border ${
                num % 2 === 0
                  ? "bg-gradient-to-b from-blue-500 to-blue-700 text-white border-blue-400/40 shadow-blue-500/20"
                  : isLight
                    ? "bg-neutral-100 text-neutral-800 border-neutral-300 hover:bg-neutral-200"
                    : "bg-neutral-900 text-neutral-300 border-neutral-700 hover:border-neutral-500"
              }`}
              title={`Box ${num}: 40px × 30px`}
            >
              {num}
            </div>
          ))}
        </div>

        {/* Grid dimensions indicator */}
        <div className="w-full flex items-center justify-between border-t border-neutral-800/60 pt-3 mt-4 text-[10px] font-mono text-neutral-400">
          <span>Box Dimensions: <strong>40px × 30px</strong></span>
          <span>Pad: {padding}px</span>
          <span>Rad: {radius}px</span>
        </div>
      </div>
    </div>
  );
}
