"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import AnimatedText from "./AnimatedText";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header with Menu */}
      <header className="relative w-full flex justify-between items-center px-6 py-4 text-sm z-50 bg-black">
        <button
          className="relative w-6 h-6 flex flex-col justify-center items-center group z-50"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {/* Top Line */}
          <motion.span
            className="block h-0.5 w-6 bg-white rounded-sm absolute"
            animate={{
              rotate: menuOpen ? 45 : 0,
              y: menuOpen ? 0 : -6,
            }}
            transition={{ duration: 0.3 }}
          />
          {/* Bottom Line */}
          <motion.span
            className="block h-0.5 w-6 bg-white rounded-sm absolute"
            animate={{
              rotate: menuOpen ? -45 : 0,
              y: menuOpen ? 0 : 6,
            }}
            transition={{ duration: 0.3 }}
          />
        </button>

        <h1 className="text-xl md:text-2xl font-normal tracking-wide text-white">
          NUCLEUS IOB
        </h1>

        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className="hidden font-medium md:block text-white/80 hover:text-white"
          >
            Contact
          </Link>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 text-white px-6 py-8 pt-28"
          >
            <nav className="space-y-4 text-3xl md:text-5xl font-normal flex flex-col">
              {[
                { text: "Home", href: "/", page: "001" },
                { text: "About", href: "/about", page: "002" },
                { text: "Technical", href: "/technical", page: "003" },
                { text: "Ecosystem", href: "/ecosystem", page: "004" },
                { text: "Governance", href: "/governance", page: "005" },
                { text: "Contact", href: "/contact", page: "006" },
              ].map(({ text, href, page }) => (
                <Link
                  key={text}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex justify-between items-center w-fit transition-all duration-300"
                >
                  <div className="block w-full px-2 py-1 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    <AnimatedText text={text.toUpperCase()} />
                  </div>
                  <div className="ml-4 text-xs md:text-sm font-mono transition-all duration-300 text-white group-hover:text-black opacity-0 group-hover:opacity-100">
                    PAGE {page}
                  </div>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
