<script>
import axios from "axios";
import Fuse from 'fuse.js'

  import { afterUpdate, onMount } from "svelte";

  let cities = [];

  const client = axios.create({
    baseURL: "http://185.235.42.238:8080",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
  });

  const backendOptions = {
    Group: "register",
    Key: "cityRequest",
  };

  onMount(async () => {
    const { data } = await axios.post("http://185.235.42.238:8080/request",
      JSON.stringify(backendOptions)
    );
    cities = data.payload.city;
  });

  export let placeholder = "";
  let show = false;
  let cityText = "";
  let filters = []
  const openSelect = () => (show = true);
  const closeSelect = () => (show = false);
  const selectCity = (city) => (cityText = city);

  afterUpdate(() => {
    const fuse = new Fuse(cities, {
      keys: ['Name']
    })
    filters = fuse.search(cityText)
    console.log(filters)
  })

</script>

<div class="select">
  <input
    on:focus={openSelect}
    on:blur={closeSelect}
    type="text"
    class="select__input"
    {placeholder}
    bind:value={cityText}
  />
  <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={`h-4 w-4 transform duration-150 ease-out ${show && "rotate-180"}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </div>
  <ul class={`select__menu ${show && "select__menu--active"}`}>
    {#if filters.length}
    {#each filters as city}
      <li on:click={() => selectCity(city.item.Name)} class="select__item">
        <span>
          {city.item.Name}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      </li>
    {/each}
    {:else}
    {#each cities as city}
      <li on:click={() => selectCity(city.Name)} class="select__item">
        <span>
          {city.Name}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      </li>
    {/each}
    {/if}
  </ul>
</div>
