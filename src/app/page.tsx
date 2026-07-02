import type { Metadata } from "next";
import Link from "next/link";
import {
  activeCodes,
  editorialSignals,
  faqs,
  guideClusters,
  heroMetrics,
  officialLinks,
  siteConfig,
  toolCards,
  videoGuides,
  wikiCards
} from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { FaqJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { SectionHeader, TrustNote } from "@/components/ui/content";
import { BrandHero } from "@/components/home/BrandHero";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Wiki, Codes and Guide`,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.domain },
  openGraph: {
    title: `${siteConfig.gameName} Wiki, Codes and Guide`,
    description: siteConfig.description,
    url: siteConfig.domain,
    type: "website",
    images: [{ url: "/opengraph-image" }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Wiki, Codes and Guide`,
    description: siteConfig.description,
    images: ["/opengraph-image"]
  }
};

export default function HomePage() {
  return (
    <main>
      <WebSiteJsonLd />
      <FaqJsonLd items={faqs.home} />

      <BrandHero />

      <section className="border-y border-white/10 bg-black/25">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {heroMetrics.map((metric) => (
            <div key={metric.label} className="bg-white/[0.03] px-4 py-4">
              <div className="text-2xl font-bold text-[color:var(--accent)]">{metric.value}</div>
              <div className="mt-1 text-sm font-semibold text-white">{metric.label}</div>
              <div className="mt-1 text-sm text-white/60">{metric.note}</div>
            </div>
          ))}
        </div>
      </section>
      <AdsterraArticleTop />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Freshness center"
            title={`${siteConfig.gameName} codes and update status`}
            copy="No active official Monobombo codes were verified at launch, so the homepage sends players to a checked status page instead of repeating unverified code lists."
          />
          <Link className="button-secondary" href="/codes">
            View all codes
          </Link>
        </div>
        {activeCodes.length === 0 ? (
          <article className="content-card mt-6">
            <span className="status-pill">Pending</span>
            <h3 className="mt-4 text-xl font-bold text-white">No verified active codes yet</h3>
            <p className="mt-2 text-sm text-white/65">
              Monobombo is kept separate from Monkey Bomb Tag and other near-name games. Future codes will only be added after a current source check.
            </p>
          </article>
        ) : (
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {activeCodes.slice(0, 4).map((code) => (
            <article key={code.code} className="content-card">
              <div className="flex items-center justify-between gap-3">
                <span className="status-pill">{code.status}</span>
                <span className="text-xs text-white/50">{code.addedDate}</span>
              </div>
              <h3 className="mt-4 font-mono text-xl font-bold text-[color:var(--accent)]">{code.code}</h3>
              <p className="mt-2 text-sm text-white/65">{code.reward}</p>
            </article>
            ))}
          </div>
        )}
      </section>
      <AdsterraArticleMid />

      <section className="bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Role preview"
            title={`${siteConfig.gameName} role checklist`}
            copy="The useful launch guide is about the three monkey communication limits confirmed by the official Roblox description."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {toolCards.slice(0, 3).map((item) => (
              <Link key={item.title} href={item.href} className="content-card">
                <div className="flex items-center justify-between">
                  <span className="mini-label">{item.eyebrow}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/65">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <AdsterraArticleBottom />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeader
          eyebrow="Core tools"
          title="Player help available at launch"
          copy="Start with codes status, the role guide, wiki notes, and source checks before trusting reposted information."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {toolCards.map((tool) => (
            <Link key={tool.href} href={tool.href} className="content-card">
              <span className="mini-label">{tool.eyebrow}</span>
              <h3 className="mt-3 text-xl font-bold text-white">{tool.title}</h3>
              <p className="mt-2 text-sm text-white/65">{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-black/25">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Guides"
              title="Pick the next problem to solve"
              copy="Use these guides when your team needs role clarity, better callouts, or source-backed beginner advice."
            />
            <div className="mt-6 grid gap-3">
              {guideClusters.map((guide) => (
                <Link key={guide.href} href={guide.href} className="row-link">
                  <span>
                    <strong>{guide.title}</strong>
                    <small>{guide.description}</small>
                  </span>
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Wiki coverage"
              title="Entity pages for Roblox search demand"
              copy="Roles, modes, source notes, and update details should be split into wiki sections when research confirms them."
            />
            <div className="mt-6 grid gap-3">
              {wikiCards.map((item) => (
                <Link key={item.href} href={item.href} className="row-link">
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.description}</small>
                  </span>
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeader
          eyebrow="Source check"
          title="Official and community sources"
          copy="Use these links and notes to see what is official, what is community reported, and what still needs checking."
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {officialLinks.map((link) => {
            const content = (
              <>
                <span className="mini-label">{link.eyebrow}</span>
                <h3 className="mt-3 text-lg font-bold text-white">{link.title}</h3>
                <p className="mt-2 text-sm text-white/65">{link.description}</p>
              </>
            );

            return link.href.startsWith("/") ? (
              <Link key={link.href} href={link.href} className="content-card">
                {content}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="content-card" target="_blank" rel="noreferrer">
                {content}
              </a>
            );
          })}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {editorialSignals.map((signal) => (
            <TrustNote key={signal.title} title={signal.title} body={signal.body} />
          ))}
        </div>
      </section>

      <section className="bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <SectionHeader
            eyebrow="Community research"
            title="Video and creator references"
            copy="Recent creator videos help players understand gameplay, updates, and communication strategy. Treat videos as supporting references, not official patch notes."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {videoGuides.map((video) => (
              <a key={video.href} href={video.href} className="content-card" target="_blank" rel="noreferrer">
                <span className="mini-label">{video.source ?? video.eyebrow}</span>
                <h3 className="mt-3 text-lg font-bold text-white">{video.title}</h3>
                <p className="mt-2 text-sm text-white/65">{video.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeader
          eyebrow="FAQ"
          title={`${siteConfig.gameName} quick answers`}
          copy="Quick answers for codes, sources, role guidance, and the next page to check."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.home.map((faq) => (
            <article key={faq.q} className="content-card">
              <h3 className="text-lg font-bold text-white">{faq.q}</h3>
              <p className="mt-2 text-sm leading-6 text-white/68">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
