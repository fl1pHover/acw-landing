import React from "react";
import {
  IconCheck,
  IconFast,
  IconMoney,
  IconVerified,
} from "@/components/icons/page";
import Image from "next/image";
import About from "./page";

const Mission = () => {
  return (
    <div className="mx-auto mb-20 max-w-7xl">
      <div className="grid items-center w-full grid-cols-2 gap-32">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-red-500 uppercase">
            // Алсын хараа
          </span>
          <h1 className="mt-2 mb-10 text-5xl font-semibold">Эрхэм зорилго</h1>
          <div>
            <p className="flex items-start text-sm leading-7 text-slate-700">
              <IconCheck className="w-5 h-5 mt-1 mr-2 fill-red-600 shrink-0" />
              Хэрэглэгч үйлчлүүлэгчидийнхээ итгэлийг өөрийн хамт олон болон
              бизнесийн түншүүдийнхээ нэгдмэл өргөн цар хүрээтэй хамтын үйл
              ажиллагаа, цаг үедээ зохицон хөгжих
            </p>
            <p className="flex items-start text-sm leading-7 text-slate-700">
              <IconCheck className="w-5 h-5 mt-1 mr-2 fill-red-600 shrink-0" />
              Мэдлэг боловсролын дэвшил болон түүнд зохицох ур дүйг хөгжүүлэн,
              ажиллагсдынхаа ажлын болон амьдралын таатай орчинг бүрдүүлэх
            </p>
            <p className="flex items-start text-sm leading-7 text-slate-700">
              <IconCheck className="w-5 h-5 mt-1 mr-2 fill-red-600 shrink-0" />
              Тээвэр логистикийн салбартаа голлох үүрэг гүйцэтгэгч байж
              харилцагчид болон улс эх орны хөгжилд бодитой хувь нэмрээ оруулан
              нийгмийн хариуцлагаа ухамсарлаж ажиллана.
            </p>
          </div>
        </div>
        <div className="relative w-full">
          <Image
            src="/mission.jpg"
            alt="image"
            width={400}
            height={400}
            className="object-cover aspect-[4/3] w-full overflow-hidden rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
