import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@sambi/ui';
import { buttonVariants } from '@sambi/ui/button';

import coverImage from '#/images/hero.png';
import { StarRating } from '#/ui/shared/star-rating';

function Testimonial() {
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <div className="flex justify-center text-primary lg:justify-start">
        <StarRating />
      </div>
      <blockquote className="mt-2">
        <p className="text-lg font-medium text-secondary-foreground">
          “Recommend sambi? No thanks, just stay away. I depend on them too much
          to share.”
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-muted-foreground">
        <strong className="font-semibold text-primary before:content-['—_']">
          John Galliano
        </strong>
      </figcaption>
    </figure>
  );
}

export function Hero() {
  return (
    <header className="overflow-hidden bg-muted lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 py-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="relative z-10 mx-auto flex w-64 md:w-80 lg:w-auto">
            <Image className="w-full" src={coverImage} alt="" priority />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-card" />
          <Testimonial />
        </div>
        <div className="pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              A much smaller studio than our clients think
            </h1>
            <p className="mt-4 text-balance text-lg text-muted-foreground">
              Somehow, our just wing it attitude keeps racking up big wins for
              clients. They come for the tech, awards on our shelf, and the
              promise of glory. Who are we to mess with a good thing.
            </p>
            <p className="mt-4 text-balance text-lg text-muted-foreground">
              👇🏽 Got a crazy idea?
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="https://www.upwork.com/services/consultation/development-it-sam-1756271340353224704"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a consult with sambi on Upwork in a new window"
                className={cn(buttonVariants(), 'w-full md:w-auto')}
              >
                Pay us to listen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}