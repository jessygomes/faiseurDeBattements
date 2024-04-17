import LecteurCompo from "@/components/LecteurCompo/LecteurCompo";
import Image from "next/image";
import Link from "next/link";

export default function Compopsitions() {
  return (
    <main
      className="lg:h-[100vh] flex flex-col items-center lg:flex-row min-h-screen"
      style={{
        backgroundImage: " url(/Images/464911.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "opacity(0.90)",
      }}
    >
      <section className="w-[95%] h-[20rem] lg:w-[50%] lg:h-full flex flex-col justify-between">
        <Link href="/">
          <Image
            className="w-auto h-[3rem] object-contain lg:w-auto lg:h-[4rem]"
            src="/Logo/logoBlanc.png"
            alt="Logo"
            width={200}
            height={200}
          />
        </Link>
        <h1 className="text-center uppercase tracking-widest text-white text-3xl lg:text-[3rem] font-LexendTera">
          magenta
        </h1>
        <p className=" text-right text-white font-LexendTera pr-2">CJ</p>
      </section>

      <section
        className="h-[35rem] w-[95%] mb-3 lg:w-[50%] lg:mb-0 lg:h-full"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
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
        <div className="w-full mt-[3rem] flex flex-col gap-[1rem] justify-center items-center">
          <LecteurCompo />
          <LecteurCompo />
          <LecteurCompo />
          <LecteurCompo />
        </div>
      </section>
    </main>
  );
}
