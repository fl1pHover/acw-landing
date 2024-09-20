import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IconArrow } from "./icons/page";

export default function Service() {
  return (
    <div className="relative mx-auto my-20 max-w-7xl">
      <div className="relative flex justify-center">
        <h1 className="text-4xl font-bold">Үйлчилгээ</h1>
        <h1
          className="text-[180px] font-bold absolute -top-10 left-[50%] -translate-x-[50%]   text-white drop-shadow-[0_0px_1px_rgba(0,0,0,0.3)]

"
        >
          Үйлчилгээ
        </h1>
      </div>

      <div className="relative grid grid-cols-3 gap-6 mt-20">
        <a
          href="/"
          className="aspect-[5/4] p-6 px-7 relative group rounded-xl overflow-hidden"
        >
          <div className="absolute top-0 left-0 overflow-hidden size-full">
            <img
              src="https://smekwt.net/wp-content/uploads/2023/10/logistic.jpg"
              alt=""
              className="object-cover smooth size-full group-hover:scale-110"
            />
          </div>
          <div className="relative z-10 flex items-end size-full">
            <div className="w-full px-6 py-4 overflow-hidden text-lg font-semibold text-white rounded-lg bg-white/20 backdrop-blur-sm ">
              <h1 className="flex justify-between ">
                <span>Lorem, ipsum</span>
                <span className="text-2xl font-bold duration-300 -rotate-45 group-hover:rotate-0">
                  <IconArrow className="w-5 h-5 fill-white" />
                </span>
              </h1>
              <p className="mt-2 text-xs duration-300 smooth group-hover:visible line-clamp-2 group-hover:line-clamp-none">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                voluptatibus commodi, expedita accusantium praesentium quasi
                assumenda. Repellendus illo qui consectetur aliquid, tempore
                assumenda possimus eius maiores quidem rerum, pariatur ratione?
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-0 transition-all duration-300 via-black/0 size-full bg-gradient-to-t from-black/80 to-transparent group-hover:via-black/80"></div>
        </a>
        <a
          href="/"
          className="aspect-[5/4] p-6 px-7 relative group rounded-xl overflow-hidden"
        >
          <div className="absolute top-0 left-0 overflow-hidden size-full">
            <img
              src="https://smekwt.net/wp-content/uploads/2023/10/logistic.jpg"
              alt=""
              className="object-cover smooth size-full group-hover:scale-110"
            />
          </div>
          <div className="relative z-10 flex items-end size-full">
            <div className="w-full px-6 py-4 overflow-hidden text-lg font-semibold text-white rounded-lg bg-white/20 backdrop-blur-sm ">
              <h1 className="flex justify-between ">
                <span>Lorem, ipsum</span>
                <span className="text-2xl font-bold duration-300 -rotate-45 group-hover:rotate-0">
                  <IconArrow className="w-5 h-5 fill-white" />
                </span>
              </h1>
              <p className="mt-2 text-xs duration-300 smooth group-hover:visible line-clamp-2 group-hover:line-clamp-none">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                voluptatibus commodi, expedita accusantium praesentium quasi
                assumenda. Repellendus illo qui consectetur aliquid, tempore
                assumenda possimus eius maiores quidem rerum, pariatur ratione?
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-0 transition-all duration-300 via-black/0 size-full bg-gradient-to-t from-black/80 to-transparent group-hover:via-black/80"></div>
        </a>
        <a
          href="/"
          className="aspect-[5/4] p-6 px-7 relative group rounded-xl overflow-hidden"
        >
          <div className="absolute top-0 left-0 overflow-hidden size-full">
            <img
              src="https://smekwt.net/wp-content/uploads/2023/10/logistic.jpg"
              alt=""
              className="object-cover smooth size-full group-hover:scale-110"
            />
          </div>
          <div className="relative z-10 flex items-end size-full">
            <div className="w-full px-6 py-4 overflow-hidden text-lg font-semibold text-white rounded-lg bg-white/20 backdrop-blur-sm ">
              <h1 className="flex justify-between ">
                <span>Lorem, ipsum</span>
                <span className="text-2xl font-bold duration-300 -rotate-45 group-hover:rotate-0">
                  <IconArrow className="w-5 h-5 fill-white" />
                </span>
              </h1>
              <p className="mt-2 text-xs duration-300 smooth group-hover:visible line-clamp-2 group-hover:line-clamp-none">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                voluptatibus commodi, expedita accusantium praesentium quasi
                assumenda. Repellendus illo qui consectetur aliquid, tempore
                assumenda possimus eius maiores quidem rerum, pariatur ratione?
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-0 transition-all duration-300 via-black/0 size-full bg-gradient-to-t from-black/80 to-transparent group-hover:via-black/80"></div>
        </a>
      </div>
    </div>
  );
}
