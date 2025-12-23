import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gold px-4 md:px-8 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <h1 className="text-xl md:text-2xl font-bold text-gold text-center md:text-left">
        My Portfolio
      </h1>

      <nav className="flex justify-center md:justify-end gap-4 text-sm md:text-base">
        <Link href="/" className="hover:text-gold">Home</Link>
        <Link href="/about" className="hover:text-gold">About</Link>
        <Link href="/portfolio" className="hover:text-gold">Portfolio</Link>
        <Link href="/blog" className="hover:text-gold">Blog</Link>
      </nav>
    </header>
  );
}
