<script>
import Partenaire from "./Partenaire.svelte";
import {cms} from '$lib/cms.js'
    export let partenaires = []
</script>
<section id="partenaires" class="max-w-6xl font-full mx-auto text-center px-4">
    <h2 class="text-4xl text-bold mt-20">Les partenaires</h2>
    <hr class="border-none bg-rouge h-1 w-24 mx-auto my-10">
    <div class="flex flex-wrap justify-evenly gap-4">
        {#each partenaires as partenaire}
            <Partenaire partenaire={partenaire}/>
        {/each}
    </div>
</section>