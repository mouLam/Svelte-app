<script>
    import { createEventDispatcher} from 'svelte';
    export let TabList;
    export let currentTab;

    const dispatch = createEventDispatcher();

</script>

<div class="onglets">
    <ul>
        {#each TabList as item}
            <li on:click={() => dispatch('changeTab', item)}>
                <div class:active={item === currentTab}>{item}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .active {
        color: #6C63FF;
        border-bottom: 2px solid #dddddd;
        padding-bottom: 5px;
    }
    .onglets {
        margin-bottom: 30px;
    }
    ul {
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }
    li {
        margin: 0 15px;
        font-size: 18px;
        cursor: pointer;
        color: #333333;
    }
</style>