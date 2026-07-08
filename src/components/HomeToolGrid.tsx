"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { TOOLS, CATEGORIES, CATEGORY_COLOR, type Category } from "@/lib/tools";
import { ToolIcon } from "./ToolIcon";

export function HomeToolGrid() {
  const t = useTranslations();
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return TOOLS;
    return TOOLS.filter((tool) => {
      const name = t(`tools.${tool.slug}.name`).toLowerCase();
      const desc = t(`tools.${tool.slug}.desc`).toLowerCase();
      return (
        name.includes(needle) ||
        desc.includes(needle) ||
        tool.slug.includes(needle)
      );
    });
  }, [q, t]);

  return (
    <div>
      <div className="mx-auto max-w-xl">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t("home.search")}
          className="w-full rounded-xl border border-line bg-white px-5 py-3.5 text-base shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        />
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-ink-soft">{t("home.noResults")}</p>
      )}

      <div className="mt-10 space-y-10">
        {CATEGORIES.map((cat) => {
          const tools = filtered.filter((tool) => tool.category === cat);
          if (tools.length === 0) return null;
          return <CategoryBlock key={cat} cat={cat} tools={tools} />;
        })}
      </div>
    </div>
  );
}

function CategoryBlock({
  cat,
  tools,
}: {
  cat: Category;
  tools: typeof TOOLS;
}) {
  const t = useTranslations();
  const color = CATEGORY_COLOR[cat];
  return (
    <section>
      <div className="mb-4 flex items-center gap-3">
        <span className="h-5 w-1 rounded-full" style={{ background: color }} />
        <h2 className="text-lg font-semibold">{t(`categories.${cat}.name`)}</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/${tool.category}/${tool.slug}`}
            className="group flex items-start gap-3.5 rounded-card border border-line bg-white p-4 transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-md"
          >
            <span
              className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              style={{ background: `color-mix(in srgb, ${color} 10%, white)` }}
            >
              <ToolIcon icon={tool.icon} color={color} />
            </span>
            <span>
              <span className="block font-semibold group-hover:text-brand-700">
                {t(`tools.${tool.slug}.name`)}
              </span>
              <span className="mt-0.5 block text-sm leading-snug text-ink-soft">
                {t(`tools.${tool.slug}.desc`)}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
