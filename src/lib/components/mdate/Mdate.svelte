<script>
    import { beforeUpdate, afterUpdate } from 'svelte';
    import jd from 'jalali-date'
    export let value
    export let change
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    const submit = () => dispatch('submit');
     let gmd
    const MmonthChecker = (e) => {
        switch (e) {
            case 1:
                return "January";
            case 2:
                return "February";

            case 3:
                return "March";

            case 4:
                return "April";

            case 5:
                return "May";

            case 6:
                return "June";

            case 7:
                return "July";

            case 8:
                return "August";

            case 9:
                return "September";

            case 10:
                return "October";

            case 11:
                return "November";

            case 12:
                return "December";
        }
    };
    let getDateInMonth=(y,m)=>{
       
        var dd = new Date(y,m,1)
        let days=[]
        let month=[]
        let day=0
        while(dd.getMonth() === m){
            day=dd.getDay()
            if (dd.getDay()==6){
                if(day != 0 && dd.getDate()==1){
              
              for (let i=0;i<day;i++) {
                days.push(null) 
              }
            }
            days.push(new Date(dd))
            month.push(days)
            days=[]
            }else{
            if(day != 0 && dd.getDate()==1){
              
              for (let i=0;i<day;i++) {
                days.push(null) 
              }
            }
            days.push(new Date(dd))
            
        }
        dd.setDate(dd.getDate()+1)  
    }
    month.push(days)
        return month

    }

    
    let cm = new Date();
    let gd = cm.getDate();
    let gm = cm.getMonth();
    let gy = cm.getFullYear();
  
    function nextMonth() {
      
        if (gm < 12) {
            if(gm==11){
                gm = gm + 1;
            cm.setMonth(gm);
           // cm.setFullYear(cm.getFullYear()+1);
            gd = cm.getDate();
            gm = cm.getMonth();
            gy = cm.getFullYear();
            }else{
            gm = gm + 1;
            cm.setMonth(gm);
            gd = cm.getDate();
            gm = cm.getMonth();
            gy = cm.getFullYear();
            }
         
        } else {
            gm = 0;
            cm.setMonth(gm);
        }
        console.log(gm);
        console.log(cm);
    }
    function prevMonth() {
        
        if (gm >= 0) {
            if(gm==0){
                console.log(gm);
                console.log(gy);
                gm = gm - 1;
            cm.setMonth(gm);
           // cm.setFullYear(cm.getFullYear()-1);
            gd = cm.getDate();
            gm = cm.getMonth();
            gy = cm.getFullYear();
            }else{
            gm = gm - 1;
            cm.setMonth(gm);
            gd = cm.getDate();
            gm = cm.getMonth();
            gy = cm.getFullYear();
            }
            
            
        } else {

            gm = 11;
            cm.setMonth(gm);
        }
        console.log(gm);
        console.log(cm);
    }
    let todaytodo=()=>{
        cm.setDate(new Date().getDate());
        cm.setMonth(new Date().getMonth());
        cm.setFullYear(new Date().getFullYear());
        gd = cm.getDate();
            gm = cm.getMonth();
            gy = cm.getFullYear();
            if(gm==12){
        gmd = cm.getFullYear()+" - "+(cm.getFullYear()+1);
        }else{
            gmd = cm.getFullYear();
        }
    }
    let sendDate=(e)=>{
  
    let s = new jd((new Date(e.getFullYear(), e.getMonth(), e.getDate())));
    let m=e
    let dates={
        jalali:{
            day:s.getDate(),
            month:s.getMonth(),
            year:s.getFullYear(),
    },gregorian:{
        day:m.getDate(),
        month:m.getMonth()+1,
            year:m.getFullYear(),
    }
}
value=dates
submit()

}
   let firstDay=getDateInMonth(gy,gm)
   
   afterUpdate(() => {
    firstDay=getDateInMonth(gy,gm)
    
   })
   
</script>
<div class="rounded-lg w-full max-w-screen-md mx-auto relative bg-white pt-5 pb-5">
    <div class="rounded-t-lg bg-indigo-100 text-indigo-500 font-medium p-3 flex justify-between items-center text-center">
        <button class="p-2 bg-white rounded-md shadow"  on:click={()=>change()}>
            <span>تقویم شمسی</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-Linecap="round"
                    stroke-Linejoin="round"
                    stroke-Width={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
            </svg>
        </button>
        <span>{MmonthChecker(gm+1)} {gy}</span>
        <button class="p-2 bg-white rounded-md shadow" on:click={()=>todaytodo()}>
            <span>تاریخ امروز</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-Rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-Rule="evenodd"
                />
            </svg>
        </button>
        <button on:click={()=>nextMonth()} class="w-64 absolute -top-8 left-1/2 transform -translate-x-1/2  py-3 bg-blue text-white rounded-md">بعدی</button>
        <button on:click={()=>prevMonth()} class="w-64 absolute -bottom-8 left-1/2 transform -translate-x-1/2 py-3 bg-blue text-white rounded-md">قبلی</button>
    </div>
    <div>
        <div class="grid grid-cols-7 bg-green-100 text-green-600">
            <div class="calendar-weekend-item">Sat</div>
            <div class="calendar-weekend-item">Fri</div>
            <div class="calendar-weekend-item">Thur</div>
            <div class="calendar-weekend-item">Wed</div>
            <div class="calendar-weekend-item">Tue</div>
            <div class="calendar-weekend-item">Mon</div>
            <div class="calendar-weekend-item">Sun</div>
        </div>
        <div class="grid grid-cols-7 bg-white text-gray-400 rounded-b-lg shadow ltr">
           
            {#each firstDay as item, i}
            {#each item as dayItem , i}
            {#if dayItem != null }
            <div on:click={()=>sendDate(dayItem)} class={"calendar-day-item "+ ((dayItem.getDate() == new Date().getDate()&&dayItem.getMonth() == new Date().getMonth()&&dayItem.getFullYear() == new Date().getFullYear()) ? "today-calendar-item" : "")}>
                <span class={(dayItem.getDay() == 6) ? "holidays-calendar-item" : ""}>{dayItem.getDate()}</span>
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
  
</div>
<style>
    .ltr{
        direction: ltr !important;
    }
</style>
