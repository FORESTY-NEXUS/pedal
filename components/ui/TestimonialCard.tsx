"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  index: number;
}

export function TestimonialCard({
  quote,
  name,
  role,
  index,
}: TestimonialCardProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex h-full flex-col justify-between rounded-3xl border border-line bg-paper p-9"
    >
      <blockquote className="text-lg leading-relaxed text-ink">
        “{quote}”
      </blockquote>
      <figcaption className="mt-8">
        <p className="text-sm font-semibold text-ink">{name}</p>
        <p className="text-sm text-ink-muted">{role}</p>
      </figcaption>
    </motion.figure>
  );
}
