import AnimatedSection from "../components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";
import TypingText from "../components/TypingText";
import CodeBackground from "../components/CodeBackground";
import ProjectCard from "../components/ProjectCard";
import BlogPreviewCard from "../components/BlogPreviewCard";
import ContactCTA from "../components/ContactCTA";


export const metadata: Metadata = {
  title: "Home",
  description:
    "Personal portfolio of Yahwenissi Elias. Web development projects, blog posts, and professional timeline.",
};

export default function HomePage() {
  return (
    <AnimatedSection>
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-16 overflow-hidden">
        
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#faf7ef] to-white" />
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <CodeBackground />

        {/* Content */}
        <div className="relative max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-2">
            Hey There, I&apos;m <span className="text-gold">Nessi</span>
          </h1>

          <TypingText />
          <p className="text-lg md:text-xl max-w-2xl text-gray-700 mb-10">
            Developer & blogger documenting my journey in software engineering,
            building meaningful digital products, and sharing what I learn.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="px-7 py-3 border border-gold text-gold rounded-lg font-medium hover:scale-90 transition"
            >
              View Projects
            </Link>

            <Link
              href="/blog"
              className="px-7 py-3 border border-gold text-gold rounded-lg font-medium hover:scale-90 transition"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <AnimatedSection>
    <section className="py-24 px-6 md:px-16 bg-white">
    <div className="max-w-6xl mx-auto">
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Featured Projects
      </h2>

      <p className="text-gray-600 max-w-2xl mb-12">
        A selection of projects where I applied software engineering
        principles, explored new technologies, and solved real problems.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Online Legal Aid Portal"
          description="A platform connecting users with legal resources and assistance, built as part of an OOSE course."
          tech={["Next.js", "TypeScript", "OOP", "UI/UX"]}
          href="/portfolio"
        />

        <ProjectCard
          title="Personal Portfolio Website"
          description="My personal developer portfolio showcasing projects, blogs, and professional journey."
          tech={["Next.js", "Tailwind", "SEO"]}
          href="/portfolio"
        />

        <ProjectCard
          title="Assembly PCM WAV Player"
          description="A low-level music player built in x86 assembly supporting WAV playback and interactive controls."
          tech={["x86 Assembly", "TASM", "DOS"]}
          href="/portfolio"
        />
      </div>
    </div>
      </section>
    </AnimatedSection>

      {/* Latest Blog Posts Section */}
<AnimatedSection>
  <section className="py-24 px-6 md:px-16 bg-white">
    <div className="max-w-4xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        From the Blog
      </h2>

      <p className="text-gray-600 mb-12">
        Thoughts on software engineering, learning in public, and building
        things that matter.
      </p>

      <div className="space-y-10">
        <BlogPreviewCard
          title="What I Learned Building My First Next.js Portfolio"
          excerpt="A reflection on design decisions, mistakes, and lessons learned while building my first production-ready portfolio."
          date="Dec 2025"
          href="/blog"
        />

        <BlogPreviewCard
          title="Why Learning in Public Changed How I Code"
          excerpt="Sharing progress publicly improved my discipline, feedback loop, and understanding of software fundamentals."
          date="Nov 2025"
          href="/blog"
        />

        <BlogPreviewCard
          title="Low-Level Programming Taught Me High-Level Thinking"
          excerpt="How writing an x86 assembly WAV player reshaped how I think about abstraction and performance."
          date="Oct 2025"
          href="/blog"
        />
      </div>

      <div className="mt-12">
        <Link
          href="/blog"
          className="text-gold font-medium hover:underline"
        >
          Read all posts →
        </Link>
      </div>
    </div>
  </section>
</AnimatedSection>

      {/* Contact CTA Section */}
<AnimatedSection>
  <ContactCTA />
</AnimatedSection>

    </AnimatedSection>
  );
}
