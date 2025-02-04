"use client";
import { create } from "zustand";
import { useEffect, useState } from "react";
import { windowSize } from "@/Types/type";
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<windowSize>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export function useScroll() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return scroll;
}

interface storeprops {
  size: {
    width: string;
    left: string;
  };
  setsize: (value: { widthValue: string; leftValue: string }) => void;
  active: string;
  setactive: (value: string) => void;
  hover: boolean;
  sethover: (value: boolean) => void;
  scroll: boolean;
  setscroll: (value: boolean) => void;
  formName: string;
  setformName: (value: string) => void;
  formEmail: string;
  setformEmail: (value: string) => void;
  formMessage: string;
  setformMessage: (value: string) => void;
}
export const store = create<storeprops>((set) => ({
  size: { width: "0", left: "0" },
  setsize: ({ widthValue, leftValue }) =>
    set({
      size: {
        width: widthValue,
        left: leftValue,
      },
    }),

  active: "",
  setactive: (value) => set({ active: value }),

  hover: false,
  sethover: (value) => set({ hover: value }),

  scroll: true,
  setscroll: (value) => set({ scroll: value }),

  formName: "",
  setformName: (value) => set({ formName: value }),
  formEmail: "",
  setformEmail: (value) => set({ formEmail: value }),
  formMessage: "",
  setformMessage: (value) => set({ formMessage: value }),
}));
