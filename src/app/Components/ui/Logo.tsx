"use client";

import Link from "next/link";

const Logo = () => {
  return (
    <div className="cursor-pointer">
      <Link
        href="/"
        className="font-mono text-xl font-semibold text-orange-300 md:text-2xl"
      >
        Portfolio ...
      </Link>
    </div>
  );
};

export default Logo;
