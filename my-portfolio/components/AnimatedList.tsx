"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Post = {
  slug: string;
  title: string;
  date: string;
};

export default function AnimatedList({ posts }: { posts: Post[] }) {
  return (
    <ul className="space-y-6">
      {posts.map((post, index) => (
        <motion.li
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="text-base md:text-lg font-semibold hover:text-gold"
          >
            {post.title}
          </Link>
          <p className="text-xs md:text-sm text-gray-500">{post.date}</p>
        </motion.li>
      ))}
    </ul>
  );
}
