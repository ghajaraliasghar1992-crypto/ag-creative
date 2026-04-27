import Link from "next/link";
import { siteConfig } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 text-sm text-white/60 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-medium text-white">{siteConfig.name}</p>
          <p>{siteConfig.tagline}</p>
        </div>
        <div className="flex gap-5">
          <Link href="/case-studies" className="hover:text-white">
            Case Studies
          </Link>
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
