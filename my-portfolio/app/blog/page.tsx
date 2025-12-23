import { getAllPosts } from "../../lib/posts";
import BlogClient from "./BlogClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Blog by Yahwenissi Elias — daily learning, development journey, and tech insights.",
};

export const runtime = "nodejs"; // ✅ VERY IMPORTANT

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="px-4 md:px-8 py-12 max-w-3xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gold mb-6">
        Blog
      </h1>

      <BlogClient posts={posts} />
    </section>
  );
}
