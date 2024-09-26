import Image from "next/image";
import React from "react";
import AboutUs from "./AboutUs";
import Mission from "./OurMission";

export default function About() {
  return (
    <>
      <div className="m-5 relative  aspect-[3/1] rounded-3xl overflow-hidden">
        <div
          className="absolute top-0 left-0 z-10 flex items-center justify-center size-full"
          style={{
            background: "rgba(246, 36, 89, 0.3)",
          }}
        >
          <h1 className="relative z-20 text-6xl font-extrabold text-white">
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
