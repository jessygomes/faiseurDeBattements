"use client";
import Image from "next/image";
import Link from "next/link";
import prods from "../../data/prods";
import { useRef, useState } from "react";
import { Prod } from "../../lib/type";
import LecteurAll from "@/components/LecteurAll/LecteurAll";
import Prods from "@/components/Prods/Prods";

export default function Compopsitions() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [currentProd, setCurrentProd] = useState<Prod | null>(null);

  const onPlay = (prod: Prod) => {
    setCurrentProd(prod);
    setBackgroundImage(prod.image);
    console.log(currentProd);
  };

  return (
    <main
      className="lg:h-[100vh] flex flex-col items-center lg:flex-row min-h-screen bg-blackPrimary"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "opacity(0.90)",
      }}
    >
      <section className="w-[95%] h-[20rem] lg:w-[50%] lg:h-full flex flex-col justify-between items-center">
        <Link href="/">
          <Image
            className="w-auto h-[3rem] object-contain ml-2 mt-2 lg:w-auto lg:h-[4rem]"
            src="/Logo/logoBlanc.png"
            alt="Logo"
            width={200}
            height={200}
          />
        </Link>
        <h1 className="text-center uppercase tracking-widest text-white text-3xl lg:text-[3rem] font-LexendTera">
          {currentProd ? currentProd.title : "click play"}
        </h1>
        <p className="text-white font-Sansation_Light mr-5 mb-4">FdB</p>
      </section>

      <section
        className="h-[35rem] w-[95%] mb-3 lg:w-[50%] lg:mb-0 lg:h-full"
        style={{
          // backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(3px)",
          boxShadow: "0px 15px 9.9px 8px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="flex gap-5 items-center justify-center mt-[2rem]">
          <select className="w-[10rem] bg-transparent text-white font-Lekton-Regular">
            <option className=" font-Lekton-Regular bg-blackCard">BPM</option>
            <option className=" font-Lekton-Regular bg-blackCard">80-90</option>
            <option className=" font-Lekton-Regular bg-blackCard">
              90-100
            </option>
            <option className=" font-Lekton-Regular bg-blackCard">
              100-110
            </option>
            <option className=" font-Lekton-Regular bg-blackCard">
              110-120
            </option>
            <option className=" font-Lekton-Regular bg-blackCard">
              120-130
            </option>
            <option className=" font-Lekton-Regular bg-blackCard">
              130-140
            </option>
            <option className=" font-Lekton-Regular bg-blackCard">
              140-150
            </option>
            <option className=" font-Lekton-Regular bg-blackCard">
              150-160
            </option>
          </select>

          <select className="w-[10rem] bg-transparent text-white font-Lekton-Regular">
            <option className=" font-Lekton-Regular bg-blackCard">Style</option>
            <option className=" font-Lekton-Regular bg-blackCard">
              Rap/Trap
            </option>
            <option className=" font-Lekton-Regular bg-blackCard">
              Jazz/Soul
            </option>
            <option className=" font-Lekton-Regular bg-blackCard">
              BoomBap
            </option>
            <option className=" font-Lekton-Regular bg-blackCard">
              Autres
            </option>
          </select>
        </div>
        <div className="mt-[2rem] h-[74%] overflow-scroll overflow-x-hidden custom-navbar">
          {prods.map((prod, index) => (
            <Prods key={index} prod={prod} onPlay={onPlay} />
          ))}
        </div>
        <div className=" absolute bottom-0 right-0 w-full">
          {currentProd && <LecteurAll prod={currentProd} />}
        </div>
      </section>
    </main>
  );
}
