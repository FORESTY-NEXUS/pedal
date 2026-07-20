"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Gauge, Coffee } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const FACILITY_BADGES = [
  { icon: Target, label: "Padel Court" },
  { icon: Gauge, label: "Racing Simulator" },
  { icon: Coffee, label: "Café" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen items-end overflow-hidden"
    >
      {/* Hero Image Placeholder — full-bleed background */}
      <img
        src="/hero-section (1).jpeg"
        alt="Club photography hero banner"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Legibility overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/25 to-ink/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-20 pt-44 text-center lg:pb-24 lg:pt-56">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-paper/80"
        >
          Islamabad · Est. 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="font-hero uppercase text-paper"
        >
          ADVENTURE STARTS <br />WITH EVERY PADEL
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-paper/80 sm:text-lg"
        >
          Book premium padel courts, challenge friends on our professional racing simulators,
          and unwind at our café all under one roof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-8"
        >
          <button className="group flex items-center gap-6 rounded-full bg-paper py-2 pl-8 pr-2 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-paper/90">
            Book a Court
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-court text-paper transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-5 w-5" />
            </span>
          </button>

          <button className="text-sm font-medium text-paper underline decoration-paper/40 underline-offset-4 transition-colors hover:decoration-paper">
            Explore Facilities
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.44 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
        >
          {FACILITY_BADGES.map((facility) => (
            <div key={facility.label} className="flex items-center gap-3">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-paper/25 bg-paper/10 text-paper backdrop-blur-sm">
                <facility.icon className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <span className="text-sm font-bold uppercase tracking-wide text-paper">
                {facility.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
