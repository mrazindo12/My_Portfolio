"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Layers } from "lucide-react";
import { projectsData, Project } from "@/data/portfolioData";
import { ProjectCard } from "./ui/ProjectCard";

const CATEGORIES: ("All" | Project["category"])[] = [
  "All",
  "AI & ML",
  "Telecom & Systems",
  "Web & Mobile",
];

export const Projects: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<"All" | Project["category"]>("All");

  const filteredProjects = projectsData.filter((project) => {
    if (filterCategory === "All") return true;
    return project.category === filterCategory;
  });

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-950 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-[30%] left-[-15%] w-[400px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[350px] h-[350px] bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Grid backing decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            My Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Recent Software & AI Creations
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-2" />
          <p className="text-sm text-neutral-505 dark:text-neutral-400 max-w-xl mt-4">
            Explore a curated selection of systems bridging complex Telecommunication principles, advanced machine learning neural nets, and beautiful responsive interfaces.
          </p>
        </div>

        {/* Filter Selector Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-850 shadow-sm mr-2 text-[11px] font-semibold text-neutral-400 uppercase tracking-widest pointer-events-none select-none">
            <Layers className="w-3.5 h-3.5" />
            <span>Filters:</span>
          </div>

          {CATEGORIES.map((category) => {
            const isActive = filterCategory === category;
            return (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`relative px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-white bg-indigo-600 shadow-md shadow-indigo-600/10"
                    : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-850 shadow-sm hover:border-neutral-350 dark:hover:border-neutral-700"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Filtered Grid Output */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Showcase Empty State Fallback (just in case) */}
        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-neutral-200 dark:border-neutral-850 rounded-3xl bg-white dark:bg-neutral-900">
            <Sparkles className="w-8 h-8 text-neutral-355 mb-2 animate-bounce" />
            <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
              No projects in this category currently cataloged.
            </span>
          </div>
        )}
      </div>
    </section>
  );
};
