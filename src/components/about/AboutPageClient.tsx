"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import LogoMarquee from "@/components/LogoMarquee";
import Footer from "@/components/sections/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { BRAND_NAME } from "@/content/siteContent";
import {
  ShieldCheck,
  Target,
  Eye,
  Lock,
  Code2,
  RefreshCw,
  Zap,
  CheckCircle2,
  FileCheck2,
  Layers,
  ArrowRight,
  Shield,
  Activity,
  Sliders,
  Award,
  Terminal,
} from "lucide-react";

export default function AboutPageClient() {
  return (
    <main className="w-full bg-[#f0f1f3] text-[#0a0a0a] min-h-screen overflow-x-hidden font-sans">
      {/* Smooth Scroll & Top Scroll Progress Bar */}
      <SmoothScroll />
      <ScrollProgressBar />

      {/* Global Fixed Navbar (Dark background for crisp logo contrast) */}
      <Navbar />

      {/* =====================================================================
          1. HERO SECTION
          ===================================================================== */}
      <section className="relative w-full pt-[150px] pb-[90px] lg:pt-[180px] lg:pb-[110px] bg-gradient-to-b from-[#090f24] via-[#040612] to-[#02030a] text-white overflow-hidden border-b border-white/[0.08]">
        {/* Subtle Cyber Grid Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse 65% 55% at 50% 35%, black 20%, transparent 80%)",
          }}
        />

        {/* Ambient Radial Cyan/Blue Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Micro Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-[12px] font-semibold uppercase tracking-wider text-cyan-400 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
            <span>About {BRAND_NAME} Technologies</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[36px] sm:text-[48px] lg:text-[62px] font-bold tracking-[-0.03em] leading-[1.12] max-w-[980px] mx-auto mb-6"
          >
            Built on Evidence. Driven by Precision.{" "}
            <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Offensive Security for the Modern Threat Era.
            </span>
          </motion.h1>

          {/* Supporting Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[17px] sm:text-[19px] text-white/75 max-w-[760px] mx-auto leading-relaxed mb-10 font-normal"
          >
            We founded {BRAND_NAME} on a singular conviction: automated vulnerability scanners provide noise, but human-led offensive intelligence delivers real defense. We simulate state-level adversaries to ensure your critical systems remain unbreachable.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4 flex-wrap mb-14"
          >
            <a
              href="#story"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-[#02030a] font-semibold text-[15px] shadow-lg hover:bg-slate-100 transition-all transform hover:-translate-y-0.5"
            >
              Our Origin Story ↓
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-white font-semibold text-[15px] transition-all transform hover:-translate-y-0.5"
            >
              Schedule a Scoping Call →
            </Link>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[760px] mx-auto p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md"
          >
            <div className="p-3 text-center">
              <div className="text-[30px] font-bold text-white leading-tight">
                500<span className="text-cyan-400">+</span>
              </div>
              <div className="text-[13px] text-white/60 mt-1">Manual VAPT Audits</div>
            </div>
            <div className="p-3 text-center border-t sm:border-t-0 sm:border-x border-white/[0.08]">
              <div className="text-[30px] font-bold text-white leading-tight">
                0<span className="text-cyan-400">%</span>
              </div>
              <div className="text-[13px] text-white/60 mt-1">False Positive Guarantee</div>
            </div>
            <div className="p-3 text-center">
              <div className="text-[30px] font-bold text-white leading-tight">
                100<span className="text-cyan-400">%</span>
              </div>
              <div className="text-[13px] text-white/60 mt-1">Free Retest Window</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          2. OUR STORY SECTION
          ===================================================================== */}
      <section id="story" className="w-full py-[100px] lg:py-[120px] bg-white border-b border-[#e2e4e8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text Left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0f1f3] border border-[#e2e4e8] text-[12px] font-semibold uppercase tracking-wider text-[#4a4f5a] mb-5">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>Why HindSec Was Founded</span>
              </div>

              <h2 className="text-[32px] sm:text-[42px] font-bold tracking-tight text-[#0a0a0a] leading-[1.18] mb-6">
                Drowning in Scanner Alerts,<br />Starving for Real Proof.
              </h2>

              <p className="text-[18px] font-medium text-[#1c2c4a] leading-relaxed mb-4">
                In 2022, enterprise security teams faced a frustrating paradox: vulnerability alert backlogs were exploding, yet catastrophic breaches still made headlines daily.
              </p>

              <p className="text-[16px] text-[#4a4f5a] leading-relaxed mb-4">
                The root cause was clear: legacy testing vendors relied on automated click-and-run scanner tools that dumped 400-page generic PDF reports onto engineering desks. Critical business-logic exploits, authorization bypasses, and multi-cloud perimeter weaknesses were completely ignored.
              </p>

              <p className="text-[16px] text-[#4a4f5a] leading-relaxed">
                <strong>{BRAND_NAME} was established to change that.</strong> We built an elite offensive security team focused purely on <strong>evidence-backed manual testing</strong>. We don&apos;t guess if a vulnerability exists—we prove it in a safe, controlled environment, demonstrate its blast radius, and deliver developer-ready code fixes to close it permanently.
              </p>
            </motion.div>

            {/* Operational Standard Card Right */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-2xl bg-[#070b16] border border-white/10 p-7 sm:p-9 text-white shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />

                {/* Terminal Header */}
                <div className="flex items-center gap-2 pb-5 border-b border-white/[0.08] mb-6 text-[12px] font-mono text-white/60">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="ml-2">hindsec-adversary-sim // operational-standard.sh</span>
                </div>

                {/* 4 Process Milestones */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold text-[13px] flex-shrink-0 mt-0.5">
                      01
                    </div>
                    <div>
                      <h4 className="text-[15.5px] font-semibold text-white">Target Reconnaissance & Attack Surface Mapping</h4>
                      <p className="text-[13.5px] text-white/65 mt-1 leading-snug">
                        Discovering exposed APIs, shadow cloud infrastructure, and leaked developer credentials across external boundaries.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold text-[13px] flex-shrink-0 mt-0.5">
                      02
                    </div>
                    <div>
                      <h4 className="text-[15.5px] font-semibold text-white">Controlled Manual Attack Simulation</h4>
                      <p className="text-[13.5px] text-white/65 mt-1 leading-snug">
                        Executing multi-stage privilege escalation, authorization bypasses, and business logic flaws like real attackers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold text-[13px] flex-shrink-0 mt-0.5">
                      03
                    </div>
                    <div>
                      <h4 className="text-[15.5px] font-semibold text-white">Reproducible Proof-of-Concept Exploit Logs</h4>
                      <p className="text-[13.5px] text-white/65 mt-1 leading-snug">
                        Every confirmed flaw comes with step-by-step cURL payloads, video proofs, and exact CVSS v3.1 impact severity scores.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold text-[13px] flex-shrink-0 mt-0.5">
                      04
                    </div>
                    <div>
                      <h4 className="text-[15.5px] font-semibold text-white">Developer Code Fixes & Free Retesting</h4>
                      <p className="text-[13.5px] text-white/65 mt-1 leading-snug">
                        Actionable code remediation advice followed by complimentary re-validation until every finding is safely closed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. MISSION & VISION SECTION
          ===================================================================== */}
      <section className="w-full py-[100px] bg-[#f0f1f3] border-b border-[#e2e4e8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-[#e2e4e8] rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-13 h-13 w-[52px] h-[52px] rounded-xl bg-[#02030a] text-cyan-400 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-[24px] font-bold text-[#0a0a0a] tracking-tight mb-3">
                Our Mission
              </h3>
              <p className="text-[16px] text-[#4a4f5a] leading-relaxed">
                To dismantle digital attack surfaces before malicious actors can exploit them. We empower engineering and security leaders with evidence-grade proof, actionable code fixes, and definitive remediation verification so trust is never compromised.
              </p>
              <div className="mt-6 text-[13px] font-semibold text-blue-600 flex items-center gap-1.5">
                <span>Proof Over Speculation</span>
                <span>→</span>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white border border-[#e2e4e8] rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-[52px] h-[52px] rounded-xl bg-[#02030a] text-cyan-400 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-[24px] font-bold text-[#0a0a0a] tracking-tight mb-3">
                Our Vision
              </h3>
              <p className="text-[16px] text-[#4a4f5a] leading-relaxed">
                To establish the global benchmark for evidence-backed cybersecurity and adversarial AI safety, where defensive maturity is measured not by the volume of PDF alerts generated, but by the tangible threats permanently eliminated.
              </p>
              <div className="mt-6 text-[13px] font-semibold text-blue-600 flex items-center gap-1.5">
                <span>Zero Unchecked Vulnerabilities</span>
                <span>→</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. CORE VALUES SECTION
          ===================================================================== */}
      <section className="w-full py-[110px] bg-white border-b border-[#e2e4e8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0f1f3] border border-[#e2e4e8] text-[12px] font-semibold uppercase tracking-wider text-[#4a4f5a] mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>Guiding Principles</span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] font-bold text-[#0a0a0a] tracking-tight mb-4">
              The Values That Define Every Test
            </h2>
            <p className="text-[17px] text-[#4a4f5a] leading-relaxed">
              Our offensive security methodology is governed by a strict code of ethics, technical discipline, and developer empathy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-7 rounded-xl bg-[#f0f1f3] border border-[#e2e4e8] hover:bg-white hover:shadow-lg transition-all"
            >
              <div className="w-11 h-11 rounded-lg bg-[#02030a] text-cyan-400 flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-[19px] font-bold text-[#0a0a0a] mb-2">Radical Integrity</h3>
              <p className="text-[14.5px] text-[#4a4f5a] leading-relaxed">
                We report what we prove. Zero inflated severities, zero false alarms, and zero hand-waving to pad an assessment invoice.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-7 rounded-xl bg-[#f0f1f3] border border-[#e2e4e8] hover:bg-white hover:shadow-lg transition-all"
            >
              <div className="w-11 h-11 rounded-lg bg-[#02030a] text-cyan-400 flex items-center justify-center mb-5">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-[19px] font-bold text-[#0a0a0a] mb-2">Developer Empathy</h3>
              <p className="text-[14.5px] text-[#4a4f5a] leading-relaxed">
                Security findings must accelerate engineering velocity. We provide code snippets and reproduction steps developers appreciate.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-7 rounded-xl bg-[#f0f1f3] border border-[#e2e4e8] hover:bg-white hover:shadow-lg transition-all"
            >
              <div className="w-11 h-11 rounded-lg bg-[#02030a] text-cyan-400 flex items-center justify-center mb-5">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-[19px] font-bold text-[#0a0a0a] mb-2">Continuous Proof</h3>
              <p className="text-[14.5px] text-[#4a4f5a] leading-relaxed">
                Security is never a one-time stamp. We include free retesting so teams can verify their patches hold under renewed pressure.
              </p>
            </motion.div>

            {/* Value 4 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="p-7 rounded-xl bg-[#f0f1f3] border border-[#e2e4e8] hover:bg-white hover:shadow-lg transition-all"
            >
              <div className="w-11 h-11 rounded-lg bg-[#02030a] text-cyan-400 flex items-center justify-center mb-5">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-[19px] font-bold text-[#0a0a0a] mb-2">Adversarial Edge</h3>
              <p className="text-[14.5px] text-[#4a4f5a] leading-relaxed">
                We think, pivot, and execute with the agility of real adversaries, exposing weaknesses that automated tools consistently miss.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. WHAT WE DO / WHY CHOOSE US
          ===================================================================== */}
      <section className="w-full py-[120px] bg-[#040714] text-white border-b border-white/[0.08]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.12] text-[12px] font-semibold uppercase tracking-wider text-cyan-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Competitive Advantage</span>
            </div>
            <h2 className="text-[32px] sm:text-[44px] font-bold tracking-tight mb-4 text-white">
              Why Enterprise Leaders Choose HindSec
            </h2>
            <p className="text-[17px] text-white/70 leading-relaxed">
              We bridge the divide between theoretical compliance checklists and actual operational cyber defense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1 */}
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/40 hover:bg-white/[0.06] transition-all group">
              <div className="font-mono text-[12px] text-cyan-400 font-semibold tracking-wider mb-4">
                // 01_HUMAN_INTELLIGENCE
              </div>
              <h3 className="text-[20px] font-bold text-white mb-3">100% Manual Offensive Testing</h3>
              <p className="text-[14.5px] text-white/70 leading-relaxed">
                Automated scanners uncover surface syntax, but our human penetration testers discover multi-step logic bypasses, API race conditions, and tenant isolation leaks.
              </p>
            </div>

            {/* 2 */}
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/40 hover:bg-white/[0.06] transition-all group">
              <div className="font-mono text-[12px] text-cyan-400 font-semibold tracking-wider mb-4">
                // 02_REPRODUCIBILITY
              </div>
              <h3 className="text-[20px] font-bold text-white mb-3">Zero-Noise & Actionable Proof</h3>
              <p className="text-[14.5px] text-white/70 leading-relaxed">
                No hypothetical warnings. Every confirmed finding includes step-by-step reproduction scripts, HTTP request traces, and verified impact ratings.
              </p>
            </div>

            {/* 3 */}
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/40 hover:bg-white/[0.06] transition-all group">
              <div className="font-mono text-[12px] text-cyan-400 font-semibold tracking-wider mb-4">
                // 03_AI_RED_TEAMING
              </div>
              <h3 className="text-[20px] font-bold text-white mb-3">Adversarial AI & LLM Pentesting</h3>
              <p className="text-[14.5px] text-white/70 leading-relaxed">
                We test enterprise LLMs, RAG architectures, and autonomous AI agents against prompt injection, jailbreaking, model poisoning, and sensitive training data extraction.
              </p>
            </div>

            {/* 4 */}
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/40 hover:bg-white/[0.06] transition-all group">
              <div className="font-mono text-[12px] text-cyan-400 font-semibold tracking-wider mb-4">
                // 04_COMPLIANCE_READINESS
              </div>
              <h3 className="text-[20px] font-bold text-white mb-3">Audit-Ready Attestation Reports</h3>
              <p className="text-[14.5px] text-white/70 leading-relaxed">
                Deliverables mapped directly to ISO 27001 Annex A.8, SOC 2 Type II, PCI-DSS 4.0, HIPAA, and RBI/SEBI regulatory frameworks to accelerate auditor sign-offs.
              </p>
            </div>

            {/* 5 */}
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/40 hover:bg-white/[0.06] transition-all group">
              <div className="font-mono text-[12px] text-cyan-400 font-semibold tracking-wider mb-4">
                // 05_VERIFIED_CLOSURE
              </div>
              <h3 className="text-[20px] font-bold text-white mb-3">Complimentary Post-Fix Retesting</h3>
              <p className="text-[14.5px] text-white/70 leading-relaxed">
                We never leave your team stranded at report delivery. When your developers deploy fixes, we re-test the vectors at zero extra charge and provide a clean letter of attestation.
              </p>
            </div>

            {/* 6 */}
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/40 hover:bg-white/[0.06] transition-all group">
              <div className="font-mono text-[12px] text-cyan-400 font-semibold tracking-wider mb-4">
                // 06_RAPID_SCOPING
              </div>
              <h3 className="text-[20px] font-bold text-white mb-3">Scoping in 24 to 48 Hours</h3>
              <p className="text-[14.5px] text-white/70 leading-relaxed">
                Rapid mutual NDA execution, clear rules of engagement, and direct security engineer access so penetration testing never delays your sprint releases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. MILESTONES & IMPACT STATS
          ===================================================================== */}
      <section className="w-full py-[90px] bg-white border-b border-[#e2e4e8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 border-b sm:border-b-0 sm:border-r border-[#e2e4e8]">
              <div className="text-[46px] lg:text-[54px] font-extrabold text-[#02030a] tracking-tight leading-none mb-2">
                500<span className="text-blue-600">+</span>
              </div>
              <div className="text-[16px] font-semibold text-[#0a0a0a]">Security Audits Delivered</div>
              <div className="text-[13px] text-[#6b7078] mt-1">Web, Cloud, APIs, Mobile & LLMs</div>
            </div>

            <div className="p-6 border-b sm:border-b-0 lg:border-r border-[#e2e4e8]">
              <div className="text-[46px] lg:text-[54px] font-extrabold text-[#02030a] tracking-tight leading-none mb-2">
                100<span className="text-blue-600">%</span>
              </div>
              <div className="text-[16px] font-semibold text-[#0a0a0a]">Audit Pass Attestation</div>
              <div className="text-[13px] text-[#6b7078] mt-1">SOC 2, ISO 27001 & PCI-DSS</div>
            </div>

            <div className="p-6 border-b sm:border-b-0 sm:border-r border-[#e2e4e8]">
              <div className="text-[46px] lg:text-[54px] font-extrabold text-[#02030a] tracking-tight leading-none mb-2">
                4.2<span className="text-blue-600">k</span>
              </div>
              <div className="text-[16px] font-semibold text-[#0a0a0a]">Critical Flaws Neutralized</div>
              <div className="text-[13px] text-[#6b7078] mt-1">Before Malicious Exploitation</div>
            </div>

            <div className="p-6">
              <div className="text-[46px] lg:text-[54px] font-extrabold text-[#02030a] tracking-tight leading-none mb-2">
                0<span className="text-blue-600">hrs</span>
              </div>
              <div className="text-[16px] font-semibold text-[#0a0a0a]">Wasted on Scanner Noise</div>
              <div className="text-[13px] text-[#6b7078] mt-1">100% Manually Verified PoCs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Divider */}
      <div className="py-8 bg-[#f8fafc] border-b border-[#e2e4e8]">
        <LogoMarquee />
      </div>

      {/* =====================================================================
          7. TRUST BADGES & FRAMEWORKS
          ===================================================================== */}
      <section className="w-full py-[100px] bg-[#f0f1f3] border-b border-[#e2e4e8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-[720px] mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#e2e4e8] text-[12px] font-semibold uppercase tracking-wider text-[#4a4f5a] mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>Compliance Standards</span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] font-bold text-[#0a0a0a] tracking-tight mb-4">
              Recognized Regulatory Frameworks
            </h2>
            <p className="text-[17px] text-[#4a4f5a] leading-relaxed">
              Our offensive testing methodologies map directly to global regulatory requirements and audit criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-xl bg-white border border-[#e2e4e8] flex items-center gap-4 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#02030a] text-white flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-[#0a0a0a]">ISO/IEC 27001:2022</h4>
                <p className="text-[12.5px] text-[#6b7078]">Annex A.8 Technical Controls</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#e2e4e8] flex items-center gap-4 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#02030a] text-white flex items-center justify-center flex-shrink-0">
                <FileCheck2 className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-[#0a0a0a]">SOC 2 Type II</h4>
                <p className="text-[12.5px] text-[#6b7078]">Trust Services Criteria Pentest</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#e2e4e8] flex items-center gap-4 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#02030a] text-white flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-[#0a0a0a]">PCI-DSS 4.0</h4>
                <p className="text-[12.5px] text-[#6b7078]">Requirement 11.3 & CDE Audits</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#e2e4e8] flex items-center gap-4 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#02030a] text-white flex items-center justify-center flex-shrink-0">
                <Activity className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-[#0a0a0a]">HIPAA Security Rule</h4>
                <p className="text-[12.5px] text-[#6b7078]">ePHI Safeguard Assessments</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#e2e4e8] flex items-center gap-4 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#02030a] text-white flex items-center justify-center flex-shrink-0">
                <Sliders className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-[#0a0a0a]">RBI / SEBI Cyber</h4>
                <p className="text-[12.5px] text-[#6b7078]">Mandatory BFSI Framework Testing</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#e2e4e8] flex items-center gap-4 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#02030a] text-white flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-[#0a0a0a]">DPDP Act 2023</h4>
                <p className="text-[12.5px] text-[#6b7078]">Data Privacy & PII Leakage Audits</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#e2e4e8] flex items-center gap-4 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#02030a] text-white flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-[#0a0a0a]">OWASP Top 10</h4>
                <p className="text-[12.5px] text-[#6b7078]">Web, API, Mobile & LLM Standards</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#e2e4e8] flex items-center gap-4 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#02030a] text-white flex items-center justify-center flex-shrink-0">
                <Terminal className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-[#0a0a0a]">NIST SP 800-115</h4>
                <p className="text-[12.5px] text-[#6b7078]">Technical Pentesting Standard</p>
              </div>
            </div>
          </div>

          {/* Client Feedback Quote */}
          <div className="mt-12 bg-white border border-[#e2e4e8] border-l-4 border-l-blue-600 rounded-2xl p-8 sm:p-10 shadow-sm">
            <blockquote className="text-[18px] sm:text-[20px] italic text-[#0a0a0a] leading-relaxed mb-6 font-normal">
              &ldquo;Unlike standard penetration testing firms that regurgitate automated vulnerability scanner outputs, {BRAND_NAME} delivered verified exploit proof-of-concepts and assisted our engineering team directly with remediation. Their free retest gave our executive leadership complete confidence before our enterprise SOC 2 audit.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#02030a] text-white flex items-center justify-center font-bold text-[14px]">
                CTO
              </div>
              <div>
                <div className="text-[15px] font-bold text-[#0a0a0a]">Head of Information Security & Engineering</div>
                <div className="text-[13px] text-[#6b7078]">Enterprise B2B FinTech & Cloud Banking Platform</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. CALL TO ACTION (CTA)
          ===================================================================== */}
      <section className="w-full py-[120px] bg-gradient-to-b from-[#0c152d] via-[#040612] to-[#02030a] text-white text-center relative overflow-hidden">
        <div className="max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.12] text-[12px] font-semibold uppercase tracking-wider text-cyan-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Take Defensive Action</span>
          </div>

          <h2 className="text-[36px] sm:text-[48px] font-bold tracking-tight text-white leading-[1.15] mb-5">
            Find Your Vulnerabilities<br />Before Attackers Do.
          </h2>

          <p className="text-[17px] sm:text-[19px] text-white/75 leading-relaxed max-w-[680px] mx-auto mb-10">
            Stop relying on scanner guesswork. Partner with dedicated offensive practitioners to secure your applications, cloud infrastructure, and enterprise AI systems.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-[#02030a] font-bold text-[16px] shadow-xl hover:bg-slate-100 transition-all transform hover:-translate-y-0.5"
            >
              Book a Free Scoping Call →
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-white font-semibold text-[16px] transition-all transform hover:-translate-y-0.5"
            >
              Explore All Services
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 sm:gap-8 mt-12 text-[13px] text-white/60 flex-wrap">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              Strict Mutual NDA Guaranteed
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              24 to 48-Hour Rapid Scoping
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              100% Free Retesting Included
            </span>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
