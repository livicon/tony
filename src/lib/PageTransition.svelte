<script>
  import { fly } from "svelte/transition";
  export let refresh = "";
</script>

{#key refresh}
  <div
    in:fly={{ y: -30, duration: 350, delay: 350 }}
    out:fly={{ y: -30, duration: 350 }}
  >
    <slot />
  </div>
{/key}
