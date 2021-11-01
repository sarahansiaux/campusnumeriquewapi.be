<script>
import Actualite from "$lib/Actualite.svelte";
import Headers from "$lib/Headers.svelte";
import {search} from "../store.js"
import {cms,token} from '$lib/cms.js'
import { onMount } from "svelte";

let articles = []
let articlesCollection = []
let loaded = false

$: if($search.length > 0){
    articles = []
    articlesCollection.filter(e=>{
        if(e.titre.toLowerCase().includes($search.toLowerCase())){
            articles.push(e)
        }
    })
    
}
else{
        articles = articlesCollection
    }
const fetchArticles = async () =>{
    const res = await fetch(`${cms}/api/collections/get/actualites`,{
        method:'POST',
        headers:{
            'Cockpit-Token':token,
            'Content-Type':'application/json'
            
        },
        body:JSON.stringify({
            sort:{_created:-1},
            limit:15
        })
    })
    let totalArticles = await res.json()
    totalArticles = totalArticles.entries
    return totalArticles 
}

const removeResearch = () =>{
    search.update(n=>"")
    articles = articlesCollection
}

onMount(async () =>{
    articlesCollection = await fetchArticles()
    articles = articlesCollection
    loaded = true
})


</script>

<Headers title="Actualités - Campus Numérique Tournai"/>

<h1 class="text-4xl text-center mt-20 mb-10">Actualités</h1>

{#if $search}
<p class="text-center mb-10">Recherche: {$search} <span class="cursor-pointer" on:click={()=>{removeResearch()}}>❌</span> </p>
{/if}
<section class="flex max-w-5xl justify-evenly gap-4 flex-wrap mx-auto w-full px-2">
    
    {#if !loaded}
        <p>Chargement des actualités</p>
    {:else if loaded && articles.length > 0}
        {#each articles as article}
            <Actualite titre={article.titre} lien={article.lien} date={article.date} image={article.image.path}/>
        {/each}
    {:else}
        <p>Aucun résultat pour cette recherche</p>
    {/if}
</section>


