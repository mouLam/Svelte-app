<script>
    //import { createEventDispatcher} from 'svelte';
    import Card from "../utils/Card.svelte";
    import SondageStore from "../stores/SondageStore";
    import Button from "../utils/Button.svelte";
    import { tweened } from "svelte/motion";

    //const dispatch = createEventDispatcher();
    export let sondage;

    // Variables réactives Svelte
    $: nbVotesTotal = sondage.voteC1 + sondage.voteC2;
    $: percent1 = Math.floor(100 / nbVotesTotal * sondage.voteC1) || 0;
    $: percent2 = Math.floor(100 / nbVotesTotal * sondage.voteC2) || 0;

    // Tweened values : Animer la progression des votes
    const progressPercent1 = tweened(0 , {duration: 400});
    const progressPercent2 = tweened(0 , {duration: 400});
    $: progressPercent1.set(percent1);
    $: progressPercent2.set(percent2);

    // Handle Click
    const handleVoteClick = (option, id) => {
        //dispatch("voteClick", {option : option, id : id})

        SondageStore.update((currentSondage) => {
            let sondagesCopie = [...currentSondage];
            let addMyVote = sondagesCopie.find(sondage => sondage.id === id);
            if (option === 'C1') {
                addMyVote.voteC1 += 1;
            }
            if (option === 'C2') {
                addMyVote.voteC2 += 1;
            }
            return sondagesCopie;
        })
    }
    const handleDeleteClick = (id) => {
        SondageStore.update((currentSondage) => {
            return currentSondage.filter(sondage => sondage.id !== id);
        })
    }
</script>

<Card>
    <div class="sondage-infos">
        <h2>{sondage.question}</h2>
        <span class="nbVote">Nombre de votes : <strong> {nbVotesTotal } </strong> </span>
        <div class="vote" on:click={() => handleVoteClick('C1', sondage.id)}>
            <div class="percent percent-1" style="width: {$progressPercent1}%"></div>
            <span>{ sondage.choix1 } ({sondage.voteC1})</span>
        </div>
        <div class="vote" on:click={() => handleVoteClick('C2', sondage.id)}>
            <div class="percent percent-2" style="width: {$progressPercent2}%"></div>
            <span>{ sondage.choix2 } ({sondage.voteC2})</span>
        </div>
        <div class="deleteButton">
            <Button flat={true} on:click={() => {handleDeleteClick(sondage.id)}}>Supprimer</Button>
        </div>
    </div>
</Card>


<style>
    h3 {
        margin: auto;
        color: #6C63FF;
    }
    .nbVote {
        margin-top: 5px;
        font-size: 14px;
        color: #6C63FF;
        opacity: 0.6;
        margin-bottom: 25px;
    }
    .vote {
        background: #fafafa;
        cursor: pointer;
        margin: 10px auto;
        position: relative;
    }
    .vote:hover {
        opacity: 0.7;
    }
    span {
        display: inline-block;
        padding: 10px 20px;
    }
    .sondage-infos {

    }
    .percent {
        height: 100%;
        position: absolute;
        box-sizing: border-box;
    }
    .percent-1 {
        background: rgba(255,116,148,0.2);
        border-left: 3px solid red;
    }
    .percent-2 {
        background: rgba(116, 186, 255, 0.2);
        border-left: 3px solid blue;
    }
    .deleteButton {
        margin-top: 30px;
        text-align: right;
    }
</style>