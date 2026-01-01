import Link from "next/link";

type BlogPreviewCardProps = {
  title: string;
  excerpt: string;
  date: string;
  href: string;
};

export default function BlogPreviewCard({
  title,
  excerpt,
  date,
  href,
}: BlogPreviewCardProps) {
  return (
    <Link
      href={href}
      className="block border-b border-gray-200 pb-6 hover:border-gold transition"
    >
      <p className="text-sm text-gray-500 mb-2">{date}</p>

      <h3 className="text-xl font-semibold mb-2 hover:text-gold transition">
        {title}
      </h3>

      <p className="text-gray-600 max-w-2xl">
        {excerpt}
      </p>
    </Link>
  );
}
