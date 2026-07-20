import { SectionTitle } from "@/components/ui/SectionTitle";
import { FacilityCard } from "@/components/ui/FacilityCard";

const FACILITIES = [
  {
    index: "01",
    title: "Padel Courts",
    description:
      "Experience tournament-grade padel courts designed for players of every skill level. Whether you're playing casually or training competitively, every match feels world-class.",
    cta: "Reserve a Court",
    image: "/court.jpeg", // 👈 Note .jpeg here!
    imageAlt: "Players competing on a tournament padel court",
  },
  {
    index: "02",
    title: "Racing Simulator",
    description:
      "Challenge friends on professional racing simulators featuring realistic physics, immersive environments, and competitive multiplayer experiences.",
    cta: "Book a Simulator",
    image: "/gaming.jpg",
    imageAlt: "Professional sim racing cockpit and steering wheel setup",
  },
  {
    index: "03",
    title: "Café",
    description:
      "Recharge after your game with artisan coffee, refreshing drinks, and carefully crafted meals in a relaxing social atmosphere.",
    cta: "View the Menu",
    image: "/cafe.jpg",
    imageAlt: "Warm and cozy artisan cafe interior with coffee",
  },
];
export function Facilities() {
  return (
    <section id="facilities" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="Facilities"
          title="Everything you need, under one roof."
          description="Three spaces, one standard: built for people who take their play seriously."
        />

        <div className="mt-20 flex flex-col gap-24 lg:mt-24 lg:gap-32">
          {FACILITIES.map((facility, i) => (
            <FacilityCard key={facility.title} {...facility} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}