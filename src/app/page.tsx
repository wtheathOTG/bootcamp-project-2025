import About from "@/components/server/about";
import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "About",
};

export default function Home() {
  return (
      <About />
  );
}
