<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
    import Tableaux from "./utils/Onglets.svelte";
    import SondageForm from "./components/SondageForm.svelte";
    import SondagesList from "./components/SondagesList.svelte";


	let TabList = ['Sondages courants', 'Ajouter un sondage'];
    let currentTab = 'Sondages courants';

    /*let sondages = [
        {
            id: 1,
            question: "Bonjour",
            choix1: "Oui Cava ?",
            choix2: "Bonjour, non !",
            voteC1: 0,
            voteC2: 0,
        },
    ]*/

    // Events Handlers
    const changeTabHandler = (e) => {
        currentTab = e.detail;
    }
    const addSondageHandler = (e) => {
        /*const sondage = e.detail;
        sondages = [...sondages, sondage];
        console.log(sondages);*/
        currentTab = 'Sondages courants';
    }
    /*const handleVoteClick = (e) => {
        const { option, id } = e.detail;
        let sondagesCopie = [...sondages];
        let addMyVote = sondagesCopie.find(sondage => sondage.id === id);
        if (option === 'C1') {
            addMyVote.voteC1 += 1;
        }
        if (option === 'C2') {
            addMyVote.voteC2 += 1;
        }
        sondages = sondagesCopie;
    }*/

</script>

<Header />
<main>
    <Tableaux {currentTab} {TabList} on:changeTab={changeTabHandler}/>
    {#if currentTab === 'Sondages courants'}
        <!--<SondagesList {sondages} on:voteClick={handleVoteClick} />-->
       <SondagesList />
   {:else if (currentTab === 'Ajouter un sondage')}
       <SondageForm on:addSondage={addSondageHandler}/>
   {/if}
</main>
<Footer />

<style>
   main {
       max-width: 960px;
       margin: 40px auto;
   }
</style>