<script context="module">
	export async function load({ page, fetch, session, stuff }) {
		return{
      props:{
        page:page.path
      }
    }
	}
</script>

<script>
import Footer from "$lib/Footer.svelte";
import NavBar from "$lib/NavBar.svelte";
let screen = 0
export let page
  import "../app.css";
</script>

<main class="flex flex-col min-h-screen">
  <NavBar currentPage="{page}"/>
  <div class="mb-20">
    <slot />
  </div>
  <Footer/>
</main>