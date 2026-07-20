"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="bg-ink py-28 lg:py-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-3xl px-6 text-center lg:px-8"
      >
        <h2 className="text-4xl font-medium tracking-tight text-paper sm:text-5xl">
          Ready to Play?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-paper/60 sm:text-lg">
          Book your next game and experience Islamabad&apos;s most premium
          sports club.
        </p>
        <div className="mt-10">
          <Button
            variant="secondary"
            className="border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink"
          >
            Reserve Now
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
