"use client";

import AnimatedList from "../../components/AnimatedList";

type Post = {
  slug: string;
  title: string;
  date: string;
};

export default function BlogClient({ posts }: { posts: Post[] }) {
  return <AnimatedList posts={posts} />;
}
