"use client";

import {
  List as Menu,
  X,
} from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import MobileMenu, { navLinks } from "./ui/MobileMenu";
import ThemeToggle from "./ui/themeToggle";
import {
  ChatCircleDots,
  Globe,
  User,
  ShoppingBag,
} from "@phosphor-icons/react";

const userLinks = [
  { icon: <ChatCircleDots size={20} />, name: "Chat", href: "#" },
  { icon: <Globe size={20} />, name: "Global", href: "#" },
  { icon: <User size={20} />, name: "Login", href: "#" },
  { icon: <ShoppingBag size={20} />, name: "Cart", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 text-white">
        <div className="flex items-between w-full gap-20">
          {/* Left: Drawer */}
                <Sheet open={open} onOpenChange={setOpen} >
                <SheetTrigger asChild>
                    <button>
                    <Menu size={24} weight="regular" />
                    </button>
                </SheetTrigger>

                <SheetContent side="left" className="bg-white text-black px-4 py-4 h-screen">
                    <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Menu</h2>
                
                    </div>

                    <MobileMenu onClose={() => setOpen(false)} />
                </SheetContent>
                </Sheet>


          {/* Middle: Nav */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-gray-300 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
          </div>

          {/* Center: Logo */}
          <Link
            href="/"
            className="text-xl font-semibold absolute left-1/2 transform -translate-x-1/2"
          >
            Twif
          </Link>

          {/* Right: Actions */}
          <div className="flex gap-4 items-center">
            <ThemeToggle />
         <div className="hidden md:flex gap-4 items-center">
            {userLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="hover:text-gray-300 transition hidden sm:inline-flex"
              >
                {link.icon}
              </Link>
        ))}
      </div>

            <select className="bg-transparent text-sm outline-none border-none text-white dark:text-white">
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="es">ES</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
