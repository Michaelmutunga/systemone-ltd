import { useEffect } from 'react';
import { SITE, absoluteUrl } from '@/lib/site';

type JsonLd = Record<string, unknown> | Record<string, unknown>[];
const GOOGLE_SITE_VERIFICATION = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION;

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
  imagePath?: string;
  noIndex?: boolean;
  schema?: JsonLd;
}

const BASE_SCHEMA: Record<string, unknown>[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/system-one-logo.webp`,
    email: SITE.email,
    telephone: SITE.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: { '@type': 'Country', name: 'Kenya' },
    ...(SITE.social.length > 0 ? { sameAs: SITE.social } : {}),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: 'en',
  },
];

const Seo = ({ title, description, canonicalPath, imagePath = '/og-image.svg', noIndex = false, schema }: SeoProps) => {
  useEffect(() => {
    const previousTitle = document.title;
    const previousCanonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.getAttribute('href');
    const previousTags = new Map<string, string | null>();
    const selectors = [
      'meta[name="description"]',
      'meta[property="og:title"]',
      'meta[property="og:description"]',
      'meta[property="og:type"]',
      'meta[property="og:url"]',
      'meta[property="og:site_name"]',
      'meta[property="og:image"]',
      'meta[name="twitter:card"]',
      'meta[name="twitter:title"]',
      'meta[name="twitter:description"]',
      'meta[name="twitter:image"]',
      'meta[name="robots"]',
    ];

    const upsertMeta = (
      selector: string,
      attrs: { name?: string; property?: string },
      content: string,
    ) => {
      let tag = document.head.querySelector<HTMLMetaElement>(selector);
      if (!tag) {
        tag = document.createElement('meta');
        Object.entries(attrs).forEach(([key, value]) => {
          if (value) tag?.setAttribute(key, value);
        });
        document.head.appendChild(tag);
      }
      if (!previousTags.has(selector)) {
        previousTags.set(selector, tag.getAttribute('content'));
      }
      tag.setAttribute('content', content);
    };

    selectors.forEach((selector) => {
      const tag = document.head.querySelector<HTMLMetaElement>(selector);
      if (tag && !previousTags.has(selector)) {
        previousTags.set(selector, tag.getAttribute('content'));
      }
    });

    const canonicalUrl = absoluteUrl(canonicalPath ?? window.location.pathname);
    const imageUrl = absoluteUrl(imagePath);

    document.title = title;
    upsertMeta('meta[name="description"]', { name: 'description' }, description);
    upsertMeta('meta[property="og:title"]', { property: 'og:title' }, title);
    upsertMeta('meta[property="og:description"]', { property: 'og:description' }, description);
    upsertMeta('meta[property="og:type"]', { property: 'og:type' }, 'website');
    upsertMeta('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl);
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name' }, SITE.name);
    upsertMeta('meta[property="og:image"]', { property: 'og:image' }, imageUrl);
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, title);
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description);
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, imageUrl);
    if (GOOGLE_SITE_VERIFICATION) {
      upsertMeta(
        'meta[name="google-site-verification"]',
        { name: 'google-site-verification' },
        GOOGLE_SITE_VERIFICATION,
      );
    }

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    let robotsTag = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (noIndex) {
      if (!robotsTag) {
        robotsTag = document.createElement('meta');
        robotsTag.setAttribute('name', 'robots');
        document.head.appendChild(robotsTag);
      }
      robotsTag.setAttribute('content', 'noindex,nofollow');
    } else if (robotsTag) {
      robotsTag.setAttribute('content', 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1');
    }

    document.querySelectorAll('script[data-seo-jsonld="true"]').forEach((node) => node.remove());

    const schemas = [...BASE_SCHEMA, ...(schema ? (Array.isArray(schema) ? schema : [schema]) : [])];
    schemas.forEach((entry) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', 'true');
      script.textContent = JSON.stringify(entry);
      document.head.appendChild(script);
    });

    return () => {
      document.title = previousTitle;

      const restoreMeta = (selector: string) => {
        const tag = document.head.querySelector<HTMLMetaElement>(selector);
        const previousContent = previousTags.get(selector);
        if (!tag) return;
        if (previousContent === null) {
          tag.remove();
        } else if (previousContent !== undefined) {
          tag.setAttribute('content', previousContent);
        }
      };

      selectors.forEach(restoreMeta);

      if (previousCanonical === null) {
        canonicalLink?.remove();
      } else if (canonicalLink) {
        canonicalLink.setAttribute('href', previousCanonical);
      }

      document.querySelectorAll('script[data-seo-jsonld="true"]').forEach((node) => node.remove());
    };
  }, [canonicalPath, description, imagePath, noIndex, schema, title]);

  return null;
};

export default Seo;
