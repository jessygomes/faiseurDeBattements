import Footer from "@/components/Footer/Footer";
import HeaderLogo from "@/components/HeaderLogo/HeaderLogo";
import React from "react";

export default function MentionsLegale() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <section
          className="flex flex-col justify-between lg:justify-between items-center"
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
          <div className="pb-[2rem] flex flex-col justify-center items-center gap-7"></div>
          <div
            className="w-[95%] sm:w-[75%] py-5 px-5 lg:px-10 flex flex-col gap-4"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(5px)",
              boxShadow: "0px 15px 9.9px 8px rgba(0, 0, 0, 0.25)",
            }}
          >
            <h1 className="text-3xl text-center mt-5 text-white font-Lekton-Regular">
              Mentions légales
            </h1>
            <div className="w-3/4 mx-auto mt-5 text-white flex flex-col gap-5">
              <h2 className="text-xl font-Lekton-Regular">
                Directeur de la publication
              </h2>
              <p>Pinto Barreto Jessy</p>
              <h2 className="text-xl font-Lekton-Regular">
                Raison social de l&apos;hébergeur
              </h2>
              <p>
                Ce blog musical esthébergé par Vercel - Siège Social San
                Francisco, Etats-Unis
              </p>
              <h2 className="text-xl font-Lekton-Regular">
                Propriété intellectuelle
              </h2>
              <p>
                La structure générale ainsi que les textes, sons, son
                savoir-faire et tous les autres éléments composant le site sont
                la propriété exclusive de faiseurdebattements.com. <br /> <br />{" "}
                Les logos et marques des sociétés citées sur le site
                faiseurdebattements.com sont la propriété exclusive de leurs
                auteurs respectifs. Toutes représentations et/ou reproductions
                et/ou exploitation partielle ou totale de ce site, par quelques
                procédés que ce soit, sans l&apos;autorisation expresse et
                préalable de faiseurdebattements.com est interdite et
                constituerait une contrefaçon au sens des articles L 335-2 et
                suivants du Code de la propriété intellectuelle. <br /> <br />
                L&apos;élaboration de liens hypertextes profonds vers le site
                faiseurdebattements.com est interdite sans l&apos;accord exprès
                et préalable de faiseurdebattements.com. Par ailleurs,
                l&apos;utilisation des informations contenues sur le site relève
                de la seule responsabilité de l&apos;utilisateur. Nous ne
                pourrions en aucun cas, et pour quelque cause que ce soit, en
                être tenus pour responsables, et ce, quelque en soit les
                conséquences. Nous ne sommes responsables d&apos;aucune erreur
                ouu omission sur le présent site. <br /> <br />
                Les photos et les illustrations utilisées sur le site
                faiseurdebattements.com sont la propriété de leurs auteurs
                respectifs. Toute reproduction totale ou partielle de ces
                éléments sans l&apos;autorisation expresse de leurs auteurs est
                interdite.
              </p>
              <h2 className="text-xl font-Lekton-Regular">
                Avertissement général
              </h2>
              <p>
                La consultation du site faiseurdebattements.com est proposée aux
                internautes à titre gratuit et sansaucune garantie de la part de
                son éditeur. Les informations disponibles sur ce site qui
                proviendrait de sources extérieures ne saurait garantir
                qu&apos;elles sont exemptes d&apos;erreurs, ni garantir leur
                complétude, leur actualité, leur exhaustivité ou autre.
              </p>
              <p>
                Les propriétaires des sites marchands, d service, sites persos,
                site informatiques (etc.) consultés à partir du site
                faiseurdebattements.com sont seuls responsables du respect par
                eux de l&apos;ensemble des réglementations s&apos;appliquant
                dans le cadre des prestations offertes aux clients finaux, et
                notamment, des lois et réglements relatif à : la vente à
                distance, la protection du consommateur, la publicité mensongère
                ou trompeuse, les prix, la conformité des produits.
              </p>
              <h2 className="text-xl font-Lekton-Regular">
                Utilisation des cookies
              </h2>
              <p>
                faiseurdebattements.com vous informe qu&apos;un ou plusieurs
                cookies (petits fichiers textes) peuvent s&apos;installer
                automatiquement sur le disque dur de votre ordinateur lors de
                votre visite sur le site faiseurdebattements.com. Vous avez la
                possibilité de supprimer les cookies installés lors de votre
                visite sur faiseurdebattements.com à l&apos;aide de la barre
                d&apos;outil de votre navigateur. La suppression des cookies
                devra intervenir une fois votre navigation sur le site
                faiseurdebattements.com terminée.
              </p>
              <h2 className="text-xl font-Lekton-Regular">
                {" "}
                Crédits et copyrights photo
              </h2>
              <p>
                Les crédits et copyright des visuels et des photos présents sur
                le blog faiseurdebattements.com sont signalés lorsqu&apos;elles
                proviennent d&apos;un professionnel avec son accord, à défaut :
                celle-ci proviennent de l&apos;un des sites photos libres de
                droit en créative commons : Heroscreen, Wallpapersden, Imgur.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* <section
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
      </section> */}
    </>
  );
}
