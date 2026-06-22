/**
 * SEO Configuration - Centralized SEO settings for consistent branding
 * Company: PT Teknika Pesona Kahayan (Part of PT Duta Energi Muliatama / DEM Holdings)
 */

export const SEO_CONFIG = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://teknikkahayan.com",
  company: {
    name: "Teknika Pesona Kahayan",
    fullName: "PT Teknika Pesona Kahayan",
    parentCompany: "PT Duta Energi Muliatama / DEM Holdings",
    tagline: "Premium Heavy Equipment & Fleet Solutions",
    description:
      "Industrial equipment and fleet rental services providing premium heavy equipment solutions for material handling, aerial work platforms, and specialized machinery rentals.",
    industry: "Industrial Equipment & Fleet Rental",
  },
  contact: {
    email: "info@teknikkahayan.com",
    phone: "+62-xxx-xxx-xxxx",
    address: "Jakarta, Indonesia",
  },
  social: {
    linkedin: "https://linkedin.com/company/teknika-pesona-kahayan",
    instagram: "https://instagram.com/teknikkahayan",
    facebook: "https://facebook.com/teknikkahayan",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
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
      "industrial equipment",
      "fleet rental",
      "heavy equipment",
      "material handling",
      "aerial work platform",
      "equipment rental Jakarta",
      "genset rental",
      "construction equipment",
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
      creator: "@teknikkahayan",
    },
  };
};
