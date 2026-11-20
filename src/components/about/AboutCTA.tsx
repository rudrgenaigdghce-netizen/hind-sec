"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import { Shield, Zap, CheckCircle2 } from "lucide-react";
import { BRAND_NAME } from "@/content/siteContent";

export default function AboutCTA() {
  const prefersReduced = useSafeReducedMotion();

  return (
    <section className="w-full bg-[#f0f1f3] pt-[80px] sm:pt-[100px] pb-[100px] select-none text-[#0a0a0a]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#02030a] text-white p-10 sm:p-14 lg:p-16 border border-white/10 overflow-hidden shadow-2xl"
        >
          {/* Subtle cyan glow accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-[820px]">
            <div className="text-[13px] sm:text-[14px] font-semibold uppercase tracking-[0.05em] text-cyan-400 mb-4">
              TAKE DEFENSIVE ACTION
            </div>

            <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-normal tracking-[-1px] leading-[1.14] text-white mb-6">
              Find your weak points before attackers do.
            </h2>

            <p className="text-[16px] sm:text-[18px] text-white/75 leading-relaxed max-w-[680px] mb-10">
              Schedule a confidential scoping consultation with our senior security consultants. We review your architecture, define precise rules of engagement, and deliver verifiable proof within agreed timelines.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-[#02030a] font-semibold text-[15px] hover:bg-slate-100 transition-all transform hover:-translate-y-0.5 shadow-md"
              >
                Book a Free Scoping Call →
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-[15px] transition-all"
              >
                Explore All VAPT Services
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex items-center gap-6 sm:gap-8 mt-10 pt-8 border-t border-white/10 text-[13px] text-white/60 flex-wrap">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                Strict Mutual NDA
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                24 to 48-Hour Rapid Scoping
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                100% Free Retesting
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
