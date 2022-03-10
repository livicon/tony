<script>
  import AgencyCard from "$lib/cards/AgencyCard.svelte";
import AirlineCard from "$lib/cards/AirlineCard.svelte";
import {cash} from "$lib/cash/cash";
import { each } from "svelte/internal";
import { onMount } from 'svelte';

 let als
 cash.subscribe((item)=>{
   als=item.AirLines
 
 })

</script>


<h1 class="page__title">شرکت های هواپیمایی</h1>
<div class="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-10">
 {#each als as al}
 <a href={"/info?airlines="+al.name}>
  <AirlineCard data={al} /> 
</a>
  {/each}
  
  
</div>
