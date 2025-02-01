"use client";
import { create } from "zustand";
import { useEffect, useState } from "react";
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
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
  active: string;
  setactive: (value: string) => void;
  size: { width: string; left: string };
  setsize: (value: { widthValue: string; leftValue: string }) => void;
}
export const store = create<storeprops>((set) => ({
  active: "",
  setactive: (state) => set({ active: state }),
  size: { width: "0", left: "0" },
  setsize: ({ widthValue, leftValue }) =>
    set({
      size: {
        width: widthValue,
        left: leftValue,
      },
    }),
}));
