<script>
import { goto } from "$app/navigation";

    
</script>

<nav class="bg-white flex justify-between p-2">
    <img on:click={()=>{goto("/")}} class="md:w-40 w-20 cursor-pointer" src="https://picsum.photos/200/75" alt="">
    <ul class="flex items-center gap-6 mr-6">
        <li><a href="/">Accueil</a></li>
        <li><a href="/actualites">Actualités</a></li>
    </ul>
</nav>