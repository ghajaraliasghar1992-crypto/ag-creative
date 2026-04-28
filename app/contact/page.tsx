import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | AG Creative",
  description:
    "Get in touch with AG Creative for growth marketing and creative partnerships."
};

export default function ContactPage() {
  const email = "hello@agcreative.studio";

  return (
    <section className="container-section py-12 md:py-16">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">
          Contact
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">
          Let’s build your next growth story.
        </h1>

        <p className="mt-4 text-white/75">
          Replace this section with your preferred contact method later. For now,
          email AG Creative directly.
        </p>

        <a
          href={`mailto:${email}`}
          className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
        >
          {email}
        </a>
      </div>
    </section>
  );
}
