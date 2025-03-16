"use client";
import { MenuList, projects } from "@/utils/db";
import { store, useWindowSize } from "@/utils/hook";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Project = () => {
  const [hover, setHover] = useState(false);
  const [show, setShow] = useState("");
  const { setsize, setscroll, scroll, setactive, active } = store();
  const { ref: projectRef, inView: projectInView } = useInView({
    threshold: 0.8,
  });
  useEffect(() => {
    if (projectInView && (scroll || active == "projects")) {
      const value = MenuList.find((menu) => menu.name == "projects");
      setsize({
        widthValue: value?.LargeScreen.width || "",
        leftValue: value?.LargeScreen.left || "",
      });
      setscroll(true);
      setactive("projects");
    }
  }, [projectInView, setsize, setscroll, scroll, setactive, active]);
  const { width } = useWindowSize();
  const projectVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const projectItemsVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const ProjectChildrenVarients = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <div
      ref={projectRef}
      id="projects"
      className="container mx-auto flex flex-col items-center pt-36"
    >
      <motion.div
        variants={projectVariants}
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
      >
        <h1 className="font-mono text-4xl font-bold text-orange-300 md:text-6xl">
          Projects
        </h1>
      </motion.div>
      <div className="h-full w-full pt-36">
        <motion.div
          variants={projectItemsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="group grid w-full grid-cols-1 items-center justify-center gap-6 px-8 transition-all duration-300 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {projects.map((project, index) => (
            <motion.div
              variants={ProjectChildrenVarients}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.7, once: true }}
              key={index}
              className={`flex h-full w-full transform-gpu flex-col justify-between gap-5 rounded-lg border border-white/10 bg-white/5 p-4 shadow-2xl transition-all duration-300 ${width! < 768 ? "" : "hover:scale-95"}`}
              onMouseEnter={() => {
                setHover(true);
                setShow(project.title);
              }}
              onMouseLeave={() => {
                setHover(false);
                setShow("");
              }}
            >
              <div className="flex w-full items-center justify-between gap-2">
                <h1 className="cursor-pointer font-mono text-2xl font-bold text-orange-300">
                  {project.title}
                </h1>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Projectlink"
                >
                  <ExternalLink
                    className={`${(hover && project.title === show) || width! < 768 ? "opacity-100" : "opacity-0"} transform-gpu cursor-pointer transition-all duration-300 hover:scale-95 hover:stroke-orange-300`}
                    size={24}
                  />
                </a>
              </div>
              <p className="text-white/70">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm">
                {project.techStack.map((tech, index) => (
                  <p
                    key={index}
                    className="whitespace-nowrap rounded-lg bg-white/10 px-3 py-1 text-orange-300"
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
          <div className="flex h-60 w-full items-center justify-center rounded-lg border border-white/10 bg-white/5 text-center font-mono text-lg opacity-60 lg:h-full">
            <p className="animate-pulse">Uploading Soon...</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
