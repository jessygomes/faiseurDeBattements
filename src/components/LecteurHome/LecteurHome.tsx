"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex gap-2"
    >
      <audio ref={audioRef} src="\Audios\En_mi_casa.mp3"></audio>
      <p className="font-Sansation_Light text-whiteText uppercase">sound</p>
      <input type="radio" name="on-off" id="on" onClick={handlePlay} />
      <p className="font-Sansation_Light text-whiteText uppercase">ON</p>
      <p className="font-Sansation_Light text-whiteText uppercase">|</p>
      <input type="radio" name="on-off" id="off" onClick={handlePause} />
      <p className="font-Sansation_Light text-whiteText uppercase">off</p>
    </motion.div>
  );
}
