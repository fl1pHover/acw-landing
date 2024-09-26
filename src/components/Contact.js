import Image from "next/image";
import React from "react";
import { IconCall, IconRightArrow } from "./icons/page";

const Contact = () => {
  return (
    <div className="relative flex items-end justify-center min-h-screen m-5 overflow-hidden bg-dark rounded-3xl">
      <Image
        src={"/contact.jpg"}
        width={2000}
        height={2000}
        alt="image"
        className="absolute object-cover size-full"
      />
      <div className="absolute size-full bg-gradient-to-t from-sec-600/50 to-transparent"></div>
      <div className="relative flex flex-col w-full max-w-4xl gap-10 px-6 py-20">
        <div className="relative flex justify-center"></div>
        <form action="" className="relative">
          <h1 className="text-[180px] font-bold absolute -top-[25%] left-[50%] -translate-x-[50%] whitespace-nowrap text-transparent text-w-border opacity-30">
            Үнийн санал авах
          </h1>
          <div className="flex flex-col grid-cols-1 gap-4 p-10 sm:grid sm:grid-cols-6 rounded-xl backdrop-blur acw-form">
            <h1 className="mb-10 text-6xl font-bold uppercase col-span-full">
              Үнийн санал авах
            </h1>
            <div className="flex flex-col col-span-2 gap-1">
              <label id="" className="font-bold text-slate-700">
                Имэйл Хаяг
              </label>
              <input
                type="email"
                placeholder="Бичих"
                name="email"
                required
                className="p-2 border-0 rounded focus:outline-red-500 bg-slate-200 focus:outline-0 focus:ring-0 ring-0 outline-0 focus:border-0"
              />
            </div>
            <div className="flex flex-col col-span-2 gap-1">
              <label id="" className="font-bold text-slate-700">
                Утасны дугаар
              </label>
              <input
                type="phone"
                placeholder="Бичих"
                name="phone"
                required
                className="p-2 border-0 rounded focus:outline-red-500 bg-slate-200 focus:outline-0 focus:ring-0 ring-0 outline-0 focus:border-0"
              />
            </div>
            <div className="flex flex-col col-span-2 gap-1">
              <label id="" className="font-bold text-slate-700">
                Худалдааны нөхцөл
              </label>

              <select
                name=""
                id=""
                className="p-2 border-0 rounded focus:outline-red-500 bg-slate-200 focus:outline-0 focus:ring-0 ring-0 outline-0 focus:border-0 "
              >
                <option value="">Сонгох</option>
                <option value="volvo">EXW</option>
                <option value="saab">FCA</option>
                <option value="mercedes">FAS</option>
                <option value="audi">FOB</option>
                <option value="audi">CFR</option>
                <option value="audi">CIF</option>
                <option value="audi">CPT</option>
                <option value="audi">CIP</option>
                <option value="audi">DAT</option>
                <option value="audi">DAP</option>
                <option value="audi" className="">
                  DDP
                </option>
              </select>
            </div>

            <div className="flex flex-col col-span-3 gap-1">
              <label id="" className="font-bold text-slate-700">
                Ачаа ачих газар
              </label>
              <input
                type="text"
                placeholder="Бичих"
                required
                className="p-2 border-0 rounded focus:outline-red-500 bg-slate-200 focus:outline-0 focus:ring-0 ring-0 outline-0 focus:border-0"
              />
            </div>
            <div className="flex flex-col col-span-3 gap-1">
              <label id="" className="font-bold text-slate-700">
                Ачаа хүлээн авах газар
              </label>
              <input
                type="text"
                placeholder="Бичих"
                required
                className="p-2 border-0 rounded focus:outline-red-500 bg-slate-200 focus:outline-0 focus:ring-0 ring-0 outline-0 focus:border-0"
              />
            </div>
            <div className="flex flex-col gap-1 col-span-full">
              <label id="" className="font-bold text-slate-700">
                Дэлгэрэнгүй мэдээлэл:
              </label>
              <textarea
                placeholder="Бичих"
                required
                rows={3}
                className="p-2 border-0 rounded focus:outline-red-500 bg-slate-200 focus:outline-0 focus:ring-0 ring-0 outline-0 focus:border-0"
              />
            </div>
            {/* <button className="col-span-2 col-start-5 px-4 py-2 text-white transition bg-red-500 rounded-lg hover:bg-red-600">
              Илгээх
            </button> */}
            <div className="flex justify-end col-span-2 col-start-5">
              <button className="relative flex items-center gap-2 mr-5 group ">
                <div className="relative z-10 flex items-center px-8 py-3 text-white bg-red-500 group-hover:bg-sec-600 size-full rounded-2xl">
                  <div className="relative overflow-hidden">
                    <span className="relative top-0 transition-all duration-300 group-hover:-top-10">
                      Илгээх
                    </span>
                    <span className="absolute duration-300 left-[50%] -translate-x-[50%] top-20 transition-all group-hover:top-[50%] -translate-y-[50%]">
                      Илгээх
                    </span>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="44"
                  height={44}
                  className="absolute top-[50%]  transition-all -translate-y-[50%] group-hover:scale-y-0 duration fill-red-500 right-2 flex items-center justify-center"
                >
                  <path d="M0 0 C10.02766385 0 11.78016344 0.0022601 18.375 6.25 C21.21594016 8.14396011 23.33275869 8.80093012 26.765625 8.671875 C30.69416391 7.4905661 33.34474692 4.58563598 36.21484375 1.75 C39 0 39 0 48 0 C48 14.52 48 29.04 48 44 C39.48205443 44 37.45308287 43.27134166 31.625 37.75 C28.78104578 35.85403052 26.66245567 35.19943986 23.2265625 35.328125 C19.34599355 36.4991037 16.77099216 39.40514781 13.98046875 42.25 C11 44 11 44 0 44 C0 29.48 0 14.96 0 0 Z "></path>
                </svg>
                <div className="border-4 h-full group-hover:border-sec-600  border-red-500 aspect-[1/1] rounded-2xl relative bg-white grid place-items-center">
                  <div className="relative overflow-hidden">
                    <IconRightArrow
                      className={
                        "w-4 h-4 group-hover:translate-x-10 duration-300 transition-all fill-red-500"
                      }
                    />
                    <IconRightArrow
                      className={
                        "w-4 h-4 absolute top-[50%] -translate-y-[50%] -left-[100%] group-hover:left-0 duration-300 transition-all fill-sec"
                      }
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
