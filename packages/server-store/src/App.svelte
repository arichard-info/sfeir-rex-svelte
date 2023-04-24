<script>
    import userStore from './store';
    import UserCard  from './UserCard.svelte';
    import LoginCard  from './LoginCard.svelte';

    export let user = {};

    if(user) userStore.set(user);
</script>

<main>
  {#if $userStore}
    <UserCard />
    {:else}
    <LoginCard />
  {/if}
</main>



<style>
    :global(body) {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        background-color: grey;
    }

    :global(body *) {
        box-sizing: border-box;
    }

    main {
        height: 100vh;
        display: flex;
        align-items: center;
    }
</style>