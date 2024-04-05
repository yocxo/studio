import type { Metadata } from 'next';

import { RichText } from 'basehub/react-rich-text';

import type { BlockRichText } from '.basehub';

import { fetchBlogPosts } from '#/basehub/blog-queries';
import {
  fetchPrivacyPage,
  fetchPrivacyPageIntro,
  fetchPrivacyPageMetadata,
} from '#/basehub/privacy-queries';
import { siteConfig } from '#/config/site';
import PageJson from '#/json-ld/page-jsonld';
import { formatDate, SITE_URL } from '#/lib/constants';
import { Border } from '#/ui/border';
import { ContactSection } from '#/ui/contact-section';
import { Container } from '#/ui/page-container';
import { PageIntro } from '#/ui/page-intro';
import { PageLinks } from '#/ui/page-links';
import RichTextComponents from '#/ui/shared/rich-text-components';

export default async function PrivacyPolicyPage() {
  const pageIntro = await fetchPrivacyPageIntro();
  const privacy = await fetchPrivacyPage();
  const { items: blogPosts } = await fetchBlogPosts({
    first: 2,
  });

  const pages = blogPosts.map((post) => ({
    href: `/blog/${post._sys.slug}`,
    title: post._sys.title,
    description: post.metaDescription,
    readMoreButtonText: post.readMoreButtonText,
  }));

  return (
    <div>
      <PageIntro
        eyebrow={pageIntro.eyebrow}
        title={pageIntro.title}
        centered={pageIntro.centered}
      >
        <RichText>{pageIntro.description?.json.content}</RichText>
        <p className="flex items-center justify-center pt-6 text-sm text-alternate">
          Updated {formatDate(privacy._sys.lastModifiedAt)}
        </p>
      </PageIntro>

      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <Border className="py-16" />
        <RichTextComponents
          content={privacy.body?.json.content as BlockRichText}
          centered
        />
      </Container>
      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="In an era of synthetic noise, we're proudly analog. Crafting content with our bare hands. Call us old fashioned."
        pages={pages}
      />
      <ContactSection />
      <PageJson
        pageSlug={`${privacy._sys.slug}`}
        pageName={`${privacy._sys.title} :: ${siteConfig.name}`}
        keyword={pageIntro.keyword?._sys.title}
      />
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const cmsMetadata = await fetchPrivacyPageMetadata();

  const metadata = {
    title: cmsMetadata.title,
    description: cmsMetadata.description,
    openGraph: {
      type: 'website',
      title: cmsMetadata.title,
      description: cmsMetadata.description,
      images: [
        {
          url: siteConfig.image.url,
          width: siteConfig.image.width,
          height: siteConfig.image.height,
          alt: siteConfig.image.alt,
        },
      ],
      url: `${SITE_URL}/faq`,
    },
    twitter: {
      title: cmsMetadata.title,
      description: cmsMetadata.description,
      images: [
        {
          url: siteConfig.image.url,
          width: siteConfig.image.width,
          height: siteConfig.image.height,
          alt: siteConfig.image.alt,
        },
      ],
    },
  };

  return metadata;
}
