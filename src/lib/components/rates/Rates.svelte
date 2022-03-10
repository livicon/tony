<script>
    export let datas
    let rates = [];
  console.log(datas);

for (const property in datas){
rates.push({name:property,count:datas[property] })
   
  }
  console.log(rates);
  
        
    

  
    function generateRaters() {
        const newList = rates.map((item) => {
            if (item.count > 80)
                return {
                    ...item,
                    color: "green",
                    rateT: { en: "nice", ab: "کمال", fa: "عالی" },
                };
            else if (item.count < 35)
                return {
                    ...item,
                    color: "red",
                    rateT: { en: "low", ab: "تضعیف", fa: "ضعیف" },
                };
            else
                return {
                    ...item,
                    color: "yellow",
                    rateT: { en: "midle", ab: "اوسط", fa: "متوسط" },
                };
        });
        rates = newList;
    }
    generateRaters();
</script>

<div class="rater">
    {#each rates as item}
        <div class="flex justify-betweem items-center w-full">
            <h3 class="w-1/4">{item.name}</h3>
            <div class="w-3/4 rounded-full flex items-center justify-end gap-2">
                <span>{item.rateT.fa}</span>
                <div
                    class={`rater__row ${item.color} text-xs font-medium text-white text-center p-2 leading-none rounded-full`}
                    style={`width: ${item.count}%`}
                />
            </div>
        </div>
    {/each}
</div>
