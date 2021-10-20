<script>
import Footer from "$lib/Footer.svelte";
import NavBar from "$lib/NavBar.svelte";

  import "../app.css";
</script>

<main class="flex flex-col min-h-screen">
  <NavBar/>
  <div class="">
    <slot />
  </div>
  <Footer/>
</main>