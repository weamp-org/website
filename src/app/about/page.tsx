import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "WeAMP is an organization focused on addressing meaningful problems and contributing to a better world.",
};

export default function About() {
  return (
    <section className="flex flex-1 flex-col px-4 py-20 sm:px-6">
      <div className="mx-auto w-full max-w-2xl">
        <h1 className="font-heading text-4xl font-normal tracking-tight text-foreground sm:text-5xl">
          About WeAMP
        </h1>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground/80">
          <p>
            WeAMP is an organization focused on addressing meaningful problems
            and contributing to a better world.
          </p>
          <p>
            We collaborate as people with different skills, backgrounds,
            perspectives, and capabilities to address problems that matter. We
            use the word &quot;address&quot; intentionally: depending on the
            problem, our work may involve building software, creating a
            company, conducting research, education, engineering, medicine,
            policy, community work, prevention, or something else entirely.
          </p>
          <p>
            We do not need to keep every solution under WeAMP permanently. A
            solution may grow into an independent company, project, initiative,
            or other entity.
          </p>
          <p>
            WeAMP is not trying to solve every problem in the world. Instead,
            our focus is on meaningful problems whose resolution can make a
            worthwhile contribution towards a better world.
          </p>
        </div>
      </div>
    </section>
  );
}
