export type MenuType = {
  name: string;
  pathname: string;
  LargeScreen: {
    width: string;
    left: string;
  };
  SmallScreen: {
    icon: string;
  };
};

export type SkillItem = {
  name:
    | "HTML"
    | "CSS"
    | "JavaScript"
    | "Python"
    | "React"
    | "Tailwind CSS"
    | "Typescript"
    | "Next Js"
    | "Git"
    | "GitHub"
    | "Node Js"
    | "Express Js"
    | "VS Code"
    | "Bun"
    | "Cloudflare Workers";
  description: string;
};
