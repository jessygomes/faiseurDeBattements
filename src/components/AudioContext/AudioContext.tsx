import React from "react";

export const AudioContext = React.createContext({
  currentAudio: null as HTMLAudioElement | null,
  setCurrentAudio: (audio: HTMLAudioElement | null) => {},
});
