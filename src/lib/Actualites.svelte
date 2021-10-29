<script>
import Actualite from "./Actualite.svelte";

    export let actualites = []
</script>
<h2 id="actualites" class="text-4xl text-center mt-20">Actualités</h2>
<hr class="border-none bg-rouge h-1 w-24 mx-auto my-10">
<div class="flex flex-wrap max-w-6xl mx-auto w-full justify-evenly px-4 mb-10">
    {#each actualites as actualite}
        <Actualite titre={actualite.titre} lien={actualite.lien} date={actualite.date} image={actualite.image.path}/>
    {/each}
</div>
<a href="/actualites" class="border-rouge hover:border-rouge-dark transition duration-500 ease-in-out hover:text-white hover:bg-rouge-dark border-2 mt-10 text-rouge text-rouge w-60 text-center h-10 rounded-sm flex justify-center items-center mx-auto">Voir toutes les actualités</a>
