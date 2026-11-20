"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import { ShieldCheck, FileCheck2, Lock, Activity, Sliders, Eye, CheckCircle2, Terminal } from "lucide-react";

export default function AboutFrameworks() {
  const prefersReduced = useSafeReducedMotion();

  const frameworks = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      title: "ISO/IEC 27001:2022",
      detail: "Annex A.8 Technical Controls Verification",
    },
    {
      icon: <FileCheck2 className="w-5 h-5 text-white" />,
      title: "SOC 2 Type II",
      detail: "Trust Services Criteria Penetration Testing",
    },
    {
      icon: <Lock className="w-5 h-5 text-white" />,
      title: "PCI-DSS 4.0",
      detail: "Requirement 11.3 & Segmentation Audits",
    },
    {
      icon: <Activity className="w-5 h-5 text-white" />,
      title: "HIPAA Security Rule",
      detail: "ePHI Safeguards & Healthcare App Testing",
    },
    {
      icon: <Sliders className="w-5 h-5 text-white" />,
      title: "RBI / SEBI Cyber",
      detail: "Mandatory BFSI Regulatory Framework Audits",
    },
    {
      icon: <Eye className="w-5 h-5 text-white" />,
      title: "DPDP Act 2023 & GDPR",
      detail: "Data Privacy & Technical PII Leakage Audits",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-white" />,
      title: "OWASP Top 10",
      detail: "Web, Mobile, API & LLM Assessment Benchmarks",
    },
    {
      icon: <Terminal className="w-5 h-5 text-white" />,
      title: "NIST SP 800-115",
      detail: "Technical Information Security Testing Guide",
    },
  ];

  return (
    <section className="w-full bg-[#f0f1f3] pt-[80px] sm:pt-[100px] pb-[40px] select-none text-[#0a0a0a]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[13px] sm:text-[15px] font-normal uppercase tracking-[0.03em] text-[#0a0a0a] mb-4"
        >
          COMPLIANCE & ATTESTATION
        </motion.div>

        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-normal leading-[1.22] tracking-[-1px] text-[#0a0a0a] max-w-[840px] mb-12">
          Recognized audit frameworks we map your testing to
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {frameworks.map((fw, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="bg-white border border-[#e2e4e8] p-6 shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-[36px] h-[36px] bg-[#0a0a0a] flex items-center justify-center flex-shrink-0 mt-0.5">
                {fw.icon}
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-[#0a0a0a] leading-tight mb-1">
                  {fw.title}
                </h3>
                <p className="text-[12.5px] text-[#6b7078] leading-snug">
                  {fw.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
