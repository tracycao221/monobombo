"use client";

import Link from "next/link";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import type { FaqItem } from "@/types/site";

type GuideTopic = {
  eyebrow: string;
  title: string;
  description: string;
  quickAnswer: string;
  actionSteps: readonly string[];
  stuckHelp: readonly string[];
  commonMistakes: readonly string[];
  faqs: readonly FaqItem[];
};

export function GuideTopicPageShell({
  breadcrumbLabel,
  introTitle,
  route,
  topic
}: {
  breadcrumbLabel: string;
  introTitle: string;
  route: string;
  topic: GuideTopic;
}) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: breadcrumbLabel, href: route }]} />
      <PageIntro eyebrow={topic.eyebrow} title={introTitle} description={topic.description} />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Quick answer"
          title="Quick answer"
          copy={topic.quickAnswer}
        />
      </section>

      <AdsterraArticleMid />

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="content-card">
          <span className="mini-label">Step-by-step</span>
          <h2 className="mt-3 text-2xl font-bold text-white">Step-by-step</h2>
          <ol className="mt-4 grid gap-3 text-sm leading-6 text-white/72">
            {topic.actionSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>

        <article className="content-card">
          <span className="mini-label">{"If you're stuck"}</span>
          <h2 className="mt-3 text-2xl font-bold text-white">{"If you're stuck"}</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/72">
            {topic.stuckHelp.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-10">
        <article className="content-card">
          <span className="mini-label">Common mistakes</span>
          <h2 className="mt-3 text-2xl font-bold text-white">Common mistakes</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/72">
            {topic.commonMistakes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <AdsterraArticleBottom />

      <section className="mt-10">
        <SectionHeader
          eyebrow="FAQ"
          title="FAQ"
          copy="Use these Monobombo guide answers when your squad needs a faster reminder during a live Roblox session."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {topic.faqs.map((faq) => (
            <article key={faq.q} className="content-card">
              <h3 className="text-lg font-bold text-white">{faq.q}</h3>
              <p className="mt-2 text-sm leading-6 text-white/68">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/guide" className="content-card">
          <span className="mini-label">Core guide</span>
          <h2 className="mt-3 text-xl font-bold text-white">Monobombo role guide</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Return to the main Monobombo guide when you want the full Roblox role breakdown on one page.</p>
        </Link>
        <Link href="/squad-planner" className="content-card">
          <span className="mini-label">Planner</span>
          <h2 className="mt-3 text-xl font-bold text-white">Open the squad planner</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use the planner to assign the next role decision and the biggest round risk.</p>
        </Link>
        <Link href="/codes" className="content-card">
          <span className="mini-label">Codes</span>
          <h2 className="mt-3 text-xl font-bold text-white">Check Monobombo codes status</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Keep Monobombo separate from Monkey Bomb Tag and other code pages that do not belong to this Roblox game.</p>
        </Link>
      </section>
    </main>
  );
}
