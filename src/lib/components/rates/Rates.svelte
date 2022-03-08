<script>
    let rates = [
        {
            title: "عملکرد 1",
            count: 60,
        },
        {
            title: "عملکرد 2",
            count: 45,
        },
        {
            title: "عملکرد 3",
            count: 83,
        },
        {
            title: "عملکرد 4",
            count: 22,
        },
    ];
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
            <h3 class="w-1/4">عملکرد 1</h3>
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
