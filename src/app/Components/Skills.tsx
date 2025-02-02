import React, { useEffect } from "react";
import { TbBrandCss3 } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { LiaHtml5 } from "react-icons/lia";
import { FaReact } from "react-icons/fa";
import { SkillsList } from "@/utils/db";
import bun from "../../../public/bun.svg";
import CloudflareWorkers from "../../../public/CloudflareWorkers.svg";
import Python from "../../../public/python.svg";
import TailwindCss from "../../../public/tailwind-css.svg";
import Typescript from "../../../public/Typescript.svg";
import Nextjs from "../../../public/Nextjs.svg";
import Git from "../../../public/Git.svg";
import GitHub from "../../../public/GitHub.svg";
import Nodejs from "../../../public/Nodejs.svg";
import Expressjs from "../../../public/Expressjs.svg";
import Vscode from "../../../public/Vscode.svg";
import type { SkillItem } from "@/Types/type";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { store } from "@/utils/hook";
import { MenuList } from "@/utils/db";
const Skills = () => {
  const { setsize, scroll, setscroll, setactive } = store();
  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (skillsInView && scroll) {
      const value = MenuList.find((menu) => menu.name == "skills");
      setsize({
        widthValue: value?.LargeScreen.width || "",
        leftValue: value?.LargeScreen.left || "",
      });
      setscroll(true);
      setactive("skills");
    }
  }, [skillsInView, setsize, scroll, setscroll, setactive]);
  return (
    <div
      id="skills"
      ref={skillsRef}
      className="container mx-auto flex h-full w-full flex-col px-4 pt-20 md:pt-36"
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="font-mono text-4xl font-bold tracking-tight text-orange-300 md:text-6xl">
          Skills
        </h1>
        <p className="w-4/5 text-center font-poppins font-semibold text-white/40 md:text-2xl">
          Here are my Skills on which I am experienced over time
        </p>
      </div>
      <SkillSection title="Language" skills={SkillsList.Language} />
      <SkillSection title="Framework" skills={SkillsList.Framework} />
      <SkillSection title="Tools" skills={SkillsList.Tools} />
    </div>
  );
};

export default Skills;

const SkillSection = ({
  title,
  skills,
}: {
  title: string;
  skills: SkillItem[];
}) => {
  return (
    <div className="mt-20 md:mt-32">
      <h1 className="font-mono text-2xl font-semibold text-orange-200 md:text-3xl">
        {title}
      </h1>
      <div className="mt-10 grid grid-cols-2 justify-center gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
        {skills.map((item, index) => (
          <SkillCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const SkillCard = ({ item }: { item: SkillItem }) => {
  const icons = {
    HTML: <LiaHtml5 className="text-orange-600" size={20} />,
    CSS: <TbBrandCss3 className="text-green-600" size={20} />,
    JavaScript: <RiJavascriptLine className="text-yellow-400" size={20} />,
    Python: <Image src={Python} alt="Python Icon" width={35} />,
    React: <FaReact className="text-sky-500" size={20} />,
    "Tailwind CSS": <Image src={TailwindCss} alt="Tailwind CSS" width={20} />,
    Typescript: <Image src={Typescript} alt="Typescript" width={20} />,
    "Next Js": <Image src={Nextjs} alt="Next Js" width={20} />,
    Git: <Image src={Git} alt="Git" width={20} />,
    GitHub: <Image src={GitHub} alt="GitHub" width={20} />,
    "Node Js": <Image src={Nodejs} alt="Node Js" width={20} />,
    "Express Js": (
      <Image
        src={Expressjs}
        alt="Express Js"
        width={20}
        className="rounded-full bg-white p-0.5"
      />
    ),
    "VS Code": <Image src={Vscode} alt="Vs Code" width={20} />,
    Bun: <Image src={bun} alt="bun" width={20} />,
    "Cloudflare Workers": (
      <Image src={CloudflareWorkers} alt="Cloudflare Workers" width={20} />
    ),
  };

  return (
    <div className="grid grid-cols-1 gap-3 rounded-xl border-t-4 border-white/10 bg-white/5 p-5 backdrop-blur-3xl md:max-w-xs md:grid-rows-1">
      <div className="flex items-center justify-start gap-2">
        {icons[item.name]}
        <h1 className="font-poppins text-lg font-semibold lg:text-xl">
          {item.name}
        </h1>
      </div>
      <div className="h-full font-poppins text-xs font-medium leading-normal text-white/40 lg:text-sm">
        <p>{item.description}</p>
      </div>
    </div>
  );
};
