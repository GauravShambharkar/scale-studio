import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Figma to Code Scale Visualizer | Design Scale Testing Tool",
  description: "Test real-world pixel values (font size, padding, margin, gaps, border radius) across UI components to fix the Figma-to-code scaling discrepancy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-[#0b0f17] text-[#f1f5f9] selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}
