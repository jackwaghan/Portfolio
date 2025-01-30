"use client";

const Logo = () => {
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        window.location.reload();
        window.scrollTo(0, 0);
      }}
    >
      <h1 className="font-mono text-xl font-semibold text-orange-300 md:text-2xl">
        Portfolio ...
      </h1>
    </div>
  );
};

export default Logo;
