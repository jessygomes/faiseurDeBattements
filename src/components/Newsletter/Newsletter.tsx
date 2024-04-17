import React from "react";

export default function Newsletter() {
  return (
    <article className="flex flex-col gap-5 items-center justify-center">
      <div
        className="w-[95%] lg:w-1/2 py-5 px-5 lg:px-10 flex flex-col gap-4"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(5px)",
          boxShadow: "0px 15px 9.9px 8px rgba(0, 0, 0, 0.25)",
        }}
      >
        <h2 className="text-center uppercase tracking-widest text-white text-[1rem] lg:text-xl font-Lekton-Regular">
          Inscris-toi à la newsletter
        </h2>
        <p className="font-Lekton-Regular text-whiteText text-center text-[0.8rem] lg:text-[1rem]">
          Tu recevras un mail lors de la publication d&apos;une nouvelle
          composition
        </p>
        <input
          type="email"
          placeholder="Ton adresse mail"
          className="w-full py-2 px-4"
        />
        <button className="w-full mx-auto py-[1rem] px-[2rem] border border-[#ffffff2c] text-whiteText uppercase font-Lekton-Regular">
          S&apos;inscrire
        </button>
      </div>
    </article>
  );
}
