"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, GraduationCap, Briefcase, Code, Terminal, Server, Layers, Calendar, ChevronRight } from "lucide-react";
import { developerProfile, skillCategories, journeyTimeline } from "@/data/portfolioData";
import { Button } from "./ui/Button";
import { SkillBadge } from "./ui/SkillBadge";

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState("programming");

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab);

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-950"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-16 md:mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Engineering the Future of Connection
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-2" />
        </div>

        {/* Bio & Skills Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 md:mb-32">
          {/* Bio Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-55 font-sans">
              Bridging Telecommunications & Software Engineering
            </h3>
            
            <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
              {developerProfile.bio}
            </p>

            <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
              My engineering education equips me with strong mathematical foundations, signal analysis techniques, and hardware protocol expertise. Combined with practical web software architecture skills, I am uniquely positioned to construct highly integrated systems—from local microcontroller firmware to high-scale cloud interfaces.
            </p>

            {/* Resume Action */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                href={developerProfile.cvUrl}
                external
                variant="outline"
                className="w-full sm:w-auto hover:bg-indigo-500 hover:text-white transition-colors"
                icon={<Download className="w-4 h-4" />}
              >
                Download CV / Resume
              </Button>
              <div className="text-xs text-neutral-400 dark:text-neutral-500 flex items-center gap-1.5 self-center">
                <span>PDF Format</span>
                <span className="w-1 h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
                <span>Includes transcripts & projects</span>
              </div>
            </div>
          </div>

          {/* Interactive Skills Categorization Grid */}
          <div className="lg:col-span-6 flex flex-col gap-6 bg-neutral-50 dark:bg-neutral-950 p-6 md:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-850 shadow-sm relative overflow-hidden">
            {/* Tab Selection Row */}
            <div className="flex flex-wrap gap-2 border-b border-neutral-200 dark:border-neutral-850 pb-4">
              {skillCategories.map((category) => {
                const isActive = activeTab === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                      isActive
                        ? "text-white bg-indigo-600"
                        : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-850"
                    }`}
                  >
                    {category.title}
                  </button>
                );
              })}
            </div>

            {/* Tab Panel Content Display */}
            <div className="min-h-[160px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap gap-2.5 py-4"
                >
                  {activeCategory?.skills.map((skill, index) => (
                    <SkillBadge key={skill.name} name={skill.name} delay={index * 0.05} />
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Informative Visual Note */}
              <div className="flex items-center gap-2 border-t border-neutral-100 dark:border-neutral-900 pt-4 text-xs text-neutral-450 dark:text-neutral-500">
                {activeTab === "programming" && <Terminal className="w-4 h-4 text-indigo-500" />}
                {activeTab === "frameworks" && <Server className="w-4 h-4 text-indigo-500" />}
                {activeTab === "tools" && <Layers className="w-4 h-4 text-indigo-500" />}
                <span>
                  {activeTab === "programming" && "Firm mathematical scripting & system analysis skills."}
                  {activeTab === "frameworks" && "Constructing modern reactive interfaces & server routes."}
                  {activeTab === "tools" && "Strict versioning, system isolation, & platform deployment tools."}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Horizontal Line Separator */}
        <hr className="hr-gradient mb-24 md:mb-32" />

        {/* Journey Timeline */}
        <div className="flex flex-col gap-12">
          {/* Subheading */}
          <div className="flex flex-col gap-2 max-w-2xl">
            <h3 className="text-2xl font-extrabold text-neutral-900 dark:text-white flex items-center gap-2">
              <Calendar className="w-6 h-6 text-indigo-500" />
              <span>Academic & Project Milestones</span>
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              A comprehensive vertical log tracking academic completions, telemetry research, and engineering project releases.
            </p>
          </div>

          {/* Timeline Tree Component */}
          <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-4 md:ml-6 pl-8 md:pl-10 py-2 flex flex-col gap-12">
            {journeyTimeline.map((milestone, idx) => {
              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Badge Node */}
                  <span className="absolute -left-[45px] md:-left-[49px] top-1 w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-950 border-2 border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-500 dark:text-neutral-400 group-hover:border-indigo-500 group-hover:text-indigo-500 group-hover:scale-110 transition-all duration-300 shadow-sm">
                    {milestone.category === "education" && <GraduationCap className="w-4 h-4" />}
                    {milestone.category === "experience" && <Briefcase className="w-4 h-4" />}
                    {milestone.category === "project" && <Code className="w-4 h-4" />}
                  </span>

                  {/* Year Tag */}
                  <span className="inline-block text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/30 px-3 py-1 rounded-full mb-3">
                    {milestone.year}
                  </span>

                  {/* Body Card */}
                  <div className="bg-neutral-50/50 hover:bg-neutral-50 dark:bg-neutral-950/40 dark:hover:bg-neutral-950 p-6 rounded-2xl border border-neutral-200/50 dark:border-neutral-850/50 group-hover:border-indigo-500/20 shadow-sm max-w-3xl transition-all duration-300">
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                      {milestone.title}
                    </h4>
                    <span className="block text-xs font-semibold text-neutral-500 dark:text-neutral-450 mt-1 mb-3 flex items-center gap-1">
                      <span>{milestone.subtitle}</span>
                      <ChevronRight className="w-3 h-3 text-neutral-300" />
                      <span className="capitalize">{milestone.category}</span>
                    </span>
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
