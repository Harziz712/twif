"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      className="hover:text-gray-300 transition"
    >
      {resolvedTheme === "dark" ? (
        <Sun size={20} weight="fill" />
      ) : (
        <Moon size={20} weight="fill" />
      )}
    </button>
  );
}
