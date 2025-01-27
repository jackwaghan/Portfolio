"use client";

export const Button = () => {
  return (
    <button
      type="submit"
      className="text-md mt-5 rounded-md bg-orange-300 p-2 font-mono font-semibold text-black md:text-xl"
      onClick={(e) => e.preventDefault()}
    >
      Submit
    </button>
  );
};
