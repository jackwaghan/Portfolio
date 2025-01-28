export const MenuList = [
  {
    name: "Home",
    pathname: "/",
    LargeScreen: {
      width: "70px",
      left: "15px",
    },
    SmallScreen: {
      icon: "H",
    },
  },
  {
    name: "About",
    pathname: "/About",
    LargeScreen: {
      width: "70px",
      left: "98px",
    },
    SmallScreen: {
      icon: "A",
    },
  },
  {
    name: "Projects",
    pathname: "/Projects",
    LargeScreen: {
      width: "80px",
      left: "183px",
    },
    SmallScreen: {
      icon: "P",
    },
  },
  {
    name: "Contact",
    pathname: "/Contact",
    LargeScreen: {
      width: "80px",
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
      name: "Express Js" as const,
      description: "A minimal and flexible Node.js web application framework.",
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
  ],
};
