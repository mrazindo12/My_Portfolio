"use client";

import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/ui/icons";
import { developerProfile } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: developerProfile.socialLinks.github,
      label: "GitHub Profile",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: developerProfile.socialLinks.linkedin,
      label: "LinkedIn Profile",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: developerProfile.socialLinks.email,
      label: "Send Email",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: developerProfile.socialLinks.twitter || "#",
      label: "Twitter Profile",
    },
  ];

  return (
    <footer className="relative bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 py-12 md:py-16 overflow-hidden">
      {/* Dynamic Background Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo and focus */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <span className="text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            {developerProfile.name}
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400 max-w-xs">
            {developerProfile.role}. {developerProfile.location}.
          </span>
        </div>

        {/* Quick Social Anchors */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-850 bg-white dark:bg-neutral-900 flex items-center justify-center text-neutral-500 hover:text-indigo-600 dark:text-neutral-400 dark:hover:text-indigo-400 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/[0.05] transition-all duration-300 cursor-pointer"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Back to top button & copyright */}
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          <button
            onClick={scrollToTop}
            className="group w-9 h-9 rounded-full border border-neutral-200 dark:border-neutral-850 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 bg-white dark:bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm cursor-pointer transition-all duration-300"
            aria-label="Scroll back to top of the page"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
          <span className="text-xs text-neutral-400 dark:text-neutral-500">
            &copy; {currentYear} {developerProfile.name}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
