import type { Session } from '#/lib/types';
import type { Metadata } from 'next';

import { redirect } from 'next/navigation';

import { auth } from 'auth';

import { SITE_URL } from '#/lib/constants';
import SignupForm from '#/ui/signup-form';

export default async function SignupPage() {
  const session = (await auth()) as Session;

  if (session) {
    redirect('/new');
  }

  return (
    <main className="container relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col border-r p-10 lg:flex">
        <div className="absolute inset-0 bg-card" />
        <div className="relative z-20 mb-16 mt-auto">
          <blockquote className="space-y-2">
            <p className="py-2 text-2xl text-secondary-foreground/80">
              &ldquo;I&apos;m particularly worried that these models could be
              used for large-scale disinformation.&rdquo;
            </p>
            <footer className="text-sm font-semibold text-foreground">
              Sam Altman
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 ">
        <SignupForm />
      </div>
    </main>
  );
}

const title = 'Sign up';
const description =
  "Ready to try out the Mai x Smarcomms Beta? Awesome, sign up for your free account using your @smarcomms.com email. If you don't have one, please contact Sam.";
const pageUrl = `${SITE_URL}/signup`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    title,
    description,
    url: pageUrl,
  },
  twitter: {
    title,
    description,
  },
};
