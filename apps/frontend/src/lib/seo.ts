import type { Metadata, MetadataRoute } from "next";

export const SITE_NAME = "Vita Food Complex";
export const BRAND_NAME = "Vita";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.vitafoodcomplex.com"
).replace(/\/+$/, "");

export const DEFAULT_LOCALE = "en" as const;
export const SUPPORTED_LOCALES = ["en", "am"] as const;
export type SiteLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_DESCRIPTION =
  "Experience the perfect blend of nutrition and flavor with Vita's premium range of biscuits and flour products, made in Ethiopia.";

export const SEO_KEYWORDS = [
  "biscuit manufacturer Ethiopia",
  "flour manufacturer Ethiopia",
  "Ethiopian food manufacturer",
  "Vita Food Complex",
  "Vita foods",
  "Vita biscuits",
  "biscuits Ethiopia",
  "flour Ethiopia",
  "food manufacturer Addis Ababa",
  "Bora biscuits",
  "Chewata biscuits",
  "Sina biscuits",
  "Tafach biscuits",
  "Zoo biscuits",
];

export const SOCIAL_LINKS = [
  "https://www.facebook.com/VitaFood/",
  "https://www.instagram.com/vitafood",
];

export const COMPANY = {
  legalName: "Vita Food Complex",
  brandName: BRAND_NAME,
  foundingDate: "2026",
  parentOrganization: "Belayab Foods",
  phone: "+251 911 123 456",
  email: "info@vitafoodcomplex.com",
  streetAddress: "Lideta SC, Woreda 02",
  city: "Addis Ababa",
  region: "Addis Ababa",
  countryCode: "ET",
  countryName: "Ethiopia",
  logoPath: "/assets/brand/vita-logo.svg",
} as const;

type PageCopy = {
  title: string;
  description: string;
};

type PageDefinition = {
  en: PageCopy;
  am: PageCopy;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  index?: boolean;
};

export const STATIC_PAGE_DEFINITIONS = {
  "/": {
    en: {
      title: "Vita Food Complex | Biscuits & Flour Manufacturer in Ethiopia",
      description:
        "Discover Vita Food Complex, an Ethiopian food manufacturer offering premium biscuits and flour products crafted for nutrition, quality, and everyday enjoyment.",
    },
    am: {
      title: "ቪታ ፉድ ኮምፕሌክስ | ብስኩትና ዱቄት አምራች በኢትዮጵያ",
      description:
        "ቪታ ፉድ ኮምፕሌክስ ጥራት፣ ንጥረ ምግብ እና ጣዕም የሚያጣምሩ ብስኩቶችን እና የዱቄት ምርቶችን በኢትዮጵያ ያቀርባል።",
    },
    changeFrequency: "weekly",
    priority: 1,
  },
  "/products": {
    en: {
      title: "Biscuits & Flour Products | Vita Food Complex",
      description:
        "Explore Vita's range of biscuits and flour products made for Ethiopian families, retailers, distributors, bakeries, and food-service businesses.",
    },
    am: {
      title: "የቪታ ብስኩትና ዱቄት ምርቶች | ቪታ ፉድ ኮምፕሌክስ",
      description:
        "ለቤተሰቦች፣ ለቸርቻሪዎች፣ ለአከፋፋዮች እና ለዳቦ ቤቶች የተዘጋጁ የቪታ ብስኩትና ዱቄት ምርቶችን ይመልከቱ።",
    },
    changeFrequency: "weekly",
    priority: 0.95,
  },
  "/recipes": {
    en: {
      title: "Recipes with Vita Biscuits & Flour | Vita Food Complex",
      description:
        "Discover recipe ideas, baking inspiration, and serving suggestions using Vita biscuits and flour products.",
    },
    am: {
      title: "በቪታ ብስኩትና ዱቄት የሚዘጋጁ አሰራሮች | ቪታ",
      description:
        "የቪታ ብስኩትና ዱቄት ምርቶችን በመጠቀም የምግብ አሰራሮችን፣ የመጋገር ሀሳቦችን እና የአቀራረብ ምክሮችን ያግኙ።",
    },
    changeFrequency: "monthly",
    priority: 0.75,
  },
  "/about": {
    en: {
      title: "About Vita Food Complex | Ethiopian Food Manufacturer",
      description:
        "Learn about Vita Food Complex, our story, manufacturing approach, values, and relationship with Belayab Foods in Ethiopia.",
    },
    am: {
      title: "ስለ ቪታ ፉድ ኮምፕሌክስ | የኢትዮጵያ ምግብ አምራች",
      description:
        "ስለ ቪታ ፉድ ኮምፕሌክስ ታሪክ፣ የማምረቻ አቀራረብ፣ እሴቶች እና ከበላያብ ፉድስ ጋር ያለውን ግንኙነት ይወቁ።",
    },
    changeFrequency: "monthly",
    priority: 0.8,
  },
  "/why-choose-vita": {
    en: {
      title: "Why Choose Vita | Quality Biscuits & Flour in Ethiopia",
      description:
        "See why customers and partners choose Vita for dependable quality, food manufacturing standards, and biscuit and flour products in Ethiopia.",
    },
    am: {
      title: "ለምን ቪታን ይምረጡ? | ጥራት ያለው ብስኩትና ዱቄት",
      description:
        "ደንበኞችና አጋሮች ቪታን ለጥራት፣ ለምግብ ማምረቻ ደረጃዎች እና ለብስኩትና ዱቄት ምርቶች ለምን እንደሚመርጡ ይመልከቱ።",
    },
    changeFrequency: "monthly",
    priority: 0.75,
  },
  "/careers": {
    en: {
      title: "Careers at Vita Food Complex | Ethiopia",
      description:
        "Explore career opportunities at Vita Food Complex and help build quality food products for consumers across Ethiopia.",
    },
    am: {
      title: "የሥራ ዕድሎች በቪታ ፉድ ኮምፕሌክስ | ኢትዮጵያ",
      description:
        "በቪታ ፉድ ኮምፕሌክስ ያሉ የሥራ ዕድሎችን ይመልከቱ እና ለኢትዮጵያ ገበያ ጥራት ያላቸውን የምግብ ምርቶች በመገንባት ይሳተፉ።",
    },
    changeFrequency: "weekly",
    priority: 0.7,
  },
  "/sustainability": {
    en: {
      title: "Sustainability | Vita Food Complex",
      description:
        "Learn about Vita Food Complex's approach to responsible food manufacturing, communities, resources, and long-term sustainability.",
    },
    am: {
      title: "ዘላቂነት | ቪታ ፉድ ኮምፕሌክስ",
      description:
        "ቪታ ፉድ ኮምፕሌክስ ለኃላፊነት ያለው ምግብ ማምረት፣ ማህበረሰብ፣ ሀብት እና ዘላቂ ዕድገት ያለውን አቀራረብ ይወቁ።",
    },
    changeFrequency: "monthly",
    priority: 0.7,
  },
  "/people-planet": {
    en: {
      title: "People & Planet | Vita Food Complex",
      description:
        "Discover Vita initiatives focused on people, communities, responsible growth, and positive impact in Ethiopia.",
    },
    am: {
      title: "ሰዎች እና ፕላኔት | ቪታ ፉድ ኮምፕሌክስ",
      description:
        "በሰዎች፣ ማህበረሰቦች፣ ኃላፊነት ያለው ዕድገት እና አዎንታዊ ተፅዕኖ ላይ ያተኮሩ የቪታ ተነሳሽነቶችን ያግኙ።",
    },
    changeFrequency: "monthly",
    priority: 0.7,
  },
  "/innovation": {
    en: {
      title: "Food Innovation | Vita Food Complex",
      description:
        "Explore how Vita Food Complex approaches product development, quality, and innovation across biscuits and flour products.",
    },
    am: {
      title: "የምግብ ፈጠራ | ቪታ ፉድ ኮምፕሌክስ",
      description:
        "ቪታ ፉድ ኮምፕሌክስ በብስኩትና ዱቄት ምርቶች የምርት ልማት፣ ጥራት እና ፈጠራን እንዴት እንደሚቀርብ ይመልከቱ።",
    },
    changeFrequency: "monthly",
    priority: 0.65,
  },
  "/we-care": {
    en: {
      title: "We Care for All | Vita Food Complex",
      description:
        "Learn about Vita's commitment to consumers, employees, communities, and responsible food manufacturing in Ethiopia.",
    },
    am: {
      title: "We Care for All | ቪታ ፉድ ኮምፕሌክስ",
      description:
        "ቪታ ለደንበኞች፣ ሰራተኞች፣ ማህበረሰቦች እና ኃላፊነት ላለው የምግብ ማምረት ያለውን ቁርጠኝነት ይወቁ።",
    },
    changeFrequency: "monthly",
    priority: 0.65,
  },
  "/gallery": {
    en: {
      title: "Gallery | Vita Food Complex",
      description:
        "See Vita Food Complex products, people, community activities, and moments from our work in Ethiopia.",
    },
    am: {
      title: "ጋለሪ | ቪታ ፉድ ኮምፕሌክስ",
      description:
        "የቪታ ፉድ ኮምፕሌክስ ምርቶችን፣ ሰዎችን፣ የማህበረሰብ እንቅስቃሴዎችን እና የስራ ጊዜያትን ይመልከቱ።",
    },
    changeFrequency: "monthly",
    priority: 0.55,
  },
  "/terms": {
    en: {
      title: "Terms & Conditions | Vita Food Complex",
      description: "Read the terms and conditions for using the Vita Food Complex website.",
    },
    am: {
      title: "ውሎች እና ሁኔታዎች | ቪታ ፉድ ኮምፕሌክስ",
      description: "የቪታ ፉድ ኮምፕሌክስ ድረ-ገጽን ለመጠቀም የሚመለከቱ ውሎችን እና ሁኔታዎችን ያንብቡ።",
    },
    changeFrequency: "yearly",
    priority: 0.2,
    index: false,
  },
  "/become-distributor": {
    en: {
      title: "Become a Vita Distributor | Ethiopia",
      description:
        "Apply to become a Vita distributor and help bring Vita biscuits and flour products to customers across Ethiopia.",
    },
    am: {
      title: "የቪታ አከፋፋይ ይሁኑ | ኢትዮጵያ",
      description:
        "የቪታ አከፋፋይ ለመሆን ያመልክቱ እና የቪታ ብስኩትና ዱቄት ምርቶችን በኢትዮጵያ ለደንበኞች ለማድረስ ይሳተፉ።",
    },
    changeFrequency: "monthly",
    priority: 0.8,
  },
  "/research": {
    en: {
      title: "Research & Resources | Vita Food Complex",
      description:
        "Explore research, resources, and useful information from Vita Food Complex about food, products, and manufacturing.",
    },
    am: {
      title: "ጥናት እና መረጃዎች | ቪታ ፉድ ኮምፕሌክስ",
      description:
        "ስለ ምግብ፣ ምርቶች እና ማምረት ከቪታ ፉድ ኮምፕሌክስ የሚቀርቡ ጥናቶችን እና ጠቃሚ መረጃዎችን ያግኙ።",
    },
    changeFrequency: "monthly",
    priority: 0.6,
  },
  "/faqs": {
    en: {
      title: "Frequently Asked Questions | Vita Food Complex",
      description:
        "Find answers to common questions about Vita products, distribution, the company, and customer support.",
    },
    am: {
      title: "ተደጋጋሚ ጥያቄዎች | ቪታ ፉድ ኮምፕሌክስ",
      description:
        "ስለ ቪታ ምርቶች፣ ስርጭት፣ ኩባንያው እና የደንበኞች ድጋፍ የተለመዱ ጥያቄዎችን መልስ ያግኙ።",
    },
    changeFrequency: "monthly",
    priority: 0.6,
  },
  "/news": {
    en: {
      title: "News & Articles | Vita Food Complex",
      description:
        "Read the latest news, company updates, product stories, and articles from Vita Food Complex in Ethiopia.",
    },
    am: {
      title: "ዜና እና ጽሑፎች | ቪታ ፉድ ኮምፕሌክስ",
      description:
        "ከቪታ ፉድ ኮምፕሌክስ የቅርብ ጊዜ ዜናዎችን፣ የኩባንያ ማሻሻያዎችን፣ የምርት ታሪኮችን እና ጽሑፎችን ያንብቡ።",
    },
    changeFrequency: "daily",
    priority: 0.8,
  },
  "/contact": {
    en: {
      title: "Contact Vita Food Complex | Addis Ababa, Ethiopia",
      description:
        "Contact Vita Food Complex in Addis Ababa for product questions, partnerships, distribution, business inquiries, and customer support.",
    },
    am: {
      title: "ቪታ ፉድ ኮምፕሌክስን ያግኙ | አዲስ አበባ፣ ኢትዮጵያ",
      description:
        "ለምርት ጥያቄዎች፣ አጋርነት፣ ስርጭት፣ የንግድ ጥያቄዎች እና የደንበኛ ድጋፍ ቪታ ፉድ ኮምፕሌክስን በአዲስ አበባ ያግኙ።",
    },
    changeFrequency: "yearly",
    priority: 0.75,
  },
} satisfies Record<string, PageDefinition>;

export type StaticPagePath = keyof typeof STATIC_PAGE_DEFINITIONS;

export function normalizeLocale(locale?: string): SiteLocale {
  return locale === "am" ? "am" : "en";
}

export function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  return `/${path.replace(/^\/+|\/+$/g, "")}`;
}

export function absoluteUrl(path = "/"): string {
  const normalized = normalizePath(path);
  return normalized === "/" ? SITE_URL : `${SITE_URL}${normalized}`;
}

export function localizedUrl(locale: SiteLocale, path = "/"): string {
  const normalized = normalizePath(path);
  return normalized === "/"
    ? `${SITE_URL}/${locale}`
    : `${SITE_URL}/${locale}${normalized}`;
}

export function absoluteMediaUrl(value?: string | null): string | undefined {
  if (!value) return undefined;
  if (/^https?:\/\//i.test(value)) return value;
  return absoluteUrl(value);
}

export function languageAlternates(path: string) {
  return {
    en: localizedUrl("en", path),
    am: localizedUrl("am", path),
    "x-default": localizedUrl(DEFAULT_LOCALE, path),
  };
}

export function buildMetadata({
  locale,
  path,
  title,
  description,
  index = true,
  image,
  keywords = SEO_KEYWORDS,
}: {
  locale: SiteLocale;
  path: string;
  title: string;
  description: string;
  index?: boolean;
  image?: string;
  keywords?: string[];
}): Metadata {
  const imageUrl = absoluteMediaUrl(image);
  const alternates = languageAlternates(path);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    applicationName: SITE_NAME,
    category: "Food & Beverage Manufacturing",
    alternates: {
      canonical: localizedUrl(locale, path),
      languages: alternates,
    },
    robots: {
      index,
      follow: index,
      googleBot: {
        index,
        follow: index,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      url: localizedUrl(locale, path),
      siteName: SITE_NAME,
      title,
      description,
      locale: locale === "am" ? "am_ET" : "en_ET",
      alternateLocale: locale === "am" ? ["en_ET"] : ["am_ET"],
      ...(imageUrl
        ? {
            images: [
              {
                url: imageUrl,
                alt: title,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
  };
}

export function getStaticPageMetadata(
  locale: SiteLocale,
  path: StaticPagePath,
): Metadata {
  const definition = STATIC_PAGE_DEFINITIONS[path];
  const copy = definition[locale];

  return buildMetadata({
    locale,
    path,
    title: copy.title,
    description: copy.description,
    index: definition.index !== false,
  });
}

export function createStaticMetadata(path: StaticPagePath) {
  return async function generateMetadata({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }): Promise<Metadata> {
    const { locale } = await params;
    return getStaticPageMetadata(normalizeLocale(locale), path);
  };
}

export function resolveApiBase(): string {
  const raw = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4002/api/v1";
  const urls = raw
    .split(",")
    .map((url) => url.trim())
    .filter(Boolean)
    .map((url) => {
      const trimmed = url.replace(/\/+$/, "");
      return trimmed.endsWith("/api/v1") ? trimmed : `${trimmed}/api/v1`;
    });

  if (urls.length === 0) return "http://localhost:4002/api/v1";

  if (process.env.NODE_ENV === "production") {
    return urls.find((url) => !url.includes("localhost")) ?? urls[0];
  }

  return urls[0];
}

export function organizationWebsiteJsonLd(locale: SiteLocale) {
  const homeUrl = localizedUrl(locale, "/");
  const logo = absoluteMediaUrl(COMPANY.logoPath);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: COMPANY.legalName,
        alternateName: COMPANY.brandName,
        url: SITE_URL,
        logo: logo
          ? {
              "@type": "ImageObject",
              url: logo,
            }
          : undefined,
        foundingDate: COMPANY.foundingDate,
        parentOrganization: {
          "@type": "Organization",
          name: COMPANY.parentOrganization,
        },
        description: DEFAULT_DESCRIPTION,
        email: COMPANY.email,
        telephone: COMPANY.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: COMPANY.streetAddress,
          addressLocality: COMPANY.city,
          addressRegion: COMPANY.region,
          addressCountry: COMPANY.countryCode,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: COMPANY.phone,
            email: COMPANY.email,
            contactType: "customer service",
            areaServed: COMPANY.countryCode,
            availableLanguage: ["English", "Amharic"],
          },
        ],
        sameAs: SOCIAL_LINKS,
        knowsAbout: [
          "Biscuits",
          "Flour",
          "Food manufacturing",
          "Food products in Ethiopia",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: locale === "am" ? "am" : "en",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${localizedUrl(locale, "/products")}?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${homeUrl}#webpage`,
        url: homeUrl,
        name: STATIC_PAGE_DEFINITIONS["/"][locale].title,
        description: STATIC_PAGE_DEFINITIONS["/"][locale].description,
        inLanguage: locale,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };
}

export function breadcrumbJsonLd(
  locale: SiteLocale,
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: localizedUrl(locale, item.path),
    })),
  };
}
