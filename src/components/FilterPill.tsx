"use client";

import React from "react";

interface FilterPillProps {
  label: string;
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  step?: number;
  color?: "blue" | "emerald" | "purple" | "pink" | "amber";
}

export function FilterPill({
  label,
  value,
  onChange,
  min = 0,
  max = 160,
  step = 2,
  color = "blue",
}: FilterPillProps) {
  const handleDecrement = () => {
    onChange(Math.max(min, value - step));
  };

  const handleIncrement = () => {
    onChange(Math.min(max, value + step));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    onChange(isNaN(val) ? 0 : Math.max(min, Math.min(max, val)));
  };

  const labelColor = {
    blue: "text-blue-400",
    emerald: "text-emerald-400",
    purple: "text-purple-400",
    pink: "text-pink-400",
    amber: "text-amber-400",
  }[color];

  return (
    <div className="flex items-center bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-lg px-2 py-1 text-xs shadow-inner">
      <span className={`font-semibold mr-1.5 select-none ${labelColor}`}>{label}:</span>
      
      <button
        onClick={handleDecrement}
        className="w-4 h-4 flex items-center justify-center rounded text-neutral-400 hover:text-white hover:bg-neutral-800 cursor-pointer select-none font-bold"
        title="Decrease 2px"
      >
        -
      </button>

      <input
        type="number"
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        className="w-11 bg-neutral-950 border border-neutral-700/80 focus:border-blue-500 rounded px-1 py-0.5 text-center font-mono text-white text-xs font-bold focus:outline-none mx-0.5"
      />

      <button
        onClick={handleIncrement}
        className="w-4 h-4 flex items-center justify-center rounded text-neutral-400 hover:text-white hover:bg-neutral-800 cursor-pointer select-none font-bold"
        title="Increase 2px"
      >
        +
      </button>

      <span className="text-[10px] text-neutral-500 ml-1 font-mono select-none">px</span>
    </div>
  );
}

