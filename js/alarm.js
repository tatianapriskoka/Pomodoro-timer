import { state } from "./state.js";

const audio = {
    work: new Audio('audio/dudu.mp3'),
    break: new Audio('audio/wave.mp3'),
    relax: new Audio('audio/august.mp3'),
}





export const alarm = () => {
    audio[state.status].play();
    audio.work.volume = 0.2;
    audio.break.volume = 0.2;
    audio.relax.volume = 0.2;
}