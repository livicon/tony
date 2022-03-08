<script>
  import { onMount } from "svelte";
  import { browser } from '$app/env';
  import axios from "axios";
  import NavLink from "./components/NavLink.svelte";
  import Sidebar, { openSidebar } from "./Sidebar.svelte";
  import { createEventDispatcher } from "svelte";
  export let site;
  export let layat;
  const dispacher = createEventDispatcher();
  let change = ee => dispacher("langChange", ee);
  let defaultLang = "fa"
  if (browser) {
    defaultLang = sessionStorage.getItem("deflang")
  }
</script>
<nav class={`navbar ${layat}`}>
  <h3 class="navbar__logo">{site?.BRANDNAME}</h3>
  <ul class="navbar__list">
    <li class="navbar__item">
      <NavLink href="/">{site?.HOME_PAGE}</NavLink>
    </li>
    <li class="navbar__item">
      <NavLink href="/agencies">{site?.AGENCIES}</NavLink>
    </li>
    <li class="navbar__item">
      <NavLink href="/airlines">{site?.AIRLINES}</NavLink>
    </li>
    <li class="navbar__item">
      <NavLink href="/blog">{site?.BLOG}</NavLink>
    </li>
    <li class="navbar__item">
      <NavLink href="/about">{site?.ABOUT_US}</NavLink>
    </li>
    <li class="navbar__item">
      <NavLink href="/contact">{site?.CONTACT_US}</NavLink>
    </li>
  </ul>
  <ul class="navbar__list">
    <li class="navbar__link" on:click={()=>change("ab")}>عربی</li>
    <li class="navbar__link" on:click={()=>change("fa")}>فا</li>
    <li class="navbar__link" on:click={()=>change("en")}>EN</li>
  </ul>
  <button on:click={openSidebar} class="mobile__menu">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h8m-8 6h16"
      />
    </svg>
  </button>
  <Sidebar />
</nav>
