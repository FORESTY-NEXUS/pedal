import { SectionTitle } from "@/components/ui/SectionTitle";
import { MembershipCard } from "@/components/ui/MembershipCard";

const PLANS = [
  {
    name: "Starter",
    tagline: "Perfect for casual players.",
    benefits: ["Court discounts", "Member events", "Priority booking"],
  },
  {
    name: "Pro",
    tagline: "For the regulars who never miss a week.",
    benefits: [
      "Everything in Starter",
      "Extra discounts",
      "Free tournament entry",
      "Monthly guest pass",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Elite",
    tagline: "The full Pedal&Co experience.",
    benefits: [
      "Unlimited priority booking",
      "Exclusive events",
      "VIP lounge access",
      "Premium discounts",
      "Personal locker",
    ],
  },
];

export function Membership() {
  return (
    <section id="membership" className="bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="Membership"
          title="Choose how you play."
          description="Three tiers, each built around a different relationship with the club."
          align="center"
        />

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 lg:mt-24">
          {PLANS.map((plan, i) => (
            <MembershipCard key={plan.name} index={i} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
