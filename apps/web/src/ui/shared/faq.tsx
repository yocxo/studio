import type { FaqFragment } from '#/basehub/faq-queries';

import type { BlockRichText } from '.basehub';

import { Border } from '../border';
import { FadeIn, FadeInStagger } from '../fade-in';
import RichTextWrapper from './rich-text-wrapper';

interface FaqsProps {
  faq: FaqFragment;
  category: string;
}

export default function Faqs({ faq, category }: FaqsProps) {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mt-20">
        {category !== 'general' && (
          <FadeIn className="mb-16">
            <h2 className="py-10 font-mono text-lg font-semibold tracking-tighter text-foreground">
              Answers for {category}
            </h2>
            <Border className="max-w-xl" />
          </FadeIn>
        )}
        <FadeInStagger>
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {faq.items.map((item) => (
              <FadeIn
                key={item._sys.id}
                className="rounded-xl border bg-card p-6 shadow-md"
              >
                <dt className="font-mono text-lg font-semibold text-secondary-foreground">
                  {item._sys.title}
                </dt>
                <dd className="mt-2">
                  <RichTextWrapper
                    content={item.answer?.json.content as BlockRichText}
                    centered
                    small
                  />
                </dd>
              </FadeIn>
            ))}
          </dl>
        </FadeInStagger>
      </div>
    </div>
  );
}
