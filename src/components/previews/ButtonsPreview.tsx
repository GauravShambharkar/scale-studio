"use client";

import React from "react";

interface ButtonsProps {
  fontSize: number;
  padY: number;
  padX: number;
  gap: number;
  radius: number;
  borderWidth?: number;
  inspectMode?: boolean;
  canvasTheme?: string;
}

export function ButtonsPreview({
  fontSize,
  padY,
  padX,
  gap,
  radius,
  borderWidth = 1,
  inspectMode = false,
  canvasTheme = "figma-dark",
}: ButtonsProps) {
  // Primary button style per skills.md:
  // - gradient from blue-500 to blue-700
  // - top shadow lighter (inset), bottom shadow darker
  const primaryButtonStyle = {
    paddingTop: `${padY}px`,
    paddingBottom: `${padY}px`,
    paddingLeft: `${padX}px`,
    paddingRight: `${padX}px`,
    borderRadius: `${radius}px`,
    borderWidth: `${borderWidth}px`,
    fontSize: `${fontSize}px`,
    boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 0 4px 14px 0 rgba(29, 78, 216, 0.45), 0 1px 2px 0 rgba(0, 0, 0, 0.2)",
  };

  const secondaryButtonStyle = {
    paddingTop: `${padY}px`,
    paddingBottom: `${padY}px`,
    paddingLeft: `${padX}px`,
    paddingRight: `${padX}px`,
    borderRadius: `${radius}px`,
    borderWidth: `${borderWidth}px`,
    fontSize: `${fontSize}px`,
  };

  const isLight = canvasTheme === "figma-light" || canvasTheme === "pure-white";

  return (
    <div
      style={{
        rowGap: `${gap}px`,
      }}
      className="w-full max-w-lg flex flex-col"
    >
      {/* 1. Two Buttons Arranged in Flex (X Direction) */}
      <div
        style={{
          padding: "16px",
          borderRadius: `${radius}px`,
        }}
        className={`flex flex-col gap-2 border shadow-lg ${
          isLight ? "bg-white border-neutral-300" : "bg-neutral-950 border-neutral-800"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-800/60 pb-1 text-[11px] font-mono">
          <span className="text-neutral-400 font-semibold uppercase tracking-wider">
            Two Buttons in Flex (X) • Gap: {gap}px
          </span>
          <span className="text-neutral-500">flex-row</span>
        </div>

        <div
          style={{
            columnGap: `${gap}px`,
            rowGap: `${gap}px`,
          }}
          className={`flex flex-wrap items-center pt-1 ${
            inspectMode ? "inspect-gap-pattern p-2 rounded-lg" : ""
          }`}
        >
          {/* Primary Button per skills.md */}
          <button
            style={primaryButtonStyle}
            className="font-semibold bg-gradient-to-b from-blue-500 to-blue-700 text-white border-blue-400/30 transition-all cursor-pointer whitespace-nowrap active:scale-95 hover:brightness-110"
          >
            Primary Action
          </button>

          {/* Secondary Button */}
          <button
            style={secondaryButtonStyle}
            className={`font-semibold transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
              isLight
                ? "bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border-neutral-300"
                : "bg-neutral-800 hover:bg-neutral-700 text-neutral-100 border-neutral-700 shadow-md"
            }`}
          >
            Secondary
          </button>
        </div>
      </div>

      {/* 2. More Buttons Arranged in Y (Vertical Stack) */}
      <div
        style={{
          padding: "16px",
          borderRadius: `${radius}px`,
          rowGap: `${gap}px`,
        }}
        className={`flex flex-col border shadow-lg ${
          isLight ? "bg-white border-neutral-300" : "bg-neutral-950 border-neutral-800"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-800/60 pb-1 text-[11px] font-mono">
          <span className="text-neutral-400 font-semibold uppercase tracking-wider">
            More Buttons in Y (Vertical Stack) • Gap: {gap}px
          </span>
          <span className="text-neutral-500">flex-col</span>
        </div>

        <div
          style={{
            rowGap: `${gap}px`,
          }}
          className={`flex flex-col w-full ${
            inspectMode ? "inspect-gap-pattern p-2 rounded-lg" : ""
          }`}
        >
          {/* Button 1: Primary Gradient */}
          <button
            style={primaryButtonStyle}
            className="w-full font-semibold bg-gradient-to-b from-blue-500 to-blue-700 text-white border-blue-400/30 transition-all cursor-pointer text-center active:scale-[0.98] hover:brightness-110"
          >
            Confirm & Save Token Scale
          </button>

          {/* Button 2: Secondary Neutral */}
          <button
            style={secondaryButtonStyle}
            className={`w-full font-semibold transition-all cursor-pointer text-center active:scale-[0.98] ${
              isLight
                ? "bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border-neutral-300"
                : "bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border-neutral-700"
            }`}
          >
            Secondary Option
          </button>

          {/* Button 3: Outline / Ghost */}
          <button
            style={secondaryButtonStyle}
            className={`w-full font-semibold transition-all cursor-pointer text-center active:scale-[0.98] ${
              isLight
                ? "bg-transparent hover:bg-neutral-100 text-neutral-600 border-neutral-300"
                : "bg-transparent hover:bg-neutral-900 text-neutral-400 hover:text-white border-neutral-700"
            }`}
          >
            Cancel / Back
          </button>
        </div>
      </div>
    </div>
  );
}
