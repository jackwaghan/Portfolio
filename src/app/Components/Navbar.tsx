"use client";
import React from "react";
import { motion } from "framer-motion";
import type { MenuType } from "@/Types/type";
import { MenuList } from "@/utils/db";
import Logo from "./ui/Logo";
import { store, useWindowSize } from "@/utils/hook";

const Navbar = () => {
  return (
    <nav className="container sticky top-0 z-50 mx-auto flex h-16 w-full transform-gpu items-center justify-between bg-transparent px-4 backdrop-blur lg:h-20">
      <Logo />
      <LargeScreenMenu items={MenuList} />
      <HireMeButton />
    </nav>
  );
};

const LargeScreenMenu = ({ items }: { items: MenuType[] }) => {
  const { size, setsize, setscroll, active, setactive, hover, sethover } =
    store();
  const activePath = MenuList.find((path) => path.name == active);
  const navVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        stiffness: 50,
        damping: 10,
        staggerChildren: 0.4,
        delay: 1.5,
      },
    },
  };
  const itemsVariants = {
    initial: {
      Scale: 0,
      opacity: 0,
    },
    animate: {
      Scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={navVariants}
      className="relative z-50 hidden items-center justify-center rounded-lg border border-white/15 bg-white/10 px-2.5 py-1.5 backdrop-blur lg:flex"
    >
      <div className="relative flex items-center justify-center gap-3">
        <div
          className="absolute inset-0 -z-20 rounded-lg bg-orange-400 duration-500"
          style={{
            width: `${size.width}`,
            transform: `translateX(${size.left})`,
          }}
        />

        {items.map((menu, index) => (
          <motion.a
            variants={itemsVariants}
            key={index}
            className={`cursor-pointer rounded-lg px-3 py-1.5`}
            href={menu.href}
            onMouseEnter={() => {
              sethover(true);
              setsize({
                leftValue: menu.LargeScreen.left,
                widthValue: menu.LargeScreen.width,
              });
            }}
            onMouseLeave={() => {
              sethover(false);

              setsize({
                leftValue: activePath?.LargeScreen.left || "0",
                widthValue: activePath?.LargeScreen.width || "0",
              });
            }}
            onClick={() => {
              setactive(menu.name);
              setscroll(false);
              sethover(false);
            }}
          >
            <h1
              className={`font-poppins text-base font-medium capitalize transition-colors duration-500 ${active == menu.name && !hover ? "text-black" : "text-white"}`}
            >
              {menu.name}
            </h1>
          </motion.a>
        ))}
      </div>
      <div className="absolute -z-10 h-2/6 w-full bg-orange-300/60 blur-3xl" />
    </motion.div>
  );
};

const HireMeButton = () => {
  const hireMeVariants = {
    initial: {
      y: 10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 2,
      },
    },
  };
  return (
    <motion.a
      variants={hireMeVariants}
      initial="initial"
      animate="animate"
      whileHover={
        useWindowSize().width! > 768
          ? { scale: 0.95, transition: { duration: 0.2 } }
          : {}
      }
      whileTap={{
        scale: 0.8,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      }}
      href="#contact"
      className="flex cursor-pointer items-center justify-center rounded-lg border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-3xl"
    >
      <ul className="text-sm lg:text-base">Hire Me</ul>
      <div className="absolute -z-20 h-3/6 w-full bg-orange-400 blur-3xl" />
    </motion.a>
  );
};

export default Navbar;
