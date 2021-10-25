<script>
    import Facebook from "$lib/icons/Facebook.svelte"
    import Instagram from "$lib/icons/Instagram.svelte";
    import Linkedin from "./icons/Linkedin.svelte";
    import Website from "./icons/Website.svelte";
    import Youtube from "./icons/Youtube.svelte";
    export let titre = "Sample title"
    export let image = "https://picsum.photos/1000/600"
    export let description = "Lorem djiosqjhdqsiodjsqoid dqsio sqduihsq"
    export let liens = {
        facebook:"https://facebook.com",
        instagram:"httsp://instagram.com",
        linkedin:"dd",
        website:"dd",
        youtube:"dd"
    }


</script>
<div class="md:w-3/12 w-12/12 border mb-4">
    <img src="{image}" class="w-full" alt="">
    <h3 class="mt-4 text-sm font-bold">{titre}</h3>
    <p class="my-4 px-1 text-xs">{description}</p>
    <div class="m-4 flex gap-1 justify-center">
        {#if liens.facebook}
            <a target="_blank" class="border border-rouge p-1 flex w-10 h-10 justify-center hover:bg-rouge hover:text-white text-rouge items-center" href="{liens.facebook}"><Facebook size="15"/></a>
        {/if}
        {#if liens.instagram}
            <a target="_blank" class="border border-rouge p-1 flex w-10 h-10 justify-center hover:bg-rouge hover:text-white text-rouge items-center" href="{liens.facebook}"><Instagram size="15"/></a>
        {/if}
        {#if liens.linkedin}
            <a target="_blank" class="border border-rouge p-1 flex w-10 h-10 justify-center hover:bg-rouge hover:text-white text-rouge items-center" href="{liens.facebook}"><Linkedin size="15"/></a>
        {/if}
        {#if liens.website}
            <a target="_blank" class="border border-rouge p-1 flex w-10 h-10 justify-center hover:bg-rouge hover:text-white text-rouge items-center" href="{liens.facebook}"><Website size="15"/></a>
        {/if}
        {#if liens.youtube}
            <a target="_blank" class="border border-rouge p-1 flex w-10 h-10 justify-center hover:bg-rouge hover:text-white text-rouge items-center" href="{liens.facebook}"><Youtube size="15"/></a>
        {/if}
    </div>
</div>