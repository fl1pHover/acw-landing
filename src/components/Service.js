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

const servies = [
  {
    title: "Автын",
    img: "/services/van.png",
    desc: "Монгол улсаас Европын холбооны улсууд, Европын холбооны улсуудаас Монгол улсруу авто машинаар бүх төрлийн ачааг тээвэрлэнэ. Хэрвээ таны ачаа бүтэн машин хүрэхгүй бол түүвэр ачааны хувилбарыг та сонгон ашиглах боломжтой.",
  },
  {
    title: "Агаарын",
    img: "/services/plane.png",
    desc: "Бид таны импорт, экспортын ачааг агаараар тээвэрлэх боломжтой. Энэхүү үйлчилгээний онцлог нь үнэтэй, эмзэг, хагарч гэмтэж болзошгүй, цаг хугацааны хувьд яаралтай бараа бүтээгдэхүүнийг цаг алдалгүй түргэн шуурхай, найдвартай, аюулгүй тээвэрлэдэгт оршино.",
  },
  {
    title: "Далайн",
    img: "/services/cargo-ship.png",
    desc: "Дэлхийн өнцөг булан бүрт байрлах агентуудаараа дамжуулан таны хүссэн ачаа барааг далайн бүх усан боомтуудаас тээвэрлэж өгөх боломжтой. Бид хэрэглэгч үйлчлүүлэгчиддээ хамгийн уян хатан, хямд үнийг санал болгодог бөгөөд ачаа ачигдсанаас хойшхи бүхий л мэдээллийг цаг тухай бүрт нь авах боломжтой.",
  },
  {
    title: "Төмөр замын",
    img: "/services/train.png",
    desc: "Замын-Үүд, Сүхбаатар хилийн өртөөдөөр дамжин БНХАУ болон ОХУ-г холбосон төмөр замаар дэлхийн аль ч улсруу импорт, экспорт, транзитийн тээврийг зохион байгуулах бүрэн боломжтой.",
  },
  {
    title: "Түүвэр",
    img: "/services/box.png",
    desc: "Эрхэм үйлчлүүлэгч таны худалдаж авсан бараа бүтээгдэхүүний илгээлтийг өөрсдийн агуулахад цуглуулан, бусад ачаатай хамт түргэн шуурхай чингэлэг болон машинд ачиж тээвэрлэж байна. Та бүхэн манай мэргэжилтнүүдэд АЧААНЫ МЭДЭЭЛЭЛЭЭ өгсөнөөр бид таны ачаанд тохирсон тээврийн оновчтой гаргалгаа, болон зах зээлийн өрсөлдөхүйц үнийг санал болгох болно.",
  },
  {
    title: "Транзит",
    img: "/services/turn.png",
    desc: "Ази-Европыг холбосон (Наушки↔Эрээн чиглэлийн) Монголоор дамжин өнгөрөх Сүхбаатар↔Улаанбаатар↔Замын-Үүд чиглэлийн төмөр зам нь 1110 км урттай. Энэ нь Монголын хоёр талаар тойрох Казахстаны коридороос 513 км, Манжуурынхаас 748 км дөт юм. Иймд 2 том гүрний дунд орших бидний хувьд маш том эдийн засгийн боломж юм.",
  },
  {
    title: "Төслийн",
    img: "/services/excavator.png",
    desc: `Таны тээвэрлүүлэх гэж байгаа барааны овор хэмжээ, жин, үнэ өртөг ямар байхаас үл хамааран хүнд машин механизм, тоног төхөөрөмж, томоохон төсөл, барилга байгууламжийн ачааны тээвэрлэлтэн дээр мэргэшсэн, тус тээвэрлэлтийг олон жилийн турш хийсэн туршлагатай манай хамт олон тээвэрлэлтэнд тохирох шийдлийг олж өгөх болно. Тус төрлийн ачаа нь тогтсон цаг хугацаатай, нарийн төлөвлөгөөний дагуу зохион байгуулагддаг онцлогтой тул бид өөрийн хүнд даацын кран, том оврын машинуудынхаа тусламжтайгаар таны ачаа барааг дэлхийн хаана ч байсан аюулгүй тээвэрлэж өгөх болно.`,
  },
  {
    title: "Гаалийн бүрдүүлэлт",
    img: "/services/paper.png",
    desc: "Гаалийн бүрдүүлэлт гэж гаалийн хилээр нэвтрүүлэх барааг гаалийн байгууллагад мэдүүлсэн үеэс гаалийн бичиг баримтыг, шаардлагатай тохиолдолд барааг шалгах, ногдуулсан татварыг төлсний дараа барааг олгох, эсхүл гаалийн хилээр гаргахыг зөвшөөрөх хүртэлх цогц үйл ажиллагаа юм.",
  },
  {
    title: "Хөргүүртэй чингэлэг",
    img: "/services/temperature-control.png",
    desc: "Энэхүү үйлчилгээний давуу тал нь хурдан муудах, эсвэл хайлж гэсэх эрсдэл бүхий бүтээгдэхүүнийг хөргүүртэй чингэлгийн тусламжтайгаар урт эсвэл богино хугацаанд хол, ойрын замд тээвэрлэх юм. Уг чингэлэгт цахилгаан хүчдэлээр ажилладаг хөргүүрийн мотор суурилагдсан бөгөөд агаар нэвтрүүлдэггүй цоожтой хаалгатай байдаг байна.",
  },
  {
    title: "Аюултай ачаа",
    img: "/services/sign.png",
    desc: "Манай компани бүх төрлийн химийн болон аюултай ачааны тээвэрлэлтийг олон жилийн турш түргэн, шуурхай, найдвартай тээвэрлэж ирсэн туршлагатай. Тус тээвэр нь Аюултай ачаа тээвэрлэх журмын дагуу тээвэрлэгддэг бөгөөд манай компани нь тус тээвэр дээр мэргэшсэн баг таны ачааг тээвэрлэхэд шаардлагатай бүхий л бичиг баримтыг бэлтгэхэд тань тусалж, зөвлөгөө өгч тантай хамтарч ажиллахдаа таатай байх болно.",
  },
  {
    title: "Экспорт",
    img: "/services/export.png",
    desc: "Бид Монгол улсаас уул уурхай, ноос ноолуур, арьс шир, TIR carnet, агаар болон чингэлэгээр түүвэр ачаа гэх мэт хөдөө аж ахуйн болон бусад бүтээгдэхүүнүүдийг үйлчлүүлэгчийн хүссэн газарт найдвартай, түргэн шуурхай тээвэрлэх ложистикийн олон шийдэл бүхий экспортын тээврийн үйлчилгээг санал болгож байна.",
  },
  {
    title: "Хаалганаас хаалганд",
    img: "/services/package-delivery.png",
    desc: "Бид Монгол улсаас уул уурхай, ноос ноолуур, арьс шир, TIR carnet, агаар болон чингэлэгээр түүвэр ачаа гэх мэт хөдөө аж ахуйн болон бусад бүтээгдэхүүнүүдийг үйлчлүүлэгчийн хүссэн газарт найдвартай, түргэн шуурхай тээвэрлэх ложистикийн олон шийдэл бүхий экспортын тээврийн үйлчилгээг санал болгож байна.",
  },
];

export default function Service() {
  return (
    <div className="relative px-4 mx-auto my-20 max-w-7xl xl:px-0">
      <div className="relative flex justify-center">
        <img
          className="absolute top-0 left-[50%] w-2/3 object-contain -translate-x-[50%]"
          src="https://themexriver.com/wp/logistify/wp-content/uploads/2024/09/bg-shape.svg"
          alt="bg-shape"
        ></img>
        <h1 className="text-4xl font-bold text-sec-600">Үйлчилгээ</h1>
        {/* <h1 className="text-[180px] font-bold absolute -top-10 left-[50%] -translate-x-[50%]   text-light drop-shadow-[0_0px_1px_rgba(0,0,0,0.3)]">
          Үйлчилгээ
        </h1> */}
      </div>

      {/* <Carousel
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
                      <h1 className="flex justify-between text-white">
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
      </Carousel> */}

      <section className="my-10">
        <div className="relative grid w-full grid-cols-6 gap-4">
          {servies.map((el, index) => {
            return (
              <button
                key={index}
                // className="relative flex flex-col items-center w-full gap-2 py-5 font-bold transition bg-white border border-white duration hover:bg-sec rounded-2xl group"
                className="relative flex flex-col items-center w-full gap-2 px-3 py-10 overflow-hidden font-bold transition bg-white border backdrop-blur-sm duration group rounded-xl shadow-custom"
              >
                <span className="absolute top-0 left-0 flex justify-end w-0 h-full transition-all duration-500 bg-sec group-hover:w-full"></span>
                <img
                  src={el.img}
                  className="w-12 transition-all group-hover:-translate-y-2"
                  alt=""
                />
                {/* <img
                src="/about-bg.jpg"
                className="absolute top-0 left-0 size-full"
                alt=""
              /> */}
                <h1 className="relative text-lg transition text-slate-600 group-hover:text-white ">
                  {el.title}
                </h1>
                <p className="relative text-xs line-clamp-2 text-slate-400">
                  {el.desc}
                </p>
              </button>
            );
          })}
        </div>
      </section>

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
