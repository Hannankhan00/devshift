"use client";

import { Moon, SunDim } from "lucide-react";
import { useRef, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

const subscribeTheme = (callback) => {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
};
const getThemeSnapshot = () => document.documentElement.classList.contains("dark");
const getThemeServerSnapshot = () => false;

export default function ThemeToggle({ className }) {
  const isDarkMode = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);
  const buttonRef = useRef(null);

  const changeTheme = async () => {
    if (!buttonRef.current) return;

    if (!document.startViewTransition) {
        document.documentElement.classList.toggle("dark");
        return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        document.documentElement.classList.toggle("dark");
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };
  return (
    <button ref={buttonRef} onClick={changeTheme} className={cn(className)}>
      {isDarkMode ? <SunDim /> : <Moon />}
    </button>
  );
};