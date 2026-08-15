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
    default: "NovaServe — Next-level infrastructure as code for humans and agents.",
    template: "%s | NovaServe",
  },
  description:
    "Define your cloud application once in TypeScript, Python, or Go. NovaServe compiles, plans, and deploys it deterministically across multiple cloud providers.",
  keywords: [
    "NovaServe",
    "Cloud Compiler",
    "TypeScript Infrastructure",
    "Infrastructure as Code",
    "Serverless",
    "Multi-cloud",
    "Pulumi alternative",
    "Terraform alternative",
  ],
  authors: [{ name: "NovaServe Team" }],
  creator: "NovaServe Cloud Inc.",
  metadataBase: new URL("https://novaserve.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://novaserve.dev",
    title: "NovaServe — Next-level infrastructure as code for humans and agents.",
    description:
      "Define your cloud application once in TypeScript, Python, or Go. NovaServe compiles, plans, and deploys it deterministically across multiple cloud providers.",
    siteName: "NovaServe Platform",
  },
  robots: {
    index: true,
    follow: true,
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
        "codeRepository": "https://github.com/sazamansari/NovaServe-",
        "description": "The TypeScript-Native Infrastructure Platform — Define. Compile. Plan. Deploy."
      },
      {
        "@type": "Organization",
        "name": "NovaServe Cloud",
        "url": "https://novaserve.dev",
        "sameAs": [
          "https://github.com/sazamansari/NovaServe-",
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
