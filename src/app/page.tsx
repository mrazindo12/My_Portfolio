"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky translucent glass navbar */}
      <Navbar />

      <main className="flex flex-col flex-1 w-full">
        {/* Entrance high-impact branding zone */}
        <Hero />

        {/* Modular journey narratives, skills categorize maps, and CV triggers */}
        <About />

        {/* Filter-reactive dynamic projects display grid */}
        <Projects />

        {/* Email, social connection cards and custom notification contact form */}
        <Contact />
      </main>

      {/* Grounded social shortcuts and trademark copyrights footer */}
      <Footer />
    </>
  );
}
