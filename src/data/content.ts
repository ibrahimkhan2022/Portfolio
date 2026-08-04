export const profile = {
  name: "Ibrahim Khan",
  role: "Developer · Musician · Martial Artist · Founder",
  email: "1khanibrahim2022@gmail.com",
  linkedin: "https://www.linkedin.com/in/ibrahim-khan-1321612a2/",
  youtube: "https://www.youtube.com/@ComputingAndCoding",
  github: "https://github.com/ibrahimkhan2022",
};

export type Hobby = {
  id: string;
  icon: "guitar" | "web" | "app" | "gamedev" | "youtube" | "taekwondo";
  title: string;
  blurb: string;
  detail: string;
  link?: { label: string; href: string };
};

export const hobbies: Hobby[] = [
  {
    id: "guitar",
    icon: "guitar",
    title: "Guitar",
    blurb: "Riffs, chords, and the occasional 2am sessions.",
    detail:
      "I've played guitar for years now and mainly play acoustic and classcial, mainly finger style.",
  },
  {
    id: "web-dev",
    icon: "web",
    title: "Web Development",
    blurb: "Building cool websites and projects for the web.",
    detail:
      "React, TypeScript, and a deep appreciation for interfaces that feel alive. I design and ship full sites end to end — this one included.",
  },
  {
    id: "app-dev",
    icon: "app",
    title: "App Development",
    blurb: "Turning ideas into apps people actually want to open.",
    detail:
      "From concept to shipped product — native and cross-platform builds focused on clean UX and solid architecture.",
  },
  {
    id: "game-dev",
    icon: "gamedev",
    title: "Game Development",
    blurb: "Building games and interactive experiences on the side.",
    detail:
      "Prototyping mechanics, building levels, and figuring out what makes a game actually fun to play.",
  },
  {
    id: "youtube",
    icon: "youtube",
    title: "YouTuber",
    blurb: "Teaching people what they need to know in the tech world.",
    detail:
      "I am the founder of Computing And Coding, and own the youtube channel where I post things to know in the tech world! Our main goal is to one day start teaching kids about coding and programming, and to help them get started in the tech world. ",
    link: {
      label: "@ComputingAndCoding",
      href: "https://www.youtube.com/@ComputingAndCoding",
    },
  },
  {
    id: "taekwondo",
    icon: "taekwondo",
    title: "Taekwondo",
    blurb: "3rd Dan Black Belt — instructor at Top Level Taekwondo.",
    detail:
      "3rd dan black belt with years on the mat, and an instructor at Top Level Taekwondo since May 2023 — teaching discipline, technique, and confidence to the next generation.",
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  accent: string;
};

// TODO(Ibrahim): swap these placeholders for your real projects (title, description, tags, link).
export const projects: Project[] = [
  {
    id: "project-one",
    title: "Project One",
    description:
      "A short, punchy summary of what this build does and the problem it solves.",
    tags: ["React", "TypeScript", "Node"],
    href: "#",
    accent: "#A6FF00",
  },
  {
    id: "project-two",
    title: "Project Two",
    description:
      "Another shipped project — swap in the real name, stack, and a link to the repo or live demo.",
    tags: ["Swift", "iOS"],
    href: "#",
    accent: "#5EC900",
  },
  {
    id: "project-three",
    title: "Project Three",
    description:
      "Describe the challenge, your approach, and the outcome in a sentence or two.",
    tags: ["Python", "Automation"],
    href: "#",
    accent: "#C8FF47",
  },
];

export type ClientSite = {
  id: string;
  business: string;
  summary: string;
  services: string[];
  href?: string;
  accent: string;
};

// Live demo templates — click through to see full working sites.
export const clientSites: ClientSite[] = [
  {
    id: "plumbing",
    business: "Ironclad Plumbing Co.",
    summary:
      "Bold, trust-first site for a 24/7 residential plumber — emergency CTA front and center, job gallery, and reviews.",
    services: ["Web Design", "Development"],
    href: "/demos/plumbing",
    accent: "#FF6B35",
  },
  {
    id: "hvac",
    business: "AeroTemp Comfort Systems",
    summary:
      "Modern HVAC site with animated stats, maintenance plan pricing, and a gradient-driven brand system.",
    services: ["Web Design", "Development"],
    href: "/demos/hvac",
    accent: "#1D6FE0",
  },
  {
    id: "bakery",
    business: "Marigold Bakehouse",
    summary:
      "Warm, editorial bakery site with a daily menu, brand story, and a soft, serif-led visual identity.",
    services: ["Branding", "Web Design"],
    href: "/demos/bakery",
    accent: "#C1613F",
  },
];

export const sectionSpeech: Record<string, string[]> = {
  hero: [
    "Hey — I'm Ibrahim's sidekick. Scroll down, I'll show you around.",
    "Welcome in. There's a lot to see here.",
  ],
  hobbies: [
    "Guitarist, coder, YouTuber, and a 3rd dan black belt. Busy guy.",
    "Since May 2023 he's also been teaching at Top Level Taekwondo.",
  ],
  projects: [
    "Here's some of what he's built. Take a look.",
    'Every project starts as a "what if" — click around.',
  ],
  clientWork: [
    "He builds for businesses too — real sites, real results.",
    "Need a site like these? Scroll to the contact section.",
  ],
  contact: [
    "That's the tour. Let's build something — reach out below.",
    "Email or LinkedIn — either works.",
  ],
};
