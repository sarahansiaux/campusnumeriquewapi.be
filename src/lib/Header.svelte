<script>
import { onMount } from "svelte";

let sliderImages = ['img_1.webp','img_2.webp','img_3.webp']
    let sliderImage = 0
    onMount(()=>{
        const sliderTimer = setInterval(()=>{
            if(sliderImage < 2){
                sliderImage++
            }
            else{
                sliderImage = 0
            }
        },10000)
    })
</script>



<header style="background-image:url(/img/{sliderImages[sliderImage]});background-position:center;height:80vh;background-size:cover;background-color:rgba(0,0,0,0);">
    <div class="h-full bg-black bg-opacity-30">
        <div class="relative flex flex-col justify-center center h-full max-w-5xl w-full mx-auto text-white">
            <h1 class="md:text-5xl mx-2 text-3xl">Entreprendre en Wallonie picarde</h1>
            <p class="my-4 md:w-6/12 mx-2 w-12/12 md:text-2xl text-lg">Le Campus Numérique, c’est <b class="font-bold">5000 m²</b> d’espace dédié au numérique.</p>
            <a href="#partenaires" class="bg-rouge mx-2 hover:bg-rouge-dark transition duration-500 ease-in-out text-white w-40 text-center h-10 rounded-sm flex justify-center items-center">En savoir plus</a>
            <div class="md:flex w-full hidden justify-center gap-5 absolute bottom-4">
                <!--Ne regardez pas ça svp j'ai honte mais bon-->
                <div on:click={()=>{sliderImage = 0; }} class="w-4 h-4 cursor-pointer rounded-full border-white border {sliderImage == 0 ? 'bg-white' : ''}"></div>
                <div on:click={()=>{sliderImage = 1; }} class="w-4 h-4 cursor-pointer rounded-full border-white border {sliderImage == 1 ? 'bg-white' : ''}"></div>
                <div on:click={()=>{sliderImage = 2; }} class="w-4 h-4 cursor-pointer rounded-full border-white border {sliderImage == 2 ? 'bg-white' : ''}"></div>
            </div>
            <a target="_blank" href="http://enmieux.be/"><img class="absolute bg-white w-80 bottom-0 right-4 p-2" src="/img/enmieux.png" alt="En Mieux"></a>
            
        </div>
    </div>
</header>