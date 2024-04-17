"use client";
import { useRef, useState } from "react";

export default function LecteurHome() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  return (
    <div className="flex gap-2">
      <audio ref={audioRef} src="\Audios\GingerAle_90.mp3"></audio>
      <p className="font-Sansation_Light text-whiteText uppercase">sound</p>
      <input type="radio" name="on-off" id="on" onClick={handlePlay} />
      <p className="font-Sansation_Light text-whiteText uppercase">ON</p>
      <p className="font-Sansation_Light text-whiteText uppercase">|</p>
      <input type="radio" name="on-off" id="off" onClick={handlePause} />
      <p className="font-Sansation_Light text-whiteText uppercase">off</p>
    </div>
  );
}
