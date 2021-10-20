<script>
    import Actualites from '$lib/Actualites.svelte'
import Header from '$lib/Header.svelte'
import Headers from '$lib/Headers.svelte'
import Newsletter from '$lib/Newsletter.svelte';
import Partenaires from '$lib/Partenaires.svelte'
    import {onMount} from 'svelte'
    let articles = []
    onMount(async ()=>{
        const res = await fetch("https://baconipsum.com/api/?type=meat-and-filler")
        articles  = await res.json()
    })
</script>

<Headers/>
<Header/>
<Partenaires/>
<hr class="border-none bg-rouge h-1 w-24 mx-auto my-10">
<Actualites/>
<Newsletter/>