export const runtime = "nodejs";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "/content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
};

export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");

    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
    };
  });
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    title: data.title as string,
    date: data.date as string,
    content,
  };
}
