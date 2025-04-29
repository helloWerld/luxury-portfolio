"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const mainNavItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary/20 bg-black text-white/90">
      <div className="container flex h-14 max-w-screen-2xl items-center mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="mr-4 hidden md:flex flex-1 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* TODO: Add Logo or Name */}
            <span className="font-bold font-serif text-lg text-white">
              Russell Trzaska
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* Contact Link - Pushed to the right */}
          <div className="flex flex-row gap-4 items-center ml-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-3 py-2 border-1 border-white font-small rounded-md hover:bg-white hover:text-black text-sm transition-colors ease-in-out duration-300"
            >
              Get in Touch
            </Link>
            <Link
              href="/resume"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Resume
            </Link>
          </div>
        </div>
        {/* Mobile Navigation */}
        <div className="flex flex-1 items-center justify-end space-x-2 md:hidden">
          <span className="font-bold font-serif text-lg">Russell Trzaska</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground/60 hover:text-foreground/80 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-black p-6"
            >
              <div className="flex items-center justify-end mb-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-md p-2 text-foreground/60 hover:text-foreground/80"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col space-y-4">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-white/90 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition-colors"
                  >
                    Get in Touch
                  </Link>
                  <Link
                    href="/resume"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center mt-4 text-white/90 hover:text-white transition-colors"
                  >
                    Resume
                  </Link>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
