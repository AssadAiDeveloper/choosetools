export const SITE_NAME = "ChooseTools";
export const SITE_URL = "https://choosetools.com";

export type Category = "pdf" | "image" | "text" | "arabic";

export interface Tool {
  slug: string;
  category: Category;
  icon: string; // emoji-free inline label used by ToolIcon
  component: string; // key in the component map
}

export const CATEGORIES: Category[] = ["pdf", "image", "text", "arabic"];

export const TOOLS: Tool[] = [
  // PDF
  { slug: "merge-pdf", category: "pdf", icon: "merge", component: "MergePdf" },
  { slug: "split-pdf", category: "pdf", icon: "split", component: "SplitPdf" },
  { slug: "rotate-pdf", category: "pdf", icon: "rotate", component: "RotatePdf" },
  { slug: "delete-pdf-pages", category: "pdf", icon: "delete", component: "DeletePdfPages" },
  { slug: "jpg-to-pdf", category: "pdf", icon: "img2pdf", component: "JpgToPdf" },
  { slug: "pdf-to-jpg", category: "pdf", icon: "pdf2img", component: "PdfToJpg" },
  { slug: "compress-pdf", category: "pdf", icon: "compress", component: "CompressPdf" },
  // Image
  { slug: "compress-image", category: "image", icon: "compress", component: "CompressImage" },
  { slug: "resize-image", category: "image", icon: "resize", component: "ResizeImage" },
  { slug: "convert-image", category: "image", icon: "convert", component: "ConvertImage" },
  { slug: "heic-to-jpg", category: "image", icon: "convert", component: "HeicToJpg" },
  { slug: "rotate-image", category: "image", icon: "rotate", component: "RotateImage" },
  { slug: "remove-exif", category: "image", icon: "shield", component: "RemoveExif" },
  // Text & developer
  { slug: "word-counter", category: "text", icon: "count", component: "WordCounter" },
  { slug: "case-converter", category: "text", icon: "case", component: "CaseConverter" },
  { slug: "password-generator", category: "text", icon: "key", component: "PasswordGenerator" },
  { slug: "qr-generator", category: "text", icon: "qr", component: "QrGenerator" },
  { slug: "json-formatter", category: "text", icon: "code", component: "JsonFormatter" },
  { slug: "base64", category: "text", icon: "code", component: "Base64Tool" },
  { slug: "reorder-pdf", category: "pdf", icon: "reorder", component: "ReorderPdf" },
  { slug: "watermark-pdf", category: "pdf", icon: "watermark", component: "WatermarkPdf" },
  { slug: "page-numbers-pdf", category: "pdf", icon: "numbers", component: "PageNumbersPdf" },
  { slug: "crop-image", category: "image", icon: "crop", component: "CropImage" },
  { slug: "circle-crop", category: "image", icon: "circle", component: "CircleCrop" },
  { slug: "blur-image", category: "image", icon: "blur", component: "BlurImage" },
  { slug: "image-filters", category: "image", icon: "filters", component: "ImageFilters" },
  { slug: "image-to-base64", category: "image", icon: "code", component: "ImageToBase64" },
  { slug: "favicon-generator", category: "image", icon: "favicon", component: "FaviconGenerator" },
  { slug: "color-picker", category: "image", icon: "picker", component: "ColorPicker" },
  { slug: "svg-to-png", category: "image", icon: "convert", component: "SvgToPng" },
  { slug: "id-photo", category: "image", icon: "id", component: "IdPhoto" },
  { slug: "url-encode", category: "text", icon: "link", component: "UrlEncode" },
  { slug: "uuid-generator", category: "text", icon: "key", component: "UuidGenerator" },
  { slug: "hash-generator", category: "text", icon: "hash", component: "HashGenerator" },
  { slug: "remove-duplicate-lines", category: "text", icon: "dedupe", component: "RemoveDuplicateLines" },
  { slug: "text-diff", category: "text", icon: "diff", component: "TextDiff" },
  { slug: "lorem-ipsum", category: "text", icon: "count", component: "LoremIpsum" },
  { slug: "markdown-to-html", category: "text", icon: "code", component: "MarkdownToHtml" },
  { slug: "csv-json", category: "text", icon: "table", component: "CsvJson" },
  { slug: "extract-pdf-pages", category: "pdf", icon: "split", component: "ExtractPdfPages" },
  { slug: "pdf-to-text", category: "pdf", icon: "text-ar", component: "PdfToText" },
  { slug: "png-to-pdf", category: "pdf", icon: "convert", component: "PngToPdf" },
  { slug: "pdf-metadata", category: "pdf", icon: "info", component: "PdfMetadata" },
  { slug: "grayscale-pdf", category: "pdf", icon: "filters", component: "GrayscalePdf" },
  { slug: "flip-image", category: "image", icon: "flip", component: "FlipImage" },
  { slug: "png-to-jpg", category: "image", icon: "convert", component: "PngToJpg" },
  { slug: "webp-to-jpg", category: "image", icon: "convert", component: "WebpToJpg" },
  { slug: "jpg-to-webp", category: "image", icon: "convert", component: "JpgToWebp" },
  { slug: "add-text-to-image", category: "image", icon: "watermark", component: "AddTextToImage" },
  { slug: "pixelate-image", category: "image", icon: "pixel", component: "PixelateImage" },
  { slug: "round-corners", category: "image", icon: "round", component: "RoundCorners" },
  { slug: "reverse-text", category: "text", icon: "flip", component: "ReverseText" },
  { slug: "text-to-slug", category: "text", icon: "link", component: "TextToSlug" },
  { slug: "binary-text", category: "text", icon: "code", component: "BinaryText" },
  { slug: "morse-code", category: "text", icon: "morse", component: "MorseCode" },
  { slug: "number-base", category: "text", icon: "hash", component: "NumberBase" },
  { slug: "roman-numerals", category: "text", icon: "numbers", component: "RomanNumerals" },
  { slug: "random-number", category: "text", icon: "dice", component: "RandomNumber" },
  { slug: "color-converter", category: "text", icon: "palette", component: "ColorConverter" },
  { slug: "css-minifier", category: "text", icon: "code", component: "CssMinifier" },
  { slug: "html-encode", category: "text", icon: "code", component: "HtmlEncode" },
  { slug: "timestamp-converter", category: "text", icon: "clock", component: "TimestampConverter" },
  { slug: "sort-lines", category: "text", icon: "sort", component: "SortLines" },
  { slug: "find-replace", category: "text", icon: "replace", component: "FindReplace" },
  { slug: "excel-to-csv", category: "text", icon: "table", component: "ExcelToCsv" },
  { slug: "csv-to-excel", category: "text", icon: "table", component: "CsvToExcel" },
  { slug: "excel-to-json", category: "text", icon: "table", component: "ExcelToJson" },
  { slug: "json-to-excel", category: "text", icon: "table", component: "JsonToExcel" },
  { slug: "mt940-to-excel", category: "text", icon: "bank", component: "Mt940ToExcel" },
  // Arabic-exclusive
  { slug: "remove-tashkeel", category: "arabic", icon: "text-ar", component: "RemoveTashkeel" },
  { slug: "arabic-numerals", category: "arabic", icon: "numbers", component: "ArabicNumerals" },
  { slug: "hijri-gregorian", category: "arabic", icon: "calendar", component: "HijriGregorian" },
  { slug: "tafqit", category: "arabic", icon: "tafqit", component: "Tafqit" },
  { slug: "arabic-keyboard", category: "arabic", icon: "keyboard", component: "ArabicKeyboard" },
  { slug: "arabic-transliteration", category: "arabic", icon: "text-ar", component: "ArabicTransliteration" },
  { slug: "zakat-calculator", category: "arabic", icon: "coin", component: "ZakatCalculator" },
  { slug: "age-calculator", category: "arabic", icon: "calendar", component: "AgeCalculator" },
];

/** Popular tools surfaced in the footer for internal linking */
export const POPULAR_SLUGS = [
  "merge-pdf",
  "compress-image",
  "heic-to-jpg",
  "qr-generator",
  "hijri-gregorian",
  "remove-tashkeel",
];

export function toolsByCategory(cat: Category): Tool[] {
  return TOOLS.filter((t) => t.category === cat);
}

export function findTool(category: string, slug: string): Tool | undefined {
  return TOOLS.find((t) => t.category === category && t.slug === slug);
}

export const CATEGORY_COLOR: Record<Category, string> = {
  pdf: "var(--color-cat-pdf)",
  image: "var(--color-cat-image)",
  text: "var(--color-cat-text)",
  arabic: "var(--color-cat-arabic)",
};
