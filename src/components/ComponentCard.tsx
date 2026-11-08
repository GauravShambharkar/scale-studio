"use client";

import React, { useState } from "react";
import { CopyIcon, CheckIcon } from "./Icons";

interface ComponentCardProps {
  id: string;
  number: string;
  title: string;
  tag: string;
  controls: React.ReactNode;
  cssSnippet: string;
  canvasTheme?: "figma-dark" | "figma-light" | "pure-white";
  children: React.ReactNode;
}

export function ComponentCard({
  id,
  number,
  title,
  tag,
  controls,
  cssSnippet,
  canvasTheme = "figma-dark",
  children,
}: ComponentCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(cssSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCanvasBackgroundClass = () => {
    switch (canvasTheme) {
      case "figma-light":
        return "bg-[#e5e5e5] figma-canvas-grid-light text-neutral-800";
      case "pure-white":
        return "bg-white text-neutral-900";
      default:
        return "bg-[#0b0f17] figma-canvas-grid text-neutral-100";
    }
  };

  return (
    <div
      id={id}
      className="group relative flex flex-col rounded-2xl bg-neutral-900/90 border border-neutral-800 shadow-xl hover:border-neutral-700 transition-all duration-200 overflow-hidden"
    >
      {/* 1. Header with Title & Copy CSS */}
      <div className="flex items-center justify-between border-b border-neutral-800/80 bg-neutral-950/80 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.5 rounded">
            {number}
          </span>
          <h3 className="text-sm font-semibold text-neutral-100 tracking-tight font-['Google_Sans_Flex']">
            {title}
          </h3>
          {/* Badge per skills.md */}
          <span className="shadow-sm shadow-black/10 ring-1 ring-black bg-white text-neutral-900 text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-full hidden sm:inline-block">
            {tag}
          </span>
        </div>

        {/* Copy CSS Button */}
        <button
          onClick={handleCopy}
          title="Copy CSS for this component"
          className="flex items-center gap-1 text-[11px] px-2 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700 transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copied</span>
            </>
          ) : (
            <>
              <CopyIcon className="w-3.5 h-3.5 text-neutral-400" />
              <span>Copy CSS</span>
            </>
          )}
        </button>
      </div>

      {/* 2. Direct Filter Controls Bar for this Box */}
      <div className="flex flex-wrap items-center gap-2 px-4 py-2 bg-neutral-950/40 border-b border-neutral-800/60 overflow-x-auto">
        {controls}
      </div>

      {/* 3. Main UI Centered Stage */}
      <div
        className={`relative flex-1 min-h-[340px] flex items-center justify-center p-6 sm:p-8 overflow-x-auto overflow-y-hidden transition-colors ${getCanvasBackgroundClass()}`}
      >
        <div className="w-full flex items-center justify-center transition-all duration-150">
          {children}
        </div>
      </div>
    </div>
  );
}
