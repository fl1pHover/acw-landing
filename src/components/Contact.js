import Image from "next/image";
import React from "react";

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
        <div className="relative flex justify-center">
          <h1 className="text-[180px] font-bold absolute -top-[50%] left-[50%] -translate-x-[50%] whitespace-nowrap text-transparent text-w-border opacity-30">
            Үнийн санал авах
          </h1>
        </div>
        <form action="" className="relative">
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
            <button className="col-span-2 col-start-5 px-4 py-2 text-white transition bg-red-500 rounded-lg hover:bg-red-600">
              Илгээх
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
