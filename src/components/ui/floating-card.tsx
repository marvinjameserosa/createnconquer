"use client";

import type React from "react";
import { motion } from "framer-motion";

interface FloatingCardProps {
  children: React.ReactNode;
  delay?: number;
}

export function FloatingCard({ children, delay = 0 }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}
