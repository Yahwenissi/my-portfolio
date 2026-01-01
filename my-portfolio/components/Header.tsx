"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";


export default function Header() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `relative px-1 py-2 transition ${
      pathname === href ? "text-gold" : "text-gray-700"
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="font-bold text-lg">
          Yahwenissi<span className="text-gold">.</span>
        </Link>

        {/* Navigation */}
        <div className="flex gap-8">
          {[
            { name: "Home", href: "/" },
            { name: "Projects", href: "/portfolio" },
            { name: "Blog", href: "/blog" },
            { name: "About", href: "/about" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className={`group ${linkClass(link.href)}`}>

              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gold transition-all duration-300
                  ${
                    pathname === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
              />
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
        {/* nav links here */}
           <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
