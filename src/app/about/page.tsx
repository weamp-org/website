import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "WeAMP is a group of people who work together to address meaningful problems, contributing towards a better world.",
};

const approaches = [
  "software",
  "company-building",
  "research",
  "education",
  "engineering",
  "medicine",
  "policy",
  "community work",
  "prevention",
  "or something else entirely",
];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
      {children}
    </p>
  );
}

export default function About() {
  return (
    <>
      {/* 1. Opening — What WeAMP is */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-4 font-heading text-4xl font-normal tracking-tight text-foreground sm:text-5xl">
            WeAMP stands for We Address Meaningful Problems.
          </h1>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              WeAMP is a group of people who work together to address
              meaningful problems, contributing towards a better world.
            </p>
            <p>
              The “we” is literal — the people working together are WeAMP.
              What connects us isn&apos;t the same profession or background,
              but a shared desire to contribute towards a better world.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Why WeAMP exists */}
      <section className="border-t px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>Why we exist</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            The world is good, but it could be much better.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              The world is already good in many ways. It also holds unnecessary
              suffering, limitations, inefficiencies, and problems — and as
              circumstances change, new problems and new opportunities emerge.
            </p>
            <p>
              Something good can also become better. Progress doesn&apos;t mean
              finishing or perfecting the world, only contributing where we
              can.
            </p>
            <p>
              We don&apos;t know exactly what the world should become, and a
              small group of people can&apos;t make it better single-handedly.
              We aim to contribute where addressing a problem could make a
              worthwhile difference.
            </p>
          </div>
        </div>
      </section>

      {/* 3. What we mean by "meaningful problems" */}
      <section className="border-t px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>Meaningful problems</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            What “meaningful” means.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              A meaningful problem is one where solving it could make a
              worthwhile contribution towards a better world.
            </p>
            <p>
              It doesn&apos;t have to be global to matter. Preventing suffering,
              improving a system, developing what people are capable of, useful
              knowledge, education, or practical technology can all count.
            </p>
            <p>
              There are more worthwhile problems than we can address. Our time,
              knowledge, skills, money, attention, and other resources are
              limited, so “meaningful” is how we try to choose where our
              efforts are most worth giving. We don&apos;t claim to rank every
              human problem — only to choose work where we can contribute.
            </p>
          </div>
        </div>
      </section>

      {/* 4. What "address" means */}
      <section className="border-t px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>What “address” means</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            The problem determines the approach.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              We don&apos;t decide in advance that everything needs a company,
              a software product, or a research paper. First we try to
              understand the problem — then figure out what actually helps,
              which could mean:
            </p>
          </div>
          <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
            {approaches.map((approach) => (
              <li
                key={approach}
                className="border-t py-3 text-foreground/80 last:border-b sm:[&:nth-last-child(2)]:border-b"
              >
                {approach}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. How we work */}
      <section className="border-t px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            Think → Work together → Act
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Three values shape how we work — one loop: think, work together,
            act, learn, and think again.
          </p>
          <ol className="mt-10">
            <li className="border-t py-8">
              <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                01 — Think
              </p>
              <h3 className="mt-3 font-heading text-2xl font-normal tracking-tight text-foreground">
                Curiosity
              </h3>
              <div className="mt-3 space-y-4 leading-relaxed text-foreground/80">
                <p>
                  We question assumptions, explore, learn, and try to understand
                  problems as they really are. We investigate — and remain
                  willing to change our minds. That includes questioning our
                  own ideas, not just other people&apos;s.
                </p>
              </div>
            </li>
            <li className="border-t py-8">
              <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                02 — Work together
              </p>
              <h3 className="mt-3 font-heading text-2xl font-normal tracking-tight text-foreground">
                Interdependence
              </h3>
              <div className="mt-3 space-y-4 leading-relaxed text-foreground/80">
                <p>
                  No one has every skill, perspective, experience, or
                  capability. Different backgrounds and ways of seeing make more
                  possible — so we seek out perspectives we don&apos;t already
                  have.
                </p>
                <p>
                  Empathy, responsibility, and contribution aren&apos;t separate
                  values — they&apos;re what working together looks like.
                </p>
              </div>
            </li>
            <li className="border-t border-b py-8">
              <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                03 — Act
              </p>
              <h3 className="mt-3 font-heading text-2xl font-normal tracking-tight text-foreground">
                Do it well and fast
              </h3>
              <div className="mt-3 space-y-4 leading-relaxed text-foreground/80">
                <p>
                  We act on what we understand: do things as well as reasonably
                  possible, without unnecessary delay, then learn from what
                  happens and adjust.
                </p>
                <p>
                  Well does not mean perfect. Fast does not mean reckless.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* 6. WeAMP is a means, not an end */}
      <section className="border-t px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>WeAMP is not the end</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            The contribution matters more than the container.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              WeAMP itself is not the goal — it&apos;s a way to contribute
              towards a better world. Its survival, reputation, or structure
              should never matter more than the purpose it exists for. People
              here may work on different problems.
            </p>
            <p>
              If we are wrong, we should rethink. If someone else has a better
              idea, we should learn from them. If a project can contribute more
              effectively by becoming an independent company, project,
              initiative, or something else, it should. If WeAMP itself needs
              to change, it should change.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Human potential */}
      <section className="border-t px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>Human potential</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            People can become more.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              People can learn, develop, explore, contribute, rest, play, form
              relationships, and lead meaningful lives. People aren&apos;t
              merely economic units or resources — and circumstances affect what
              anyone is able to become.
            </p>
            <p>
              This isn&apos;t a productivity philosophy. Nobody is expected to
              maximize output all the time. The aim is a world where people
              have more opportunity to contribute, explore, learn, create, and
              enjoy life.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Closing — Continuing, not completing */}
      <section className="border-t px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>
            <span className="sr-only">Contact</span>
            <span aria-hidden="true">—</span>
          </Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            Think. Work together. Act. Learn. Repeat.
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
            >
              Talk to us
            </Link>
            <Link
              href="/work"
              className="inline-flex h-11 items-center justify-center border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
