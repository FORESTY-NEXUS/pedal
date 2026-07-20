import { SectionTitle } from "@/components/ui/SectionTitle";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

const TESTIMONIALS = [
  {
    quote:
      "The courts feel like they belong in Europe, not Islamabad. I've cancelled my other memberships — this is the only club I go to now.",
    name: "Ahmad Raza",
    role: "Pro Member since 2026",
  },
  {
    quote:
      "I came for the padel and stayed for the coffee. The whole place feels considered — nothing about it feels like a typical sports club.",
    name: "Sana Khalid",
    role: "Starter Member",
  },
  {
    quote:
      "Booking a simulator session for a client meeting was the best decision I made this quarter. It's become our go-to spot for informal business.",
    name: "Bilal Farooq",
    role: "Elite Member",
  },
];

export function Testimonials() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="Members"
          title="What our members say."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-20">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} index={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
