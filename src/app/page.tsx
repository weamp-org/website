import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ScrollToSectionLink } from "@/components/scroll-to-section-link";

export const metadata: Metadata = {
  description:
    "WeAMP is a group of people who work together to address meaningful problems, contributing towards a better world.",
};

// Add future work here — each entry renders as a row in the "What we're
// working on" section. Keep entries factual; don't invent claims.
const projects = [
  {
    name: "Menim",
    slug: "menim",
    description: "Software for independent retail businesses.",
  },
  {
    name: "Uni Pasco Hub",
    slug: "uni-pasco-hub",
    description:
      "A hub for Ghanaian university students to find, share, and access past exam papers.",
  },
  {
    name: "Worth Knowing",
    slug: "worth-knowing",
    description: "A place to discover and share things worth knowing.",
  },
];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      {/* 1. Hero — Who we are */}
      <section className="px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-5xl font-normal tracking-tight text-foreground sm:text-6xl md:text-7xl">
            <span className="text-primary">We</span> Address Meaningful
            Problems.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            WeAMP is a group of people who work together to address meaningful
            problems, contributing towards a better world.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex h-11 items-center justify-center bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
            >
              About WeAMP
            </Link>
            <ScrollToSectionLink
              targetId="work"
              className="inline-flex h-11 items-center justify-center border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              See what we&apos;re working on
            </ScrollToSectionLink>
          </div>
        </div>
      </section>

      {/* 2. Why — The world could be much better */}
      <section className="border-t px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>Why</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            The world could be much better.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              The world is already good in many ways, but it could be much
              better. Unnecessary suffering continues, good systems could work
              better, and new problems keep emerging as circumstances change.
            </p>
            <p>
              No one person can address all of that alone. So we work together.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Meaningful problems */}
      <section className="border-t px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>Meaningful problems</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            We focus on meaningful problems.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              A meaningful problem is one where solving it could make a
              worthwhile contribution towards a better world. It doesn&apos;t
              have to be global to matter.
            </p>
            <p>
              We can&apos;t work on everything. Our time, knowledge, skills,
              money, attention, and other resources are limited, so we try to
              focus where our efforts are most worth giving.
            </p>
          </div>
        </div>
      </section>

      {/* 4. How we work — Think → Work together → Act */}
      <section className="border-t px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            Think → Work together → Act
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            How we work comes down to three values, in a loop: think, work
            together, act, learn, and think again.
          </p>
          <ol className="mt-10">
            <li className="border-t py-8">
              <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                01 — Think
              </p>
              <h3 className="mt-3 font-heading text-2xl font-normal tracking-tight text-foreground">
                Curiosity
              </h3>
              <p className="mt-3 leading-relaxed text-foreground/80">
                Question assumptions. Explore, learn, and try to understand
                what&apos;s really going on — and remain willing to change our
                minds.
              </p>
            </li>
            <li className="border-t py-8">
              <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                02 — Work together
              </p>
              <h3 className="mt-3 font-heading text-2xl font-normal tracking-tight text-foreground">
                Interdependence
              </h3>
              <p className="mt-3 leading-relaxed text-foreground/80">
                No one has every skill, perspective, experience, or capability.
                We get further by working together.
              </p>
            </li>
            <li className="border-t border-b py-8">
              <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                03 — Act
              </p>
              <h3 className="mt-3 font-heading text-2xl font-normal tracking-tight text-foreground">
                Do it well and fast
              </h3>
              <p className="mt-3 leading-relaxed text-foreground/80">
                Do things as well as reasonably possible, without unnecessary
                delay. Well does not mean perfect. Fast does not mean reckless.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* 5. What "address" means */}
      <section className="border-t px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>What “address” means</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            The problem determines the approach.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Addressing a problem could mean software, company-building,
            research, education, engineering, medicine, policy, community work,
            prevention — or something else entirely.
          </p>
        </div>
      </section>

      {/* 6. What we're working on */}
      <section
        id="work"
        aria-label="What we're working on"
        className="border-t scroll-mt-16 px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-2xl">
          <Eyebrow>What we&apos;re working on</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            What we&apos;re working on.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            This is what some of us are working on right now.
          </p>
          <div className="mt-8">
            {projects.map((project) => (
              <article
                key={project.name}
                className="border-t py-8 last:border-b"
              >
                <h3 className="font-heading text-2xl font-normal tracking-tight text-foreground">
                  <Link
                    href={`/work#${project.slug}`}
                    className="transition-colors hover:text-primary"
                  >
                    {project.name}
                  </Link>
                </h3>
                <p className="mt-3 leading-relaxed text-foreground/80">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
          <Link
            href="/work"
            className="mt-8 inline-block text-primary underline-offset-4 transition-colors hover:underline"
          >
            More about our work →
          </Link>
        </div>
      </section>

      {/* 7. Projects can become independent */}
      <section className="border-t px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>A means, not an end</Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            Work can grow beyond WeAMP.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              Something can start with people working together as WeAMP and
              later stand on its own as a company, project, initiative, or
              something else — what matters is the contribution it makes.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Closing CTA */}
      <section className="border-t px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>
            <span className="sr-only">Contact</span>
            <span aria-hidden="true">—</span>
          </Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
            Want to work on something that matters?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Have an idea, or want to collaborate? We&apos;d like to hear from
            you.
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
