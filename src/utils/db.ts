export const MenuList = [
  {
    name: "home",
    pathname: "/",
    href: "#",
    LargeScreen: {
      width: "70px",
      left: "0px",
    },
    SmallScreen: {
      icon: "H",
    },
  },
  {
    name: "skills",
    pathname: "/Skills",
    href: "#skills",

    LargeScreen: {
      width: "70px",
      left: "80px",
    },
    SmallScreen: {
      icon: "A",
    },
  },
  {
    name: "education",
    pathname: "/Education",
    href: "#education",

    LargeScreen: {
      width: "105px",
      left: "160px",
    },
    SmallScreen: {
      icon: "P",
    },
  },
  {
    name: "projects",
    pathname: "/Projects",
    href: "#projects",

    LargeScreen: {
      width: "85px",
      left: "278px",
    },
    SmallScreen: {
      icon: "C",
    },
  },
];

export const SkillsList = {
  Language: [
    {
      name: "HTML" as const,
      description: "The standard markup language for creating web pages.",
    },
    {
      name: "CSS" as const,
      description:
        "A style sheet language used for describing the presentation of a document.",
    },
    {
      name: "JavaScript" as const,
      description:
        "A programming language that is one of the core technologies of the web.",
    },
    {
      name: "Python" as const,
      description:
        "A high-level programming language known for its readability and versatility.",
    },
    {
      name: "React" as const,
      description: "A JavaScript library for building user interfaces.",
    },
    {
      name: "Java" as const,
      description: "A class-based, object-oriented programming language.",
    },
    {
      name: "SQL" as const,
      description: "Relational database management system language.",
    },
  ],
  Framework: [
    {
      name: "Tailwind CSS" as const,
      description: "A utility-first CSS framework for rapid UI development.",
    },
    {
      name: "Typescript" as const,
      description:
        "A typed superset of JavaScript that compiles to plain JavaScript.",
    },
    {
      name: "Next Js" as const,
      description:
        "A React framework for server-side rendering and static site generation.",
    },
    {
      name: "Express Js" as const,
      description: "A minimal and flexible Node.js web application framework.",
    },
    {
      name: "Hono" as const,
      description: "A simple and lightweight task runner for Node.js.",
    },
    {
      name: "Fast API" as const,
      description:
        "A modern, fast , web framework for building APIs with Python .",
    },
  ],
  Tools: [
    {
      name: "Git" as const,
      description:
        "A distributed version control system for tracking changes in source code.",
    },
    {
      name: "GitHub" as const,
      description:
        "A web-based platform for version control and collaboration.",
    },
    {
      name: "Node Js" as const,
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    },

    {
      name: "VS Code" as const,
      description:
        "A source-code editor developed by Microsoft for Windows, Linux, and macOS.",
    },
    {
      name: "Bun" as const,
      description: "A simple and lightweight task runner for Node.js.",
    },
    {
      name: "Cloudflare Workers" as const,
      description:
        "A serverless platform that enables developers to deploy applications globally.",
    },
    {
      name: "Supabase" as const,
      description:
        "An open-source Firebase alternative with a Postgres database.",
    },
  ],
};

export const projects = [
  {
    title: "Chatty AI",
    description:
      "A modern chat application with Multi AI Model integration for enhanced user experience. Features a fast and smooth UI/UX, built for performance.",
    techStack: ["React", "Tailwind CSS", "TypeScript", "Zustand"],
    link: "https://chatty.jackwaghan.com/",
  },
  {
    title: "Tasky AI",
    description:
      "A task management application leveraging AI for efficiency and productivity. Features a clean and intuitive interface.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    link: "https://tasky.jackwaghan.com/",
  },
  {
    title: "Telegram Multi Bot",
    description:
      "Provides tools like AI Writer, Text to Speech, Web Capture, URL Shortener, Encryption/Decryption, Speech to Text, and Web Scraping in a single bot.",
    techStack: ["Python", "Telegram API", "OpenAI API", "Fast API"],
    link: "https://github.com/jackwaghan/Telegram-Multi-Bot",
  },
];
