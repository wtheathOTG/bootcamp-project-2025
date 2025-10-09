import About from "@/components/server/about";
import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "About",
};

export default function Home() {
  return (
      <div>
          <h2 className="text-2xl text-foreground pb-4">About</h2>
          <About />
      </div>
  );
}
