import type { Metadata } from "next";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { GuideTopicPageShell } from "@/components/guides/GuideTopicPageShell";
import { guidePageEntries, siteConfig } from "@/data/site";

const topic = guidePageEntries.beginner;

export const metadata: Metadata = {
  title: "Monobombo Beginner Guide",
  description: topic.description,
  alternates: { canonical: `${siteConfig.domain}/guides/beginner/` }
};

export default function BeginnerGuidePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: "Beginner Guide", href: "/guides/beginner" }]} />
      <FaqJsonLd items={topic.faqs} />
      <GuideTopicPageShell
        breadcrumbLabel="Beginner Guide"
        introTitle="Monobombo beginner guide"
        route="/guides/beginner"
        topic={topic}
      />
    </>
  );
}
