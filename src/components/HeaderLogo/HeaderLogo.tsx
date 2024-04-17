import Image from "next/image";

export default function HeaderLogo() {
  return (
    <header className="flex flex-col gap-2">
      <div>
        <Image
          className="w-auto h-[5rem] object-contain mx-auto lg:w-auto lg:h-[8rem]"
          src="/Logo/logoBlanc.png"
          width={500}
          height={500}
          alt="Technicien électricien travaillant dans un standard de fusibles et utilisant une tablette"
        />
      </div>
      <h1 className="text-center uppercase tracking-widest text-white text-xl lg:text-3xl font-Sansation_Light">
        faiseur de battements
      </h1>
    </header>
  );
}
