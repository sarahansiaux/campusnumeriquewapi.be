
<script>
    export let title = "Campus Numérique Tournai"
    export let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pellentesque turpis vitae mattis. Cras rutrum turpis non urna mattis maximus. "
    export let url = "https://campus-numerique.be"
    export let image = url + "/share.png"
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description}/>
  <link rel="canonical" href="{url}">
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{url}/" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description}/>
  <meta name="image" property="og:image" content={image} />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="{url}/" />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={image} />
</svelte:head>