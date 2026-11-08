"use client";

import React from "react";
import { DesignTokens } from "../../types/design";

interface PreviewProps {
  tokens: DesignTokens;
  inspectMode: boolean;
  canvasTheme?: string;
}

export function MetricsPreview({ tokens, inspectMode, canvasTheme }: PreviewProps) {
  const padY = tokens.paddingUniform ? tokens.padding : tokens.paddingY;
  const padX = tokens.paddingUniform ? tokens.padding : tokens.paddingX;
  const gapX = tokens.gapUniform ? tokens.gap : tokens.gapX;
  const gapY = tokens.gapUniform ? tokens.gap : tokens.gapY;

  const statFont = tokens.headingFontSize;
  const labelFont = Math.max(10, Math.round(tokens.bodyFontSize * 0.75));
  const isLight = canvasTheme === "figma-light" || canvasTheme === "pure-white";

  const stats = [
    {
      label: "Design Consistency",
      value: "98.4%",
      change: "+4.2%",
      progress: 98,
      color: "from-indigo-500 to-cyan-400",
    },
    {
      label: "Figma Sync Speed",
      value: "1.2s",
      change: "+28%",
      progress: 74,
      color: "from-pink-500 to-rose-400",
    },
  ];

  return (
    <div
      style={{
        columnGap: `${gapX}px`,
        rowGap: `${gapY}px`,
        margin: `${Math.round(tokens.margin * 0.5)}px`,
      }}
      className="w-full max-w-md grid grid-cols-1 sm:grid-cols-2"
    >
      {stats.map((st, i) => (
        <div
          key={i}
          style={{
            paddingTop: `${padY}px`,
            paddingBottom: `${padY}px`,
            paddingLeft: `${padX}px`,
            paddingRight: `${padX}px`,
            borderRadius: `${tokens.borderRadius}px`,
            borderWidth: `${tokens.borderWidth}px`,
          }}
          className={`border shadow-xl flex flex-col justify-between transition-all ${
            isLight ? "bg-white border-slate-300" : "bg-slate-950 border-slate-800"
          } ${inspectMode ? "inspect-padding-pattern" : ""}`}
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span
                style={{ fontSize: `${labelFont}px` }}
                className={`font-medium uppercase tracking-wider ${isLight ? "text-slate-500" : "text-slate-400"}`}
              >
                {st.label}
              </span>
              <span
                style={{
                  borderRadius: `${tokens.borderRadius}px`,
                  fontSize: `${Math.max(9, Math.round(labelFont * 0.9))}px`,
                }}
                className="px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20"
              >
                {st.change}
              </span>
            </div>
            <div
              style={{ fontSize: `${statFont}px` }}
              className={`font-extrabold tracking-tight leading-none mb-3 ${isLight ? "text-slate-900" : "text-white"}`}
            >
              {st.value}
            </div>
          </div>

          {/* Progress bar with active border radius */}
          <div className="w-full">
            <div
              style={{
                borderRadius: `${tokens.borderRadius}px`,
                height: `${Math.max(6, Math.round(tokens.bodyFontSize * 0.4))}px`,
              }}
              className={`w-full overflow-hidden ${isLight ? "bg-slate-200" : "bg-slate-800"}`}
            >
              <div
                style={{
                  width: `${st.progress}%`,
                  borderRadius: `${tokens.borderRadius}px`,
                }}
                className={`h-full bg-gradient-to-r ${st.color} transition-all duration-300`}
              />
            </div>
            <div className="flex justify-between items-center mt-1.5 text-[9px] font-mono text-slate-400">
              <span>Target: 100%</span>
              <span>Pad: {padY}px</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
