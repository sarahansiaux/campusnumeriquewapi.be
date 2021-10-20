<script>
    export let titre = "Sample title"
    export let image = "https://picsum.photos/1000/600"
    export let description = "Lorem djiosqjhdqsiodjsqoid dqsio sqduihsq"
    export let liens = [
        {
            href:"https://example.com",
            icone:"Website"
        }
    ]
</script>
<div class="md:w-3/12 w-12/12 border mb-4">
    <img src="{image}" class="w-full" alt="">
    <h3 class="mt-4 text-sm font-bold">{titre}</h3>
    <p class="my-4 px-1 text-xs">{description}</p>
    <div class="m-4">
        {#each liens as lien}
            <a target="_blank" class="border border-rouge p-1" href="{lien.href}">🌎</a>
        {/each}
    </div>
</div>