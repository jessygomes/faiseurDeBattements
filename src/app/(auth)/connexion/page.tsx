import HeaderLogo from "@/components/HeaderLogo/HeaderLogo";
import React from "react";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col">
      <section
        className="h-[100vh] flex flex-col justify-between lg:justify-between items-center"
        style={{
          backgroundImage: " url(/Images/464911.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) opacity(0.90)",
        }}
      >
        <div className="mt-[5rem] lg:mt-2">
          <HeaderLogo />
        </div>
        <div className="pb-[2rem] flex flex-col justify-center items-center gap-7">
          {/* <Navbar />
          <LecteurHome /> */}
        </div>
      </section>
    </main>
  );
}
