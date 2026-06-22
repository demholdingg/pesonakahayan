import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SEO_CONFIG } from "@/lib/seo-config";

// Configure Google Fonts
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.siteUrl),
  title: `${SEO_CONFIG.company.fullName} - ${SEO_CONFIG.company.tagline}`,
  description: `${SEO_CONFIG.company.fullName} is part of ${SEO_CONFIG.company.parentCompany}. ${SEO_CONFIG.company.description}`,
  keywords: [
    "industrial equipment",
    "fleet rental",
    "heavy equipment rental",
    "material handling equipment",
    "aerial work platform",
    "equipment rental Indonesia",
    "genset rental",
    "construction equipment rental",
    "Teknika Pesona Kahayan",
    "DEM Holdings",
  ],
  authors: [
    {
      name: SEO_CONFIG.company.fullName,
      url: SEO_CONFIG.siteUrl,
    },
    {
      name: SEO_CONFIG.company.parentCompany,
    },
  ],
  creator: SEO_CONFIG.company.fullName,
  publisher: SEO_CONFIG.company.parentCompany,
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SEO_CONFIG.siteUrl,
    siteName: SEO_CONFIG.company.name,
    title: `${SEO_CONFIG.company.fullName} - ${SEO_CONFIG.company.tagline}`,
    description: `${SEO_CONFIG.company.fullName} - Part of ${SEO_CONFIG.company.parentCompany}. Premium heavy equipment and fleet solutions for industrial operations.`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SEO_CONFIG.company.fullName,
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 800,
        height: 800,
        alt: SEO_CONFIG.company.fullName,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SEO_CONFIG.company.name} - ${SEO_CONFIG.company.tagline}`,
    description: SEO_CONFIG.company.description,
    creator: "@teknikkahayan",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: SEO_CONFIG.company.name,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body className="font-barlow bg-background text-foreground antialiased">
        <Navbar />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
