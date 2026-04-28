import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
      <p>© {new Date().getFullYear()} AG Creative</p>

      <div className="mt-2 flex justify-center gap-4">
        <Link href="/">Home</Link>
        <Link href="/case-studies">Case Studies</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
}
