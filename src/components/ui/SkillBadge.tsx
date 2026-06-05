"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  delay?: number;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.4,
        delay: delay,
        ease: "easeOut",
      }}
      whileHover={{
        y: -3,
        scale: 1.03,
        borderColor: "rgba(99, 102, 241, 0.4)",
        boxShadow: "0 4px 20px rgba(99, 102, 241, 0.08)",
      }}
      className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100/60 dark:bg-neutral-900/60 hover:bg-white dark:hover:bg-neutral-900 border border-neutral-200 dark:border-neutral-850 rounded-full text-xs md:text-sm text-neutral-700 dark:text-neutral-350 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-all duration-300 backdrop-blur-sm shadow-sm cursor-default"
    >
      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
      <span>{name}</span>
    </motion.div>
  );
};
