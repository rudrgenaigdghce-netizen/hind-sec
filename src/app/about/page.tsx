import type { Metadata } from "next";
import AboutPageClient from "@/components/about/AboutPageClient";
import { BRAND_NAME, siteMetadata } from "@/content/siteContent";

export const metadata: Metadata = {
  title: `About Us | Offensive Security & AI Defense | ${BRAND_NAME}`,
  description:
    `Discover ${BRAND_NAME} Technologies: An evidence-first offensive cybersecurity and adversarial AI defense partner built for teams that demand proof, not just scanner alerts.`,
  alternates: {
    canonical: `${siteMetadata.siteUrl}/about`,
  },
  openGraph: {
    title: `About Us | ${BRAND_NAME}`,
    description:
      `Evidence-backed manual penetration testing, AI red teaming, and audit-ready compliance defense. Proof over speculation.`,
    url: `${siteMetadata.siteUrl}/about`,
    siteName: BRAND_NAME,
    locale: "en_GB",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
