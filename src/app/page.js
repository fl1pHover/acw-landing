"use client";
import Service from "@/components/Service";

import AboutUs from "./about/AboutUs";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-black ">
        <img
          src="https://smekwt.net/wp-content/uploads/2023/10/logistic.jpg"
          alt="image"
          className="object-cover opacity-50 size-full"
        />
      </div>

      <Service />
      <Contact />
    </>
  );
}
