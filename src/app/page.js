"use client";
import Service from "@/components/Service";

import AboutUs from "./about/AboutUs";
import Contact from "@/components/Contact";
import Partners from "@/components/Partners";
import { IconCall, IconMap } from "@/components/icons/page";

export default function Home() {
  return (
    <>
      <div className="h-[80vh] m-5 mt-2 overflow-hidden rounded-3xl  relative">
        <img
          src="https://smekwt.net/wp-content/uploads/2023/10/logistic.jpg"
          alt="image"
          className="object-cover opacity-100 size-full"
        />
        <div className="absolute top-0 left-0 z-10 flex items-center justify-center size-full bg-gradient-to-r from-sec-600 to-transparent">
          <div className="max-w-4xl">
            <span className="p-1 px-2 font-semibold rounded bg-sky-500">
              Acw Trans - International Freight Forwarding Company
            </span>
            <h1 className="my-4 text-5xl font-bold text-white">
              Таны хүсэлд нийцсэн олон улсын тээврийн цогц үйлчилгээ
            </h1>
            <p className="my-6 text-lg font-medium text-white">
              Хамгийн хямд үнийг та зөвхөн манайхаас л авах боломжтой
            </p>
            <div className="inline-flex">
              <a
                href="tel:+97670115028"
                className="relative flex items-center gap-3 group"
              >
                <div className="relative z-10 flex items-center px-12 py-3 text-lg font-bold bg-white group-hover:text-white text-sec group-hover:bg-red-500 size-full rounded-xl">
                  <div className="relative overflow-hidden">
                    <span className="relative top-0 transition-all duration-300 group-hover:-top-10">
                      Шалгах
                    </span>
                    <span className="absolute duration-300 left-[50%] -translate-x-[50%] top-20 transition-all group-hover:top-[50%] -translate-y-[50%]">
                      Шалгах
                    </span>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="44"
                  height={44}
                  className="absolute top-[50%] transition-all -translate-y-[50%] group-hover:scale-y-0 duration fill-white right-2.5 flex items-center justify-center"
                >
                  <path d="M0 0 C10.02766385 0 11.78016344 0.0022601 18.375 6.25 C21.21594016 8.14396011 23.33275869 8.80093012 26.765625 8.671875 C30.69416391 7.4905661 33.34474692 4.58563598 36.21484375 1.75 C39 0 39 0 48 0 C48 14.52 48 29.04 48 44 C39.48205443 44 37.45308287 43.27134166 31.625 37.75 C28.78104578 35.85403052 26.66245567 35.19943986 23.2265625 35.328125 C19.34599355 36.4991037 16.77099216 39.40514781 13.98046875 42.25 C11 44 11 44 0 44 C0 29.48 0 14.96 0 0 Z "></path>
                </svg>
                <div className="border-4 h-full  border-white aspect-[1/1] rounded-2xl relative bg-sec-600 group-hover:bg-white transition-all group-hover:border-red-500 grid place-items-center">
                  <div className="relative overflow-hidden">
                    <IconMap
                      className={
                        "w-4 h-4 group-hover:translate-x-10 duration-300 transition-all fill-white"
                      }
                    />
                    <IconMap
                      className={
                        "w-4 h-4 absolute top-[50%] -translate-y-[50%] -left-[100%] group-hover:left-0 duration-300 transition-all fill-red-600"
                      }
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Service />
      <Contact />
      <Partners />
    </>
  );
}
