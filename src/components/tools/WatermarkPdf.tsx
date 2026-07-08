"use client";

import { useState } from "react";
import { SinglePdfShell } from "./SinglePdfShell";

export default function WatermarkPdf() {
  const [text, setText] = useState("CONFIDENTIAL");
  const [opacity, setOpacity] = useState(0.18);

  return (
    <SinglePdfShell
      outName="watermarked.pdf"
      options={
        <div className="flex flex-wrap items-center gap-4 rounded-card border border-line bg-white p-4">
          <input
            dir="ltr"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={40}
            className="flex-1 min-w-40 rounded-lg border border-line px-3 py-2 font-mono"
          />
          <label className="flex items-center gap-3 text-sm font-medium">
            <input type="range" min={5} max={50} value={opacity * 100}
              onChange={(e) => setOpacity(+e.target.value / 100)} className="accent-brand-600" />
            <span className="w-10 font-mono text-brand-700">{Math.round(opacity * 100)}%</span>
          </label>
        </div>
      }
      process={async (file) => {
        const { PDFDocument, StandardFonts, rgb, degrees } = await import("pdf-lib");
        const doc = await PDFDocument.load(await file.arrayBuffer(), { ignoreEncryption: true });
        const font = await doc.embedFont(StandardFonts.HelveticaBold);
        for (const page of doc.getPages()) {
          const { width, height } = page.getSize();
          const size = Math.min(width, height) / (text.length * 0.42);
          const textWidth = font.widthOfTextAtSize(text, size);
          page.drawText(text, {
            x: width / 2 - textWidth / 2.8,
            y: height / 2 - size / 2,
            size,
            font,
            color: rgb(0.4, 0.4, 0.4),
            opacity,
            rotate: degrees(35),
          });
        }
        const bytes = await doc.save();
        return new Blob([bytes as unknown as ArrayBuffer], { type: "application/pdf" });
      }}
    />
  );
}
