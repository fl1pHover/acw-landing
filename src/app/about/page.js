import Image from "next/image";
import React from "react";
import AboutUs from "./AboutUs";
import Mission from "./OurMission";

export default function About() {
  return (
    <>
      <div className="relative w-full aspect-[3/1] rounded-b-3xl overflow-hidden">
        <div className="absolute top-0 left-0 z-10 flex items-center justify-center size-full bg-gradient-to-r from-blue-900/90 via-black/70 to-red-800/90">
          <h1 className="relative z-20 text-5xl font-bold text-white">
            Бидний тухай
          </h1>
        </div>

        <Image
          src="/about-bg.jpg"
          alt="image"
          fill
          className="object-cover size-full"
        />
      </div>
      <AboutUs />
      <div className="h-40" />
      <Mission />
    </>
  );
}
