<script>
import { goto } from "$app/navigation";
import Search from "$lib/icons/Search.svelte"
import {search} from '../store.js'
const liens = [
    {
        text:"Accueil",href:"/"
    },
    {
        text:"Actualités",href:"/actualites"
    }
]

let searchOpened = false
let searchWords


const toggleSearch = ()=>{
    if(searchOpened){
        goto("/actualites")
        search.update(n=>searchWords)
    }
    else{
        searchOpened = true
    }
}

const handleKeyPress = (e)=>{
    if(e.charCode === 13){
        toggleSearch()
    }
}

export let currentPage
</script>

<nav class="bg-white flex justify-between p-2">
    <img on:click={()=>{goto("/")}} class="md:w-40 w-20 cursor-pointer" src="https://picsum.photos/200/75" alt="">
    <ul class="flex items-center gap-6 mr-6">
            <li class="{searchOpened ? '' : "h-10 w-10"} text-rouge border border-rouge p-2 rounded-full flex justify-center items-center">
                <input on:keypress={handleKeyPress} bind:value={searchWords} placeholder="Recherche d'actualité.." class="{searchOpened ? 'w-60 px-2' : "w-0 px-0"} text-black" type="text">
                <Search on:click={()=>{toggleSearch()}} size="20"/>
            </li>
        {#each liens as lien}
            <li><a class="{lien.href == currentPage ? 'font-bold' : ''}" href="{lien.href}">{lien.text}</a></li>
        {/each}
    </ul>
</nav>