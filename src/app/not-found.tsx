import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not found",
  description: "The page you're looking for doesn't exist on WeAMP.",
};

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-heading text-4xl font-normal tracking-tight text-balance text-foreground sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 w-full max-w-xs items-center justify-center bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 sm:w-auto"
          >
            Go home
          </Link>
          <Link
            href="/work"
            className="inline-flex h-11 w-full max-w-xs items-center justify-center border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted sm:w-auto"
          >
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
