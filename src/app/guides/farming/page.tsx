import type { Metadata } from "next";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { GuideTopicPageShell } from "@/components/guides/GuideTopicPageShell";
import { guidePageEntries, siteConfig } from "@/data/site";

const topic = guidePageEntries.farming;

export const metadata: Metadata = {
  title: "Monobombo Farming Guide",
  description: topic.description,
  alternates: { canonical: `${siteConfig.domain}/guides/farming/` }
};

export default function FarmingGuidePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: "Farming Guide", href: "/guides/farming" }]} />
      <FaqJsonLd items={topic.faqs} />
      <GuideTopicPageShell
        breadcrumbLabel="Farming Guide"
        introTitle="Monobombo farming guide"
        route="/guides/farming"
        topic={topic}
      />
    </>
  );
}
