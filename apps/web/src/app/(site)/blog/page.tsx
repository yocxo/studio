import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import { RichText } from 'basehub/react-rich-text';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import {
  fetchBlogPageIntro,
  fetchBlogPageMetadata,
  fetchBlogPosts,
} from '#/basehub/blog-queries';
import { formatDate } from '#/lib/constants';
import { Border } from '#/ui/border';
import { ContactSection } from '#/ui/contact-section';
import { FadeIn } from '#/ui/fade-in';
import { Container } from '#/ui/page-container';
import { PageIntro } from '#/ui/page-intro';
import { ArrowRightIcon } from '#/ui/shared/icons';
import { LoadMore, LoadMoreButton, LoadMoreItems } from '#/ui/shared/load-more';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await fetchBlogPageMetadata();

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function Blog() {
  const { items: blogPosts, totalCount } = await fetchBlogPosts();
  const pageIntro = await fetchBlogPageIntro();

  return (
    <>
      <PageIntro
        eyebrow={pageIntro.eyebrow}
        title={pageIntro.title}
        centered={pageIntro.centered}
      >
        <RichText>{pageIntro.description?.json.content}</RichText>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <LoadMore className="space-y-24" totalItems={totalCount}>
          <LoadMoreItems>
            {blogPosts.map((post) => (
              <FadeIn key={post._id}>
                <article>
                  <Border className="pt-16">
                    <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                      <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                        <div className="mb-2 font-mono text-sm font-medium uppercase text-primary">
                          {post.category.length > 0 && (
                            <div className="mb-2 font-mono text-sm font-medium uppercase text-primary">
                              #{post.category[0]?._title}
                            </div>
                          )}
                        </div>
                        <h2 className="max-w-2xl text-pretty font-mono text-3xl font-semibold leading-normal tracking-tighter text-foreground hover:text-primary">
                          <Link href={`/blog/${post._slug}`}>
                            {post._title}
                          </Link>
                        </h2>
                        <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                          <dt className="sr-only">Published</dt>
                          <dd className="absolute left-0 top-0 font-mono text-sm uppercase lg:static">
                            <time dateTime={post.publishedDate}>
                              {formatDate(post.publishedDate)}
                            </time>
                          </dd>
                          <dt className="sr-only">Author</dt>
                          <dd className="mt-6 flex gap-x-4">
                            <div className="flex-none overflow-hidden rounded-xl border bg-background">
                              <Image
                                alt={post.author.image.alt!}
                                src={post.author.image.url}
                                width={48}
                                height={48}
                                className="h-12 w-12 object-cover grayscale transition duration-500 hover:grayscale-0 motion-safe:hover:scale-105"
                              />
                            </div>
                            <div className="text-sm text-secondary-foreground">
                              <div className="font-mono font-medium tracking-tighter">
                                {post.author._title}
                              </div>
                              <div className="font-mono text-muted-foreground">
                                {post.author.role}
                              </div>
                            </div>
                          </dd>
                        </dl>
                        <div className="mt-6 line-clamp-2 max-w-2xl text-muted-foreground">
                          <RichText>{post.tldr?.json.content}</RichText>
                        </div>

                        <Link
                          href={post._slug}
                          aria-label={`Read more: ${post._title}`}
                          className={cn(
                            buttonVariants({
                              variant: 'secondary',
                              size: 'sm',
                            }),
                            'mt-8',
                          )}
                        >
                          {post.readMoreButtonText}
                          <ArrowRightIcon className="ml-2 w-3 flex-none fill-current" />
                        </Link>
                      </div>
                    </div>
                  </Border>
                </article>
              </FadeIn>
            ))}
          </LoadMoreItems>
          <LoadMoreButton>Load more</LoadMoreButton>
        </LoadMore>
      </Container>

      <ContactSection />
    </>
  );
}
