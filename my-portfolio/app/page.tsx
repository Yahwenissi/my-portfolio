import AnimatedSection  from "../components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Personal portfolio of Yahwenissi Elias. Web development projects, blog posts, and professional timeline.",
};

export default function HomePage() {
  return (
    <AnimatedSection>
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Hi, I&apos;m <span className="text-gold">Yahwenissi Elias</span>
        </h1>

        <p className="text-base md:text-lg max-w-xl md:max-w-2xl text-gray-600 mb-8">
          I build software, document my learning journey, and create meaningful
          digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/portfolio"
            className="px-6 py-3 bg-gold text-white rounded-lg"
          >
            View Portfolio
          </a>

          <Link
            href="/blog"
            className="px-6 py-3 border border-gold text-gold rounded-lg hover:bg-gold hover:text-white transition"
          >
            Read Blog
          </Link>
        </div>
      </section>
    </AnimatedSection>
  );
}
