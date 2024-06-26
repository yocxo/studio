import Link from 'next/link';

import { cn } from '@yocxo/ui';
import { buttonVariants } from '@yocxo/ui/button';
import { ArrowRightIcon } from '@yocxo/ui/icons';

import { Border } from '#/ui/border';
import { FadeIn, FadeInStagger } from '#/ui/fade-in';
import { Container } from '#/ui/page-container';
import { SectionIntro } from '#/ui/section-intro';

interface Page {
  href: string;
  title: string;
  description: string;
  readMoreButtonText: string;
}

function PageLink({ page }: { page: Page }) {
  return (
    <article key={page.href}>
      <Border
        position="left"
        className="relative flex flex-col items-start pl-8"
      >
        <h3 className="mt-6 text-pretty font-mono text-xl font-semibold tracking-tighter text-foreground">
          <Link
            aria-label={`Read post ${page.title} in the same window`}
            className="hover:text-foreground/80"
            href={page.href}
          >
            {page.title}
          </Link>
        </h3>
        <p className="mt-2.5 line-clamp-2 text-sm text-secondary-foreground md:text-base">
          {page.description}
        </p>
        <Link
          href={page.href}
          aria-label={`Read more: ${page.title}`}
          className={cn(
            buttonVariants({
              size: 'sm',
            }),
            'mt-8',
          )}
        >
          {page.readMoreButtonText}
          <ArrowRightIcon className="ml-2 w-3 flex-none fill-current" />
        </Link>
      </Border>
    </article>
  );
}

export function PageLinks({
  title,
  pages,
  intro,
  className,
}: {
  title: string;
  pages: Page[];
  intro?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative rounded-t-4xl bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-background via-primary/60 to-card py-24 sm:py-32 lg:py-40',
        className,
      )}
    >
      <SectionIntro title={title}>
        {intro && (
          <p className="text-sm text-secondary-foreground md:text-base lg:text-lg">
            {intro}
          </p>
        )}
      </SectionIntro>

      <Container className={intro ? 'mt-24' : 'mt-16'}>
        <FadeInStagger className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {pages.map((page) => (
            <FadeIn key={page.href}>
              <PageLink page={page} />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  );
}
