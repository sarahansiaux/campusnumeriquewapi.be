<script>
    import Facebook from "$lib/icons/Facebook.svelte"
    import Instagram from "$lib/icons/Instagram.svelte";
    import Linkedin from "./icons/Linkedin.svelte";
    import Website from "./icons/Website.svelte";
    import Youtube from "./icons/Youtube.svelte";
    import {cms} from '$lib/cms.js'
    export let partenaire
    const linkStyle = `transition duration-200 ease-in-out border border-rouge p-1 flex w-10 h-10 justify-center hover:bg-rouge hover:text-white text-rouge items-center`
    
</script>
<div class="md:w-80 border mb-4 flex flex-col justify-between p-2">
    <img src="{cms}{partenaire.logo.path}" class="w-full" alt="">
    <h3 class="mt-4 text-sm font-bold">{partenaire.nom}</h3>
    <p class="my-4 px-1 text-xs">{partenaire.desc}</p>
    <div class="m-4 flex gap-1 justify-center">
        {#if partenaire.facebook}
            <a target="_blank" class="{linkStyle}" href="{partenaire.facebook}"><Facebook size="15"/></a>
        {/if}
        {#if partenaire.instagram}
            <a target="_blank" class="{linkStyle}"  href="{partenaire.instagram}"><Instagram size="15"/></a>
        {/if}
        {#if partenaire.linkedin}
            <a target="_blank" class="{linkStyle}"  href="{partenaire.linkedin}"><Linkedin size="15"/></a>
        {/if}
        {#if partenaire.www}
            <a target="_blank" class="{linkStyle}"  href="{partenaire.www}"><Website size="15"/></a>
        {/if}
        {#if partenaire.youtube}
            <a target="_blank" class="{linkStyle}"  href="{partenaire.youtube}"><Youtube size="15"/></a>
        {/if}
    </div>
</div>