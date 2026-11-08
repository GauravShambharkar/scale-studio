"use client";

import React, { useState } from "react";

interface PlainTextProps {
  fontSize: number;
  gapX: number;
  gapY: number;
  padding: number;
  borderRadius?: number;
  inspectMode?: boolean;
  canvasTheme?: string;
}

export function PlainTextPreview({
  fontSize,
  gapX,
  gapY,
  padding,
  borderRadius = 16,
  inspectMode = false,
  canvasTheme = "figma-dark",
}: PlainTextProps) {
  const isLight = canvasTheme === "figma-light" || canvasTheme === "pure-white";

  const [rowTexts] = useState(["Dashboard", "Projects", "Analytics", "Settings", "Account"]);
  const [colTexts] = useState([
    "Real scale validation for Figma design tokens",
    "Horizontal and vertical rhythm comparison",
    "Browser rendering at 100% true pixel density",
  ]);

  return (
    <div
      style={{
        rowGap: `${gapY}px`,
      }}
      className={`w-full max-w-xl flex flex-col ${
        inspectMode ? "inspect-gap-pattern p-3 rounded-xl" : ""
      }`}
    >
      {/* 1. Plain Text Arranged in Row (X Direction) */}
      <div
        style={{
          padding: `${padding}px`,
          borderRadius: `${borderRadius}px`,
        }}
        className={`flex flex-col gap-2 border shadow-lg ${
          isLight ? "bg-white border-neutral-300" : "bg-neutral-950 border-neutral-800"
        } ${inspectMode ? "inspect-padding-pattern" : ""}`}
      >
        <div className="flex items-center justify-between border-b border-neutral-800/60 pb-1 text-[11px] font-mono">
          <span className="text-neutral-400 font-semibold uppercase tracking-wider">
            Row (X Direction) • Gap-X: {gapX}px
          </span>
          <span className="text-neutral-500">display: flex; flex-direction: row</span>
        </div>

        <div
          style={{
            columnGap: `${gapX}px`,
            rowGap: `${gapY}px`,
          }}
          className="flex flex-wrap items-center pt-1"
        >
          {rowTexts.map((txt, i) => (
            <span
              key={i}
              contentEditable
              suppressContentEditableWarning
              style={{
                fontSize: `${fontSize}px`,
                lineHeight: 1.4,
              }}
              className={`font-normal outline-none cursor-text hover:bg-neutral-500/10 px-1 rounded transition-colors ${
                isLight ? "text-neutral-900" : "text-neutral-200"
              }`}
              title="Click to edit text"
            >
              {txt}
            </span>
          ))}
        </div>
      </div>

      {/* 2. Plain Text Arranged in Y Direction (Vertical Stack) */}
      <div
        style={{
          padding: `${padding}px`,
          borderRadius: `${borderRadius}px`,
          rowGap: `${gapY}px`,
        }}
        className={`flex flex-col border shadow-lg ${
          isLight ? "bg-white border-neutral-300" : "bg-neutral-950 border-neutral-800"
        } ${inspectMode ? "inspect-padding-pattern" : ""}`}
      >
        <div className="flex items-center justify-between border-b border-neutral-800/60 pb-1 text-[11px] font-mono">
          <span className="text-neutral-400 font-semibold uppercase tracking-wider">
            Column (Y Direction) • Gap-Y: {gapY}px
          </span>
          <span className="text-neutral-500">display: flex; flex-direction: column</span>
        </div>

        {colTexts.map((txt, idx) => (
          <p
            key={idx}
            contentEditable
            suppressContentEditableWarning
            style={{
              fontSize: `${fontSize}px`,
              lineHeight: 1.4,
            }}
            className={`font-normal outline-none cursor-text hover:bg-neutral-500/10 px-1 rounded transition-colors ${
              isLight ? "text-neutral-700" : "text-neutral-300"
            }`}
            title="Click to edit text"
          >
            {txt}
          </p>
        ))}
      </div>
    </div>
  );
}
