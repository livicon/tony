<script>
  import AirCard from "$lib/cards/AirCard.svelte";
  import Sort from "$lib/components/Sort.svelte";
  import MultiSelect from "$lib/tonies/MultiSelect.svelte";
  import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import {cash} from "$lib/cash/cash";
 
  cash.subscribe((item)=>{
    console.log(item);
  })
  let data = [
    {
      title: "زود ترین",
      value: "1",
      active: false,
    },
    {
      title: "دیر ترین",
      value: "2",
      active: false,
    },
    {
      title: "ارزان ترین",
      value: "3",
      active: false,
    },
    {
      title: "گران ترین",
      value: "4",
      active: false,
    },
  ];
  let main = {
    date: {
      jalali: {},
      miladi: {},
    },
    result: {},
  };
  function selecFilterHandler(item) {
    let filters = data.map((d) => {
      if (d.value === item.value) return { ...d, active: !d.active };
      else return { ...d, active: false };
    });
    data = filters;
  }
</script>

<div class="flex gap-3">
  <div class="w-1/4 hidden lg:block md:w-1/3 md:block">
    <div class="filters rounded-xl bg-secondary px-5 py-8 sticky top-5">
      <h3 class="text-3xl font-bold mb-10">فیلتر ها</h3>
      <div class="box mb-5">
        <h2 class="text-xl font-bold mb-3">ساعت پرواز</h2>
        <div class="mt-2 text-xl gap-3 text-gray-500 flex items-center">
          <input
            class="text-indigo-500 w-5 h-5 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
            type="checkbox"
          />
          <span>صبح زود</span>
        </div>
        <div class="mt-2 text-xl gap-3 text-gray-500 flex items-center">
          <input
            class="text-indigo-500 w-5 h-5 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
            type="checkbox"
          />
          <span>بعد از ظهر</span>
        </div>
        <div class="mt-2 text-xl gap-3 text-gray-500 flex items-center">
          <input
            class="text-indigo-500 w-5 h-5 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
            type="checkbox"
          />
          <span>عصر</span>
        </div>
        <div class="mt-2 text-xl gap-3 text-gray-500 flex items-center">
          <input
            class="text-indigo-500 w-5 h-5 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
            type="checkbox"
          />
          <span>شب</span>
        </div>
      </div>
      <div class="box mb-5">
        <h2 class="text-xl font-bold mb-3">تعداد توقف</h2>
        <div class="mt-2 text-xl gap-3 text-gray-500 flex items-center">
          <input
            class="text-indigo-500 w-5 h-5 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
            type="checkbox"
          />
          <span>مستقیم</span>
        </div>
        <div class="mt-2 text-xl gap-3 text-gray-500 flex items-center">
          <input
            class="text-indigo-500 w-5 h-5 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
            type="checkbox"
          />
          <span>یک توقف</span>
        </div>
      </div>
      <div class="box">
        <h2 class="text-xl font-bold mb-3">ایرلاین ها</h2>
        <div class="mt-2 text-xl gap-3 text-gray-500 flex items-center">
          <input
            class="text-indigo-500 w-5 h-5 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
            type="checkbox"
          />
          <span>ایرلاین شماره 1</span>
        </div>
        <div class="mt-2 text-xl gap-3 text-gray-500 flex items-center">
          <input
            class="text-indigo-500 w-5 h-5 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
            type="checkbox"
          />
          <span>ایرلاین شماره 1</span>
        </div>
        <div class="mt-2 text-xl gap-3 text-gray-500 flex items-center">
          <input
            class="text-indigo-500 w-5 h-5 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
            type="checkbox"
          />
          <span>ایرلاین شماره 1</span>
        </div>
        <div class="mt-2 text-xl gap-3 text-gray-500 flex items-center">
          <input
            class="text-indigo-500 w-5 h-5 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
            type="checkbox"
          />
          <span>ایرلاین شماره 1</span>
        </div>
      </div>
    </div>
  </div>
  <div class="lg:w-2/4 w-full rounded-t-xl md:w-2/3">
    <Swiper
      breakpoints={{
        1024: {
          spaceBetween: 10,
          slidesPerView: 6,
        },
        768: {
          spaceBetween: 10,
          slidesPerView: 7,
        },
        640: {
          spaceBetween: 20,
          slidesPerView: 4,
        },
      }}
      on:slideChange={() => console.log("slide change")}
      on:swiper={(e) => console.log(e.detail[0])}
    >
      {#each [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8] as i}
        <SwiperSlide>
          <div
            class="hover:bg-sky-50 cursor-pointer flex flex-col gap-2 hover:border-blue hover:bg-white border-2 border-transparent duration-150 items-center rounded-xl p-4"
          >
            <span class="text-xl font-semibold">25</span>
            <span class="text-sm">آبان</span>
            <span class="text-sm font-semibold">820000</span>
            <span class="text-sm">تومان</span>
          </div>
        </SwiperSlide>
      {/each}
    </Swiper>
    <div class="flex items-center p-4 gap-3 justify-between">
      <h3 class="text-lg font-semibold whitespace-nowrap">مرتب سازی</h3>
      <div
        class="flex gap-3 items-center bg-[#F3F9FF] w-full justify-center rounded-lg p-2"
      >
        {#each data as i}
          <span
            class={`py-3 px-5 text-center border-transparent border-2 rounded-md cursor-pointer duration-150 w-full ${
              i.active ? "border-blue" : ""
            }`}
            on:click={() => selecFilterHandler(i)}>{i.title}</span
          >
        {/each}
      </div>
    </div>
    <div
      class="p-6 gap-8 bg-secondary rounded-md grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2"
    >
      <!-- <Sort /> -->
      <MultiSelect />
      <AirCard />
      <AirCard />
      <AirCard />
      <AirCard />
      <AirCard />
      <AirCard />
      <AirCard />
      <AirCard />
      <AirCard />
      <AirCard />
      <AirCard />
      <AirCard />
      <AirCard />
      <AirCard />
      <AirCard />
      <AirCard />
    </div>
  </div>
  <div class="w-1/4 flex-col gap-3 hidden lg:flex md:hidden">
    <div
      class="ad__box p-10 py-20 text-lg font-bold text-center bg-secondary rounded-md"
    >
      جایگاه تبلیغ
    </div>

    <div
      class="ad__box p-10 py-20 text-lg font-bold text-center bg-secondary rounded-md"
    >
      جایگاه تبلیغ
    </div>

    <div
      class="ad__box p-10 py-20 text-lg font-bold text-center bg-secondary rounded-md"
    >
      جایگاه تبلیغ
    </div>

    <div
      class="ad__box p-10 py-20 text-lg font-bold text-center bg-secondary rounded-md"
    >
      جایگاه تبلیغ
    </div>

    <div
      class="ad__box p-10 py-20 text-lg font-bold text-center bg-secondary rounded-md"
    >
      جایگاه تبلیغ
    </div>
  </div>
</div>
