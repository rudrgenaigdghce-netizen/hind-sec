"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import { Target, Eye } from "lucide-react";

export default function AboutMissionVision() {
  const prefersReduced = useSafeReducedMotion();

  return (
    <section className="w-full bg-[#f0f1f3] pt-[60px] sm:pt-[90px] pb-[40px] select-none text-[#0a0a0a]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[13px] sm:text-[15px] font-normal uppercase tracking-[0.03em] text-[#0a0a0a] mb-6"
        >
          PURPOSE & DIRECTION
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-[#e2e4e8] p-8 sm:p-12 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow group"
          >
            <div>
              <div className="w-[44px] h-[44px] bg-[#0a0a0a] text-white flex items-center justify-center mb-8 group-hover:bg-[#1a2b49] transition-colors">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-[26px] sm:text-[32px] font-normal tracking-[-0.5px] text-[#0a0a0a] mb-4 leading-tight">
                Our Mission
              </h2>
              <p className="text-[16px] sm:text-[17px] text-[#4a4f5a] leading-relaxed">
                To dismantle digital attack surfaces before malicious actors can exploit them. We empower engineering and security leaders with evidence-grade proof, actionable code fixes, and definitive remediation verification so organizational trust is never compromised.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#f0f1f3] text-[13px] font-medium text-[#0a0a0a] flex items-center gap-2">
              <span>Proof Over Speculation</span>
              <span aria-hidden="true">→</span>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#02030a] text-white border border-white/10 p-8 sm:p-12 flex flex-col justify-between shadow-lg group relative overflow-hidden"
          >
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-[44px] h-[44px] bg-white/10 border border-white/20 text-cyan-400 flex items-center justify-center mb-8 group-hover:bg-white/15 transition-colors">
                <Eye className="w-5 h-5" />
              </div>
              <h2 className="text-[26px] sm:text-[32px] font-normal tracking-[-0.5px] text-white mb-4 leading-tight">
                Our Vision
              </h2>
              <p className="text-[16px] sm:text-[17px] text-white/75 leading-relaxed">
                To establish the global benchmark for evidence-backed offensive cybersecurity and adversarial AI safety, where defensive maturity is measured not by the volume of scanner alerts generated, but by the tangible threats permanently eliminated.
              </p>
            </div>
            <div className="relative z-10 mt-8 pt-6 border-t border-white/10 text-[13px] font-medium text-cyan-400 flex items-center gap-2">
              <span>Zero Unchecked Vulnerabilities</span>
              <span aria-hidden="true">→</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
