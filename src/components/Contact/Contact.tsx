"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    fonction: "",
    objet: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gk6wz1t",
        "template_i6jznkq",
        e.currentTarget,
        "OQpdfRliSb-itPKwp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setForm({
            name: "",
            fonction: "",
            objet: "",
            email: "",
            message: "",
          });
          setConfirmationMessage("Email envoyé avec succès !");
          setTimeout(() => {
            setConfirmationMessage("");
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="w-[95%] mx-auto p-[0.5rem] my-[1rem] sm:p-[1rem] sm:my-0"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(5px)",
        boxShadow: "0px 15px 9.9px 8px rgba(0, 0, 0, 0.25)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col gap-3 lg:gap-5 relative"
      >
        {confirmationMessage && (
          <p className="text-whiteText font-Lekton-Regular text-[0.8rem] lg:text-[1rem] text-center">
            {confirmationMessage}
          </p>
        )}

        <p className="text-whiteText font-Sansation_Light tracking-[0.1rem] text-[0.8rem] lg:text-[1rem]  text-center">
          Une composition t&apos;intéresse ? Contacte-moi !
        </p>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nom & Prénom"
            className="font-LexendTera px-[2rem] py-[0.3rem] w-[18rem] md:w-[30rem] md:py-[0.2rem] bg-whiteText bg-opacity-90 text-blackPrimary text-center focus:outline-none focus:border-[#fa798f] transition-all duration-300 ease-in-out"
            onChange={handleChange}
            value={form.name}
            minLength={2}
            maxLength={30}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="fonction"
            name="fonction"
            placeholder="STATUT : Artistes, Producteur..."
            className="font-LexendTera px-[2rem] py-[0.3rem] w-[18rem] sm:w-[30rem] sm:py-[0.2rem] bg-whiteText bg-opacity-90 text-blackPrimary text-center focus:outline-none focus:border-[#fa798f] transition-all duration-300 ease-in-out"
            onChange={handleChange}
            value={form.fonction}
            minLength={2}
            maxLength={20}
          />
        </div>
        <div>
          <input
            type="text"
            id="objet"
            name="objet"
            placeholder="Nom de la ou des compositions"
            className="font-LexendTera px-[2rem] py-[0.3rem] w-[18rem] md:w-[30rem] md:py-[0.2rem] bg-whiteText bg-opacity-90 text-blackPrimary text-center focus:outline-none focus:border-[#fa798f] transition-all duration-300 ease-in-out"
            onChange={handleChange}
            value={form.objet}
            minLength={2}
            maxLength={20}
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Adresse Mail"
            className="font-LexendTera px-[2rem] py-[0.3rem] w-[18rem] md:w-[30rem] md:py-[0.2rem] bg-whiteText bg-opacity-90 text-blackPrimary text-center focus:outline-none focus:border-[#fa798f] transition-all duration-300 ease-in-out"
            onChange={handleChange}
            value={form.email}
            required
          />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="font-LexendTera px-[2rem] py-[0.3rem] w-[18rem] md:w-[30rem] md:py-[0.2rem] bg-whiteText bg-opacity-90 text-blackPrimary text-center focus:outline-none focus:border-[#fa798f] transition-all duration-300 ease-in-out"
            onChange={handleChange}
            value={form.message}
            required
            minLength={2}
            maxLength={350}
          />
        </div>
        <button
          type="submit"
          className="p-[0.5rem] text-white font-bison tracking-[0.3rem] bg-black from-black-800 to-zinc-600 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300 ease-in-out hover:from-black hover:black hover:ring-2 hover:ring-black hover:shadow-xl"
        >
          ENVOYER
        </button>
      </form>
    </motion.div>
  );
}
