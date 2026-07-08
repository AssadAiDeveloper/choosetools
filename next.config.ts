import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // www → non-www (301 permanent, keeps the full path)
        source: "/:path*",
        has: [{ type: "host", value: "www.choosetools.com" }],
        destination: "https://choosetools.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);