<script>
	import { fade } from 'svelte/transition';
import { goto } from "$app/navigation";
import Search from "$lib/icons/Search.svelte"
import {search} from '../store.js'
import Hamburger from "$lib/icons/Hamburger.svelte"
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
let screen
let showMenu = false
$: screen > 767 ? showMenu = true: showMenu = false;
$: if(screen > 767){
    showMenu = true;
}
$: if(screen <= 767){
    showMenu = false;
    searchOpened = true;
}
</script>

<svelte:window bind:outerWidth={screen}/>
<nav class="bg-white flex justify-between p-2 flex-wrap md:pb-2">
    <div class="md:w-40 w-20">
        <img on:click={()=>{goto("/")}} class="cursor-pointer" src="/img/logo.png" alt="">
    </div>{screen}
    {#if screen < 767}
        <div class="text-rouge-dark" on:click={()=>{showMenu = !showMenu}}>
            <Hamburger open={showMenu} size="40"/>
        </div>
    {/if}
    {#if showMenu}
    <ul transition:fade class="flex md:items-center md:p-0 p-0 items-start gap-6 md:w-auto w-screen md:flex-row flex-col ">
            <li class="{searchOpened ? '' : "h-10 w-10"}  w-full text-rouge border border-rouge p-2 rounded-full flex justify-center items-center md:mt-0 mt-10">
                <input on:keypress={handleKeyPress} bind:value={searchWords} placeholder="Recherche d'actualité.." class="{searchOpened ? 'md:w-60 w-full px-2' : "w-0 px-0"} text-black" type="text">
                <Search on:click={()=>{toggleSearch()}} size="20"/>
            </li>
        {#each liens as lien}
            <li><a class="{lien.href == currentPage ? 'font-bold' : ''}" href="{lien.href}">{lien.text}</a></li>
        {/each}
    </ul>
    {/if}
</nav>