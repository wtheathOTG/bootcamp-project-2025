import Image from "next/image";
import Nav from "@/components/server/nav";

export default function Home() {
  return (
    <div className="w-full max-w-640 grid grid-cols-2">
        <Nav />
    </div>
  );
}
