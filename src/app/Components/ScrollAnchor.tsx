import React from "react";
import { IoArrowUpOutline } from "react-icons/io5";

const ScrollAnchor = () => {
  return (
    <div
      onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5"
    >
      <a className="flex cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 p-1.5 backdrop-blur-3xl">
        <IoArrowUpOutline size={20} className="stroke-orange-300" />
      </a>
    </div>
  );
};

export default ScrollAnchor;
