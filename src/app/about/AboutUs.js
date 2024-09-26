import React from "react";
import {
  IconFast,
  IconLeadership,
  IconMoney,
  IconVerified,
} from "@/components/icons/page";
import Image from "next/image";
import About from "./page";

const AboutUs = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="relative z-10 grid grid-cols-3 gap-6 mx-auto mb-20 -mt-10">
        <div
          className="flex flex-col items-center p-6 text-center bg-white rounded-xl "
          style={{
            boxShadow: "0 0 30px rgba(0,0,0,.1)",
          }}
        >
          <div className="p-2 bg-red-600 rounded-full">
            <IconMoney className="w-10 h-10 rounded-full fill-white" />
          </div>
          <h1 className="mt-1 text-xl font-bold text-red-600">Хямд үнэ</h1>
          <p className="mt-3 text-sm font-medium text-slate-500">
            Манай компани нь үйлчлүүлэгчидээ үргэлж бусдаас хямд үнэ санал
            болгодог
          </p>
        </div>
        <div
          className="flex flex-col items-center p-6 text-center bg-white rounded-xl"
          style={{
            boxShadow: "0 0 30px rgba(0,0,0,.1)",
          }}
        >
          <div className="p-2 bg-red-600 rounded-full">
            <IconFast className="w-10 h-10 rounded-full fill-white" />
          </div>
          <h1 className="mt-1 text-xl font-bold text-red-600"> Хурдан </h1>
          <p className="mt-3 text-sm font-medium text-slate-500">
            Бидний үйлчилгээг секундээр хэмж
          </p>
        </div>
        <div
          className="flex flex-col items-center p-6 text-center bg-white rounded-xl"
          style={{
            boxShadow: "0 0 30px rgba(0,0,0,.1)",
          }}
        >
          <div className="p-2 bg-red-600 rounded-full">
            <IconVerified className="w-10 h-10 rounded-full fill-white" />
          </div>
          <h1 className="mt-1 text-xl font-bold text-red-600">Баталгаатай</h1>
          <p className="mt-3 text-sm font-medium text-slate-500">
            Тээвэрлэлтийн баталгаагаар таны сэтгэл ханамжийг бид тогтооно.
          </p>
        </div>
      </div>
      <div className="grid items-center w-full grid-cols-2 gap-32">
        <div className="relative w-full">
          <Image
            src="/about-bg.jpg"
            alt="image"
            width={400}
            height={400}
            className="object-cover aspect-[1/1] w-full overflow-hidden rounded-3xl"
          />
          <Image
            src="/about-bg.jpg"
            alt="image"
            width={400}
            height={400}
            className="absolute top-20 -right-10 object-cover aspect-[1/1] w-1/2 ring-8 ring-white ring-r-0 overflow-hidden rounded-2xl"
          />
          <div className="absolute bg-red-600 -right-10 -bottom-16  aspect-[5/4] w-1/2  flex flex-col items-center justify-center ring-8 text-center text-white ring-red-600 ring-r-0 overflow-hidden rounded-xl">
            <IconLeadership className={"w-16 h-16 fill-white"} />
            <h1 className="mt-6 mb-2 text-5xl font-bold text-white">20+</h1>
            <p className="font-semibold">Жилийн туршлага</p>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-red-500 uppercase">
            // Бид хэн бэ
          </span>
          <h1 className="mt-2 mb-10 text-5xl font-semibold">Бидний тухай</h1>
          <p className="text-sm font-medium leading-7 ">
            “Эй Си Даблью Транс” ХХК нь 2000онд анх байгуулагдсан бөгөөд тээвэр
            зуучлалын салбарт үйл ажиллагаагаа тогтвор суурьшилтай эрхлэж байгаа
            шилдэг компаниудын нэг юм. <br /> Манай компани нь Монголын Тээвэр
            Зуучлагчдын Нэгдсэн Холбооны удирдах зөвлөлийн гишүүн, Үндэсний
            Тээврийн Корпорацийн удирдах зөвлөлийн гишүүн, Худалдаа аж
            үйлдвэрийн танхимын АЛТАН гишүүн бөгөөд бүх үйл ажиллагаагаа{" "}
            <span className="font-semibold text-red-600">
              олон улсын стандартын дагуу
            </span>{" "}
            үзүүлдэг. Компанийн тээвэр зуучлалын үйлчилгээг цогцоор үзүүлж ирсэн
            туршлагатай, тус салбарт он удаан жил ажиллаж ирсэн чадварлаг
            боловсон хүчнүүд таны хүссэн бараа бүтээгдэхүүнийг{" "}
            <span className="font-semibold text-red-600">
              хурдан, шуурхай найдвартай тээвэрлэж, шаардлагатай мэдээ,
              мэдээллээр хангаж ажиллах
            </span>{" "}
            болно. Харилцагч, үйлчлүүлэгчидийнхээ сэтгэл ханамжийгэн түрүүнд
            эрхэмлэдэг манай компани дэлхийн бүх боомт, өртөөнүүдэд байрлах
            агентуудтай нягт хамтран ажилладаг тул таны ачааг хүссэн газар
            бүрээс тань тээвэрлэж, чухал шаардлагатай бусад тээврийн үйлчилгээг
            цогцоор нь үзүүлэх болно.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
