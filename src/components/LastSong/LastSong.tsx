import React from "react";
import Lecteur from "../Lecteur/Lecteur";

export default function LastSong() {
  return (
    <article className="flex flex-col gap-10 justify-center items-center">
      <h2 className="text-center uppercase tracking-widest text-white text-xl lg:text-3xl font-Sansation_Light">
        Derniere composition
      </h2>
      <Lecteur />
    </article>
  );
}
