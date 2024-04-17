"use client";
import React, { useEffect, useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";

export default function Lecteur() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState<number[]>([0]);
  // const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    // const handleLoadedMetadata = () => {
    //   setDuration(audio.duration);
    // };

    const handleTimeUpdate = () => {
      if (audioRef.current) {
        setCurrentTime([audioRef.current.currentTime]);
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleSliderChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
    }
  };

  return (
    <div className="w-[95%] lg:w-1/2">
      <div
        className="w-full flex flex-col lg:flex-row gap-2 lg:gap-10 justify-center items-center h-[8rem] lg:h-20"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(5px)",
          boxShadow: "0px 15px 9.9px 8px rgba(0, 0, 0, 0.25)",
        }}
      >
        <audio ref={audioRef} src="\Audios\GingerAle_90.mp3"></audio>
        <h3 className="text-whiteText font-LexendTera uppercase text-xl">
          magenta
        </h3>
        <div className="flex gap-5">
          <p className="text-whiteText font-Lekton-Regular uppercase">
            bpm : 135
          </p>
          <p className="text-whiteText font-Lekton-Regular uppercase">
            Style : Trap
          </p>
        </div>
        <div className="flex gap-5">
          <button
            className={
              isPlaying
                ? "neon text-2xl"
                : "text-white hover:text-[#c74e4e] transition-all duration-300 ease-in-out"
            }
            onClick={handlePlay}
          >
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <button
            className={
              !isPlaying
                ? "neon text-2xl"
                : "text-white hover:text-[#c74e4e] transition-all duration-300 ease-in-out"
            }
            onClick={handlePause}
          >
            <FontAwesomeIcon icon={faPause} />
          </button>
          <button
            className="text-white hover:text-[#c74e4e] transition-all duration-300 ease-in-out"
            onClick={handleStop}
          >
            <FontAwesomeIcon icon={faStop} />
          </button>
        </div>
      </div>
      <Slider
        className="slider-full-width"
        value={currentTime}
        onValueChange={handleSliderChange}
        max={audioRef.current?.duration || 0}
        step={1}
      />
    </div>
  );
}
