import React from "react";

export default function Newsletter() {
  return (
    <article className="flex flex-col gap-5 items-center justify-center">
      <h2 className="text-center uppercase tracking-widest text-white text-xl lg:text-3xl font-Sansation_Light">
        Inscris-toi à la newsletter
      </h2>
      <div
        className=" w-1/2 py-5 px-10 flex flex-col gap-4"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(5px)",
          boxShadow: "0px 15px 9.9px 8px rgba(0, 0, 0, 0.25)",
        }}
      >
        <p className="font-Sansation_Light text-whiteText text-center uppercase">
          Recevez des nouvelles de faiseur de battements
        </p>
        <input
          type="email"
          placeholder="Ton adresse mail"
          className="w-full py-2 px-4"
        />
        <button className="w-[20rem] mx-auto py-[1rem] px-[2rem] border border-[#ffffff2c] text-whiteText uppercase">
          S&apos;inscrire
        </button>
      </div>
    </article>
  );
}
