<script>
    import Date from '$lib/components/Date/date.svelte'
    import Mdate from '$lib/components/Date/Mdate.svelte'
    import { currentDatePicker } from '$lib/contexts/store'
  
    let dateval
    let val=""
    let valm=""
    function doyou(){
        val=dateval.jalali.year+"-"+dateval.jalali.month+"-"+dateval.jalali.day
        valm=dateval.gregorian.year+"-"+dateval.gregorian.month+"-"+dateval.gregorian.day
        console.log(val);
    }
    
    let cdp = "m" 
    currentDatePicker.subscribe(n => cdp = n)
    function toggleDatePicker() {
        currentDatePicker.update(n => n === "m" ? "j" : "m")
    }
</script>

<h1>{val}</h1>
<h1>{valm}</h1>


{#if cdp !== "m"}
    <Date bind:value={dateval} on:submit={()=>doyou()} change={toggleDatePicker} />
{:else}     
    <Mdate bind:value={dateval} on:submit={()=>doyou()} change={toggleDatePicker} />
{/if}