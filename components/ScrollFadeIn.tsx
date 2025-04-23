"use client";

import { motion } from "framer-motion";

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay before animation starts
}

export default function ScrollFadeIn({
  children,
  className,
  delay = 0,
}: ScrollFadeInProps) {
  return (
    <motion.div
      className={className} // Pass through any additional classes
      initial={{ opacity: 0, y: 20 }} // Start invisible and slightly down
      animate={{ opacity: 1, y: 0 }} // Always animate to visible state
      transition={{ duration: 0.6, ease: "easeInOut", delay: delay }} // Control animation speed and delay
    >
      {children}
    </motion.div>
  );
}
