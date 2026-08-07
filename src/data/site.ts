import type { EditorialSignal, FaqItem, GameCode, HeroMetric, LinkCard, SiteConfig, TierPreviewItem } from "@/types/site";
import { gameConfig } from "@/data/game.config";

export const siteConfig: SiteConfig = {
  name: `${gameConfig.name} Wiki`,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description: `${gameConfig.name} wiki with codes status, role guides, Trello and Discord status, official Roblox links, and practical player help.`,
  valueProposition: `Find the official ${gameConfig.name} Roblox link, check whether codes exist, and learn how the three monkey roles work before your team starts defusing bombs.`,
  shortDisclosure: `${gameConfig.name} Wiki is an unofficial fan-made resource. Roblox and the game creators remain the source of record for official support and updates.`,
  lastUpdated: "2026-08-07",
  freshnessLabel: "official Roblox page, games summary, and votes checked; codes and community links still pending",
  keywords: [
    `${gameConfig.name}`,
    `${gameConfig.name} codes`,
    `${gameConfig.name} trello`,
    `${gameConfig.name} discord`,
    `${gameConfig.name} wiki`,
    `${gameConfig.name} official wiki`,
    `${gameConfig.name} guide`,
    `${gameConfig.name} how to play`,
    `${gameConfig.name} roles`,
    "Roblox codes"
  ],
  navGroups: [
    {
      label: "Home",
      href: "/",
      items: []
    },
    {
      label: "Codes",
      href: "/codes",
      items: [
        { label: "Codes Status", href: "/codes", description: "Checked status, reward notes, and redeem-step boundaries." },
        { label: "Updates", href: "/updates", description: "What changed, what is pending, and what still needs a fresh check." }
      ]
    },
    {
      label: "Guides",
      href: "/guides",
      items: [
        { label: "Guide Hub", href: "/guides", description: "Pick the Monobombo guide for your next round problem." },
        { label: "Beginner Guide", href: "/guides/beginner", description: "First-round role setup and callout basics." },
        { label: "Progression Guide", href: "/guides/progression", description: "How to tighten your team process after a few matches." },
        { label: "Farming Guide", href: "/guides/farming", description: "How to practice quickly without inventing reward numbers." }
      ]
    },
    {
      label: "Wiki",
      href: "/wiki",
      items: [
        { label: "Wiki Hub", href: "/wiki", description: "Quick answer, core systems, current facts, and player routes." },
        { label: "Items & Rewards", href: "/wiki/items-and-rewards", description: "Codes, rewards, and items that players keep searching for." },
        { label: "Maps & Systems", href: "/wiki/maps-and-systems", description: "Round flow, mode systems, and failure outcomes." },
        { label: "Builds & Entities", href: "/wiki/builds-and-entities", description: "Role entities, value tradeoffs, and ranking language." }
      ]
    },
    {
      label: "Tools",
      href: "/squad-planner",
      items: [
        { label: "Squad Planner", href: "/squad-planner", description: "Role planner for callouts, decisions, and risk checks." },
        { label: "Resource Calculator", href: "/resource-calculator", description: "Practice target planner for retries, time, and session cost." },
        { label: "Tier List", href: "/tier-list", description: "Checked ranking confidence for the three known roles." }
      ]
    },
    {
      label: "Status",
      href: "/trello",
      items: [
        { label: "Trello, Discord & Wiki", href: "/trello", description: "Official status page for community links and pending sources." },
        { label: "Updates", href: "/updates", description: "Checked update status and code-watch notes." },
        { label: "Sources", href: "/sources", description: "Where Monobombo facts and claims should be checked." }
      ]
    },
    {
      label: "About",
      href: "/about",
      items: [
        { label: "About Us", href: "/about", description: "Author profile, editorial process, and source standards." },
        { label: "Disclosure", href: "/disclosure", description: "Fan-made status, advertising boundaries, and source precedence." },
        { label: "Contact Us", href: "/contact", description: "Corrections, privacy questions, and editorial contact path." },
        { label: "Privacy Policy", href: "/privacy", description: "Privacy, analytics, ads, and third-party cookie disclosure." },
        { label: "Terms of Service", href: "/terms", description: "Use rules, unofficial status, and third-party service terms." }
      ]
    }
  ]
};

export const heroActions = [
  { href: "/codes", label: "Check codes" },
  { href: "/guides/beginner", label: "Read guide" },
  { href: "/tier-list", label: "Role priority" },
  { href: "/updates", label: "Check updates" },
  { href: "/wiki", label: "Open wiki" }
] as const;

export const heroMetrics: HeroMetric[] = [
  { label: "Roblox link", value: "Verified", note: "Place 112531085636442" },
  { label: "Stats snapshot", value: "1.5k live", note: "1,538 playing, 54,301,819 visits, and 142,649 favorites from Roblox on Friday, August 7, 2026" },
  { label: "Code status", value: "Pending", note: "No public Monobombo code verified on Friday, August 7, 2026" },
  { label: "Vote signal", value: "44.6k", note: "44,563 upvotes from the Roblox votes API on Friday, August 7, 2026" }
];

export const activeCodes: GameCode[] = [];

export const tierPreview: TierPreviewItem[] = [
  {
    name: "Blindfolded monkey",
    tier: "S",
    role: "Visual information receiver",
    reason: "This role cannot see and needs clear descriptions from teammates before acting.",
    confidence: "Checked",
    bestFor: ["team communication", "careful listening"],
    sourceNote: "Role constraint comes from the official Roblox description.",
    teamNote: "Ask for short, specific instructions and repeat the action before doing it."
  },
  {
    name: "Headphones monkey",
    tier: "A",
    role: "Low-hearing teammate",
    reason: "This role may miss spoken instructions, so visual signals and typed summaries matter.",
    confidence: "Checked",
    bestFor: ["visual coordination", "simple callouts"],
    sourceNote: "Role constraint comes from the official Roblox description.",
    teamNote: "Use repeated keywords, short pings, or agreed signals before the round starts."
  },
  {
    name: "Quiet monkey",
    tier: "A",
    role: "Limited speech teammate",
    reason: "This role should keep messages concise and rely on teammates to confirm what changed.",
    confidence: "Checked",
    bestFor: ["concise calls", "confirmation"],
    sourceNote: "Role constraint comes from the official Roblox description.",
    teamNote: "Prepare yes/no or left/right callouts before the bomb timer gets stressful."
  }
];

export const toolCards: LinkCard[] = [
  {
    title: "Monobombo beginner guide",
    href: "/guides/beginner",
    eyebrow: "Guide",
    description: "A practical checklist for the blindfolded, headphones, and quiet monkey roles."
  },
  {
    title: "Monobombo squad planner",
    href: "/squad-planner",
    eyebrow: "Tool",
    description: "Plan role swaps, callout ownership, and the highest-risk decision in the next round."
  },
  {
    title: "Monobombo resource calculator",
    href: "/resource-calculator",
    eyebrow: "Tool",
    description: "Set a session target for retries, practice rounds, and time cost without inventing in-game rewards."
  }
];

export const guideClusters: LinkCard[] = [
  {
    title: "Beginner role guide",
    href: "/guides/beginner",
    eyebrow: "Guide",
    description: "How to start a round, split communication duties, and avoid common team mistakes."
  },
  {
    title: "Progression guide",
    href: "/guides/progression",
    eyebrow: "Guide",
    description: "How to tighten your bomb-defusal checklist after the basics stop feeling difficult."
  },
  {
    title: "Practice and farming guide",
    href: "/guides/farming",
    eyebrow: "Guide",
    description: "Short practice loops for teams who want more clean clears without guessing hidden values."
  }
];

export const wikiCards: LinkCard[] = [
  {
    title: "Items and rewards",
    href: "/wiki/items-and-rewards",
    eyebrow: "Wiki",
    description: "Code status, likely rewards language, and item claims that still need public proof."
  },
  {
    title: "Maps and systems",
    href: "/wiki/maps-and-systems",
    eyebrow: "Wiki",
    description: "Round systems, outcomes, and the shared bomb-defusal loop described on Roblox."
  },
  {
    title: "Builds and entities",
    href: "/wiki/builds-and-entities",
    eyebrow: "Wiki",
    description: "Role entities, value tradeoffs, and ranking language players keep searching for."
  }
];

export const officialLinks: LinkCard[] = [
  {
    title: "Official Roblox game page",
    href: gameConfig.dataSources.officialGameUrl,
    eyebrow: "Official",
    description: "Use this page as the source of record for game title, creator, and live Roblox availability."
  },
  {
    title: "Trello, Discord, and board status",
    href: gameConfig.dataSources.trello && gameConfig.dataSources.trello !== "#" ? gameConfig.dataSources.trello : (gameConfig.dataSources.discord && gameConfig.dataSources.discord !== "#" ? gameConfig.dataSources.discord : "/trello"),
    eyebrow: "Community",
    description: "Use this status route or verified creator links to separate official boards from community references."
  },
  {
    title: "Source checklist",
    href: "/sources",
    eyebrow: "Editorial",
    description: "Document which claims are official, community confirmed, or still uncertain."
  }
];

export const editorialSignals: EditorialSignal[] = [
  {
    title: "Freshness first",
    body: "Codes, community links, and mode notes should show a visible checked date and avoid pretending pending claims are final."
  },
  {
    title: "Role facts first",
    body: "Keep role and mode facts separate from community-link status so players can see what is known right now."
  },
  {
    title: "Fan-site clarity",
    body: "This fan site clearly points players back to official Roblox and creator-owned support paths."
  }
];

export const videoGuides: LinkCard[] = [
  {
    title: "Official Roblox page",
    href: gameConfig.dataSources.officialGameUrl,
    eyebrow: "Official",
    description: "Start with the Monobombo Roblox page before using any community summary or reposted clip."
  },
  {
    title: "Updates status page",
    href: "/updates",
    eyebrow: "Status",
    description: "Use the checked updates page when you need the latest code-watch or patch-status note."
  },
  {
    title: "Sources page",
    href: "/sources",
    eyebrow: "Reference",
    description: "Use the sources page when you need to separate official links from community reports."
  }
];

export const guidePageEntries = {
  beginner: {
    slug: "beginner",
    title: "Monobombo beginner guide",
    eyebrow: "Beginner guide",
    description: "Monobombo beginner guide for Roblox teams who need a clean first-round role plan before the timer starts.",
    quickAnswer: "Monobombo works best when your team assigns one caller, one confirmer, and one fallback helper before the round begins.",
    actionSteps: [
      "Open the Monobombo Roblox page and remind the team that the three known role limits are sight, hearing, and speech pressure.",
      "Decide who gives the first short callout, who repeats the instruction, and who confirms the action before anyone clicks.",
      "Use a left-right, color, and number vocabulary that every teammate can say in under two seconds."
    ],
    stuckHelp: [
      "If the blindfolded monkey feels lost, pause the callout and describe only one visible detail at a time.",
      "If the headphones monkey misses the call, swap to typed or repeated keywords instead of longer sentences.",
      "If the quiet monkey stops talking, move to yes-no confirmations and let another player handle the long explanation."
    ],
    commonMistakes: [
      "Starting the round without a caller order.",
      "Giving two instructions in one sentence.",
      "Treating Monkey Bomb Tag tips as if they belong to Monobombo."
    ],
    faqs: [
      {
        q: "What should a Monobombo beginner team practice first?",
        a: "Practice one short callout chain for sight, one for hearing, and one for confirmation before worrying about advanced mode guesses."
      },
      {
        q: "Does the Monobombo beginner guide confirm hidden mode tricks?",
        a: "No. This guide stays with the public Roblox role description and basic team process."
      }
    ]
  },
  progression: {
    slug: "progression",
    title: "Monobombo progression guide",
    eyebrow: "Progression guide",
    description: "Monobombo progression guide for Roblox squads who already know the roles and want cleaner round decisions.",
    quickAnswer: "Progression in Monobombo comes from cleaner decision order, faster confirmation, and fewer repeated mistakes under pressure.",
    actionSteps: [
      "Review the last failed round and mark the exact decision that broke the callout chain.",
      "Keep one player focused on risk words such as stop, wait, confirm, and reset so the team does not rush the wrong input.",
      "After each clear, update the squad planner with the role that felt slowest and the decision that caused the most hesitation."
    ],
    stuckHelp: [
      "If your team keeps rushing, add a mandatory confirm word before every final input.",
      "If players argue over the same clue, give one player authority for that clue type in the next round.",
      "If progress stalls, go back to the beginner callout set for one match and rebuild pace from there."
    ],
    commonMistakes: [
      "Changing the caller in the middle of a high-risk decision.",
      "Skipping the reset after a failed outcome.",
      "Assuming an update changed the role rules before a checked status page says so."
    ],
    faqs: [
      {
        q: "How does Monobombo progression actually improve clears?",
        a: "It improves clears by reducing noisy decisions, shortening repeat callouts, and keeping each role focused on one job at a time."
      },
      {
        q: "Should a Monobombo progression guide include hidden patch notes?",
        a: "No. Use the updates page for checked status notes and keep this guide focused on repeatable teamwork."
      }
    ]
  },
  farming: {
    slug: "farming",
    title: "Monobombo farming guide",
    eyebrow: "Practice guide",
    description: "Monobombo farming guide for Roblox teams who want a repeatable practice loop without making up reward numbers.",
    quickAnswer: "The safe Monobombo farming plan is a fast practice loop: choose a target number of rounds, set a time budget, and repeat the same callout script until clears feel automatic.",
    actionSteps: [
      "Pick a target number of practice rounds in the resource calculator before the session starts.",
      "Use the same role order for three rounds so the team can compare callout speed instead of changing variables every match.",
      "End each loop by writing one improvement target and one risk word in the squad planner."
    ],
    stuckHelp: [
      "If practice turns messy, lower the round target and focus on one role handoff at a time.",
      "If the team chases code rumors instead of practice, send everyone back to the checked codes page first.",
      "If fatigue rises, stop the session early and save the target for the next day."
    ],
    commonMistakes: [
      "Pretending Monobombo has confirmed farming rewards when none were published publicly.",
      "Tracking too many changes in one practice block.",
      "Ignoring time cost and repeating bad habits."
    ],
    faqs: [
      {
        q: "Does Monobombo have a confirmed farming route for rewards?",
        a: "No public reward route was confirmed on Friday, August 7, 2026, so this page treats farming as practice planning instead of an item grind."
      },
      {
        q: "Why does the Monobombo farming guide use a practice target?",
        a: "A practice target gives the team a safe way to measure progress without inventing currency, drop, or code reward claims."
      }
    ]
  }
} as const;

export const faqs: Record<"home" | "codes" | "guide", FaqItem[]> = {
  home: [
    {
      q: `What is ${gameConfig.name} Wiki?`,
      a: `${gameConfig.name} Wiki is a fan-made Roblox resource for codes status, role guides, source checks, and wiki notes.`
    },
    {
      q: `Is this the official ${gameConfig.name} website?`,
      a: "No. This is an unofficial fan site. Use the official Roblox page and creator-owned channels for official support, purchases, moderation, and account issues."
    },
    {
      q: `How often should ${gameConfig.name} codes be checked?`,
      a: "Codes should be checked whenever the game updates, reaches milestones, or community sources report new rewards. Keep the checked date visible."
    },
    {
      q: `What pages should be expanded first?`,
      a: "Start with codes status, Trello/Discord status, the role guide, wiki hub, and sources. Add separate mode pages after research confirms the game's real systems."
    }
  ],
  codes: [
    {
      q: `Where do ${gameConfig.name} codes come from?`,
      a: "Use official Roblox descriptions, creator groups, Discord announcements, Trello boards, and trusted community trackers when available."
    },
    {
      q: "Why are some codes marked Needs check?",
      a: "No active Monobombo code is published unless an official or trusted current source verifies it. Near-name games such as Monkey Bomb Tag are kept separate."
    }
  ],
  guide: [
    {
      q: "What should the Monobombo guide cover first?",
      a: "The guide should cover the three confirmed monkey role limits, team communication, and checked status notes before adding any unverified mode details."
    }
  ]
};
