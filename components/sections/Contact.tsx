"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  message: z.string().min(10, "Tell us a little more (min. 10 characters)"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const CONTACT_DETAILS = [
  { icon: MapPin, label: "Address", value: "Islamabad, Pakistan" },
  { icon: Phone, label: "Phone", value: "+92 (000) 000-0000" },
  { icon: Mail, label: "Email", value: "hello@pedalandco.pk" },
  { icon: Clock, label: "Opening Hours", value: "Daily · 7:00 AM – 12:00 AM" },
];

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  function onSubmit() {
    // Frontend-only demo: no backend wired up yet.
    reset();
  }

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="Contact"
          title="Come see it for yourself."
          description="Have a question about membership, bookings, or private events? Reach out."
        />

        <div className="mt-16 grid grid-cols-1 gap-16 lg:mt-20 lg:grid-cols-2 lg:gap-24">
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2"
          >
            {CONTACT_DETAILS.map((detail) => (
              <div key={detail.label}>
                <detail.icon className="h-5 w-5 text-court" strokeWidth={1.5} />
                <dt className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  {detail.label}
                </dt>
                <dd className="mt-1 text-base text-ink">{detail.value}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-5"
          >
            <Field label="Name" error={errors.name?.message}>
              <input
                {...register("name")}
                type="text"
                placeholder="Your full name"
                className="w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-ink-muted/60 focus:border-court"
              />
            </Field>

            <Field label="Email" error={errors.email?.message}>
              <input
                {...register("email")}
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-ink-muted/60 focus:border-court"
              />
            </Field>

            <Field label="Phone" error={errors.phone?.message}>
              <input
                {...register("phone")}
                type="tel"
                placeholder="+92 300 0000000"
                className="w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-ink-muted/60 focus:border-court"
              />
            </Field>

            <Field label="Message" error={errors.message?.message}>
              <textarea
                {...register("message")}
                rows={4}
                placeholder="Tell us how we can help"
                className="w-full resize-none rounded-xl border border-line bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-ink-muted/60 focus:border-court"
              />
            </Field>

            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="mt-2"
            >
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink-muted">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
