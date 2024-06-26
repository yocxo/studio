import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@yocxo/ui';
import { buttonVariants } from '@yocxo/ui/button';
import { ArrowRightIcon } from '@yocxo/ui/icons';

import { upworkConfig } from '#/config/upwork';
import yoCxoLogo from '#/images/avatars/yocxo.com-logo-square.png';
import { FadeIn } from '#/ui/fade-in';

export function Tldr() {
  return (
    <section
      id="tldr"
      aria-labelledby="tldr-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <FadeIn className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="sm:rounded-6xl border bg-card pt-px shadow-md">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-muted shadow-md md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={yoCxoLogo}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <div
              id="tldr-title"
              className="mb-6 block font-mono text-xs font-bold uppercase tracking-widest text-primary"
            >
              <h2>TL;DR</h2>
            </div>
            <p className="mt-8 text-balance font-mono text-2xl font-semibold tracking-tighter text-foreground">
              <span className="block text-primary">Your scroll ends here</span>
              Partner with us and join the ranks of{' '}
              <span className="line-through">wtf</span> why did we wait so long?
            </p>
            <p className="mt-4 text-muted-foreground">
              We&apos;ve been at this so long that we&apos;ve forgotten more
              than we can remember.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our clients say that we&apos;re really good at helping them
              understand their customers better than anyone else. What does that
              mean?
            </p>
            <p className="mt-4 text-muted-foreground">
              Well, once you start thinking about the ¼&quot; hole instead of a
              ¼&quot; drill, it&apos;ll all make sense.
            </p>
            <p className="mt-4 text-muted-foreground">
              Bottom line? Let&apos;s create delightful products that require
              less marketing and sometimes sell themselves too.
            </p>
            <p className="mt-4 text-muted-foreground">
              Ready to crush it? Thought so.
            </p>

            <p className="mt-8">
              <Link
                href={upworkConfig.consult}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a consult with Yo! CXO on Upwork in a new window"
                className={cn(buttonVariants(), 'w-full md:w-auto')}
              >
                Let&apos;s talk
                <ArrowRightIcon className="ml-2 w-3 flex-none fill-current" />
              </Link>
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
