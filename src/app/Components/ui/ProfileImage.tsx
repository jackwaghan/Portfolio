"use client";
import Image from "next/image";
import Profile from "../../../../public/Profile.jpg";
import { useWindowSize } from "@/utils/hook";
export const ProfileImage = () => {
  const { width } = useWindowSize();
  return (
    <Image
      src={Profile}
      alt="Profile"
      width={width > 768 ? 200 : 130}
      height={width > 768 ? 200 : 130}
      className="rounded-2xl opacity-85"
    />
  );
};
