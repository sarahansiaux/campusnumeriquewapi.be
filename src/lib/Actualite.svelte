<script>
import External from "./icons/External.svelte"
    export let titre = "Sample title of an event happening the 3rd of july"
    export let date = "Le 05 Octobre 2021"
    export let lien = "https://example.com"
    export let image = "https://picsum.photos/1000/600"
</script>

<div class="border md:w-80 mb-4">
    <div class="h-40" style={`background-image:url(${image});background-position:center;background-color:gray;background-size:cover;`}></div>
    <h3 class="font-bold text-sm m-2">{titre}</h3>
    <p class="text-gray-400 m-2 text-xs uppercase">{date}</p>
    <a target="_blank" class="mt-4 flex justify-end text-rouge m-2 text-sm hover:text-rouge-dark" href="{lien}"><span class="mr-2">Voir l'évènement</span> <External size="20"/> </a>
</div>