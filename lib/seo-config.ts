/**
 * SEO Configuration - Centralized SEO settings for PT Teknika Pesona Kahayan
 * Multi-pillar enterprise: PLTD Power Generation, Material Equipment Handling, and FTTH Telecom Infrastructure
 * Part of PT Duta Energi Muliatama / DEM Holdings
 */

export const SEO_CONFIG = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://pesonakahayan.co.id",
  company: {
    name: "Teknika Pesona Kahayan",
    fullName: "PT Teknika Pesona Kahayan",
    parentCompany: "PT Duta Energi Muliatama / DEM Holdings",
    tagline: "Integrated Solutions for Power Generation, Heavy Equipment & Telecom Infrastructure",
    description:
      "Leading integrated enterprise providing PLTD Power Generation, Material Equipment Handling & Fleet Solutions, and FTTH Telecommunications Infrastructure in Indonesia.",
    industry: "Energy, Industrial Equipment & Telecommunications Infrastructure",
  },
  contact: {
    email: "info@pesonakahayan.co.id",
    phone: "+62 812-3456-7890",
    address: "Jakarta, Indonesia",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/pt-teknika-pesona-kahayan/",
    instagram: "https://www.instagram.com/tpk_kahayann/",
    youtube: "https://youtube.com/@tpk_kahayann?si=yQmMtnc0KHLE_Zio",
    tiktok: "https://www.tiktok.com/@tpk_kahayann?_r=1&_t=ZS-9AvRvyQDT8h",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Teknika Pesona Kahayan",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const generateMetadata = (
  pageTitle: string,
  pageDescription?: string,
) => {
  const title = pageTitle
    ? `${pageTitle} | ${SEO_CONFIG.company.name}`
    : `${SEO_CONFIG.company.name} - ${SEO_CONFIG.company.tagline}`;

  const description =
    pageDescription ||
    `${SEO_CONFIG.company.fullName} - Part of ${SEO_CONFIG.company.parentCompany}. ${SEO_CONFIG.company.description}`;

  return {
    title,
    description,
    keywords: [
      "PLTD Power Generation",
      "diesel power plant Indonesia",
      "power generation solutions",
      "industrial genset rental",
      "material equipment handling",
      "heavy equipment fleet rental",
      "forklift rental Jakarta",
      "FTTH telecom infrastructure",
      "fiber optic network rollout",
      "fiber optic cable deployment",
      "fusion splicing and OTDR",
      "Teknika Pesona Kahayan",
      "DEM Holdings",
    ],
    authors: [{ name: SEO_CONFIG.company.fullName }],
    creator: SEO_CONFIG.company.fullName,
    publisher: SEO_CONFIG.company.parentCompany,
    robots: {
      index: SEO_CONFIG.robots.index,
      follow: SEO_CONFIG.robots.follow,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    openGraph: {
      type: SEO_CONFIG.openGraph.type,
      locale: SEO_CONFIG.openGraph.locale,
      url: SEO_CONFIG.siteUrl,
      siteName: SEO_CONFIG.openGraph.siteName,
      title,
      description,
      images: [
        {
          url: `${SEO_CONFIG.siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: SEO_CONFIG.company.fullName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@tpk_kahayann",
    },
  };
};
