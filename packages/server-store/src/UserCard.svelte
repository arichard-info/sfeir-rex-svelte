<script>
    import userStore from "./store"

    $: name = $userStore.name && `${$userStore.name?.title} ${$userStore.name?.first} ${$userStore.name?.last}`
</script>

<div class="card">
    <img src={$userStore.picture?.large} alt="Picture of {name}" />
    <h1>{name}</h1>
    <span>{$userStore.email}</span>


    <div class="informations">
        <ul>
            <li>Nationalité: {$userStore.nat}</li>
            <li>Age: {$userStore.dob.age}</li>
            <li>Téléphone: {$userStore.phone}</li>
            <li>Mobile: {$userStore.cell}</li>
        </ul>
    </div>

</div>

<style>
    .informations {
        border-top: 1px solid rgb(186, 186, 186);
        width: 100%;
        margin-top: 24px;
        padding-top: 24px;
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