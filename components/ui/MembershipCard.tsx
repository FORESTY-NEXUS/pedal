"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface MembershipCardProps {
  name: string;
  tagline: string;
  benefits: string[];
  highlighted?: boolean;
  badge?: string;
  index: number;
}

export function MembershipCard({
  name,
  tagline,
  benefits,
  highlighted = false,
  badge,
  index,
}: MembershipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative flex flex-col rounded-3xl border p-10",
        highlighted
          ? "border-ink bg-ink text-paper md:-translate-y-4 md:shadow-[0_30px_60px_-15px_rgba(17,17,17,0.25)]"
          : "border-line bg-paper text-ink"
      )}
    >
      {badge && (
        <span className="absolute -top-3 left-10 rounded-full bg-court px-4 py-1 text-xs font-semibold uppercase tracking-wider text-paper">
          {badge}
        </span>
      )}

      <h3 className="text-2xl font-medium tracking-tight">{name}</h3>
      <p
        className={cn(
          "mt-2 text-sm",
          highlighted ? "text-paper/60" : "text-ink-muted"
        )}
      >
        {tagline}
      </p>

      <ul className="mt-8 flex-1 space-y-4">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-3 text-sm">
            <Check
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                highlighted ? "text-court" : "text-court"
              )}
              strokeWidth={2.5}
            />
            <span className={highlighted ? "text-paper/90" : "text-ink/80"}>
              {benefit}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={highlighted ? "secondary" : "primary"}
        className={cn(
          "mt-10 w-full",
          highlighted &&
            "border-paper/30 text-paper hover:border-paper hover:bg-paper/10 hover:text-paper"
        )}
      >
        Choose {name}
      </Button>
    </motion.div>
  );
}
