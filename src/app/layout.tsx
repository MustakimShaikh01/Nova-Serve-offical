import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NovaServe — Build Fast. Deploy Anywhere. Scale Automatically.",
    template: "%s | NovaServe",
  },
  description:
    "The modern open-source framework for building, deploying, and scaling cloud applications.",
  keywords: [
    "NovaServe",
    "Serverless Framework",
    "Build Fast Deploy Anywhere",
    "Cloud Applications",
    "Open Source Infrastructure",
    "Multi-cloud",
    "TypeScript Infrastructure",
  ],
  authors: [{ name: "NovaServe Team" }],
  creator: "NovaServe Cloud Inc.",
  metadataBase: new URL("https://novaserve.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://novaserve.dev",
    title: "NovaServe — Build Fast. Deploy Anywhere. Scale Automatically.",
    description:
      "The modern open-source framework for building, deploying, and scaling cloud applications.",
    siteName: "NovaServe Platform",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "hOW2DezM8_w4B2Cn-KenK0VC6QQkqYAMPz8Q-pm2yn4",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "NovaServe",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Linux, macOS, Windows",
        "softwareVersion": "2.1.6",
        "license": "https://www.apache.org/licenses/LICENSE-2.0",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "author": {
          "@type": "Person",
          "name": "Md Shadab Azam Ansari",
          "url": "https://md-shadab-azam-ansari.vercel.app/"
        },
        "downloadUrl": "https://www.npmjs.com/package/novaserve",
        "codeRepository": "https://github.com/novaserve-cloud/novaserve",
        "description": "NovaServe — Build Fast. Deploy Anywhere. Scale Automatically. The modern open-source framework for building, deploying, and scaling cloud applications."
      },
      {
        "@type": "Organization",
        "name": "NovaServe Cloud",
        "url": "https://novaserve.dev",
        "sameAs": [
          "https://github.com/novaserve-cloud/novaserve",
          "https://www.npmjs.com/package/novaserve",
          "https://md-shadab-azam-ansari.vercel.app/"
        ]
      }
    ]
  };

  return (
    <html lang="en" className={`light ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased selection:bg-[#FFB020]/40 selection:text-black flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
        <CommandPalette />
      </body>
    </html>
  );
}
