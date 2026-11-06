import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SEO_CONFIG } from "@/lib/seo-config";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.siteUrl),
  title: `${SEO_CONFIG.company.fullName} - ${SEO_CONFIG.company.tagline}`,
  description: `${SEO_CONFIG.company.fullName} is part of ${SEO_CONFIG.company.parentCompany}. ${SEO_CONFIG.company.description}`,
  keywords: [
    "PLTD power generation",
    "diesel power plant Indonesia",
    "industrial generator rental",
    "material equipment handling",
    "heavy equipment fleet rental",
    "FTTH telecom infrastructure",
    "fiber optic network deployment",
    "fiber optic splicing and testing",
    "aerial work platform rental",
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
    locale: "en_US",
    url: SEO_CONFIG.siteUrl,
    siteName: SEO_CONFIG.company.name,
    title: `${SEO_CONFIG.company.fullName} - ${SEO_CONFIG.company.tagline}`,
    description: `${SEO_CONFIG.company.fullName} - Part of ${SEO_CONFIG.company.parentCompany}. Integrated solutions across PLTD Power Generation, Material Equipment Handling, and FTTH Telecom Infrastructure.`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-barlow bg-background text-foreground antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
