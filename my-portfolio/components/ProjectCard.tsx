import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  href: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  href,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group border border-gray-200 rounded-xl p-6 hover:border-gold transition bg-white"
    >
      <h3 className="text-xl font-semibold mb-2 group-hover:text-gold transition">
        {title}
      </h3>

      <p className="text-gray-600 mb-4 text-sm">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 text-xs text-gray-500">
        {tech.map((item, i) => (
          <span
            key={i}
            className="px-2 py-1 border rounded-md"
          >
            {item}
          </span>
        ))}
      </div>
    </Link>
  );
}
