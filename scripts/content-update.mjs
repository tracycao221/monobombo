import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";

const root = process.cwd();

function hasPath(relativePath) {
  return existsSync(join(root, relativePath));
}

function readJson(relativePath) {
  return JSON.parse(readFileSync(join(root, relativePath), "utf8"));
}

const pkg = readJson("package.json");
const checks = {
  packageName: pkg.name,
  contentUpdateScript: pkg.scripts?.["content:update"] === "node scripts/content-update.mjs",
  sitemapRoute: hasPath("src/app/sitemap.ts"),
  robotsRoute: hasPath("src/app/robots.ts"),
  codesPage: hasPath("src/app/codes/page.tsx"),
  guidesPage: hasPath("src/app/guides/page.tsx"),
  wikiPage: hasPath("src/app/wiki/page.tsx"),
  sourcesPage: hasPath("src/app/sources/page.tsx"),
  termsPage: hasPath("src/app/terms/page.tsx"),
  aboutPage: hasPath("src/app/about/page.tsx")
};

const missing = Object.entries(checks)
  .filter(([, value]) => value === false)
  .map(([key]) => key);

const report = {
  type: "content_update_baseline_check",
  status: missing.length === 0 ? "ready" : "ready_with_missing_optional_routes",
  checks,
  missing,
  guardrails: {
    writesFiles: false,
    changesPageCopy: false,
    changesMetadata: false,
    changesAds: false,
    changesDns: false,
    deploys: false
  },
  nextStep: "Use this baseline before any manual content refresh; collect sources first, then edit pages in a separate reviewed task."
};

console.log(JSON.stringify(report, null, 2));
