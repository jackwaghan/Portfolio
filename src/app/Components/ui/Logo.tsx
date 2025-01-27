"use client";
export const Logo = () => {
  return (
    <div className="cursor-pointer" onClick={() => window.location.reload()}>
      <h1 className="font-mono text-xl font-semibold text-orange-300 md:text-2xl">
        Portfolio ...
      </h1>
    </div>
  );
};
