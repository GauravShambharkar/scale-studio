"use client";

import React from "react";
import { DesignTokens } from "../../types/design";

interface PreviewProps {
  tokens: DesignTokens;
  inspectMode: boolean;
  canvasTheme?: string;
}

export function HorizontalFlexPreview({ tokens, inspectMode, canvasTheme }: PreviewProps) {
  const padY = tokens.paddingUniform ? tokens.padding : tokens.paddingY;
  const padX = tokens.paddingUniform ? tokens.padding : tokens.paddingX;
  const gapX = tokens.gapUniform ? tokens.gap : tokens.gapX;
  const gapY = tokens.gapUniform ? tokens.gap : tokens.gapY;
  const fontSize = tokens.bodyFontSize;

  const isLight = canvasTheme === "figma-light" || canvasTheme === "pure-white";
  const tags = ["TypeScript", "Tailwind CSS", "Figma Variables", "Tokens Studio", "Responsive"];

  return (
    <div
      style={{
        rowGap: `${gapY}px`,
        margin: `${Math.round(tokens.margin * 0.5)}px`,
      }}
      className="w-full max-w-lg flex flex-col"
    >
      {/* 1. Horizontal Filter Pills Carousel */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[10px] font-mono text-purple-400 font-semibold uppercase tracking-wider">
          Horizontal Flex Row (Gap: {gapX}px • Radius: {tokens.borderRadius}px)
        </span>
        <div
          style={{
            columnGap: `${gapX}px`,
            rowGap: `${gapY}px`,
          }}
          className={`flex flex-wrap items-center ${
            inspectMode ? "inspect-gap-pattern p-2 rounded-lg" : ""
          }`}
        >
          {tags.map((tag, i) => (
            <div
              key={tag}
              style={{
                paddingTop: `${Math.max(4, Math.round(padY * 0.35))}px`,
                paddingBottom: `${Math.max(4, Math.round(padY * 0.35))}px`,
                paddingLeft: `${Math.max(10, Math.round(padX * 0.65))}px`,
                paddingRight: `${Math.max(10, Math.round(padX * 0.65))}px`,
                borderRadius: `${tokens.borderRadius}px`,
                borderWidth: `${tokens.borderWidth}px`,
                fontSize: `${Math.max(11, Math.round(fontSize * 0.82))}px`,
              }}
              className={`font-medium transition-all select-none cursor-pointer ${
                i === 0
                  ? "bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-600/30"
                  : isLight
                    ? "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                    : "bg-slate-900 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:text-white"
              }`}
            >
              #{tag}
            </div>
          ))}
        </div>
      </div>

      {/* 2. Horizontal Stats Chips Row */}
      <div
        style={{
          columnGap: `${gapX}px`,
          rowGap: `${gapY}px`,
        }}
        className="flex flex-wrap items-center"
      >
        {[
          { label: "Components", val: "48+" },
          { label: "Tokens", val: "128" },
          { label: "Scale Match", val: "100%" },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              paddingTop: `${Math.max(8, Math.round(padY * 0.6))}px`,
              paddingBottom: `${Math.max(8, Math.round(padY * 0.6))}px`,
              paddingLeft: `${Math.max(12, Math.round(padX * 0.8))}px`,
              paddingRight: `${Math.max(12, Math.round(padX * 0.8))}px`,
              borderRadius: `${tokens.borderRadius}px`,
              borderWidth: `${tokens.borderWidth}px`,
            }}
            className={`flex-1 min-w-[100px] border flex flex-col items-center justify-center text-center shadow-lg ${
              isLight ? "bg-white border-slate-300" : "bg-slate-950 border-slate-800"
            }`}
          >
            <span
              style={{ fontSize: `${Math.max(14, Math.round(fontSize * 1.15))}px` }}
              className={`font-bold tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}
            >
              {item.val}
            </span>
            <span
              style={{ fontSize: `${Math.max(10, Math.round(fontSize * 0.7))}px` }}
              className={`font-medium uppercase ${isLight ? "text-slate-500" : "text-slate-400"}`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* 3. Horizontal Avatar Team Stack + Status */}
      <div
        style={{
          paddingTop: `${Math.max(8, Math.round(padY * 0.5))}px`,
          paddingBottom: `${Math.max(8, Math.round(padY * 0.5))}px`,
          paddingLeft: `${padX}px`,
          paddingRight: `${padX}px`,
          borderRadius: `${tokens.borderRadius}px`,
          borderWidth: `${tokens.borderWidth}px`,
        }}
        className={`flex items-center justify-between border ${
          isLight ? "bg-white border-slate-300" : "bg-slate-950 border-slate-800"
        }`}
      >
        <div
          style={{
            columnGap: `${Math.max(6, Math.round(gapX * 0.5))}px`,
          }}
          className="flex items-center"
        >
          <div className="flex -space-x-2 overflow-hidden">
            {["#4f46e5", "#7c3aed", "#ec4899", "#06b6d4"].map((bg, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: bg,
                  width: `${Math.max(26, Math.round(fontSize * 1.6))}px`,
                  height: `${Math.max(26, Math.round(fontSize * 1.6))}px`,
                  borderRadius: `${tokens.borderRadius}px`,
                }}
                className="inline-block ring-2 ring-slate-950 flex items-center justify-center text-[10px] font-bold text-white shadow"
              >
                {String.fromCharCode(65 + idx)}
              </div>
            ))}
          </div>
          <span
            style={{ fontSize: `${Math.max(11, Math.round(fontSize * 0.8))}px` }}
            className={`font-medium ${isLight ? "text-slate-700" : "text-slate-300"}`}
          >
            4 Reviewers Active
          </span>
        </div>

        <span
          style={{
            paddingLeft: `${Math.max(8, Math.round(padX * 0.4))}px`,
            paddingRight: `${Math.max(8, Math.round(padX * 0.4))}px`,
            paddingTop: `${Math.max(2, Math.round(padY * 0.2))}px`,
            paddingBottom: `${Math.max(2, Math.round(padY * 0.2))}px`,
            borderRadius: `${tokens.borderRadius}px`,
            fontSize: `${Math.max(10, Math.round(fontSize * 0.7))}px`,
          }}
          className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold"
        >
          Live Sync
        </span>
      </div>
    </div>
  );
}
