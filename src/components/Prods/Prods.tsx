import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";
import { Prod } from "../../lib/type";

interface LecteurCompoProps {
  prod: Prod;
  onPlay: (prod: Prod, index: number) => void;
  index: number;
}

export default function Prods({ prod, onPlay, index }: LecteurCompoProps) {
  return (
    <div
      className="w-full flex lg:flex-row gap-10 lg:gap-10 justify-between px-[2rem] lg:px-[3rem] mb-[1rem] items-center h-[5rem] lg:h-14 hoveredCard"
      onClick={(event: React.MouseEvent<HTMLDivElement>) => onPlay(prod, index)}
      style={
        {
          // backgroundColor: "rgba(0, 0, 0, 0.5)",
          // backdropFilter: "blur(5px)",
          // boxShadow: "0px 15px 9.9px 8px rgba(0, 0, 0, 0.25)",
        }
      }
    >
      <div>
        <h3 className="text-whiteText font-LexendTera uppercase lg:text-xl">
          {prod.title}
        </h3>
        <div className="flex gap-[2rem]">
          <p className="text-whiteText font-Lekton-Regular text-[0.8rem] sm:text-[1rem] uppercase">
            bpm : {prod.bpm}
          </p>
          <p className="text-whiteText font-Lekton-Regular text-[0.8rem] sm:text-[1rem]  uppercase">
            Style : {prod.style}
          </p>
        </div>
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
