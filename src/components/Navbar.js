"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IconCall, IconGlobe, IconMail } from "./icons/page";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 200);
    });
  }, []);
  return (
    <>
      <nav className="flex flex-col">
        <div className="mx-5 mb-2 text-sm text-white bg-sec rounded-b-xl">
          <ul className="flex mx-auto max-w-7xl">
            <li className="border-x border-slate-600">
              <div className="flex items-center gap-2 p-2 px-4 transition hover:text-sky-400 hover:-translate-x-1">
                <IconCall className={"fill-sky-400 h-4 w-4 "} />
                <a href="">(+976) 7011-5028</a>
              </div>
            </li>
            <li className="border-x border-slate-600">
              <div className="flex items-center gap-2 p-2 px-4 transition hover:text-sky-400 hover:-translate-x-1">
                <IconMail className={"fill-sky-400 h-4 w-4 "} />
                <a href="">info@acwtrans.mn</a>
              </div>
            </li>
            <li className="border-x border-slate-600">
              <div className="flex items-center gap-2 p-2 px-4 transition hover:text-sky-400 hover:-translate-x-1">
                <IconCall className={"fill-sky-400 h-4 w-4 "} />
                <a href="">+976 9999 9999</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={twMerge(
          "sticky top-0 left-0 z-50 w-full h-full font-bold bg-light px-6",
          scroll && "shadow-custom duration-500"
        )}
      >
        <div className="grid items-center grid-cols-2 py-2 mx-auto lg:grid-cols-3 max-w-7xl ">
          <div className="items-center hidden gap-10 lg:flex">
            <a
              href="/"
              className="py-4 transition text-sec hover:text-red-500 hover:translate-y-1"
            >
              Нүүр
            </a>
            <a
              href="/about"
              className="py-4 transition text-sec hover:text-red-500 hover:translate-y-1"
            >
              Бидний тухай
            </a>
            <a
              href="/service"
              className="py-4 transition text-sec hover:text-red-500 hover:translate-y-1"
            >
              Үйлчилгээ
            </a>
            <a
              href="/faq"
              className="py-4 transition text-sec hover:text-red-500 hover:translate-y-1"
            >
              FAQ
            </a>
          </div>

          <a href="/" className="flex justify-start lg:justify-center">
            <Image
              width={200}
              height={100}
              src="https://acwtrans.mn/wp-content/uploads/2020/07/logo-tsagaan-border-2.png"
              alt="logo"
              className="max-w-64"
            />
          </a>
          <div className="flex justify-end gap-2 mr-4">
            <button className="flex items-center gap-1 p-2 transition border-2 rounded-xl border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-600">
              <IconGlobe className={"fill-sec w-5 h-5"} />
              EN
            </button>
            {/* <a
              href=""
              className="flex items-center px-4 py-2 text-white transition bg-red-500 rounded-lg hover:bg-red-600"
            >
              Холбогдох
            </a> */}
            <a
              href="tel:+97670115028"
              className="relative flex items-center gap-2 group"
            >
              <div className="relative z-10 flex items-center px-4 py-2 text-white bg-red-500 group-hover:bg-sec-600 size-full rounded-xl">
                <div className="relative overflow-hidden">
                  <span className="relative top-0 transition-all duration-300 group-hover:-top-10">
                    Холбогдох
                  </span>
                  <span className="absolute duration-300 left-[50%] -translate-x-[50%] top-20 transition-all group-hover:top-[50%] -translate-y-[50%]">
                    Холбогдох
                  </span>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="44"
                height={44}
                className="absolute top-[50%]  transition-all -translate-y-[50%] group-hover:scale-y-0 duration fill-red-500 right-3 flex items-center justify-center"
              >
                <path d="M0 0 C10.02766385 0 11.78016344 0.0022601 18.375 6.25 C21.21594016 8.14396011 23.33275869 8.80093012 26.765625 8.671875 C30.69416391 7.4905661 33.34474692 4.58563598 36.21484375 1.75 C39 0 39 0 48 0 C48 14.52 48 29.04 48 44 C39.48205443 44 37.45308287 43.27134166 31.625 37.75 C28.78104578 35.85403052 26.66245567 35.19943986 23.2265625 35.328125 C19.34599355 36.4991037 16.77099216 39.40514781 13.98046875 42.25 C11 44 11 44 0 44 C0 29.48 0 14.96 0 0 Z "></path>
              </svg>
              <div className="border-4 h-full group-hover:border-sec-600  border-red-500 aspect-[1/1] rounded-2xl relative bg-light grid place-items-center">
                <div className="relative overflow-hidden">
                  <IconCall
                    className={
                      "w-5 h-5 group-hover:translate-x-10 duration-300 transition-all fill-red-500"
                    }
                  />
                  <IconCall
                    className={
                      "w-5 h-5 absolute top-[50%] -translate-y-[50%] -left-[100%] group-hover:left-0 duration-300 transition-all fill-sec"
                    }
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
