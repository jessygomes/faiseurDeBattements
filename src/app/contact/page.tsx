import ContactForm from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import HeaderLogoContact from "@/components/HeaderLogo/HeaderLogoContact";

export default function Contact() {
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
          <div className="mt-[1rem] lg:mt-2">
            <HeaderLogoContact />
          </div>
          <div className="">
            <ContactForm />
          </div>
          <div className="pb-[2rem] flex flex-col justify-center items-center gap-7">
            <Navbar />
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
          <Footer />
        </div>
      </section>
    </>
  );
}
