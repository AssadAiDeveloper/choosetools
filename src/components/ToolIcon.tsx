interface Props { icon: string; color: string; size?: number }

const PATHS: Record<string, string> = {
  merge: "M4 6h6v4H4zM4 14h6v4H4zM14 10h6v4h-6zM10 8l4 3M10 16l4-3",
  split: "M4 10h6v4H4zM14 4h6v4h-6zM14 16h6v4h-6zM10 12l4-5M10 12l4 5",
  rotate: "M12 4a8 8 0 1 1-8 8M4 12V6M4 12h6",
  delete: "M5 7h14M9 7V5h6v2M7 7l1 12h8l1-12M10 11v5M14 11v5",
  img2pdf: "M4 4h8v8H4zM6 9l2-2 3 3M14 12h6v8h-6zM15 15h4M15 17.5h4",
  pdf2img: "M4 4h6v8H4zM5 6h4M5 8h4M12 12h8v8h-8zM14 17l2-2 3 3",
  compress: "M12 3v6m0 0-3-3m3 3 3-3M12 21v-6m0 0-3 3m3-3 3 3M4 12h16",
  resize: "M4 4h16v16H4zM4 4l7 7M8 4H4v4M20 20l-7-7M16 20h4v-4",
  convert: "M4 8h12l-3-3M20 16H8l3 3",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4",
  count: "M4 6h16M4 12h10M4 18h13",
  case: "M4 18 9 6l5 12M6 14h6M15 18l3-8 3 8M16.5 15.5h3.5",
  key: "M14 10a4 4 0 1 0-4 4l1-1v3h3v-3h3v-3z",
  qr: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h3v3h-3zM17 17h3v3h-3z",
  code: "M9 6 4 12l5 6M15 6l5 6-5 6",
  "text-ar": "M17 5c-6 0-9 3-9 8 0 3 2 5 5 5M8 19h9M12 3h.01",
  numbers: "M6 4v16M4 8l2-2M12 8c0-2 4-2 4 0 0 3-4 3-4 6h4M12 18h.01",
  calendar: "M5 6h14v14H5zM5 10h14M9 4v4M15 4v4M9 14h2M13 14h2M9 17h2",
  bank: "M3 10h18M5 10V8l7-4 7 4v2M6 10v7M10 10v7M14 10v7M18 10v7M4 17h16v3H4z",
  info: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M12 11v5M12 8h.01",
  flip: "M12 3v18M8 7H4v10h4M16 7h4v10h-4M8 7l-4 5 4 5M16 7l4 5-4 5",
  pixel: "M4 4h5v5H4zM10 10h4v4h-4zM15 4h5v5h-5zM4 15h5v5H4zM15 15h5v5h-5z",
  round: "M4 12V9a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5",
  morse: "M4 8h.01M8 8h4M16 8h.01M20 8h.01M4 16h4M12 16h.01M16 16h4",
  dice: "M5 5h14v14H5zM9 9h.01M15 9h.01M12 12h.01M9 15h.01M15 15h.01",
  palette: "M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.5-2s0-2 1.5-2h2a4 4 0 0 0 4-5c-1-5-4.5-9-9-9M7.5 10h.01M11 6.5h.01M15.5 8h.01M7 14h.01",
  clock: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M12 8v4l3 2",
  sort: "M7 4v16M7 20l-3-3M7 20l3-3M17 20V4M17 4l-3 3M17 4l3 3",
  replace: "M4 7h9M13 7l-3-3M13 7l-3 3M20 17h-9M11 17l3-3M11 17l3 3",
  keyboard: "M3 7h18v10H3zM6 10h.01M9 10h.01M12 10h.01M15 10h.01M18 10h.01M7 14h10",
  coin: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M12 8v8M14.5 9.5c-.5-1-4.5-1.2-4.5.7s4.8 1 4.5 3c-.3 1.7-4 1.6-4.8.3",
  reorder: "M5 7h14M5 12h14M5 17h14M3 7l1 1 2-2M3 12l1 1 2-2M3 17l1 1 2-2",
  watermark: "M5 4h14v16H5zM8 15l8-8M9 18l9-9",
  crop: "M7 3v14h14M3 7h14v14M7 7h10v10",
  circle: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M4 4l3 3M20 20l-3-3",
  blur: "M12 3c4 5 7 8 7 12a7 7 0 0 1-14 0c0-4 3-7 7-12M9 14a3 3 0 0 0 3 3",
  filters: "M4 6h16M7 12h10M10 18h4M6 4v4M14 10v4M11 16v4",
  favicon: "M4 4h16v16H4zM4 9h16M9 9v11M6 6.5h.01",
  picker: "M13 5l6 6-8 8H5v-6zM15 3l6 6M11 7l6 6",
  id: "M4 5h16v14H4zM8 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5 17c1-2 2-3 3-3s2 1 3 3M14 9h5M14 12h5M14 15h3",
  link: "M9 15l6-6M8 12l-2 2a3.5 3.5 0 0 0 5 5l2-2M16 12l2-2a3.5 3.5 0 0 0-5-5l-2 2",
  hash: "M9 4 7 20M17 4l-2 16M4 9h17M3 15h17",
  dedupe: "M5 6h14M5 10h14M5 14h9M5 18h9M17 14l2 2 3-3",
  diff: "M4 4h7v16H4zM13 4h7v16h-7zM6 9h3M16 9h2M16 13h2M7.5 12v3M6 13.5h3",
  table: "M4 5h16v14H4zM4 10h16M4 15h16M10 5v14M16 5v14",
  tafqit: "M6 4v7M4 6.5l2-2M10 8h.01M13 5c2 0 3 1 3 2.5S14 10 13 10m0 0c2 0 3.5 1 3.5 2.5S15 15 13 15M4 19c2-2 4-1 6 0s4 1 6 0",

};

export function ToolIcon({ icon, color, size = 26 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={PATHS[icon] ?? PATHS.convert} />
    </svg>
  );
}
