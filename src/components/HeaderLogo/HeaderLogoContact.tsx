"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeaderLogoContact() {
  return (
    <motion.header
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex flex-col gap-2"
    >
      <Link href="/">
        <Image
          className="w-auto h-[4rem] object-contain mx-auto lg:w-auto lg:h-[5rem] image-neon"
          src="/Logo/logoBlanc.png"
          width={500}
          height={500}
          alt="Technicien électricien travaillant dans un standard de fusibles et utilisant une tablette"
        />
      </Link>
      <h1 className="text-center uppercase tracking-widest text-white text-l lg:text-2xl font-Sansation_Light neon">
        faiseur de battements
      </h1>
    </motion.header>
  );
}
