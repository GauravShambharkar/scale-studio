const fs = require("fs");
const path = require("path");
const { compile } = require("../node_modules/@tailwindcss/node/dist/index.js");
const { Scanner } = require("../node_modules/@tailwindcss/oxide/index.js");

async function build() {
  const baseDir = path.resolve(__dirname, "..");
  const inputCssPath = path.join(baseDir, "src", "app", "input.css");
  const outputCssPath = path.join(baseDir, "src", "app", "globals.css");

  // Read input.css or create it if not present
  if (!fs.existsSync(inputCssPath)) {
    fs.writeFileSync(
      inputCssPath,
      `@import "tailwindcss";

:root {
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

body {
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom smooth scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.6);
}

::-webkit-scrollbar-thumb {
  background: rgba(100, 116, 139, 0.4);
  border-radius: 9999px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(148, 163, 184, 0.6);
}

.inspect-padding-pattern {
  background-image: repeating-linear-gradient(
    45deg,
    rgba(34, 197, 94, 0.18),
    rgba(34, 197, 94, 0.18) 6px,
    rgba(34, 197, 94, 0.28) 6px,
    rgba(34, 197, 94, 0.28) 12px
  );
}

.inspect-margin-pattern {
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(249, 115, 22, 0.18),
    rgba(249, 115, 22, 0.18) 6px,
    rgba(249, 115, 22, 0.28) 6px,
    rgba(249, 115, 22, 0.28) 12px
  );
}

.inspect-gap-pattern {
  background-image: repeating-linear-gradient(
    45deg,
    rgba(168, 85, 247, 0.2),
    rgba(168, 85, 247, 0.2) 4px,
    rgba(168, 85, 247, 0.35) 4px,
    rgba(168, 85, 247, 0.35) 8px
  );
}

.figma-canvas-grid {
  background-size: 24px 24px;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
}

.figma-canvas-grid-light {
  background-size: 24px 24px;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.12) 1px, transparent 1px);
}
`,
      "utf-8"
    );
  }

  const rawCss = fs.readFileSync(inputCssPath, "utf-8");

  const compiler = await compile(rawCss, {
    base: baseDir,
    from: inputCssPath,
    onDependency: () => {},
  });

  const scanner = new Scanner({
    sources: [
      {
        base: baseDir,
        pattern: "src/**/*.{tsx,ts,jsx,js,html}",
        negated: false,
      },
    ],
  });

  const candidates = scanner.scan();
  console.log(`[Tailwind Compiler] Scanned and found ${candidates.length} class candidates.`);

  const compiledCss = compiler.build(candidates);

  fs.writeFileSync(outputCssPath, compiledCss, "utf-8");
  console.log(`[Tailwind Compiler] Successfully generated ${outputCssPath} (${compiledCss.length} bytes)!`);
}

build().catch((err) => {
  console.error("[Tailwind Compiler Error]", err);
  process.exit(1);
});

