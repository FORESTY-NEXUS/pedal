"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  MapPin,
  Smartphone,
  Coffee,
  Sparkles,
  Award,
  Zap,
} from "lucide-react";

const BENEFITS = [
  { icon: Sparkles, label: "Premium Equipment" },
  { icon: Users, label: "Community Driven" },
  { icon: Trophy, label: "Professional Courts" },
  { icon: Award, label: "Luxury Experience" },
  { icon: MapPin, label: "Prime Islamabad Location" },
  { icon: Smartphone, label: "Easy Booking" },
  { icon: Coffee, label: "Great Coffee" },
  { icon: Zap, label: "Competitive Events" },
];

export function WhyPedalCo() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-court">
            Why Pedal&amp;Co
          </p>
          <h2 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Built for people who take their game seriously —
            <span className="text-ink-muted"> and their coffee too.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-start gap-4 border-b border-line pb-6"
            >
              <benefit.icon
                className="mt-0.5 h-5 w-5 shrink-0 text-court"
                strokeWidth={1.5}
              />
              <span className="text-base font-medium text-ink">
                {benefit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
