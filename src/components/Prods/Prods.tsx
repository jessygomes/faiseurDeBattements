import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";
import { Prod } from "../../lib/type";

interface LecteurCompoProps {
  prod: Prod;
  onPlay: (prod: Prod) => void;
}

export default function Prods({ prod, onPlay }: LecteurCompoProps) {
  return (
    <div
      className="w-full flex flex-col lg:flex-row gap-2 lg:gap-10 justify-between px-[3rem] mb-[1rem] items-center h-[8rem] lg:h-14 hoveredCard"
      onClick={(event: React.MouseEvent<HTMLDivElement>) => onPlay(prod)}
      style={
        {
          // backgroundColor: "rgba(0, 0, 0, 0.5)",
          // backdropFilter: "blur(5px)",
          // boxShadow: "0px 15px 9.9px 8px rgba(0, 0, 0, 0.25)",
        }
      }
    >
      <h3 className="text-whiteText font-LexendTera uppercase text-xl">
        {prod.title}
      </h3>
      <div className="flex gap-[2rem]">
        <p className="text-whiteText font-Lekton-Regular uppercase">
          bpm : {prod.bpm}
        </p>
        <p className="text-whiteText font-Lekton-Regular uppercase">
          Style : {prod.style}
        </p>
      </div>
      <button
        className="text-white hover:text-[#c74e4e] transition-all duration-300 ease-in-out"
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => onPlay(prod)}
      >
        <FontAwesomeIcon icon={faPlay} />
      </button>
    </div>
  );
}
