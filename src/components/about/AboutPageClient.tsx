"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import LogoMarquee from "@/components/LogoMarquee";
import Footer from "@/components/sections/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import AboutMissionVision from "@/components/about/AboutMissionVision";
import ValuesList from "@/components/about/ValuesList";
import PhilosophySection from "@/components/about/PhilosophySection";
import AboutDifferentiators from "@/components/about/AboutDifferentiators";
import AboutFrameworks from "@/components/about/AboutFrameworks";
import AboutCTA from "@/components/about/AboutCTA";
import { aboutContent } from "@/data/aboutContent";

export default function AboutPageClient() {
  return (
    <main className="w-full bg-[#f0f1f3] text-[#0a0a0a] min-h-screen overflow-x-hidden select-none font-sans">
      {/* Smooth Scroll & Top Scroll Progress Bar */}
      <SmoothScroll />
      <ScrollProgressBar />

      {/* Global Fixed Navbar */}
      <Navbar />

      {/* ================= SECTION 1: HERO HEADING + PHOTO ================= */}
      <AboutHero
        label={aboutContent.hero.label}
        heading={aboutContent.hero.heading}
        photo={aboutContent.hero.photo}
      />

      {/* ================= SECTION 2: KEY NUMBERS & IMPACT STATS ================= */}
      <AboutStats />

      {/* ================= SECTION 3: PURPOSE, MISSION & VISION ================= */}
      <AboutMissionVision />

      {/* ================= SECTION 4: OUR VALUES (Interactive SVG Rows) ================= */}
      <ValuesList
        label={aboutContent.values.label}
        heading={aboutContent.values.heading}
        items={aboutContent.values.items}
      />

      {/* ================= SECTION 5: PHILOSOPHY ================= */}
      <PhilosophySection
        label={aboutContent.philosophy.label}
        heading={aboutContent.philosophy.heading}
        paragraphs={aboutContent.philosophy.paragraphs}
      />

      {/* ================= SECTION 6: HOW WE DEFEND YOUR SYSTEMS ================= */}
      <AboutDifferentiators />

      {/* ================= SECTION 7: LOGO MARQUEE ================= */}
      <div className="py-8 bg-[#f8fafc] border-y border-[#e2e4e8]">
        <LogoMarquee />
      </div>

      {/* ================= SECTION 8: COMPLIANCE & FRAMEWORKS ================= */}
      <AboutFrameworks />

      {/* ================= SECTION 9: CALL TO ACTION ================= */}
      <AboutCTA />

      {/* ================= SECTION 10: FOOTER ================= */}
      <Footer />
    </main>
  );
}
