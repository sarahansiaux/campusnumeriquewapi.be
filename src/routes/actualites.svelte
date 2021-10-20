<script>
import Actualite from "$lib/Actualite.svelte";
import Headers from "$lib/Headers.svelte";


const articles = ["","","",""]
</script>

<Headers title="Actualités - Campus Numérique Tournai"/>

<h1 class="text-4xl text-center my-20">Actualités</h1>
<section class="flex max-w-5xl flex-wrap mx-auto w-full px-2">
    {#each articles as article}
        <Actualite/>
    {/each}
</section>