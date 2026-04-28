import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="container-section py-20 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">404</p>
      <h1 className="mt-2 text-3xl font-semibold text-white">Page not found</h1>
      <p className="mt-2 text-white/70">The page you’re looking for doesn’t exist.</p>
      <Link href="/" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">
        Back home
      </Link>
    </section>
  );
}
