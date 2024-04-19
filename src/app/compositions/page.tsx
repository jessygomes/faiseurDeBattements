"use client";
import Image from "next/image";
import Link from "next/link";
import prods from "../../data/prods";
import { useRef, useState } from "react";
import { Prod } from "../../lib/type";
import LecteurAll from "@/components/LecteurAll/LecteurAll";
import Prods from "@/components/Prods/Prods";
import { motion } from "framer-motion";
import styles from "./contactBtn.module.css";

export default function Compopsitions() {
  //! Gestion du lecteur et du background
  const [backgroundImage, setBackgroundImage] = useState("");
  const [currentProd, setCurrentProd] = useState<Prod | null>(null);

  //! Pour jouer la prod directement en cliquant sur la carte
  const [audioSrc, setAudioSrc] = useState("");

  //! Pour jouer la prod suivante à la fin de la prod en cours
  const [currentProdIndex, setCurrentProdIndex] = useState(0);

  const onPlay = (prod: Prod, index: number) => {
    setCurrentProd(prod);
    setBackgroundImage(prod.image);
    setCurrentProdIndex(index);
    setAudioSrc(prod.audio);
    console.log(index, prod.title, prod.audio);
  };

  const playNext = () => {
    const nextIndex = (currentProdIndex + 1) % filteredProds.length;
    const nextProd = filteredProds[nextIndex];
    onPlay(nextProd, nextIndex);
  };

  //! Tri en fonction du BPm de la prod
  const [selectedBpm, setSelectedBpm] = useState<string | null>(null);
  const handleBpmChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedBpm(value === "BPM" ? null : value.slice(0, 2));
  };

  //! Tri en fonction du style
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedStyle(value === "Style" ? null : value);
  };

  //! Résultat du triage par BPM et par style
  const filteredProds = prods
    .filter((prod) =>
      selectedBpm ? prod.bpm.toString().startsWith(selectedBpm) : true
    )
    .filter((prod) => (selectedStyle ? prod.style === selectedStyle : true));

  const ref = useRef(null);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="h-[100vh] lg:h-[100vh] flex flex-col justify-between items-center lg:flex-row min-h-screen bg-blackPrimary overflow-x-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "opacity(0.90)",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <section className="w-[95%] h-[100%] lg:w-[50%] lg:h-full flex flex-col justify-between items-center">
        <Link href="/">
          <Image
            className="w-auto h-[3rem] object-contain ml-2 mt-2 lg:w-auto lg:h-[4rem] image-neon"
            src="/Logo/logoBlanc.png"
            alt="Logo"
            width={200}
            height={200}
          />
        </Link>
        <motion.h1
          ref={ref}
          key={currentProd ? currentProd.title : "click play"}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-center uppercase tracking-widest text-white text-2xl sm:text-[3rem] font-LexendTera neon"
        >
          {currentProd ? currentProd.title : "click play"}
        </motion.h1>
        <Link href="/contact" className={styles.nav__item}>
          <div className={styles.div__item}>Contact</div>
        </Link>
      </section>

      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="h-[65%] w-[95%] bg-blackCard lg:bg-transparent rounded-lg lg:rounded-none mb-3 sm:h-[50%] lg:w-[50%] lg:mb-0 lg:h-full"
        style={{
          backdropFilter: "blur(3px)",
          boxShadow: "0px 15px 9.9px 8px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="flex gap-5 items-center justify-center mt-[1rem] lg:mt-[2rem]">
          <select
            className="w-[10rem] bg-transparent text-white font-Lekton-Regular"
            onChange={handleBpmChange}
          >
            <option className=" font-Lekton-Regular bg-blackCard" value={"BPM"}>
              BPM
            </option>
            {/* <option className=" font-Lekton-Regular bg-blackCard" value={80}>
              80
            </option> */}
            <option className=" font-Lekton-Regular bg-blackCard" value={90}>
              90
            </option>
            <option className=" font-Lekton-Regular bg-blackCard" value={100}>
              100
            </option>
            <option className=" font-Lekton-Regular bg-blackCard" value={110}>
              110
            </option>
            <option className=" font-Lekton-Regular bg-blackCard" value={120}>
              120
            </option>
            <option className=" font-Lekton-Regular bg-blackCard" value={130}>
              130
            </option>
            <option className=" font-Lekton-Regular bg-blackCard" value={140}>
              140
            </option>
            <option className=" font-Lekton-Regular bg-blackCard" value={150}>
              150
            </option>
          </select>

          <select
            className="w-[10rem] bg-transparent text-white font-Lekton-Regular"
            onChange={handleStyleChange}
          >
            <option value="Style" className=" font-Lekton-Regular bg-blackCard">
              Style
            </option>
            <option
              value="Rap/Trap"
              className=" font-Lekton-Regular bg-blackCard"
            >
              Rap/Trap
            </option>
            <option
              value="Jazz/Soul"
              className=" font-Lekton-Regular bg-blackCard"
            >
              Jazz/Soul
            </option>
            <option
              value="RnB/Trapsoul"
              className=" font-Lekton-Regular bg-blackCard"
            >
              RnB/Trapsoul
            </option>
            <option
              value="Autres"
              className=" font-Lekton-Regular bg-blackCard"
            >
              Autres
            </option>
          </select>
        </div>
        <div className="lg:mt-[2rem] h-[70%] lg:h-[74%] overflow-scroll overflow-x-hidden custom-navbar">
          {filteredProds.length > 0 ? (
            filteredProds.map((prod, index) => (
              <Prods key={index} prod={prod} index={index} onPlay={onPlay} />
            ))
          ) : (
            <p className="text-center text-white font-Lekton-Regular">
              Aucune composition...
            </p>
          )}
        </div>
        <div className="h-[15%] w-full">
          {currentProd && (
            <LecteurAll
              prod={currentProd}
              onEnded={playNext}
              audioSrc={audioSrc}
            />
          )}
        </div>
      </motion.section>
    </motion.main>
  );
}
