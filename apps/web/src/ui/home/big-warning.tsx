import { Container } from '@sambi/ui/container';
import { UserAvatar } from '@sambi/ui/user-avatar';

import { FadeIn } from '#/ui/fade-in';
import { StarRating } from '#/ui/shared/star-rating';

export function BigWarning({
  id,
  author,
  children,
}: {
  id: string;
  author: {
    name: string;
    role: string;
    initials: string;
  };
  children: React.ReactNode;
}) {
  return (
    <aside
      id={id}
      aria-label={`Big Warning from ${author.name}`}
      className="relative bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-background via-primary/80 to-card dark:via-primary"
    >
      <Container
        size="sm"
        className="relative scroll-mt-14 py-20 sm:scroll-mt-32"
      >
        <FadeIn>
          <figure>
            <div className="flex text-foreground sm:justify-center">
              <StarRating />
            </div>
            <blockquote className="mt-10 text-pretty font-mono text-4xl font-semibold tracking-tighter text-secondary-foreground sm:text-center lg:text-5xl">
              {children}
            </blockquote>
            <figcaption className="mt-10 flex items-center sm:justify-center">
              <div className="overflow-hidden rounded-full bg-border">
                <UserAvatar id={id} initials={author.initials} />
              </div>
              <div className="ml-4">
                <div className="font-mono text-base font-semibold leading-6 tracking-tighter text-foreground md:text-lg lg:text-xl">
                  {author.name}
                </div>
                <div className="text-sm font-medium text-foreground">
                  {author.role}
                </div>
              </div>
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </aside>
  );
}
