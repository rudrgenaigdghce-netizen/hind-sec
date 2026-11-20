"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import { ShieldCheck, Code2, Bot, RefreshCw } from "lucide-react";

export default function AboutDifferentiators() {
  const prefersReduced = useSafeReducedMotion();

  const differentiators = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      tag: "01 / HUMAN INTELLIGENCE",
      title: "100% Manual Offensive Testing",
      description:
        "Automated tools uncover surface syntax, but human testers find multi-step logic bypasses, API race conditions, and tenant isolation leaks that state-grade attackers target.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-white" />,
      tag: "02 / ACTIONABLE PROOF",
      title: "Verified PoC Exploits & Fix Guidance",
      description:
        "No speculative warnings or scanner dumps. Every finding includes step-by-step reproduction scripts, HTTP request traces, exact CVSS scores, and copy-paste remediation advice.",
    },
    {
      icon: <Bot className="w-5 h-5 text-white" />,
      tag: "03 / ADVERSARIAL AI DEFENSE",
      title: "AI & LLM Red Teaming Capabilities",
      description:
        "Beyond traditional VAPT, we stress-test autonomous agents, LLM pipelines, and RAG architectures against indirect prompt injections, model poisoning, and data exfiltration.",
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-white" />,
      tag: "04 / VERIFIED CLOSURE",
      title: "Complimentary Retesting Guarantee",
      description:
        "We never leave you at report delivery. Once your engineers deploy fixes, we re-test the attack vectors at zero extra cost and issue a verified Letter of Attestation.",
    },
  ];

  return (
    <section className="w-full bg-[#f0f1f3] pt-[80px] sm:pt-[110px] pb-[40px] select-none text-[#0a0a0a]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[13px] sm:text-[15px] font-normal uppercase tracking-[0.03em] text-[#0a0a0a] mb-4"
        >
          OUR METHODOLOGY
        </motion.div>

        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-normal leading-[1.22] tracking-[-1px] text-[#0a0a0a] max-w-[840px] mb-12">
          How we defend your systems before attackers find the gaps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="bg-white border border-[#e2e4e8] p-8 sm:p-10 shadow-xs hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-[42px] h-[42px] bg-[#0a0a0a] flex items-center justify-center group-hover:bg-[#1a2b49] transition-colors">
                  {item.icon}
                </div>
                <span className="font-mono text-[11px] font-semibold tracking-wider text-[#6b7078] uppercase">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-[20px] sm:text-[22px] font-medium tracking-tight text-[#0a0a0a] mb-3">
                {item.title}
              </h3>

              <p className="text-[15px] sm:text-[15.5px] text-[#4a4f5a] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
