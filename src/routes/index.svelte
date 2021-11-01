<script>
    import Actualites from '$lib/Actualites.svelte'
import Header from '$lib/Header.svelte'
import Headers from '$lib/Headers.svelte'
import About from '$lib/About.svelte'
import Map from '$lib/Map.svelte';
import Newsletter from '$lib/Newsletter.svelte';
import Partenaires from '$lib/Partenaires.svelte'
import {cms,token} from "$lib/cms.js"
    import {onMount} from 'svelte'
    let articles = []
    let partenaires = []
    onMount(async () =>{
    const resActu = await fetch(`${cms}/api/collections/get/actualites`,{
        method:'POST',
        headers:{
            'Cockpit-Token':token,
            'Content-Type':'application/json'
            
        },
        body:JSON.stringify({
            sort:{_created:-1},
            limit: 3,
        })
    })
    articles = await resActu.json()
    articles = articles.entries
    const resPartenaires = await fetch(`${cms}/api/collections/get/partenaires`,{
        method:'GET',
        headers:{
            'Cockpit-Token':token,
            'Content-Type':'application/json'
        }
    })
    partenaires = await resPartenaires.json()
    partenaires = partenaires.entries
})
</script>

<Headers/>
<Header/>
<About/>
<Partenaires partenaires={partenaires}/>
<Map/>
<Actualites actualites={articles}/>
<Newsletter/>