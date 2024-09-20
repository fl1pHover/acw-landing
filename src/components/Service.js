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
    title: "Автын",
    desc: "Монгол улсаас Европын холбооны улсууд, Европын холбооны улсуудаас Монгол улсруу авто машинаар бүх төрлийн ачааг тээвэрлэнэ. Хэрвээ таны ачаа бүтэн машин хүрэхгүй бол түүвэр ачааны хувилбарыг та сонгон ашиглах боломжтой.",
  },
  {
    title: "Агаарын",
    desc: "Бид таны импорт, экспортын ачааг агаараар тээвэрлэх боломжтой. Энэхүү үйлчилгээний онцлог нь үнэтэй, эмзэг, хагарч гэмтэж болзошгүй, цаг хугацааны хувьд яаралтай бараа бүтээгдэхүүнийг цаг алдалгүй түргэн шуурхай, найдвартай, аюулгүй тээвэрлэдэгт оршино.",
  },
  {
    title: "Далайн",
    desc: "Дэлхийн өнцөг булан бүрт байрлах агентуудаараа дамжуулан таны хүссэн ачаа барааг далайн бүх усан боомтуудаас тээвэрлэж өгөх боломжтой. Бид хэрэглэгч үйлчлүүлэгчиддээ хамгийн уян хатан, хямд үнийг санал болгодог бөгөөд ачаа ачигдсанаас хойшхи бүхий л мэдээллийг цаг тухай бүрт нь авах боломжтой.",
  },
  {
    title: "Төмөр замын",
    desc: "Замын-Үүд, Сүхбаатар хилийн өртөөдөөр дамжин БНХАУ болон ОХУ-г холбосон төмөр замаар дэлхийн аль ч улсруу импорт, экспорт, транзитийн тээврийг зохион байгуулах бүрэн боломжтой.",
  },
  {
    title: "Түүвэр",
    desc: "Эрхэм үйлчлүүлэгч таны худалдаж авсан бараа бүтээгдэхүүний илгээлтийг өөрсдийн агуулахад цуглуулан, бусад ачаатай хамт түргэн шуурхай чингэлэг болон машинд ачиж тээвэрлэж байна. Та бүхэн манай мэргэжилтнүүдэд АЧААНЫ МЭДЭЭЛЭЛЭЭ өгсөнөөр бид таны ачаанд тохирсон тээврийн оновчтой гаргалгаа, болон зах зээлийн өрсөлдөхүйц үнийг санал болгох болно.",
  },
  {
    title: "Төмөр замын",
    desc: "Монгол улсаас Европын холбооны улсууд, Европын холбооны улсуудаас Монгол улсруу авто машинаар бүх төрлийн ачааг тээвэрлэнэ. Хэрвээ таны ачаа бүтэн машин хүрэхгүй бол түүвэр ачааны хувилбарыг та сонгон ашиглах боломжтой.",
  },
];

export default function Service() {
  return (
    <div className="relative px-4 mx-auto my-20 overflow-hidden max-w-7xl md:px-6">
      <div className="relative flex justify-center">
        <h1 className="text-4xl font-bold">Үйлчилгээ</h1>
        <h1 className="text-[180px] font-bold absolute -top-10 left-[50%] -translate-x-[50%]   text-white drop-shadow-[0_0px_1px_rgba(0,0,0,0.3)]">
          Үйлчилгээ
        </h1>
      </div>

      <Carousel
        className="mt-20"
        // plugins={[
        //   emblaCarouselAutoplay({
        //     delay: 0,
        //   }),
        // ]}
      >
        <CarouselContent>
          {servies.map((el, index) => (
            <CarouselItem className="basis-1/3 group" key={index}>
              <div className="size-full aspect-[5/4] relative overflow-hidden rounded-xl ">
                <Image
                  height={200}
                  width={200}
                  src="/about-bg.jpg"
                  alt="image"
                  className="absolute top-0 left-0 object-cover overflow-hidden smooth size-full group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 transition-all duration-300 via-black/0 size-full bg-gradient-to-t from-black/80 to-transparent group-hover:via-black/80"></div>
                <Link href="/" className="relative">
                  <div className="z-10 flex items-end p-6 x size-full">
                    <div className="w-full px-6 py-4 overflow-hidden text-lg font-semibold text-white rounded-lg bg-white/20 backdrop-blur-md">
                      <h1 className="flex justify-between">
                        <span>{el.title}</span>
                        <span className="text-2xl font-bold duration-300 -rotate-45 group-hover:rotate-0">
                          <IconArrow className="w-5 h-5 fill-white" />
                        </span>
                      </h1>
                      <p className="mt-2 text-[13px] grid grid-rows-[0fr] group-hover:grid-rows-[1fr] leading-5 duration-300 smooth">
                        <span className="overflow-hidden">{el.desc}</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>

      {/* <div className="relative grid grid-cols-3 gap-6 mt-20"> 
        <a
          href="/"
          className="aspect-[5/4] p-6 px-7 relative group rounded-xl overflow-hidden"
        >
          <div className="absolute top-0 left-0 overflow-hidden size-full">
            <img
              src="https://smekwt.net/wp-content/uploads/2023/10/logistic.jpg"
              alt="image"
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
              alt="image"
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
              alt="image"
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
        </a> */}
      {/* </div> */}
    </div>
  );
}
