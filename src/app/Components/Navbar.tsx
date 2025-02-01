"use client";
import React from "react";
import type { MenuType } from "@/Types/type";
import { MenuList } from "@/utils/db";
import Logo from "./ui/Logo";
const Navbar = () => {
  return (
    <nav className="container sticky top-0 z-50 mx-auto flex h-16 w-full items-center justify-between bg-transparent px-4 backdrop-blur lg:h-20">
      <Logo />
      <LargeScreenMenu items={MenuList} />
      <HireMeButton />
    </nav>
  );
};

const LargeScreenMenu = ({ items }: { items: MenuType[] }) => {
  return (
    <div className="relative z-50 hidden items-center justify-center rounded-lg border border-white/15 bg-white/10 px-2.5 py-1.5 backdrop-blur lg:flex">
      <div className="relative flex items-center justify-center gap-3">
        {/* {active == "home" && (
          <div className="absolute inset-0 -z-20 w-[68px] rounded-lg bg-white/20" />
        )} */}
        {items.map((menu, index) => (
          <a
            key={index}
            className="cursor-pointer rounded-lg px-3 py-2 hover:bg-white/10"
            href={menu.href}
          >
            <h1 className="font-poppins text-base font-medium">{menu.name}</h1>
          </a>
        ))}
      </div>
      <div className="absolute -z-10 h-2/6 w-full bg-orange-400 blur-3xl" />
    </div>
  );
};

const HireMeButton = () => {
  return (
    <a
      href="#contact"
      className="flex cursor-pointer items-center justify-center rounded-lg border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-3xl"
    >
      <ul className="text-sm lg:text-base">Hire Me</ul>
      <div className="absolute -z-20 h-3/6 w-full bg-orange-400 blur-3xl" />
    </a>
  );
};

export default Navbar;
