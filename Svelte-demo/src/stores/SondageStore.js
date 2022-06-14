import { writable } from "svelte/store";

const SondageStore = writable( [
    {
        id: 1,
        question: "Svelte est plus un compilateur qu'un framework ?",
        choix1: "Oui !",
        choix2: "Non !",
        voteC1: 0,
        voteC2: 0,
    },
]);

export default SondageStore;