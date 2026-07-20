import { SectionTitle } from "@/components/ui/SectionTitle";

const TILES = [
  {
    src: "https://images.unsplash.com/photo-1626248801379-51a0748a5f96?auto=format&fit=crop&w=800&q=80",
    alt: "Padel court in play",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    alt: "Café interior",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=800&q=80",
    alt: "Simulator lounge",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80",
    alt: "Exterior view of the court",
    span: "",
  },
  {
    src: "/gallary 1.png",
    alt: "Members mingling in the lounge",
    span: " object-cover object-center",
  },
  {
    src: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80",
    alt: "Exterior view of the court",
    span: "",
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="Gallery"
          title="A look inside the club."
          description="A glimpse of the courts, the café, and the community that fills them."
        />

        <div className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-3 lg:mt-20 lg:gap-6">
          {TILES.map((tile) => (
            <div key={tile.alt} className={`relative overflow-hidden rounded-2xl ${tile.span}`}>
              <img
                src={tile.src}
                alt={tile.alt}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}