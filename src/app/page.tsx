"use client";

import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { ComponentCard } from "../components/ComponentCard";
import { FilterPill } from "../components/FilterPill";
import { LinkButton } from "../components/LinkButton";
import { CssModal } from "../components/CssModal";
import { DesignTokens, DEFAULT_TOKENS, Preset } from "../types/design";

// The 4 requested preview components
import { PlainTextPreview } from "../components/previews/PlainTextPreview";
import { HeadingSubheadingPreview } from "../components/previews/HeadingSubheadingPreview";
import { ButtonsPreview } from "../components/previews/ButtonsPreview";
import { GridBoxesPreview } from "../components/previews/GridBoxesPreview";

export default function Home() {
  // Box 1 State (Plain Text in Row & Y)
  const [box1, setBox1] = useState({
    fontSize: 32,
    gapX: 20,
    gapY: 20,
    padding: 24,
  });
  const [box1GapLinked, setBox1GapLinked] = useState<boolean>(true);

  // Box 2 State (Heading & Subheading)
  const [box2, setBox2] = useState({
    headingSize: 32,
    subheadingSize: 24,
    gapY: 16,
    padding: 24,
  });

  // Box 3 State (Buttons in Flex & Y)
  const [box3, setBox3] = useState({
    fontSize: 18,
    padY: 14,
    padX: 22,
    gap: 16,
    radius: 32,
  });
  const [box3PadLinked, setBox3PadLinked] = useState<boolean>(false);

  // Box 4 State (Grid of 40x30 Boxes)
  const [box4, setBox4] = useState({
    gapX: 16,
    gapY: 16,
    radius: 32,
    padding: 24,
  });
  const [box4GapLinked, setBox4GapLinked] = useState<boolean>(true);

  const [activePresetId, setActivePresetId] = useState<string | null>("user-request");
  const [inspectMode, setInspectMode] = useState<boolean>(false);
  const [scaleFactor, setScaleFactor] = useState<number>(1.0);
  const [canvasTheme, setCanvasTheme] = useState<"figma-dark" | "figma-light" | "pure-white">("figma-dark");
  const [isCssModalOpen, setIsCssModalOpen] = useState<boolean>(false);

  // Handlers for Box 1 X & Y Gap
  const handleBox1GapXChange = (v: number) => {
    setActivePresetId(null);
    if (box1GapLinked) {
      setBox1((prev) => ({ ...prev, gapX: v, gapY: v }));
    } else {
      setBox1((prev) => ({ ...prev, gapX: v }));
    }
  };

  const handleBox1GapYChange = (v: number) => {
    setActivePresetId(null);
    if (box1GapLinked) {
      setBox1((prev) => ({ ...prev, gapX: v, gapY: v }));
    } else {
      setBox1((prev) => ({ ...prev, gapY: v }));
    }
  };

  // Handlers for Box 3 Y & X Padding
  const handleBox3PadYChange = (v: number) => {
    setActivePresetId(null);
    if (box3PadLinked) {
      setBox3((prev) => ({ ...prev, padY: v, padX: v }));
    } else {
      setBox3((prev) => ({ ...prev, padY: v }));
    }
  };

  const handleBox3PadXChange = (v: number) => {
    setActivePresetId(null);
    if (box3PadLinked) {
      setBox3((prev) => ({ ...prev, padY: v, padX: v }));
    } else {
      setBox3((prev) => ({ ...prev, padX: v }));
    }
  };

  // Handlers for Box 4 X & Y Gap
  const handleBox4GapXChange = (v: number) => {
    setActivePresetId(null);
    if (box4GapLinked) {
      setBox4((prev) => ({ ...prev, gapX: v, gapY: v }));
    } else {
      setBox4((prev) => ({ ...prev, gapX: v }));
    }
  };

  const handleBox4GapYChange = (v: number) => {
    setActivePresetId(null);
    if (box4GapLinked) {
      setBox4((prev) => ({ ...prev, gapX: v, gapY: v }));
    } else {
      setBox4((prev) => ({ ...prev, gapY: v }));
    }
  };

  const handleSelectPreset = (preset: Preset) => {
    setActivePresetId(preset.id);
    if (preset.id === "user-request") {
      setBox1({ fontSize: 32, gapX: 24, gapY: 24, padding: 24 });
      setBox2({ headingSize: 32, subheadingSize: 24, gapY: 20, padding: 24 });
      setBox3({ fontSize: 20, padY: 16, padX: 24, gap: 20, radius: 32 });
      setBox4({ gapX: 20, gapY: 20, radius: 32, padding: 24 });
      setBox1GapLinked(true);
      setBox3PadLinked(false);
      setBox4GapLinked(true);
    } else if (preset.id === "standard-web") {
      setBox1({ fontSize: 16, gapX: 16, gapY: 16, padding: 16 });
      setBox2({ headingSize: 28, subheadingSize: 20, gapY: 12, padding: 20 });
      setBox3({ fontSize: 15, padY: 10, padX: 18, gap: 12, radius: 8 });
      setBox4({ gapX: 12, gapY: 12, radius: 8, padding: 16 });
      setBox1GapLinked(true);
      setBox3PadLinked(false);
      setBox4GapLinked(true);
    } else if (preset.id === "dense-saas") {
      setBox1({ fontSize: 13, gapX: 10, gapY: 10, padding: 12 });
      setBox2({ headingSize: 22, subheadingSize: 16, gapY: 8, padding: 14 });
      setBox3({ fontSize: 13, padY: 8, padX: 14, gap: 8, radius: 6 });
      setBox4({ gapX: 8, gapY: 8, radius: 6, padding: 12 });
      setBox1GapLinked(true);
      setBox3PadLinked(false);
      setBox4GapLinked(true);
    } else {
      setBox1({ fontSize: preset.tokens.bodyFontSize, gapX: preset.tokens.gapX, gapY: preset.tokens.gapY, padding: preset.tokens.padding });
      setBox2({ headingSize: preset.tokens.headingFontSize, subheadingSize: preset.tokens.subheadingFontSize, gapY: preset.tokens.gapY, padding: preset.tokens.padding });
      setBox3({ fontSize: preset.tokens.buttonFontSize, padY: preset.tokens.buttonPaddingY, padX: preset.tokens.buttonPaddingX, gap: preset.tokens.gapX, radius: preset.tokens.borderRadius });
      setBox4({ gapX: preset.tokens.gapX, gapY: preset.tokens.gapY, radius: preset.tokens.borderRadius, padding: preset.tokens.padding });
    }
  };

  const handleReset = () => {
    setActivePresetId(null);
    setBox1({ fontSize: 16, gapX: 16, gapY: 16, padding: 16 });
    setBox2({ headingSize: 32, subheadingSize: 22, gapY: 16, padding: 20 });
    setBox3({ fontSize: 16, padY: 12, padX: 20, gap: 16, radius: 16 });
    setBox4({ gapX: 16, gapY: 16, radius: 16, padding: 20 });
    setBox1GapLinked(true);
    setBox3PadLinked(false);
    setBox4GapLinked(true);
  };

  // Aggregated tokens for CSS modal
  const combinedTokens: DesignTokens = {
    ...DEFAULT_TOKENS,
    bodyFontSize: box1.fontSize,
    headingFontSize: box2.headingSize,
    subheadingFontSize: box2.subheadingSize,
    buttonFontSize: box3.fontSize,
    buttonPaddingY: box3.padY,
    buttonPaddingX: box3.padX,
    padding: box1.padding,
    paddingX: box1.padding,
    paddingY: box1.padding,
    gapX: box1.gapX,
    gapY: box1.gapY,
    borderRadius: box3.radius,
  };

  return (
    <div className="min-h-screen bg-[#070b12] text-neutral-100 flex flex-col font-sans">
      {/* 1. Header with Presets, Zoom, Theme, and Export */}
      <Navbar
        tokens={combinedTokens}
        onSelectPreset={handleSelectPreset}
        onReset={handleReset}
        activePresetId={activePresetId}
        inspectMode={inspectMode}
        onToggleInspect={() => setInspectMode((prev) => !prev)}
        scaleFactor={scaleFactor}
        onChangeScale={setScaleFactor}
        canvasTheme={canvasTheme}
        onChangeCanvasTheme={setCanvasTheme}
        onOpenCssModal={() => setIsCssModalOpen(true)}
      />

      {/* 2. Main 2-Column Grid with Direct Per-Box Controls & X/Y Link Toggles */}
      <main
        className="flex-1 max-w-[1600px] w-full mx-auto px-4 sm:px-6 py-6 transition-all duration-200"
        style={{
          transform: scaleFactor !== 1.0 ? `scale(${scaleFactor})` : undefined,
          transformOrigin: "top center",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Box 1: Plain Text in Row & Y Direction */}
          <ComponentCard
            id="plain-text"
            number="01"
            title="Plain Text (Row & Y)"
            tag="Text Spacing"
            cssSnippet={`/* Plain Text in X & Y */\nfont-size: ${box1.fontSize}px;\ncolumn-gap: ${box1.gapX}px;\nrow-gap: ${box1.gapY}px;\npadding: ${box1.padding}px;`}
            canvasTheme={canvasTheme}
            controls={
              <div className="flex flex-wrap items-center gap-1.5">
                <FilterPill
                  label="Font"
                  value={box1.fontSize}
                  onChange={(v) => {
                    setActivePresetId(null);
                    setBox1((prev) => ({ ...prev, fontSize: v }));
                  }}
                  color="blue"
                />

                {/* Gap X and Gap Y with Link Button in between */}
                <div className="flex items-center gap-1">
                  <FilterPill
                    label="Gap X"
                    value={box1.gapX}
                    onChange={handleBox1GapXChange}
                    color="purple"
                  />
                  <LinkButton
                    isLinked={box1GapLinked}
                    onToggle={() => {
                      setBox1GapLinked((prev) => {
                        const next = !prev;
                        if (next) {
                          setBox1((p) => ({ ...p, gapY: p.gapX }));
                        }
                        return next;
                      });
                    }}
                    titleLinked="Gap X & Y linked: changing either syncs both (click to unlink)"
                    titleUnlinked="Gap X & Y unlinked: changing one only reflects on that one (click to link)"
                  />
                  <FilterPill
                    label="Gap Y"
                    value={box1.gapY}
                    onChange={handleBox1GapYChange}
                    color="purple"
                  />
                </div>

                <FilterPill
                  label="Padding"
                  value={box1.padding}
                  onChange={(v) => {
                    setActivePresetId(null);
                    setBox1((prev) => ({ ...prev, padding: v }));
                  }}
                  color="emerald"
                />
              </div>
            }
          >
            <PlainTextPreview
              fontSize={box1.fontSize}
              gapX={box1.gapX}
              gapY={box1.gapY}
              padding={box1.padding}
              inspectMode={inspectMode}
              canvasTheme={canvasTheme}
            />
          </ComponentCard>

          {/* Box 2: Heading & Subheading */}
          <ComponentCard
            id="heading-subheading"
            number="02"
            title="Heading & Subheading"
            tag="Typography"
            cssSnippet={`/* Typography per skills.md */\nfont-family: 'Google Sans Flex', sans-serif;\nh1 { font-size: ${box2.headingSize}px; letter-spacing: -0.025em; }\nh2 { font-size: ${box2.subheadingSize}px; color: #737373; }\nrow-gap: ${box2.gapY}px;\npadding: ${box2.padding}px;`}
            canvasTheme={canvasTheme}
            controls={
              <div className="flex flex-wrap items-center gap-1.5">
                <FilterPill
                  label="Heading"
                  value={box2.headingSize}
                  onChange={(v) => {
                    setActivePresetId(null);
                    setBox2((prev) => ({ ...prev, headingSize: v }));
                  }}
                  color="blue"
                />
                <FilterPill
                  label="Subhead"
                  value={box2.subheadingSize}
                  onChange={(v) => {
                    setActivePresetId(null);
                    setBox2((prev) => ({ ...prev, subheadingSize: v }));
                  }}
                  color="blue"
                />
                <FilterPill
                  label="Gap Y"
                  value={box2.gapY}
                  onChange={(v) => {
                    setActivePresetId(null);
                    setBox2((prev) => ({ ...prev, gapY: v }));
                  }}
                  color="purple"
                />
                <FilterPill
                  label="Padding"
                  value={box2.padding}
                  onChange={(v) => {
                    setActivePresetId(null);
                    setBox2((prev) => ({ ...prev, padding: v }));
                  }}
                  color="emerald"
                />
              </div>
            }
          >
            <HeadingSubheadingPreview
              headingSize={box2.headingSize}
              subheadingSize={box2.subheadingSize}
              gapY={box2.gapY}
              padding={box2.padding}
              inspectMode={inspectMode}
              canvasTheme={canvasTheme}
            />
          </ComponentCard>

          {/* Box 3: Buttons (Flex in X & Stack in Y) */}
          <ComponentCard
            id="buttons"
            number="03"
            title="Buttons (Flex & Y)"
            tag="Buttons"
            cssSnippet={`/* Primary Button per skills.md */\nbackground: linear-gradient(to bottom, #3b82f6, #1d4ed8);\nbox-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 4px 14px rgba(29,78,216,0.45);\nfont-size: ${box3.fontSize}px;\npadding: ${box3.padY}px ${box3.padX}px;\nborder-radius: ${box3.radius}px;\ngap: ${box3.gap}px;`}
            canvasTheme={canvasTheme}
            controls={
              <div className="flex flex-wrap items-center gap-1.5">
                <FilterPill
                  label="Font"
                  value={box3.fontSize}
                  onChange={(v) => {
                    setActivePresetId(null);
                    setBox3((prev) => ({ ...prev, fontSize: v }));
                  }}
                  color="blue"
                />

                {/* Pad Y and Pad X with Link Button in between */}
                <div className="flex items-center gap-1">
                  <FilterPill
                    label="Pad Y"
                    value={box3.padY}
                    onChange={handleBox3PadYChange}
                    color="emerald"
                  />
                  <LinkButton
                    isLinked={box3PadLinked}
                    onToggle={() => {
                      setBox3PadLinked((prev) => {
                        const next = !prev;
                        if (next) {
                          setBox3((p) => ({ ...p, padX: p.padY }));
                        }
                        return next;
                      });
                    }}
                    titleLinked="Padding Y & X linked: changing either syncs both (click to unlink)"
                    titleUnlinked="Padding Y & X unlinked: changing one only reflects on that one (click to link)"
                  />
                  <FilterPill
                    label="Pad X"
                    value={box3.padX}
                    onChange={handleBox3PadXChange}
                    color="emerald"
                  />
                </div>

                <FilterPill
                  label="Gap"
                  value={box3.gap}
                  onChange={(v) => {
                    setActivePresetId(null);
                    setBox3((prev) => ({ ...prev, gap: v }));
                  }}
                  color="purple"
                />
                <FilterPill
                  label="Radius"
                  value={box3.radius}
                  onChange={(v) => {
                    setActivePresetId(null);
                    setBox3((prev) => ({ ...prev, radius: v }));
                  }}
                  color="pink"
                />
              </div>
            }
          >
            <ButtonsPreview
              fontSize={box3.fontSize}
              padY={box3.padY}
              padX={box3.padX}
              gap={box3.gap}
              radius={box3.radius}
              inspectMode={inspectMode}
              canvasTheme={canvasTheme}
            />
          </ComponentCard>

          {/* Box 4: Boxes of Size 40x30 in Grid */}
          <ComponentCard
            id="grid-boxes"
            number="04"
            title="Boxes 40×30 in Grid"
            tag="Grid Units"
            cssSnippet={`/* Grid of 40x30 Boxes */\ngrid-template-columns: repeat(6, 40px);\ncolumn-gap: ${box4.gapX}px;\nrow-gap: ${box4.gapY}px;\nborder-radius: ${box4.radius}px;\npadding: ${box4.padding}px;`}
            canvasTheme={canvasTheme}
            controls={
              <div className="flex flex-wrap items-center gap-1.5">
                {/* Gap X and Gap Y with Link Button in between */}
                <div className="flex items-center gap-1">
                  <FilterPill
                    label="Gap X"
                    value={box4.gapX}
                    onChange={handleBox4GapXChange}
                    color="purple"
                  />
                  <LinkButton
                    isLinked={box4GapLinked}
                    onToggle={() => {
                      setBox4GapLinked((prev) => {
                        const next = !prev;
                        if (next) {
                          setBox4((p) => ({ ...p, gapY: p.gapX }));
                        }
                        return next;
                      });
                    }}
                    titleLinked="Grid Gap X & Y linked: changing either syncs both (click to unlink)"
                    titleUnlinked="Grid Gap X & Y unlinked: changing one only reflects on that one (click to link)"
                  />
                  <FilterPill
                    label="Gap Y"
                    value={box4.gapY}
                    onChange={handleBox4GapYChange}
                    color="purple"
                  />
                </div>

                <FilterPill
                  label="Radius"
                  value={box4.radius}
                  onChange={(v) => {
                    setActivePresetId(null);
                    setBox4((prev) => ({ ...prev, radius: v }));
                  }}
                  color="pink"
                />
                <FilterPill
                  label="Padding"
                  value={box4.padding}
                  onChange={(v) => {
                    setActivePresetId(null);
                    setBox4((prev) => ({ ...prev, padding: v }));
                  }}
                  color="emerald"
                />
              </div>
            }
          >
            <GridBoxesPreview
              gapX={box4.gapX}
              gapY={box4.gapY}
              radius={box4.radius}
              padding={box4.padding}
              inspectMode={inspectMode}
              canvasTheme={canvasTheme}
            />
          </ComponentCard>
        </div>
      </main>

      {/* 3. Export CSS Modal */}
      <CssModal
        tokens={combinedTokens}
        isOpen={isCssModalOpen}
        onClose={() => setIsCssModalOpen(false)}
      />
    </div>
  );
}
