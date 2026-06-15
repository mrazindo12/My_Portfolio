"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, ArrowDown, MapPin } from "lucide-react";
import { developerProfile } from "@/data/portfolioData";
import { Button } from "./ui/Button";

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const highlightTech = [
    "Next.js",
    "Python",
    "Flutter",
    "Flask",
    "Tailwind CSS",
    "JavaScript",
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-neutral-50 dark:bg-neutral-950"
    >
      {/* Visual background layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      
      {/* Sleek radial background glows */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />



      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6 md:gap-8"
        >
          {/* Availability Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-850 shadow-sm text-xs font-semibold text-neutral-600 dark:text-neutral-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              <span>Available for Remote Roles</span>
            </div>
          </motion.div>

          {/* Profile Image with subtle glow */}
          <motion.div
            variants={itemVariants}
            className="relative group cursor-pointer my-6 md:my-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Soft glowing ring behind the image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-300" />
            
            <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white dark:border-neutral-900 shadow-xl">
              <img
                src="/profile.jpg"
                alt={developerProfile.name}
                className="w-full h-full object-cover object-[center_22%]"
              />
            </div>
          </motion.div>

          {/* Title and Name */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.1] md:leading-[1.05]">
              Hi, I&apos;m <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">{developerProfile.name}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-700 dark:text-neutral-200 mt-2 font-mono">
              {developerProfile.role} <span className="font-sans font-normal text-neutral-500 dark:text-neutral-400 block sm:inline mt-1 sm:mt-0 sm:ml-2">| building smart, scalable solutions with code.</span>
            </p>
          </motion.div>

          {/* Focus statement */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-neutral-505 dark:text-neutral-400 max-w-2xl leading-relaxed"
          >
            {developerProfile.focus}
          </motion.p>

          {/* Core competencies Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2 max-w-2xl py-2"
          >
            {highlightTech.map((tech) => (
              <span
                key={tech}
                className="text-xs font-semibold tracking-wider text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-3.5 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-850 hover:border-indigo-500/20 dark:hover:border-indigo-500/20 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-md hover:shadow-indigo-500/[0.02] cursor-default transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Dynamic CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4"
          >
            <Button
              href="#projects"
              onClick={(e) => handleScrollTo(e, "projects")}
              variant="primary"
              className="w-full sm:w-auto"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View My Projects
            </Button>
            <Button
              href={developerProfile.cvUrl}
              external
              variant="outline"
              className="w-full sm:w-auto hover:bg-indigo-500 hover:text-white transition-colors"
              icon={<Download className="w-4 h-4" />}
            >
              Download CV
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Arrow Down Anchor */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center z-10"
      >
        <a
          href="#about"
          onClick={(e) => handleScrollTo(e, "about")}
          className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-850 bg-white/50 dark:bg-neutral-900/50 text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-300 shadow-sm"
          aria-label="Scroll down to About section"
        >
          <ArrowDown className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
};
