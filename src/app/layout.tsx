import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { AdsterraPopunderGate, AdsterraSmartLink, AdsterraSocialBarGate, AdsterraStickyRail } from "@/components/ads";
import { ExperimentTelemetry } from "@/components/analytics/ExperimentTelemetry";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/data/site";
import { runtimeConfig } from "@/lib/runtime-config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.gameName} Wiki, Codes, Tier List and Tools`,
    template: `%s | ${siteConfig.gameName}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" }
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: ["/favicon.png"]
  },
  openGraph: {
    type: "website",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: `${siteConfig.gameName} Wiki, Codes and Tools`,
    description: siteConfig.description,
    images: [{ url: "/opengraph-image" }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Wiki, Codes and Tools`,
    description: siteConfig.description,
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true
  },
  verification: {
    google: "K-39mBGO_whquxqwf8co5z5PWHHRkdEhTBOGFC6qLa0"
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent"
  }
};

export const viewport: Viewport = {
  themeColor: "#101114"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const analyticsId = runtimeConfig.analyticsId;
  const analyticsIdJson = JSON.stringify(analyticsId);

  return (
    <html lang="en">
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8422008024471928"
        />
        {analyticsId ? (
          <script
            id="google-analytics-bootstrap"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
                window.gtag('js', new Date());
                window.gtag('config', ${analyticsIdJson}, { send_page_view: false });
                document.documentElement.dataset.gaBootstrap = 'ready';
              `
            }}
          />
        ) : null}
      </head>
      <body className={`${inter.variable} font-sans`}>
        {analyticsId ? (
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`} strategy="afterInteractive" />
        ) : null}
        <Suspense fallback={null}>
          <ExperimentTelemetry measurementId={analyticsId} />
        </Suspense>
        <AdsterraPopunderGate />
        <AdsterraSocialBarGate />
        <AdsterraSmartLink />
        <Navbar />
        {children}
        <AdsterraStickyRail />
        <Footer />
      </body>
    </html>
  );
}
