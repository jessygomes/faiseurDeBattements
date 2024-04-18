import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoundcloud } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-[1rem]">
      <div
        className="w-[95%] sm:w-[75%] lg:w-[50%] mx-auto py-5 px-10 flex items-center justify-center"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(3px)",
          boxShadow: "0px 15px 9.9px 8px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* <p className="text-whiteText text-center font-Lekton-Regular text-[0.8rem]">
          SOUNDCLOUD :
        </p> */}
        <Link
          target="_blank"
          className="text-xl text-center text-white w-[20%] mx-auto hover:text-orange-400 transition-all duration-300 ease-in-out"
          href="https://soundcloud.com/cjsanshi"
        >
          <FontAwesomeIcon icon={faSoundcloud} />
        </Link>
      </div>
      {/* <Newsletter /> */}
      <div
        className="w-[95%] sm:w-[75%] lg:w-[50%] mx-auto py-5 px-10 flex flex-col gap-4"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(3px)",
          boxShadow: "0px 15px 9.9px 8px rgba(0, 0, 0, 0.25)",
        }}
      >
        <p className=" text-whiteText text-center font-Lekton-Regular text-[0.8rem]">
          <Link href="/compositions">Compositions</Link> -{" "}
          <Link href="/contact">Contact</Link> -{" "}
          <Link
            target="_blank"
            href="https://www.instagram.com/cj__sanshi?igsh=NWQzejV1eHExMnB5"
          >
            Instagram
          </Link>{" "}
          -{" "}
          <Link target="_blank" href="https://soundcloud.com/cjsanshi">
            Soundcloud
          </Link>{" "}
          - <Link href="/mentions-legales">Mentions légales</Link> -{" "}
          <Link href="/politique-de-confidentialite">
            Politique de confidentialité
          </Link>
        </p>
      </div>
      <div
        className="w-[95%] sm:w-[75%] lg:w-[50%] mx-auto mb-1"
        style={{
          backdropFilter: "blur(3px)",
        }}
      >
        <p className="text-white text-center text-[0.6rem] lg:text-[0.8rem] font-Lekton-Regular">
          © 2024 Faiseur de Battements | Tous droits réservés | Website by :{" "}
          <Link target="_blank" href="">
            CJ
          </Link>
        </p>
      </div>
    </footer>
  );
}
