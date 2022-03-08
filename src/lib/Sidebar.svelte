<script context="module">
  import { fade } from "svelte/transition";
  import { writable } from "svelte/store";
  const show = writable(false);
  export const openSidebar = () => show.set(true);
  export const closeSidebar = () => show.set(false);
</script>

<script>
  import { lang, currentLang } from "$lib/cash/lang";
  let site = null;
  currentLang.subscribe((e) => (site = e));
  function changeLanguage(ln) {
    lang.subscribe((e) => {
      currentLang.update((n) => (n = e[ln]));
    });
  }
</script>

<div class="sidebar {$show && 'sidebar__active'}" on:click={closeSidebar}>
  <ul class="sidebar__body">
    <li class="sidebar__item">
      <a href="/">{site?.HOME_PAGE}</a>
    </li>
    <li class="sidebar__item">
      <a href="/agencies">{site?.AGENCIES}</a>
    </li>
    <li class="sidebar__item">
      <a href="/airlines">{site?.AIRLINES}</a>
    </li>
    <li class="sidebar__item">
      <a href="/blog">{site?.BLOG}</a>
    </li>
    <li class="sidebar__item">
      <a href="/about">{site?.ABOUT_US}</a>
    </li>
    <li class="sidebar__item">
      <a href="/contact">{site?.CONTACT_US}</a>
    </li>
  </ul>
  <div>
    <button on:click={() => changeLanguage("fa")}>FA</button>
    <button on:click={() => changeLanguage("en")}>EN</button>
    <button on:click={() => changeLanguage("ab")}>AB</button>
  </div>
</div>

{#if $show}
  <div
    transition:fade={{ duration: 150 }}
    class="sidebar__drop"
    on:click={closeSidebar}
  />
{/if}
