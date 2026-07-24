import type { Metadata } from "next";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { GuideTopicPageShell } from "@/components/guides/GuideTopicPageShell";
import { guidePageEntries, siteConfig } from "@/data/site";

const topic = guidePageEntries.progression;

export const metadata: Metadata = {
  title: "Monobombo Progression Guide",
  description: topic.description,
  alternates: { canonical: `${siteConfig.domain}/guides/progression/` }
};

export default function ProgressionGuidePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: "Progression Guide", href: "/guides/progression" }]} />
      <FaqJsonLd items={topic.faqs} />
      <GuideTopicPageShell
        breadcrumbLabel="Progression Guide"
        introTitle="Monobombo progression guide"
        route="/guides/progression"
        topic={topic}
      />
    </>
  );
}
