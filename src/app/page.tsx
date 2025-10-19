import About from "@/components/server/about";
import type {Metadata} from "next";
import React from "react";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About",
};

export default function Home() {
  return (
      <About />
  );
}
