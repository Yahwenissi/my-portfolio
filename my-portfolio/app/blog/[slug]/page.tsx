import { getPostBySlug } from "../../../lib/posts";
import { remark } from "remark";
import html from "remark-html";

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  const processedContent = await remark()
    .use(html)
    .process(post.content);

  const contentHtml = processedContent.toString();

  return (
    <article className="px-8 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gold mb-2">
        {post.title}
      </h1>

      <p className="text-sm text-gray-500 mb-8">
        {post.date}
      </p>

      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
