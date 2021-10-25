<script>
    import Actualites from '$lib/Actualites.svelte'
import Header from '$lib/Header.svelte'
import Headers from '$lib/Headers.svelte'
import Map from '$lib/Map.svelte';
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
<Map/>
<Actualites/>
<Newsletter/>