<script>
    import jd from 'jalali-date'
    export let value={}
    import Calendar from './calendar.svelte';
    import { JalaliDateTime } from 'jalali-date-time';
    import { beforeUpdate, afterUpdate } from 'svelte';
    import { date } from './date';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    const submit = () => dispatch('submit');
    let jdt = JalaliDateTime()
    let jdate = new jd();
    export let change
    const MmonthChecker = (e) => {
        switch (e) {
            case 1:
                return "فروردین";
            case 2:
                return "اردیبهشت";

            case 3:
                return "خرداد";

            case 4:
                return "تیر";

            case 5:
                return "مرداد";

            case 6:
                return "شهریور";

            case 7:
                return "مهر";

            case 8:
                return "آبان";

            case 9:
                return "اذر";

            case 10:
                return "دی";

            case 11:
                return "بهمن";

            case 12:
                return "اسفند";
        }
    };

    let gmd=""
    let cm = new jd();
    let gd = cm.getDate();
    let gm = cm.getMonth();
    let gy = cm.getFullYear();
    if(gm==12){
        gmd = cm.getFullYear()+" - "+(cm.getFullYear()+1);
        }else{
            gmd = cm.getFullYear();
        }
  
    let mm = 0
    if(gm==12){
        gmd = cm.getFullYear()+" - "+(cm.getFullYear()+1);
        }else{
            gmd = cm.getFullYear();
        }
    function nextMonthes() {
        if ((gm + 2) > 12) {
          cm.setMonth(gm - 10)
          gm = cm.getMonth()
          cm.setFullYear(cm.getFullYear() + 1)

        } else {
            cm.setMonth(gm + 2)
            gm = cm.getMonth()
        }
        gd = cm.getDate();
        gy=cm.getFullYear();
        if(gm==12){
        gmd = cm.getFullYear()+" - "+(cm.getFullYear()+1);
        }else{
            gmd = cm.getFullYear();
        }
        gm = cm.getMonth();
       
    }
    function prevMonth() {
        if ((gm - 2) < 1) {
          cm.setMonth(gm + 10)
          gm = cm.getMonth()
          cm.setFullYear(cm.getFullYear() - 1)
        } else {
            cm.setMonth(gm - 2)
            gm = cm.getMonth()

        }
        gd = cm.getDate();
        gm = cm.getMonth();
        gy=cm.getFullYear();
        if(gm==12){
        gmd = cm.getFullYear()+" - "+(cm.getFullYear()+1);
        }else{
            gmd = cm.getFullYear();
        }
    }
    let compatible=(e) => (e<10) ? "0"+e : e
    
    let firstDay = getSecondMonthDays(gy,gm)
    let secondDay = getSecondMonthDays(((gm+1)>12?gy:gy+1),(gm+1)%12)

    function getSecondMonthDays(y,m) {

       let mnm=y+'-'+compatible(m)
       let result = jdt.calendar(mnm);
        return result
    }
let sendDate=(e)=>{
   
    let m=e.date.split("-")
    let s=jdate.toGregorian(m[0], m[1], m[2])
    let dates={jalali:{
        day:parseInt(m[2]),
            month:parseInt(m[1]),
            year:parseInt(m[0]),
    },
        gregorian:{
            day:s.getDate(),
            month:s.getMonth()+1,
            year:s.getFullYear(),
    }
}
   value=dates
  
   submit()
}
    afterUpdate(() => {
        firstDay = getSecondMonthDays(gy,gm)
        secondDay = getSecondMonthDays(((gm+1)<12?gy:gy+1),((gm+1)%12))
        
    })
    let todaytodo=()=>{
        cm.setDate(new jd().getDate());
        cm.setMonth(new jd().getMonth());
        cm.setFullYear(new jd().getFullYear());
        gd = cm.getDate();
            gm = cm.getMonth();
            gy = cm.getFullYear();
            if(gm==12){
        gmd = cm.getFullYear()+" - "+(cm.getFullYear()+1);
        }else{
            gmd = cm.getFullYear();
        }
    }
</script>

<div class="calendar-contaienr">
    <div class="calendar">
        <div class="calendar-header">
            <span>سال: {gmd}</span>
            <div class="wrapper">
                <button on:click={()=>todaytodo()}>
                    <span>تاریخ امروز</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        />
                    </svg>
                </button>
                <button on:click={()=>change()}>
                    <span>تقویم میلادی</span>
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
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                </button>
            </div>
        </div>
        <div class="calendar-body">
            <div class="calendar-item">
                <div class="calendar-month">{MmonthChecker(gm)}</div>
                <div class="calendar-weekend">
                    <div class="calendar-weekend-item">ش</div>
                    <div class="calendar-weekend-item">ی</div>
                    <div class="calendar-weekend-item">د</div>
                    <div class="calendar-weekend-item">س</div>
                    <div class="calendar-weekend-item">چ</div>
                    <div class="calendar-weekend-item">پ</div>
                    <div class="calendar-weekend-item">ج</div>
                </div>
                <div class="calendar-day-m calendar-day">
                    {#each firstDay.weeks as item, i}
                        {#each item as dayItem , j}
                        {#if compatible(gm)==dayItem.month.split("-")[1]}
                        <div  on:click={()=>sendDate(dayItem)} class={"calendar-day-item" + ((jdate.getFullYear()+"-"+compatible(jdate.getMonth())+"-"+compatible(jdate.getDate() )==dayItem.date)? " today-calendar-item" : "")}>
                            <span class={(j == 6) ? "holidays-calendar-item" : ""}>{dayItem.day}</span>
                        
                            <span>12000</span>
                        </div>
                        {:else}
                        <div class={"calendar-day-item"}>
                            <span></span>
                            <span></span>
                        </div>
                        {/if}
                        {/each}
                    {/each}
                  
                </div>
            </div>
            <div class="calendar-item">
                <div class="calendar-month">
                    {MmonthChecker((gm+1) % 12 == 0 ? 12 : (gm + 1) % 12)}
                </div>
                <div class="calendar-weekend">
                    <div class="calendar-weekend-item">ش</div>
                    <div class="calendar-weekend-item">ی</div>
                    <div class="calendar-weekend-item">د</div>
                    <div class="calendar-weekend-item">س</div>
                    <div class="calendar-weekend-item">چ</div>
                    <div class="calendar-weekend-item">پ</div>
                    <div class="calendar-weekend-item">ج</div>
                </div>
                <div class="calendar-day-m calendar-day">
                
                {#each secondDay.weeks as item, i}
                    {#each item as dayItem , j}
                
{#if compatible((gm+1)%12)==dayItem.month.split("-")[1]}
<div on:click={()=>sendDate(dayItem)} class={"calendar-day-item"+ ((jdate.getFullYear()+"-"+compatible(jdate.getMonth())+"-"+compatible(jdate.getDate() )==dayItem.date)? " today-calendar-item" : "")}>
    <span class={(j == 6) ? "holidays-calendar-item" : ""}>{dayItem.day}</span>
    <span>12000</span>
</div>
{:else}
<div class={"calendar-day-item"}>
    <span></span>
    <span></span>
</div>
{/if}
                    
                    {/each}
                {/each} 
                </div>
                <div class="next-button" on:click={nextMonthes}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linejoin="round"
                            stroke-Width="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </div>
                <div class="prev-button" on:click={prevMonth}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-Linejoin="round"
                            stroke-Width={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</div>
