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
<div class="w-80 border mb-4 flex flex-col justify-between px-2 py-8">
    <a target="_blank" href={partenaire.www ? partenaire.www : '#'}>
        <img src="{cms}{partenaire.logo.path}" class="h-20 mx-auto" alt="">
    </a>
    <h3 class="mt-4 text-sm font-bold">{partenaire.nom}</h3>
    <p class="my-4 px-1 text-xs">{partenaire.desc}</p>
    <div class="mt-4 flex gap-1 justify-center">
        {#if partenaire.www}
            <a rel="noreferrer" title="Site internet" target="_blank" class="{linkStyle}"  href="{partenaire.www}"><Website size="15"/></a>
        {/if}
        {#if partenaire.fb}
            <a rel="noreferrer" title="Facebook" target="_blank" class="{linkStyle}" href="{partenaire.fb}"><Facebook size="15"/></a>
        {/if}
        {#if partenaire.instagram}
            <a rel="noreferrer" title="Instagram" target="_blank" class="{linkStyle}"  href="{partenaire.instagram}"><Instagram size="15"/></a>
        {/if}
        {#if partenaire.linkedin}
            <a rel="noreferrer" title="Linkedin" target="_blank" class="{linkStyle}"  href="{partenaire.linkedin}"><Linkedin size="15"/></a>
        {/if}
        
        {#if partenaire.ytb}
            <a rel="noreferrer" title="Youtube" target="_blank" class="{linkStyle}"  href="{partenaire.ytb}"><Youtube size="15"/></a>
        {/if}
    </div>
</div>