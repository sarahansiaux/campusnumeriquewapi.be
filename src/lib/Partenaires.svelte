<script>
import Partenaire from "./Partenaire.svelte";

    export let partenaires = ["","","","","",""]
</script>
<section id="partenaires" class="max-w-6xl font-full mx-auto text-center px-4">
    <h2 class="text-4xl text-bold my-20">Les partenaires</h2>
    <div class="flex flex-wrap justify-evenly gap-4">
        {#each partenaires as partenaire}
            <!-- <Partenaire titre="{partenaire.titre}" description="{partenaire.description}" image="{partenaire.image}" liens={partenaire.liens}/> -->
            <Partenaire/>
        {/each}
    </div>
</section>