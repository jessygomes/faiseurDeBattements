"use client";
import React, { useEffect, useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";

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
    <div className="w-1/2">
      <div
        className="w-full flex gap-10 justify-center items-center h-20"
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
        <p className="text-whiteText font-Lekton-Regular uppercase">
          bpm : 135
        </p>
        <p className="text-whiteText font-Lekton-Regular uppercase">
          Style : Trap
        </p>
        <button
          className={
            isPlaying
              ? "neon font-LexendTera text-xl"
              : "text-white font-LexendTera text-xl hover:text-[#c74e4e] transition-all duration-300 ease-in-out"
          }
          onClick={handlePlay}
        >
          PLAY
        </button>
        <button
          className={
            !isPlaying
              ? "neon font-LexendTera text-xl"
              : "text-white font-LexendTera text-xl hover:text-[#c74e4e] transition-all duration-300 ease-in-out"
          }
          onClick={handlePause}
        >
          PAUSE
        </button>
        <button
          className="text-white font-LexendTera text-xl hover:text-[#c74e4e] transition-all duration-300 ease-in-out"
          onClick={handleStop}
        >
          STOP
        </button>
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
