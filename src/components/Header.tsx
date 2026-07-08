"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { CATEGORIES } from "@/lib/tools";
import { Logo } from "./Logo";

const LOCALE_LABELS: Record<string, string> = {
  en: "English",
  ar: "العربية",
  es: "Español",
};

export function Header() {
  const t = useTranslations("nav");
  const tp = useTranslations("privacy");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4">
        <Link href="/" className="shrink-0" aria-label="ChooseTools home">
          <Logo />
        </Link>

        <nav className="ms-6 hidden md:flex items-center gap-5 text-sm font-medium text-ink-soft">
          {CATEGORIES.map((c) => (
            <Link key={c} href={`/${c}`} className="transition hover:text-brand-700">
              {t(c)}
            </Link>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-3">
          <span
            className="hidden lg:flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 font-mono text-[11px] text-brand-700"
            title={tp("note")}
          >
            <span className="privacy-dot inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
            {tp("badge")}
          </span>

          <select
            aria-label="Language"
            className="rounded-lg border border-line bg-white px-2 py-1.5 text-sm text-ink"
            value={locale}
            onChange={(e) => router.replace(pathname, { locale: e.target.value })}
          >
            {Object.entries(LOCALE_LABELS).map(([code, label]) => (
              <option key={code} value={code}>{label}</option>
            ))}
          </select>

          <button
            onClick={() => setOpen(!open)}
            aria-label={t("menu")}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-white md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-4 py-3 md:hidden">
          <ul className="space-y-1">
            {CATEGORIES.map((c) => (
              <li key={c}>
                <Link
                  href={`/${c}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-medium text-ink hover:bg-brand-50 hover:text-brand-700"
                >
                  {t(c)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
