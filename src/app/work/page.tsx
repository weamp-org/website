import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore what WeAMP contributors are working on now, including Menim, Uni Pasco Hub, and Worth Knowing.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    url: "/work",
    title: "Work · WeAMP",
    description:
      "Explore what WeAMP contributors are working on now, including Menim, Uni Pasco Hub, and Worth Knowing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work · WeAMP",
    description:
      "Explore what WeAMP contributors are working on now, including Menim, Uni Pasco Hub, and Worth Knowing.",
  },
};

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
      {children}
    </p>
  );
}

export default function Work() {
  return (
    <>
      {/* 1. Opening */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>Work</Eyebrow>
          <h1 className="mt-4 font-heading text-4xl font-normal tracking-tight text-foreground sm:text-5xl">
            What we&apos;re working on.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            This is what some of us are working on right now.
          </p>
        </div>
      </section>

      {/* 2. Current work */}
      <section className="border-t px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>Current work</Eyebrow>
          <div className="mt-8">
            <article id="menim" className="border-t py-8 last:border-b scroll-mt-16">
              <h2 className="font-heading text-2xl font-normal tracking-tight text-foreground">
                Menim
              </h2>
              <p className="mt-3 leading-relaxed text-foreground">
                Software for independent retail businesses.
              </p>
              <p className="mt-3 leading-relaxed text-foreground/80">
                Many independent shop owners run on memory and paper: sales
                kept in their heads or in a book; products run out unnoticed
                until a customer asks; money customers owe them gets forgotten;
                and at month&apos;s end, there&apos;s no clear answer about
                what they really made. Menim gives them one clear picture —
                what is selling, what is running low, what they spend, and
                what they really make, so they can make better decisions.
              </p>
              <a
                href="https://menim.weamp.org"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-primary underline-offset-4 transition-colors hover:underline"
              >
                Visit Menim →
              </a>
            </article>
            <article id="uni-pasco-hub" className="border-t py-8 last:border-b scroll-mt-16">
              <h2 className="font-heading text-2xl font-normal tracking-tight text-foreground">
                Uni Pasco Hub
              </h2>
              <p className="mt-3 leading-relaxed text-foreground">
                A hub for Ghanaian university students to find, share, and
                access past exam papers.
              </p>
              <p className="mt-3 leading-relaxed text-foreground/80">
                It started from a personal problem: preparing for exams
                without one place to find past papers to understand what exams
                were like and prepare better. The platform lets students across
                universities in Ghana find, share, and access past papers so
                others can use them too.
              </p>
              <div className="mt-5 flex items-center gap-6">
                <a
                  href="https://unipascohub.weamp.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-primary underline-offset-4 transition-colors hover:underline"
                >
                  Visit Uni Pasco Hub →
                </a>
                <a
                  href="https://github.com/weamp-org/unipascohub"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Uni Pasco Hub source code on GitHub"
                  className="inline-flex items-center gap-2 text-primary underline-offset-4 transition-colors hover:underline"
                >
                  <FaGithub className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </article>
            <article id="worth-knowing" className="border-t py-8 last:border-b scroll-mt-16">
              <h2 className="font-heading text-2xl font-normal tracking-tight text-foreground">
                Worth Knowing
              </h2>
              <p className="mt-3 leading-relaxed text-foreground">
                A place to discover and share things worth knowing.
              </p>
              <p className="mt-3 leading-relaxed text-foreground/80">
                The idea: if someone learns something worth sharing, they can
                share it here, and others can discover, explore, and learn
                from it. Topics could include economics, science, history,
                human anatomy, and more.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 3. Closing CTA */}
      <section className="border-t px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Get in touch</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            Have a meaningful problem worth working on?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We&apos;d like to hear about it.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
