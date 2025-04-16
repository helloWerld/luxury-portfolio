"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean; // Trigger animation only once?
  amount?: number; // Percentage of element in view to trigger (0 to 1)
  delay?: number; // Delay before animation starts
}

export default function ScrollFadeIn({
  children,
  className,
  once = true,
  amount = 0.3, // Trigger when 30% is visible
  delay = 0,
}: ScrollFadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      className={className} // Pass through any additional classes
      initial={{ opacity: 0, y: 20 }} // Start invisible and slightly down
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate when in view
      transition={{ duration: 0.6, ease: "easeInOut", delay: delay }} // Control animation speed and delay
    >
      {children}
    </motion.div>
  );
}
