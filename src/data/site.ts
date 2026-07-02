import type { EditorialSignal, FaqItem, GameCode, HeroMetric, LinkCard, SiteConfig, TierPreviewItem } from "@/types/site";
import { gameConfig } from "@/data/game.config";

export const siteConfig: SiteConfig = {
  name: `${gameConfig.name} Wiki`,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description: `${gameConfig.name} wiki with codes status, role guides, Trello and Discord status, official sources, and source-backed Roblox player help.`,
  valueProposition: `Find the official ${gameConfig.name} Roblox link, check whether codes exist, and learn how the three monkey roles work before your team starts defusing bombs.`,
  shortDisclosure: `${gameConfig.name} Wiki is an unofficial fan-made resource. Roblox and the game creators remain the source of record for official support and updates.`,
  lastUpdated: "2026-07-02",
  freshnessLabel: "official link verified; codes and community links pending",
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
        { label: "Active Codes", href: "/codes", description: "Latest known rewards and redemption steps." },
        { label: "Sources", href: "/sources", description: "Where code and update claims should be checked." }
      ]
    },
    {
      label: "Wiki",
      href: "/wiki",
      items: [
        { label: "Wiki Hub", href: "/wiki", description: "Verified roles, game loop, and source-backed notes." },
        { label: "Guide", href: "/guide", description: "Beginner role guide and team communication checklist." },
        { label: "Role Priority", href: "/tier-list", description: "A safe role-priority page, not an unverified character ranking." },
        { label: "Trello/Discord", href: "/trello", description: "Official board, Discord, and wiki status." }
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
  { href: "/guide", label: "Read guide" },
  { href: "/tier-list", label: "Role priority" },
  { href: "/trello", label: "Check sources" },
  { href: "/wiki", label: "Open wiki" }
] as const;

export const heroMetrics: HeroMetric[] = [
  { label: "Roblox link", value: "Verified", note: "Place 112531085636442" },
  { label: "Active players", value: "7.3k+", note: "Roblox API mirror snapshot" },
  { label: "Code status", value: "Pending", note: "No official codes verified yet" },
  { label: "Source model", value: "Clear", note: "Official and unverified links split" }
];

export const activeCodes: GameCode[] = [];

export const tierPreview: TierPreviewItem[] = [
  {
    name: "Blindfolded monkey",
    tier: "S",
    role: "Visual information receiver",
    reason: "This role cannot see and needs clear descriptions from teammates before acting.",
    confidence: "Source-backed",
    bestFor: ["team communication", "careful listening"],
    sourceNote: "Role constraint comes from the official Roblox description.",
    teamNote: "Ask for short, specific instructions and repeat the action before doing it."
  },
  {
    name: "Headphones monkey",
    tier: "A",
    role: "Low-hearing teammate",
    reason: "This role may miss spoken instructions, so visual signals and typed summaries matter.",
    confidence: "Source-backed",
    bestFor: ["visual coordination", "simple callouts"],
    sourceNote: "Role constraint comes from the official Roblox description.",
    teamNote: "Use repeated keywords, short pings, or agreed signals before the round starts."
  },
  {
    name: "Quiet monkey",
    tier: "A",
    role: "Limited speech teammate",
    reason: "This role should keep messages concise and rely on teammates to confirm what changed.",
    confidence: "Source-backed",
    bestFor: ["concise calls", "confirmation"],
    sourceNote: "Role constraint comes from the official Roblox description.",
    teamNote: "Prepare yes/no or left/right callouts before the bomb timer gets stressful."
  }
];

export const toolCards: LinkCard[] = [
  {
    title: `${gameConfig.name} Role Guide`,
    href: "/guide",
    eyebrow: "Guide",
    description: "A practical checklist for the blindfolded, headphones, and quiet monkey roles."
  },
  {
    title: `${gameConfig.name} Codes`,
    href: "/codes",
    eyebrow: "Codes",
    description: "Tracks whether official codes exist and flags near-name code confusion."
  },
  {
    title: `${gameConfig.name} Trello & Discord`,
    href: "/trello",
    eyebrow: "Community status",
    description: "Clarifies official Trello, Discord, wiki, and Roblox source status for update-sensitive claims."
  }
];

export const guideClusters: LinkCard[] = [
  {
    title: "Beginner role guide",
    href: "/guide",
    eyebrow: "Guide",
    description: "How to start a round, split communication duties, and avoid common team mistakes."
  },
  {
    title: "Bomb defusal checklist",
    href: "/guide",
    eyebrow: "Guide",
    description: "What to say, what to confirm, and when to slow down before a wrong input."
  },
  {
    title: "Team communication tips",
    href: "/guide",
    eyebrow: "Guide",
    description: "Short callouts for teams where one player cannot see, one cannot hear, and one talks less."
  }
];

export const wikiCards: LinkCard[] = [
  {
    title: "Three monkey roles",
    href: "/wiki",
    eyebrow: "Wiki",
    description: "Blindfolded, headphones, and quiet monkey notes from the official game description."
  },
  {
    title: "Bomb defusal loop",
    href: "/wiki",
    eyebrow: "Wiki",
    description: "A source-backed overview of how the team objective is described by Roblox."
  },
  {
    title: "Game modes and updates",
    href: "/wiki",
    eyebrow: "Wiki",
    description: "Mode details are marked pending until official or in-game sources confirm them."
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
    body: "Codes, community links, and mode notes should show a visible checked date and avoid pretending unverified claims are final."
  },
  {
    title: "Entity coverage",
    body: "Keep role and mode facts separate from source-status notes so players can see what is verified."
  },
  {
    title: "Fan-site clarity",
    body: "This fan site clearly points players back to official Roblox and creator-owned support paths."
  }
];

export const videoGuides: LinkCard[] = [
  {
    title: "Gameplay overview",
    href: "#",
    eyebrow: "Video",
    description: "Use a current YouTube creator guide that explains the game loop and shows real gameplay."
  },
  {
    title: "Beginner route",
    href: "#",
    eyebrow: "Video",
    description: "Use a recent YouTube walkthrough for the first session or first major unlock."
  },
  {
    title: "Meta showcase",
    href: "#",
    eyebrow: "Video",
    description: "Use a YouTube video that supports gameplay, update context, or communication strategy."
  }
];

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
      a: "The guide should cover the three confirmed monkey role limits, team communication, and checked source notes before adding any unverified mode details."
    }
  ]
};
