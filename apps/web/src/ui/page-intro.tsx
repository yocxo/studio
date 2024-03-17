import { cn } from '@sambi/ui';

import { FadeIn } from '#/ui/fade-in';
import { Container } from '#/ui/page-container';

export function PageIntro({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <Container
      className={cn('mt-24 sm:mt-32 lg:mt-40', centered && 'text-center')}
    >
      <FadeIn>
        <h1>
          <span className="block font-mono text-base font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={cn(
              'mt-6 block max-w-5xl font-mono text-4xl font-semibold tracking-tighter text-foreground [text-wrap:balance] sm:text-5xl',
              centered && 'mx-auto',
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={cn(
            'mt-6 max-w-3xl text-pretty text-muted-foreground md:text-lg lg:text-xl',
            centered && 'mx-auto',
          )}
        >
          {children}
        </div>
      </FadeIn>
    </Container>
  );
}
