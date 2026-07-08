import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_URL } from "@/lib/tools";
import "../globals.css";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const ogLocale = locale === "ar" ? "ar_AR" : locale === "es" ? "es_ES" : "en_US";
  return {
    title: {
      default: t("title"),
      template: `%s`,
    },
    description: t("description"),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: locale === "en" ? "/" : `/${locale}`,
      languages: { en: "/", ar: "/ar", es: "/es", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      siteName: "ChooseTools",
      title: t("title"),
      description: t("description"),
      locale: ogLocale,
      images: [{ url: "/icon-512.png", width: 512, height: 512 }],
    },
    twitter: {
      card: "summary",
      title: t("title"),
      description: t("description"),
    },
    other: { "theme-color": "#0e8a6c" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const dir = locale === "ar" ? "rtl" : "ltr";

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ChooseTools",
    url: SITE_URL,
    inLanguage: locale,
    publisher: { "@type": "Organization", name: "hoursmedia" },
  };

  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
