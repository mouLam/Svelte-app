<script>

    import SondageStore from "../stores/SondageStore";
    import SondageInfos from "./SondageInfos.svelte";
    import { fade , fly } from 'svelte/transition';
    import { flip } from 'svelte/animate'
    //import { onDestroy } from "svelte";

    export let sondages = [];

    /*// Souscription au store pour écouter un changement d'état
    const unSubscribe = SondageStore.subscribe((data) => {
        sondages = data;
    })
    // Désabonnement avec LifeCycle Hooks
    onDestroy(() => {
        unSubscribe();
    })*/
    // Alternative souscription automatique : utiliser le $ : $SondageStore
</script>

<div class="sondage-list">
    {#each $SondageStore as sondage (sondage.id)}
        <div in:fade out:fly|local animate:flip={{duration: 800}}>
            <!--{#each sondages as sondage (sondage.id)}-->
            <!--   // Forwarding event to parent-->
            <!--<SondageInfos {sondage} on:voteClick/>-->
            <SondageInfos {sondage} />
        </div>
    {/each}
</div>
<style>
    .sondage-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
    }
</style>