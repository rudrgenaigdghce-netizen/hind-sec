"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import LogoMarquee from "@/components/LogoMarquee";
import Footer from "@/components/sections/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AboutHero from "@/components/about/AboutHero";
import ValuesList from "@/components/about/ValuesList";
import PhilosophySection from "@/components/about/PhilosophySection";
import { aboutContent } from "@/data/aboutContent";

export default function AboutPageClient() {
  return (
    <main className="w-full bg-[#f0f1f3] text-[#0a0a0a] min-h-screen overflow-x-hidden select-none font-sans">
      {/* Smooth Scroll & Top Scroll Progress Bar */}
      <SmoothScroll />
      <ScrollProgressBar />

      {/* Global Fixed Navbar */}
      <Navbar />

      {/* ================= SECTION 1: HERO HEADING + PHOTO (Image 1) ================= */}
      <AboutHero
        label={aboutContent.hero.label}
        heading={aboutContent.hero.heading}
        photo={aboutContent.hero.photo}
      />

      {/* ================= SECTION 2: OUR VALUES (Images 2 and 3) ================= */}
      <ValuesList
        label={aboutContent.values.label}
        heading={aboutContent.values.heading}
        items={aboutContent.values.items}
      />

      {/* ================= SECTION 3: PHILOSOPHY (Image 3) ================= */}
      <PhilosophySection
        label={aboutContent.philosophy.label}
        heading={aboutContent.philosophy.heading}
        paragraphs={aboutContent.philosophy.paragraphs}
      />

      {/* ================= SECTION 4: LOGO MARQUEE (Image 3, bottom) ================= */}
      <div className="mt-[100px] mb-[100px]">
        <LogoMarquee />
      </div>

      {/* ================= SECTION 5: FOOTER (Reused unchanged) ================= */}
      <Footer />
    </main>
  );
}
