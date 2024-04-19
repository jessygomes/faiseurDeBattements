import Footer from "@/components/Footer/Footer";
import HeaderLogo from "@/components/HeaderLogo/HeaderLogo";
import React from "react";

export default function PolitiqueDeConfidentialite() {
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
              Politique De Confidentialité
            </h1>
            <div className="w-3/4 mx-auto mt-5 text-white flex flex-col gap-5">
              <p>
                Le but de cette Politique de Confidentialité est d&apos;informer
                les utilisateurs de notre site des données prsonnelles que nous
                recueillerons ainsi que les informations suivantes : <br /> -
                les données personnelles recueillies <br /> - l&apos;utilisation
                faite de ces données <br /> - les destinataires de ces données{" "}
                <br /> - la durée de conservation de ces données <br /> - les
                droits des utilisateurs concernant ces données <br /> - la
                politique du site en matière de cookies
              </p>
              <h2 className="text-xl font-Lekton-Regular">Loi applicables</h2>
              <p>
                Conformément au Règlement général sur la protection des données
                (RGPD), cette politique de confidentialité est conforme aux
                régleements suivant.
              </p>
              <p>
                Les données à caractère personnel doivent être : <br /> -
                traitées de manière licite, loyale et transparente au regard de
                la personne concernée (licéité, loyauté, transparence) ; <br />{" "}
                - collectées pour des finalités déterminées, explicites et
                légitimes, et ne pas être traotées ultérieurement d&apos;une
                manière incompatble avec ces finalités; le traitement ultérieur
                à des fin archivistiques dans l&apos;intérêt public, à des fins
                de recherche scientifique ou historique ou à des fins
                statistiques n&apos;est pas considéré, conformément à
                l&apos;article 89, paragraphe 1, comme incompatible avec les
                finalités initiales (limitation des finalités) ;<br /> -
                adéquates, pertinentes et limitées à ce qui est nécessare au
                regard des finalités pour lesquelles elles sont traitées
                (minimisation des données ;) <br /> - exactes et, si nécessaire,
                tenues à jour; toutes les mesures raisonnables doivent être
                prises pour que les données à caractère personnel qui sont
                inexactes, eu égard aux finalités pour lesquelles elles sont
                traitées, soient effacées ou rectifiées sans tarder (exactitude)
                ; <br /> - conservées sous une forme permettant
                l&apos;identification des personnes concernées pendant une durée
                n&apos;excédant pas celle nécessaire au regard des finalités
                pour lesquelles elles sont traitées; les données à caractère
                personnel peuvent être conservées pour des durées plus longues
                dans la mesure où elles seront traitées exclusivement à des fins
                archivistiques dans l&apos;intérêt public, à des fins de
                recherche scientifique ou historique ou à des fins statistiques
                conformément à l&apos;article 89, paragraphe 1, pour autant que
                soient mises en œuvre les mesures techniques et
                organisationnelles appropriées requises par le présent règlement
                en vue de garantir les droits et libertés de la personne
                concernée (limitation de la conservation) ; <br /> - traitées de
                manière à garantir une sécurité appropriée des données à
                caractère personnel, y compris la protection contre le
                traitement non autorisé ou illicite et contre la perte, la
                destruction ou les dégâts d&apos;origine accidentelle, à
                l&apos;aide de mesures techniques ou organisationnelles
                appropriées (intégrité et confidentialité).
              </p>
              <p>
                Le traitement n&apos;est licite que si, et dans la mesure où, au
                moins une des conditions suivantes est remplie : <br /> - la
                personne concernée a consenti au traitement de ses données
                àcaractère personnel pour une ou plusieurs finalités spécifiques
                ; <br /> - la traitement est nécessaire à l&apos;exécution
                d&apos;un contrat auquel la personne concernée est partie ou à
                l&apos;exécution de mesures précontractuelles prises à la
                demande de celle-ci ;
                <br /> -le traitement est nécessaire au respect d&apos;une
                obligation légale à laquelle le responsable du traitement est
                soumis ; <br /> - le traitement est nécessaire à la sauvegarde
                des intérêts vitaux de la personne concernée ou d&apos;une autre
                personne physique ; <br /> - le traitement est nécessaire à
                l&apos;exécution d&apos;une mission d&apos;intérêt public ou
                relevant de l&apos;exercice de l&apos;autorité publique dont est
                investi le responsable du traitement ; <br /> - le traitement
                est nécessaire aux fins des intérêts légitimes poursuivis par le
                responsable du traitement ou par un tiers, à moins que ne
                prévalent les intérêts ou les libertés et droits fondamentaux de
                la personne concernée qui exigent une protection des données à
                caractère personnel, notamment lorsque la personne concernée est
                un enfant.
                <br /> - la durée de conservation de ces données <br /> - les
                droits des utilisateurs concernant ces données <br /> - la
                politique du site en matière de cookies
              </p>
              <p>
                Pour les résidents de l&apos;Etat de Californie, cette politique
                de confidentialité vise à se conformer à la California Consumer
                Privacy Act (CCPA). S&apos;il y a des incohérences entre ce
                document et la CCPA, la législation de l&apos;Etat
                s&apos;appliquera. Si nous constatons des incohérences, nous
                modifierons notre politique pour nous conformer à la loi
                pertinente.
              </p>
              <h2 className="text-xl font-Lekton-Regular">Consentement</h2>
              <p>
                Les utilisateurs conviennent qu&apos;en utilisantt notre site,
                ils consentent à :
                <br /> - les conditions énoncées dans la présente politique de
                confidentialité
                <br /> - la collecte, l&apos;utilisation et la conservation des
                données énoncées dans la présente politique de confidentialité
              </p>
              <h2 className="text-xl font-Lekton-Regular">
                Données personnelles que nous collections
              </h2>
              <p>
                Données collectées automatiquement : Nous ne collections aucune
                donée automatiquement sur notre site.
              </p>
              <p>
                Données recueillies de façon non automatique : Nous pouvons
                également collecter les donnéees suivantes lorsque vous
                effectuez certaines fonctions sur notre site : Nom, Prénom et
                Email. Ces données peuvent être recueillies au moyen des
                méthodes suivantes : formulaire de contact.
              </p>
              <p>
                Veuillez notez que nous ne collectons que les données qui nous
                aident à atteindre l&apos;obkectif énoncé dans cette politique
                de confidentialité. Nous ne recueillerons pas de données
                supplémentaires sans vous informer au préalable.
              </p>
              <h2 className="text-xl font-Lekton-Regular">
                Comment nous utilisons les données personnelles
              </h2>
              <p>
                Les données personnelles recueillies sur notre site seront
                utilisées uniquement aux fins précisées dans la présente
                politique ou indiquées sur les pages pertinentes de notre site.
                Nous n&apos;utiliserons pas vos données au-delà de ce que nous
                divulguerons.
              </p>
              <p>
                Les données que nous recueillons lorsque l&apos;utilisateur
                exécute certaines fonctions peuvent être utilisées aux fins
                suivantes : communiquer avec les utilisateurs souhaitant rentrer
                en contact avec l&apos;artiste.
              </p>
              <h2 className="text-xl font-Lekton-Regular">
                Avec qui nous partagerons les données personnelles
              </h2>
              <p>Employés : le site ne possède pas d&apos;employés.</p>
              <p>
                Autres divulgations : Nous nous engageons à ne pas vendre ou
                partager vos données avec des tiers, sauf dans les cas suivants
                : si la loi l&apos;exige, si elle est requise pour toute
                procédure judiciaire, pou rprouver ou protéger nos droits
                légaux, à des acheteurs ou des acheteurs potentiels de cette
                société dans le cas où nous cherchons à la vendre.
              </p>
              <p>
                Si vous suivez des hyperliens de notre site vers un autre site,
                veuillez noter que nous ne sommes pas responsables et
                n&apos;avons pas de contrôle sur leurs politiques et pratiques
                de confidentialité.{" "}
              </p>
              <h2 className="text-xl font-Lekton-Regular">
                Combien de temps nous stockons les données personnelles
              </h2>
              <p>
                Nous ne conservons pas les données des utilisateurs au-delà de
                ce qui est nécessaire pour atteindre les fins pour lesquelles
                elles sont recueillies.
              </p>
              <h2 className="text-xl font-Lekton-Regular">
                Comment nous protégeons vos données personnelles
              </h2>
              <p>
                Les données ne sont pas stockées par la site. Nous recevons
                simplement un mail avec vos informations rentré dans le
                formulaire de contact.
              </p>
              <p>
                Alors que nous prenons toutes les précautions raisonnables pour
                nous assurer que nos données d&apos;utilisateur sont sécurisées
                et que les utilisateurs sont protégés,il reste toujours du rique
                de préjudice. L&apos;Internet en sa totalité peut être, parfois,
                peu sûr et donc nous sommes incapables de garantir la sécurité
                des données des utilisateurs au-delà de ce qui est
                raisonnablement pratique.
              </p>
              <h2 className="text-xl font-Lekton-Regular">Mineurs</h2>
              <p>
                Le RGPD précise que les personnes de moins de 15 ans sont
                considérées comme des mineurs aux fins de la collecte de
                données. Les mineurs doivent avoir le consentement d&apos;un
                représentant légal pour que leurs données soient recueillies,
                traitées et utilisées.
              </p>
              <h2 className="text-xl font-Lekton-Regular">
                Vos droits en tant qu&apos;utilisateur
              </h2>
              <p>
                En vertu du RGPD, les utilisateurs ont les droits suivant en
                tant que personnes concernées : <br /> - droit d&apos;accès{" "}
                <br /> - droit de rectification
                <br /> - droit à l&apos;effacement <br /> - droit de restreindre
                le traitement <br /> - droit à la portabilité des données <br />{" "}
                - droit d&apos;objection{" "}
              </p>
              <h2 className="text-xl font-Lekton-Regular">
                Comment modifier, supprimer ou contester les données recueillies
              </h2>
              <p>
                Si vous souhaitez que vos renseignements soient supprimés ou
                modifiés d&apos;une façon ou d&apos;une autre, veuillez
                communiquer avec notre agent de protection de la vie privée ici
                :{" "}
              </p>
              <p>Jessy Pinto Barreto - inthegleam01@gmail.com</p>
              <h2 className="text-xl font-Lekton-Regular">Modifications</h2>
              <p>
                Cette politique de confidentialité peut être modifiée à
                l&apos;occasion afin de maintenir la conformité avec la loi et
                de tenir compte de tout changement à notre processus de collecte
                de données. Nous recommandons à nos utilisateurs de vérifier
                notre politique de temps à autre pour s&apos;assurrer
                qu&apos;ils soient informés de toute mise à jour. Au besoin,
                nous pouvons informer les utlisateurs par courriel des
                changements apportés à cette politique.
              </p>
              <h2 className="text-xl font-Lekton-Regular">Contact</h2>
              <p>
                Si vous avez des questions à nous poser, n&apos;hésitez pas à
                communiquer avec nous en utilisant ce qui suit : <br /> -
                inthegleam01@gmail.com
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
