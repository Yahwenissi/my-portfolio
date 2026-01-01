import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-28 px-6 md:px-16 bg-dark text-white">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Build Something Meaningful
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Whether it’s a project, collaboration, or just a conversation about
          technology and ideas — I’m always open to connecting.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-3 bg-gold text-dark font-medium rounded-lg hover:scale-105 transition"
          >
            Get in Touch
          </Link>

          <Link
            href="/blog"
            className="px-8 py-3 border border-gray-400 rounded-lg hover:bg-white hover:text-dark transition"
          >
            Read My Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
