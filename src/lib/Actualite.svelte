<script>
    export let titre = "Sample title of an event happening the 3rd of july"
    export let date = "05/05/2005"
    export let lien = "https://example.com"
    export let image = "https://picsum.photos/1000/600"
</script>

<div class="border md:w-3/12 w-12/12 mb-4">
    <img src="{image}" alt="">
    <h3 class="font-bold text-sm m-2">{titre}</h3>
    <p class="text-gray-400 m-2 text-xs">{date}</p>
    <a target="_blank" class="flex justify-end text-rouge m-2 text-sm" href="{lien}">Voir l'évènement 🔗</a>
</div>