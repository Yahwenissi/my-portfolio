"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="border px-4 py-2 rounded-md text-sm hover:text-gold"
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
