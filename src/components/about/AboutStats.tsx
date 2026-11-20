"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

export default function AboutStats() {
  const prefersReduced = useSafeReducedMotion();

  const stats = [
    {
      value: "500+",
      label: "Security Assessments",
      sub: "Web, Cloud, APIs, Mobile & LLMs",
    },
    {
      value: "100%",
      label: "Audit Pass Rate",
      sub: "SOC 2, ISO 27001 & PCI-DSS",
    },
    {
      value: "4.2k+",
      label: "Flaws Remediated",
      sub: "Neutralized before malicious exploitation",
    },
    {
      value: "0 hrs",
      label: "Scanner Noise",
      sub: "100% manually verified PoC exploits",
    },
  ];

  return (
    <section className="w-full bg-[#f0f1f3] pt-[60px] sm:pt-[80px] pb-[40px] select-none text-[#0a0a0a]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white border border-[#e2e4e8] p-8 sm:p-10 shadow-xs">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className={`flex flex-col items-start ${
                idx < stats.length - 1 ? "lg:border-r lg:border-[#e2e4e8] lg:pr-6" : ""
              }`}
            >
              <div className="text-[38px] sm:text-[46px] font-normal tracking-[-1px] text-[#0a0a0a] leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-[15px] sm:text-[16px] font-medium text-[#0a0a0a] mb-1">
                {stat.label}
              </div>
              <div className="text-[13px] text-[#6b7078] leading-snug">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
