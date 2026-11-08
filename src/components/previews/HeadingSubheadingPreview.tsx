"use client";

import React, { useState } from "react";

interface HeadingSubheadingProps {
  headingSize: number;
  subheadingSize: number;
  gapY: number;
  padding: number;
  borderRadius?: number;
  inspectMode?: boolean;
  canvasTheme?: string;
}

export function HeadingSubheadingPreview({
  headingSize,
  subheadingSize,
  gapY,
  padding,
  borderRadius = 16,
  inspectMode = false,
  canvasTheme = "figma-dark",
}: HeadingSubheadingProps) {
  const [headingText, setHeadingText] = useState("Visual Design Scale Prototyper");
  const [subheadingText, setSubheadingText] = useState("Compare font size, line height and vertical rhythm against real browser rendering");
  const [bodySnippet, setBodySnippet] = useState("In Figma, 32px font and 24px padding feel compact at 50% canvas zoom. At 100% browser code scale, you can judge if it feels too large before implementation.");

  const isLight = canvasTheme === "figma-light" || canvasTheme === "pure-white";

  return (
    <div
      style={{
        padding: `${padding}px`,
        borderRadius: `${borderRadius}px`,
        rowGap: `${gapY}px`,
      }}
      className={`w-full max-w-lg flex flex-col shadow-2xl transition-all duration-150 border ${
        isLight
          ? "bg-white border-neutral-300"
          : "bg-neutral-950 border-neutral-800"
      } ${inspectMode ? "inspect-padding-pattern ring-1 ring-emerald-500/50" : ""}`}
    >
      {/* Badge per skills.md */}
      <div className="flex items-center justify-between">
        <span className="shadow-sm shadow-black/10 ring-1 ring-black bg-white text-neutral-900 text-[11px] font-medium px-2.5 py-0.5 rounded-full inline-flex items-center">
          Typography Scale
        </span>
        <span className="text-[10px] font-mono text-neutral-500">
          H1: {headingSize}px • Sub: {subheadingSize}px • Gap: {gapY}px
        </span>
      </div>

      {/* Heading: Space Grotesk / Syne display font, descender-safe, tracking tight */}
      <div className="flex flex-col">
        <h1
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => setHeadingText(e.currentTarget.textContent || "")}
          style={{
            fontSize: `${headingSize}px`,
            lineHeight: 1.25,
            fontFamily: "var(--font-display, 'Space Grotesk', system-ui, sans-serif)",
          }}
          className={`descender-safe font-bold tracking-tight outline-none cursor-text px-1 rounded hover:bg-neutral-500/10 transition-colors ${
            isLight ? "text-neutral-900" : "text-neutral-100"
          }`}
          title="Click to edit heading"
        >
          {headingText}
        </h1>
      </div>

      {/* Subheading: regular / medium, color neutral-500, descender safe */}
      <div className="flex flex-col">
        <h2
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => setSubheadingText(e.currentTarget.textContent || "")}
          style={{
            fontSize: `${subheadingSize}px`,
            lineHeight: 1.35,
            fontFamily: "var(--font-sans, 'Plus Jakarta Sans', system-ui, sans-serif)",
          }}
          className="descender-safe font-medium tracking-tight text-neutral-400 outline-none cursor-text px-1 rounded hover:bg-neutral-500/10 transition-colors"
          title="Click to edit subheading"
        >
          {subheadingText}
        </h2>
      </div>

      {/* Body preview */}
      <div className="border-t border-neutral-800/60 pt-2">
        <p
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => setBodySnippet(e.currentTarget.textContent || "")}
          style={{
            fontSize: "14px",
            lineHeight: 1.45,
          }}
          className={`outline-none cursor-text px-1 rounded hover:bg-neutral-500/10 transition-colors ${
            isLight ? "text-neutral-700" : "text-neutral-400"
          }`}
          title="Click to edit body text"
        >
          {bodySnippet}
        </p>
      </div>
    </div>
  );
}
