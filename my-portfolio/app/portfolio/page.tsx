import { motion } from "framer-motion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Completed projects and development timeline of Yahwenissi Elias.",
};

export default function PortfolioPage() {
  return (
    <section className="px-4 md:px-8 py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-gold mb-8">
        Portfolio
      </h1>
    </section>
  );
}