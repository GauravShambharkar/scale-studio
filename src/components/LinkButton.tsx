"use client";

import React from "react";
import { LinkIcon, UnlinkIcon } from "./Icons";

interface LinkButtonProps {
  isLinked: boolean;
  onToggle: () => void;
  titleLinked?: string;
  titleUnlinked?: string;
}

export function LinkButton({
  isLinked,
  onToggle,
  titleLinked = "Linked: Changing X or Y will sync both (click to unlink)",
  titleUnlinked = "Unlinked: Changing X or Y will only affect that one (click to link)",
}: LinkButtonProps) {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center justify-center w-6 h-7 rounded-md transition-all cursor-pointer select-none active:scale-95 ${
        isLinked
          ? "bg-blue-600/25 text-blue-400 border border-blue-500/40 shadow-sm hover:bg-blue-600/35"
          : "bg-neutral-900 text-neutral-500 border border-neutral-800 hover:text-neutral-300 hover:border-neutral-700"
      }`}
      title={isLinked ? titleLinked : titleUnlinked}
      aria-label={isLinked ? "Unlink X and Y" : "Link X and Y"}
    >
      {isLinked ? (
        <LinkIcon className="w-3.5 h-3.5 text-blue-400" />
      ) : (
        <UnlinkIcon className="w-3.5 h-3.5 text-neutral-500" />
      )}
    </button>
  );
}

