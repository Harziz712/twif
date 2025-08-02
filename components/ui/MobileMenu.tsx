"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const navLinks = [
  { name: "Natives", href: "#" },
  { name: "Agbada", href: "#" },
  { name: "Suits", href: "#" },
  { name: "Shirts", href: "#" },
  { name: "RTW", href: "#" },
  { name: "Wedding Suits", href: "#" },
  { name: "Fittings", href: "#" },
];



export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", damping: 20 }}
      className="p-6"
    >
      <nav className="flex flex-col gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-lg font-medium"
            onClick={onClose}
          >
            {link.name}
          </Link>
        ))}
      </nav>


    </motion.div>
  );
}
