<script>
    export let size
    export let open
</script>
<svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer stroke-current" width="{size}" height="{size}" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <line x1="4" y1="{open? '20' : '8'}" x2="20" y2="{open? '8' : '8'}" />
    <line x1="4" y1="{open? '8' : '16'}" x2="20" y2="{open? '20' : '16'}" />
  </svg>