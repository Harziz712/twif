"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChatCircleDots,
  Globe,
  User,
  ShoppingBag,
} from "@phosphor-icons/react";

const navLinks = [
  { name: "Lookbooks", href: "#" },
  { name: "Custom Clothing", href: "#" },
  { name: "Custom Footwear", href: "#" },
  { name: "Women ↗", href: "#" },
];

const userLinks = [
  { icon: <ChatCircleDots size={20} />, name: "Chat", href: "#" },
  { icon: <Globe size={20} />, name: "Global", href: "#" },
  { icon: <User size={20} />, name: "Login", href: "#" },
  { icon: <ShoppingBag size={20} />, name: "Cart", href: "#" },
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

      <div className="mt-8 border-t pt-4 space-y-3">
        {userLinks.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="flex items-center gap-2 text-sm"
            onClick={onClose}
          >
            {link.icon} {link.name}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
