import Footer from "@/components/Footer/Footer";
import HeaderLogo from "@/components/HeaderLogo/HeaderLogo";
import LastSong from "@/components/LastSong/LastSong";
import LecteurHome from "@/components/LecteurHome/LecteurHome";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
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
          <div className="pb-[2rem] flex flex-col justify-center items-center gap-2">
            <Navbar />
            <LecteurHome />
          </div>
        </section>
      </main>

      <section
        className="h-[100vh] bg-[#4E4E4E]"
        style={{
          backgroundImage: "url(/Images/464911.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 90%",
          transform: "scale(-1)",
          filter: "grayscale(100%) opacity(0.89)",
        }}
      >
        <div
          className="h-full flex flex-col justify-around"
          style={{ transform: "scale(-1)" }}
        >
          <div className="mt-[2rem]">
            <LastSong />
          </div>
          <div></div>
          <Footer />
        </div>
      </section>
    </>
  );
}
