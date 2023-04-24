<script>
    export let user = {};

    let isOpen = false;

    const handleToggle = () => {
        isOpen = !isOpen;
    }

    $: name = user.name && `${user.name?.title} ${user.name?.first} ${user.name?.last}`
</script>

<main>
    <div class="card">
        <img src={user.picture?.large} alt="Picture of {name}" />
        <h1>{name}</h1>
        <span>{user.email}</span>


        <div class="informations">
            <button on:click={handleToggle} aria-expanded={isOpen}>
                <svg style="tran"  width="20" height="20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7"></path></svg> 
                Informations 
            </button>
    
            {#if isOpen}
                <ul>
                    <li>Nationalité: {user.nat}</li>
                    <li>Age: {user.dob.age}</li>
                    <li>Téléphone: {user.phone}</li>
                    <li>Mobile: {user.cell}</li>
                </ul>
            {/if}
        </div>

    </div>
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

    button {border: none; background: none;display:block; font-size: 20px; cursor: pointer; margin: 0; padding-bottom: 0.5em; padding-top: 0.5em}

	svg { transition: transform 0.2s ease-in;
	}

    .informations {
        border-top: 1px solid rgb(186, 186, 186);
        width: 100%;
        margin-top: 24px;
        padding-top: 24px;
    }
	
	[aria-expanded=true] svg { transform: rotate(0.25turn); }

    main {
        height: 100vh;
        display: flex;
        align-items: center;
    }

    .card {
        width: 100%;
        max-width: 500px;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        padding: 24px;
        border-radius: 12px;
    }

    img {
        width: 120px;
        height: 120px;
        border-radius: 60px;
    }

    h1 {
        font-weight: 900;
    }
</style>