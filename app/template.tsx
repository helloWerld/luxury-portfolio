"use client"; // Template must be a Client Component

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }} // Start invisible and slightly down
      animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
      transition={{ duration: 0.5, ease: "easeInOut" }} // Adjust duration/easing as needed
      className="flex-grow" // Keep the flex-grow class to fill space
    >
      {children}
    </motion.main>
  );
}
