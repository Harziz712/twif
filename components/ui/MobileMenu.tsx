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
      <nav className="flex flex-col text-gray-800  gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-lg font-medium hover:border-b-2 hover:border-t-2 p-2 hover:border-gray-400 hover:text-center hover:bg-gray-100 transition-colors duration-300"
            onClick={onClose}
          >
            {link.name}
          </Link>
        ))}
      </nav>


    </motion.div>
  );
}
