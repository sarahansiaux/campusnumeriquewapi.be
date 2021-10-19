<script>
    import Headers from '$lib/Headers.svelte'
import {onMount} from 'svelte'
    let articles = []
    onMount(async ()=>{
        const res = await fetch("https://baconipsum.com/api/?type=meat-and-filler")
        articles  = await res.json()
    })
</script>

<Headers/>

{#each articles as article}
    <p>{article}</p>
{:else}
    <p>Chargement</p>
{/each}