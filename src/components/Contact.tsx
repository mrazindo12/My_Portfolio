"use client";

import React from "react";
import { Mail, ArrowRight, MapPin } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";
import { developerProfile } from "@/data/portfolioData";

export const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5 text-indigo-500" />,
      title: "Direct Email",
      value: developerProfile.socialLinks.email.replace("mailto:", ""),
      href: developerProfile.socialLinks.email,
      actionText: "Send email",
    },
    {
      icon: <Linkedin className="w-5 h-5 text-indigo-500" />,
      title: "LinkedIn",
      value: "Azindo Abdul Razak",
      href: developerProfile.socialLinks.linkedin,
      actionText: "Connect with me",
    },
    {
      icon: <Github className="w-5 h-5 text-indigo-500" />,
      title: "GitHub Portfolio",
      value: developerProfile.socialLinks.github.replace("https://", ""),
      href: developerProfile.socialLinks.github,
      actionText: "Explore codebases",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-950 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-16 md:mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Let&apos;s Build Together
          </h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-2" />
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xl mt-4">
            Have a remote engineering opportunity, a complex system design challenge, or want to say hello? Reach out through any of the channels below.
          </p>
        </div>

        {/* Contact Channels Panel */}
        <div className="max-w-2xl mx-auto flex flex-col justify-between gap-8 bg-neutral-50 dark:bg-neutral-950 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white font-sans">
              Contact Channels
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              Reach out directly through standard professional handles or active code archives.
            </p>

            <div className="flex flex-col gap-4 mt-4">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-4 p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/60 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 rounded-2xl hover:shadow-md hover:shadow-indigo-500/[0.01] transition-all duration-300 cursor-pointer"
                >
                  <span className="p-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-sm">
                    {method.icon}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                      {method.title}
                    </span>
                    <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 break-all">
                      {method.value}
                    </span>
                    <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 mt-1.5 inline-flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform duration-300">
                      <span>{method.actionText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Base Bio & Location */}
          <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6 flex items-center gap-3 text-neutral-500 dark:text-neutral-400">
            <span className="p-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <MapPin className="w-4 h-4 text-neutral-400" />
            </span>
            <span className="text-xs font-semibold font-mono uppercase tracking-wide">
              Location: Accra, Ghana (GMT)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
