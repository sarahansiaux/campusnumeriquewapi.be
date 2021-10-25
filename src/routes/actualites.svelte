<script>
import Actualite from "$lib/Actualite.svelte";
import Headers from "$lib/Headers.svelte";
import {search} from "../store.js"
let searchRequest
search.subscribe(value=>{
    searchRequest = value
})

const articles = ["","","",""]
</script>

<Headers title="Actualités - Campus Numérique Tournai"/>

<h1 class="text-4xl text-center mt-20 mb-10">Actualités</h1>

{#if searchRequest}
<p class="text-center mb-10">Recherche: {searchRequest}</p>
{/if}
<section class="flex max-w-5xl justify-evenly gap-4 flex-wrap mx-auto w-full px-2">
    {#each articles as article}
        <Actualite/>
    {/each}
</section>


