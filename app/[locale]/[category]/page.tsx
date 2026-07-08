import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { CATEGORIES, toolsByCategory, CATEGORY_COLOR, SITE_NAME, type Category } from "@/lib/tools";
import { ToolIcon } from "@/components/ToolIcon";

interface Params { locale: string; category: string }

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    CATEGORIES.map((category) => ({ locale, category }))
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, category } = await params;
  if (!CATEGORIES.includes(category as Category)) return {};
  const t = await getTranslations({ locale, namespace: `categories.${category}` });
  return { title: `${t("name")} — ${SITE_NAME}`, description: t("desc") };
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { locale, category } = await params;
  setRequestLocale(locale);
  if (!CATEGORIES.includes(category as Category)) notFound();

  const cat = category as Category;
  const t = await getTranslations(`categories.${cat}`);
  const tools = toolsByCategory(cat);
  const color = CATEGORY_COLOR[cat];

  const items = await Promise.all(
    tools.map(async (tool) => {
      const tt = await getTranslations(`tools.${tool.slug}`);
      return { ...tool, name: tt("name"), desc: tt("desc") };
    })
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8">
        <div className="flex items-center gap-3">
          <span className="h-7 w-1.5 rounded-full" style={{ background: color }} />
          <h1 className="text-3xl font-bold tracking-tight">{t("name")}</h1>
        </div>
        <p className="mt-2 max-w-2xl text-ink-soft">{t("desc")}</p>
      </header>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((tool) => (
          <Link key={tool.slug} href={`/${tool.category}/${tool.slug}`}
            className="group flex items-start gap-3.5 rounded-card border border-line bg-white p-4 transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-md">
            <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              style={{ background: `color-mix(in srgb, ${color} 10%, white)` }}>
              <ToolIcon icon={tool.icon} color={color} />
            </span>
            <span>
              <span className="block font-semibold group-hover:text-brand-700">{tool.name}</span>
              <span className="mt-0.5 block text-sm leading-snug text-ink-soft">{tool.desc}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
