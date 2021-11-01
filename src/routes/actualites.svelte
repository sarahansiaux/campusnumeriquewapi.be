<script>
import Actualite from "$lib/Actualite.svelte";
import Headers from "$lib/Headers.svelte";
import {search} from "../store.js"
import {cms,token} from '$lib/cms.js'
import { onMount } from "svelte";
let searchRequest
search.subscribe(value=>{
    searchRequest = value
})
let articles = []
onMount(async () =>{
    const res = await fetch(`${cms}/api/collections/get/actualites`,{
        method:'POST',
        headers:{
            'Cockpit-Token':token,
            'Content-Type':'application/json'
            
        },
        body:JSON.stringify({
            sort:{_created:-1}
        })
    })
    articles = await res.json()
    articles = articles.entries
    console.log(articles)
})

const removeResearch = () =>{
    search.update(n=>"")
}
</script>

<Headers title="Actualités - Campus Numérique Tournai"/>

<h1 class="text-4xl text-center mt-20 mb-10">Actualités</h1>

{#if searchRequest}
<p class="text-center mb-10">Recherche: {searchRequest} <span class="cursor-pointer" on:click={()=>{removeResearch()}}>❌</span> </p>
{/if}
<section class="flex max-w-5xl md:justify-between justify-center gap-4 flex-wrap mx-auto w-full px-2">
    {#each articles as article}
        <Actualite titre={article.titre} lien={article.lien} date={article.date} image={article.image.path}/>
    {/each}
</section>


