<script>
    import { createEventDispatcher} from 'svelte';
    import { v4 as uuidv4 } from 'uuid';
    import Button from "../utils/Button.svelte";
    import SondageStore from "../stores/SondageStore";

    let dispatch = createEventDispatcher();
    let champs = {
        question : '',
        choix1 : '',
        choix2 : ''
    }
    let isValid = false;
    let errors = {
        question : '',
        choix1 : '',
        choix2 : ''
    }
    
    const submitHandler = () => {
        // Valider les champs
        isValid = true;
        if ( champs.question.trim().length < 3 ) {
            isValid = false;
            errors.question = 'Votre question est trop courte (>=3 caractères)';
        } else {
            errors.question = '';
        }
        if ( champs.choix1.trim().length < 1 ) {
            isValid = false;
            errors.choix1 = 'Choix Obligatoire';
        } else {
            errors.choix1 = '';
        }
        if ( champs.choix2.trim().length < 1 ) {
            isValid = false;
            errors.choix2 = 'Choix Obligatoire';
        } else {
            errors.choix2 = '';
        }
        if (isValid) {
            let nouveauSondage = {...champs, voteC1: 0, voteC2: 0, id: uuidv4()};

            // Enregistre le nouveau sondage dans le store
            SondageStore.update(sondage => {
                return [nouveauSondage, ...sondage];
            });

            //dispatch("addSondage", sondage);
            dispatch("addSondage");
        }
    }
</script>

<form on:submit|preventDefault={submitHandler}>
    <div class="formSondage">
        <label for="question">Posez une question...</label>
        <input type="text" id="question" bind:value={champs.question}>
        <div class="error">{errors.question}</div>
    </div>
    <div class="formSondage">
        <label for="choix-1">Choix 1 :</label>
        <input type="text" id="choix-1" bind:value={champs.choix1}>
        <div class="error">{errors.choix1}</div>
    </div>
    <div class="formSondage">
        <label for="choix-2">Choix 2 :</label>
        <input type="text" id="choix-2" bind:value={champs.choix2}>
        <div class="error">{errors.choix2}</div>
    </div>
    <Button type="secondaryStyle" flat={true}>Créer le sondage</Button>
</form>

<style>
    form {
        width: 350px;
        margin: 0 auto;
        text-align: center;
    }
    .formSondage {
        margin: 15px auto;
    }
    input {
        width: 100%;
        border-radius: 6px;
    }
    label {
        margin: 9px auto;
        text-align: center;
    }
    .error {
        font-weight: bolder;
        font-size: 11px;
        color: red;
    }
</style>