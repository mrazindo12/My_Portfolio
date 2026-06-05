"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Github } from "@/components/ui/icons";
import { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative flex flex-col h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-850 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-indigo-500/[0.03] transition-all duration-300"
    >
      {/* Decorative Glow Backdrop */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 dark:indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/10 dark:group-hover:bg-indigo-500/20 transition-all duration-500 pointer-events-none" />

      {/* Header Visual Block */}
      <div className="relative h-44 bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center p-6 border-b border-neutral-100 dark:border-neutral-850 overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
        
        {/* Project Accent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-900 via-transparent to-transparent opacity-90" />

        {/* Decorative Project Icon / Visual Anchor */}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-900/30">
            {project.category}
          </span>
          <span className="text-3xl mt-2 select-none group-hover:scale-110 transition-transform duration-500">
            {project.category === "AI & ML" && "🧠"}
            {project.category === "Telecom & Systems" && "⚡"}
            {project.category === "Web & Mobile" && "📱"}
          </span>
        </div>

        {/* Action Link Indicator */}
        {project.liveUrl && (
          <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-indigo-500 group-hover:border-indigo-500/30 transition-all duration-300 shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 mb-6 flex-1">
          {project.description}
        </p>

        {/* Tech Badges Row */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-850 px-2.5 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Actions Footer */}
        <div className="flex items-center justify-between border-t border-neutral-100 dark:border-neutral-850 pt-4 mt-auto">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>Source</span>
            </a>
          ) : (
            <span className="text-xs text-neutral-400 dark:text-neutral-500 italic">Internal Project</span>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200 cursor-pointer"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
