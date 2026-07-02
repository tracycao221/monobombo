import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Guide`,
  description: `How to play ${siteConfig.gameName}, with role notes for the blindfolded, headphones, and quiet monkey teammates.`,
  alternates: { canonical: `${siteConfig.domain}/guide` },
  openGraph: {
    title: `${siteConfig.gameName} Guide`,
    description: `Role checklist and beginner tips for ${siteConfig.gameName}.`,
    url: `${siteConfig.domain}/guide`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Guide`,
    description: `Role checklist and beginner tips for ${siteConfig.gameName}.`,
    images: ["/opengraph-image"]
  }
};

const roleTips = [
  {
    role: "Blindfolded monkey",
    check: "Ask teammates to describe what is on screen before you press or move.",
    tip: "Repeat the instruction back in one short sentence before acting."
  },
  {
    role: "Headphones monkey",
    check: "Agree on visual or typed signals before the round starts.",
    tip: "Watch for repeated keywords, pings, or simple left/right callouts."
  },
  {
    role: "Quiet monkey",
    check: "Use short confirmations and only say the information the team needs next.",
    tip: "Prepare yes/no, color, number, and direction phrases before the timer pressure rises."
  }
];

export default function GuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guide", href: "/guide" }]} />
      <Breadcrumbs items={[{ label: "Guide", href: "/guide" }]} />
      <PageIntro
        eyebrow="Beginner guide"
        title={`${siteConfig.gameName} role guide`}
        description="Monobombo is about three monkeys defusing bombs while each teammate has a different communication limit. Use this page as a simple role checklist before your first run."
      />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Role checklist"
          title="Know what your team needs from you"
          copy="The official Roblox description confirms the sight, hearing, and speech constraints. Exact mode rules will be expanded only after they are verified."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {roleTips.map((item) => (
            <article key={item.role} className="content-card">
              <span className="mini-label">Role</span>
              <h2 className="mt-3 text-xl font-bold text-white">{item.role}</h2>
              <p className="mt-3 text-white/70">{item.check}</p>
              <p className="mt-3 text-sm text-white/50">{item.tip}</p>
            </article>
          ))}
        </div>
      </section>

      <AdsterraArticleBottom />
      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <Link href="/codes" className="content-card">
          <span className="mini-label">Codes</span>
          <h2 className="mt-3 text-xl font-bold text-white">Check code status</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">
            No active official Monobombo codes were verified at launch. Check the codes page before trusting reposted codes.
          </p>
        </Link>
        <Link href="/sources" className="content-card">
          <span className="mini-label">Sources</span>
          <h2 className="mt-3 text-xl font-bold text-white">Review official sources</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Use the Roblox game page as the source of record for title, creator, icon, cover, and availability.
          </p>
        </Link>
      </section>
    </main>
  );
}
