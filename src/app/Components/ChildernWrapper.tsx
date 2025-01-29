"use client";
import { useLenis } from "@/utils/hook";
import React from "react";

interface ChildernWrapperProps {
  children: React.ReactNode;
}

const ChildernWrapper: React.FC<ChildernWrapperProps> = ({ children }) => {
  useLenis();
  return <div>{children}</div>;
};

export default ChildernWrapper;
