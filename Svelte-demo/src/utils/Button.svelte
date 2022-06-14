<script>
    export let type = 'primaryStyle';
    export let flat = false;
    export let inverse = false;
</script>

<button class={type} class:flat={flat} class:inverse={inverse} on:click>
    <slot></slot>
</button>

<style>
    button {
        cursor: pointer;
        border: 0;
        border-radius: 6px;
        padding: 8px 12px;
        font-weight: bolder;
        box-shadow: 1px 2px 3px rgba(0,0,0, 0.2);
    }
    .primaryStyle {
        background: red;
        color: white;
    }
    .secondaryStyle {
        background: limegreen;
        color: white;
    }
    .flat {
        box-shadow: none;
    }
    .primaryStyle.inverse {
        background: white;
        color: red;
        border: 1px solid red;
    }
    .secondaryStyle.inverse {
        background: white;
        color: limegreen;
        border: 1px solid limegreen;
    }
</style>