"use client";

import Service from "@/components/Service";
import Image from "next/image";
import { useState } from "react";

const services = [
  {
    title: "Lorem Btn",
  },
  {
    title: "Lorem Btn 1",
  },
  {
    title: "Lorem Btn 2",
  },
  {
    title: "Lorem Btn 3",
  },
  {
    title: "Lorem Btn 4",
  },
  {
    title: "Lorem Btn 5",
  },
  {
    title: "Lorem Btn 6",
  },
  {
    title: "Lorem Btn 7",
  },
  {
    title: "Lorem Btn 8",
  },
  {
    title: "Lorem Btn 9",
  },
  {
    title: "Lorem Btn 10",
  },
];

export default function Home() {
  const [service, setService] = useState(0);
  console.log(services[0].title);
  return (
    <>
      <div className="h-screen bg-black ">
        {/* <img src="/hero.jpg" alt="" className="opacity-50 " /> */}
        <img
          src="https://smekwt.net/wp-content/uploads/2023/10/logistic.jpg"
          alt=""
          className="object-cover opacity-50 size-full"
        />
      </div>

      <Service />

      <div className="mx-auto my-40 max-w-7xl">
        <div className="grid grid-cols-2 gap-20">
          <div className="flex flex-col justify-between py-10">
            <h1 className="text-5xl font-semibold">Манай үйлчилгээнүүд</h1>
            <div className="my-auto">
              <h1 className="mb-5 text-4xl font-semibold">
                {services[service].title}
              </h1>
              <p className="text-lg font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
                dolore aut? Maxime, id. Error itaque laborum natus? Provident
                harum quidem dicta. Veritatis obcaecati libero, autem accusamus
                mollitia quisquam ex amet.
              </p>
            </div>
          </div>
          <div>
            <div className="h-32 mb-5 ml-24 overflow-hidden border rounded-xl border-slate-200">
              <img
                src="https://media.licdn.com/dms/image/D4D12AQGZCNv789WhwA/article-cover_image-shrink_720_1280/0/1698037839644?e=2147483647&v=beta&t=ZfPRQ6mSJ1gSSMi9ZwMTvNg5bMNJloqnKCYqekRxfLk"
                alt=""
                className="object-cover size-full"
              />
            </div>
            <div className="overflow-hidden rounded-xl aspect-[5/4] ml-24 p-10 flex flex-wrap gap-3 border border-slate-200">
              {services.map((el, index) => {
                return (
                  <button
                    onClick={() => setService(index)}
                    className="p-2 px-6 transition border rounded bg-slate-100 hover:ring-2 hover:ring-red-400 hover:border-red-400 hover:bg-red-300 border-slate-200"
                    key={index}
                  >
                    ㋡ {el.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
