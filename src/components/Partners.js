import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { IconArrow } from "./icons/page";
import Image from "next/image";
import Link from "next/link";
import emblaCarouselAutoplay from "embla-carousel-autoplay";

const servies = [
  {
    img: "https://acwtrans.mn/wp-content/uploads/2020/07/neptune.png",
  },
  {
    img: "https://acwtrans.mn/wp-content/uploads/2020/07/jctrans-1.png",
  },
  {
    img: "https://acwtrans.mn/wp-content/uploads/2020/07/%D1%8D%D1%80%D0%B4%D1%8D%D0%BD%D1%8D%D1%82.png",
  },
  {
    img: "https://acwtrans.mn/wp-content/uploads/2020/07/CJ_GLS_Logo.png",
  },
  {
    img: "https://acwtrans.mn/wp-content/uploads/2020/07/cosco-1.png",
  },
  {
    img: "https://acwtrans.mn/wp-content/uploads/2020/07/fmff2.png",
  },
  {
    img: "https://acwtrans.mn/wp-content/uploads/2020/07/CMA_CGM_logo.png",
  },
  {
    img: "https://acwtrans.mn/wp-content/uploads/2020/07/turkish-airlines-logo.png",
  },
  {
    img: "https://acwtrans.mn/wp-content/uploads/2020/07/%D1%83%D0%B1%D1%82%D0%B7.png",
  },
  {
    img: "https://acwtrans.mn/wp-content/uploads/2020/07/miat.png",
  },
  {
    img: "https://acwtrans.mn/wp-content/uploads/2020/07/ups-1.png",
  },

  {
    img: "https://acwtrans.mn/wp-content/uploads/2020/07/maerskline.png",
  },
];

const Partners = () => {
  return (
    <section className="relative flex items-center justify-between mx-20 max-w-7xl">
      <img
        className="absolute top-0 left-[50%] -translate-x-[50%]"
        src="https://themexriver.com/wp/logistify/wp-content/uploads/2024/09/bg-shape.svg"
        alt="bg-shape"
      ></img>
      {/* <img src="" alt="" />
      <img
        decoding="async"
        src="https://themexriver.com/wp/logistify/wp-content/uploads/2024/09/c1-logo-1-clr.svg"
        alt="c1-logo-1-clr"
      ></img> */}

      <Carousel
        className="my-20 "
        // plugins={[
        //   emblaCarouselAutoplay({
        //     delay: 0,
        //   }),
        // ]}
      >
        <CarouselContent
          plugins={[
            emblaCarouselAutoplay({
              delay: 1000,
            }),
          ]}
        >
          {servies.map((el, index) => (
            <CarouselItem className="flex items-center basis-1/6" key={index}>
              <Image
                height={100}
                width={100}
                src={el.img}
                alt="image"
                className=""
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </section>
  );
};

export default Partners;
