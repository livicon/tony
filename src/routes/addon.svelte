<script>
import SiteCard from "$lib/components/siteCard.svelte";
let show=false

let showToggle=()=>{
console.log(show);
}
</script>
<div class="flight__info">
    <div class="flight__info__card">
        <div
        style="background:#F2F8FF;"
        class=" relative  rounded-t-xl rounded-b-xl shadow-md pb-5 duration-150 cursor-pointer"
      >
      <div class="absolute -top-5 -left-5">
        <div class="relative flex items-center justify-center text-white">  
          <img src='/images/off.png' class="w-20" alt="off" />
          <span class="text-white absolute text-center">30% <br/>تخفیف</span>
        </div>
      </div>
   
        <div class="air__body  grid grid-cols-2 ">
          
          <div class="grid grid-cols-5">
            
            <img
              src="/images/nikhil-mitra-gssCjrDR5Y4-unsplash.jpg"
              alt="airport"
              class="h-28 inline-block w-28 object-cover rounded-xl m-5"
            />
          
           
      
          <div class=" grid grid-cols-3 gap-1 col-span-2 mt-14">
            <div class="flex flex-col gap-1 text-center">
              <span class="text-xl font-bold">تهران</span>
              
            </div>
      
            <div class="flex flex-col gap-1 items-center">
              <svg  xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink" width="46" height="46" viewBox="0 0 46 46"  >
                <image
                  id="aeroplane"
                  width="46"
                  height="46"
                  transform="translate(0 46) rotate(-90)"
                  opacity="0.5"
                  xlink:href="data:image/png;base64,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"
                />
              </svg>
             
            </div>
            <div class="flex flex-col gap-1 text-center ">
              <span class="text-xl font-bold">کیش</span>
           
            </div>
          </div>
      
          <div class=" grid grid-cols-3 gap-1 col-span-2 mt-14">
            <div class="flex flex-col gap-1 text-center">
              <span class="text-gray-700">19:30</span>
              <span class="text-gray-500">مهرآباد</span>
            </div>
      
            <div class="flex flex-col gap-1 items-center">
          
              <svg
                class="mt-3"
                xmlns="http://www.w3.org/2000/svg"
                width="103"
                height="7"
                viewBox="0 0 103 7"
              >
                <g
                  id="Group_49"
                  data-name="Group 49"
                  transform="translate(-742 -2940)"
                >
                  <line
                    id="Line_83"
                    data-name="Line 83"
                    x2="90"
                    transform="translate(748.5 2943.5)"
                    fill="none"
                    stroke="#0e141a"
                    stroke-width="1"
                    opacity="0.5"
                  />
                  <g
                    id="Ellipse_115"
                    data-name="Ellipse 115"
                    transform="translate(838 2940)"
                    fill="none"
                    stroke="#0e141a"
                    stroke-width="1"
                    opacity="0.5"
                  >
                    <circle cx="3.5" cy="3.5" r="3.5" stroke="none" />
                    <circle cx="3.5" cy="3.5" r="3" fill="none" />
                  </g>
                  <g
                    id="Ellipse_117"
                    data-name="Ellipse 117"
                    transform="translate(742 2940)"
                    fill="none"
                    stroke="#0e141a"
                    stroke-width="1"
                    opacity="0.5"
                  >
                    <circle cx="3.5" cy="3.5" r="3.5" stroke="none" />
                    <circle cx="3.5" cy="3.5" r="3" fill="none" />
                  </g>
                </g>
              </svg>
            </div>
            <div class="flex flex-col gap-1 text-center">
              <span class="text-gray-700">12:54</span>
              <span class="text-gray-500">العرب</span>
            </div>
          </div>
      
          </div>
      <div class="grid grid-cols-3 mt-4 text-center">
        <h1 class="text-xl font-bold mt-12">6 صندلی خالی </h1>
          <div class="flex justify-between px-3 items-center mt-10">
            <div class="flex items-center gap-2">
              <img
                src="/images/mohammad-amirahmadi-ShZzflXymPI-unsplash.jpg"
                alt="mahan-airport"
                class="w-10 h-10 rounded-full border-2 shadow-lg"
              />
              <span>ماهان</span>
            </div>
           
          </div>
         
          <svg class="mt-14" xmlns="http://www.w3.org/2000/svg" width="102.558" height="19.508" viewBox="0 0 102.558 19.508" >
            <g id="rate" transform="translate(-1563.342 -895)">
              <path
                id="Path_316"
                data-name="Path 316"
                d="M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"
                transform="translate(1644.654 895)"
                fill="#ffcb14"
              />
              <path
                id="Path_315"
                data-name="Path 315"
                d="M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"
                transform="translate(1624.143 895)"
                fill="#ffcb14"
              />
              <path
                id="Path_314"
                data-name="Path 314"
                d="M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"
                transform="translate(1603.631 895)"
                fill="#ffcb14"
              />
              <path
                id="Path_313"
                data-name="Path 313"
                d="M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"
                transform="translate(1583.12 895)"
                fill="#ffcb14"
              />
              <path
                id="Path_312"
                data-name="Path 312"
                d="M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"
                transform="translate(1562.607 895)"
                fill="#ffcb14"
              />
            </g>
          </svg>
          <p class="text-[#E93D8D] text-2xl font-bold text-center mb-14 mt-14 col-span-3 ">
            تومان 1,200,000
          </p>
          </div>
                
          
        </div>
        <hr width="90%" class="mx-auto border-gray-500 border-2">
          <div class="grid grid-cols-7 bg-white mx-28 w-auto p-4 rounded-2xl mt-8">
            <h3 class=" col-span-6">
              نمایش نرخ کودک (2 تا 12 سال) و نوزاد ( زیر 2 سال)
            </h3>
            <label class="switch ">
              <input type="checkbox" on:change={showToggle} bind:checked={show}>
              <span class="slider round"></span>
            </label>
            

          </div>
          <div>
            <SiteCard show={show}></SiteCard>
            <SiteCard show={show}></SiteCard>
            <SiteCard show={show}></SiteCard>
            <SiteCard show={show}></SiteCard>
            <SiteCard show={show}></SiteCard>
          </div>          
        </div>
    </div>
</div>
<style>
  .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>