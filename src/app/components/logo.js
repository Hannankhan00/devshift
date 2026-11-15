import Image from "next/image";

/**
 * Technoad brand mark: gradient icon + "TECHNOAD" wordmark.
 * The wordmark follows the theme: black in light mode, white in dark mode.
 */
export default function Logo({ iconClassName = "h-9", textClassName = "text-xl", priority = false }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/assets/logo.png"
        alt=""
        width={318}
        height={256}
        priority={priority}
        className={`${iconClassName} w-auto`}
      />
      <span
        className={`${textClassName} font-extrabold leading-none tracking-tight`}
        style={{ color: "var(--foreground)" }}
      >
        TECHNOAD
      </span>
    </span>
  );
}
