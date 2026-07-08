import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { HomeToolGrid } from "@/components/HomeToolGrid";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations("home");
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="pt-14 pb-8 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
          {t("heroTitle")}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">{t("heroSub")}</p>
      </section>

      <HomeToolGrid />

      <section className="mt-20 grid gap-6 sm:grid-cols-3">
        {(["1", "2", "3"] as const).map((n) => (
          <div key={n} className="rounded-card border border-line bg-white p-6">
            <h3 className="font-semibold text-brand-700">{t(`why${n}t`)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t(`why${n}d`)}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
