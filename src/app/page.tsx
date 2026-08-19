import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-heading text-5xl font-normal tracking-tight text-foreground sm:text-6xl md:text-7xl">
          WeAMP
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          We Address Meaningful Problems.
        </p>
        <div className="mt-10">
          <Link
            href="/about"
            className="inline-flex h-11 items-center justify-center bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            About WeAMP
          </Link>
        </div>
      </div>
    </section>
  );
}
