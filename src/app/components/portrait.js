import Image from "next/image";

/**
 * Fills its (relative, overflow-hidden) parent with either the person's photo
 * or a themed illustrated portrait. Put `group` on an ancestor for the hover zoom.
 */
export default function Portrait({ person, sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" }) {
  const Icon = person.icon;

  if (person.image) {
    return (
      <Image
        src={person.image}
        alt={`${person.name}, ${person.role}`}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    );
  }

  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, color-mix(in srgb, ${person.tint} 28%, var(--card-bg)) 0%, var(--card-bg) 75%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(var(--card-border) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-10 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: person.tint, opacity: 0.35 }}
      />
      <div className="absolute inset-0 flex items-end justify-center" aria-hidden="true">
        <div
          className="relative h-[62%] w-[58%] rounded-t-[999px] transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundColor: `color-mix(in srgb, ${person.tint} 22%, var(--background))` }}
        >
          <div
            className="absolute -top-[38%] left-1/2 h-[52%] w-[52%] -translate-x-1/2 rounded-full"
            style={{ backgroundColor: `color-mix(in srgb, ${person.tint} 30%, var(--background))` }}
          />
        </div>
      </div>
      <span
        className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-lg"
        style={{ backgroundColor: person.tint }}
      >
        <Icon size={20} aria-hidden="true" />
      </span>
    </>
  );
}
