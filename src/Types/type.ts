import { z } from "zod";

export type MenuType = {
  name: string;
  pathname: string;
  href: string;
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
    | "Java"
    | "SQL"
    | "Tailwind CSS"
    | "Typescript"
    | "Next Js"
    | "Git"
    | "GitHub"
    | "Node Js"
    | "Express Js"
    | "VS Code"
    | "Bun"
    | "Cloudflare Workers"
    | "Hono"
    | "Fast API"
    | "Supabase";
  description: string;
};

export type windowSize = {
  width: number | undefined;
  height: number | undefined;
};

export const formSchema = z.object({
  name: z
    .string()
    .nonempty("Name should not be empty")
    .min(2, "Name must be atleast 2 characters"),
  email: z
    .string()
    .nonempty("Email should not be empty")
    .email("Invalid Email"),
  message: z
    .string()
    .nonempty()
    .min(20, "Message should be atleast 20 characters"),
});

export type FormValues = z.infer<typeof formSchema>;

export type responseType = {
  message: {
    message: string;
    form: object;
  };
  status: {
    status: string;
  };
};
