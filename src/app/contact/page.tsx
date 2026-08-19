import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with WeAMP.",
};

export default function Contact() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-heading text-4xl font-normal tracking-tight text-foreground sm:text-5xl">
          Contact WeAMP
        </h1>
        <a
          href="mailto:hello@weamp.org"
          className="mt-8 inline-block text-lg text-primary underline-offset-4 transition-colors hover:underline"
        >
          hello@weamp.org
        </a>
      </div>
    </section>
  );
}
