<script>
  import PostCard from "$lib/cards/PostCard.svelte";
  import Select from "$lib/components/Select.svelte";
  import { lang, currentLang } from "$lib/cash/lang";
  import Date from "$lib/components/Date/date.svelte";
  import Mdate from "$lib/components/Date/Mdate.svelte";
  import { currentDatePicker } from "$lib/contexts/store";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  import "swiper/css/scrollbar";
  let site = null;
  currentLang.subscribe((e) => (site = e));
  let show = false;
  const openSelect = () => (show = true);
  const closeSelect = () => (show = false);

  let dateval;
  let val = "";
  let valm = "";
  let datas = "";

  function doyou() {
    val =
      dateval.jalali.year +
      "-" +
      dateval.jalali.month +
      "-" +
      dateval.jalali.day;
    valm =
      dateval.gregorian.year +
      "-" +
      dateval.gregorian.month +
      "-" +
      dateval.gregorian.day;
    show = false;
    cdp == "m" ? (datas = valm) : (datas = val);
    console.log(show);
  }

  let cdp = "m";
  currentDatePicker.subscribe((n) => (cdp = n));
  function toggleDatePicker() {
    currentDatePicker.update((n) => (n === "m" ? "j" : "m"));
  }
  let toggleDate = () => {
    show = !show;
  };
</script>

<div class="relative mb-32">
  <img
    class="rounded-t-[15px] shadow-xl rounded-b-[80px] w-full object-cover h-[600px]"
    src="/images/9439.jpg"
  />
  <div class="absolute top-16 text-center w-full text-white">
    <h1 class="text-4xl font-bold mb-3">{site?.BRANDNAME}</h1>
    <p>پلتفرم جستجوی آنلاین بلیط هواپیما</p>
  </div>
  <div
    class="absolute -bottom-5 left-1/2 transform -translate-x-1/2  bg-secondary grid lg:grid-cols-4 grid-cols-1 p-8 gap-5 rounded-xl shadow-lg w-full lg:w-2/3"
  >
    <Select placeholder="مبدا" />
    <Select placeholder="مقصد" />

    <!-- Main modal -->
    <div class="select">
      <button
        on:click={() => toggleDate()}
        class="w-full p-3 shadow-lg px-4 leading-8 border-0 text-lg font-bold rounded-lg focus:ring-2 ring-blue"
        data-modal-toggle="dater">{datas ? datas : "تاریخ"}</button
      >
      <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class={show == true
            ? "rotate-180 h-4 w-4 transform duration-150 ease-outshow"
            : "h-4 w-4 transform duration-150 ease-outshow"}
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
    </div>
    <a
      href="/search"
      class="bg-blue text-center py-3 px-6 leading-8 text-white rounded-lg active:scale-90 duration-150 ease-out filter active:opacity-80"
      >جستجو</a
    >
  </div>
</div>
<div
  id="dater"
  aria-hidden="true"
  class={show == true
    ? " w-full h-full overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
    : "hidden w-full h-full overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"}
>
  <div class="relative px-4 w-full h-full md:h-auto">
    <!-- Modal content -->
    <div class="relative h-full">
      <!-- Modal header -->
      {#if cdp !== "m"}
        <Date
          bind:value={dateval}
          on:submit={() => doyou()}
          change={toggleDatePicker}
        />
      {:else}
        <Mdate
          bind:value={dateval}
          on:submit={() => doyou()}
          change={toggleDatePicker}
        />
      {/if}
    </div>
  </div>
</div>
<div class="home__section">
  <div
    class="inline-flex w-full text-white justify-between items-center px-10 pt-10"
  >
    <h3 class="text-3xl font-bold">آژانس ها</h3>
    <button class="text-lg font-bold">مشاهده بیشتر</button>
  </div>
  <div class="grid grid-cols-3 gap-10 px-20 mt-16">
    {#each [1, 2, 3] as item}
      <div
        class="p-3 rounded-3xl relative cursor-pointer duration-200 transform hover:-translate-y-5"
      >
        <div class="rounded-3xl p-2 bg-secondary">
          <img
            src="/images/iwan-shimko-tCp2K2sYpFg-unsplash.jpg"
            class="rounded-3xl"
          />
        </div>
        <div
          class="bg-secondary absolute w-64 left-1/2 transform -translate-x-1/2 -bottom-10 flex flex-col gap-2 py-5 rounded-md shadow-lg"
        >
          <h4 class="font-bold text-2xl text-center">آژانس شماره 1</h4>
          <div class="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="102.558"
              height="19.508"
              viewBox="0 0 102.558 19.508"
            >
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
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<div class="home__section mb-64">
  <div
    class="inline-flex w-full text-white justify-between items-center px-10 pt-10"
  >
    <h3 class="text-3xl font-bold">وبلاگ</h3>
    <button class="text-lg font-bold">مشاهده همه</button>
  </div>
  <div class="px-20 mt-16">
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      style="padding-top: 20px; padding-bottom: 20px;"
      on:slideChange={() => console.log("slide change")}
      on:swiper={(e) => console.log(e.detail[0])}
    >
      <SwiperSlide><PostCard /></SwiperSlide>
      <SwiperSlide><PostCard /></SwiperSlide>
      <SwiperSlide><PostCard /></SwiperSlide>
      <SwiperSlide><PostCard /></SwiperSlide>
      <SwiperSlide><PostCard /></SwiperSlide>
      <SwiperSlide><PostCard /></SwiperSlide>
      <SwiperSlide><PostCard /></SwiperSlide>
    </Swiper>
  </div>
  <div class="px-20 mt-16">
    <div class="flex justify-between items-center">
      <h2 class="page__title">شرکت های برگزیده</h2>
      <button>مشاهده همه</button>
    </div>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      modules={[Navigation]}
      navigation
      style="padding-top: 20px; padding-bottom: 20px;"
      on:slideChange={() => console.log("slide change")}
      on:swiper={(e) => console.log(e.detail[0])}
    >
      <SwiperSlide>
        <div
          class="flex rounded-xl gap-4 items-center bg-white pl-10 shadow hover:shadow-lg duration-150 cursor-pointer"
        >
          <img
            alt="chamedan safar"
            class="w-20 h-20 rounded-xl shadow bg-cover"
            src={"/images/slide-image.png"}
          />
          <div class="flex flex-col gap-2">
            <h2>شرکت شماره 1</h2>
            <div class="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="102.558"
                height="19.508"
                viewBox="0 0 102.558 19.508"
              >
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
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          class="flex rounded-xl gap-4 items-center bg-white pl-10 shadow hover:shadow-lg duration-150 cursor-pointer"
        >
          <img
            alt="chamedan safar"
            class="w-20 h-20 rounded-xl shadow bg-cover"
            src={"/images/slide-image.png"}
          />
          <div class="flex flex-col gap-2">
            <h2>شرکت شماره 1</h2>
            <div class="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="102.558"
                height="19.508"
                viewBox="0 0 102.558 19.508"
              >
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
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          class="flex rounded-xl gap-4 items-center bg-white pl-10 shadow hover:shadow-lg duration-150 cursor-pointer"
        >
          <img
            alt="chamedan safar"
            class="w-20 h-20 rounded-xl shadow bg-cover"
            src={"/images/slide-image.png"}
          />
          <div class="flex flex-col gap-2">
            <h2>شرکت شماره 1</h2>
            <div class="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="102.558"
                height="19.508"
                viewBox="0 0 102.558 19.508"
              >
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
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          class="flex rounded-xl gap-4 items-center bg-white pl-10 shadow hover:shadow-lg duration-150 cursor-pointer"
        >
          <img
            alt="chamedan safar"
            class="w-20 h-20 rounded-xl shadow bg-cover"
            src={"/images/slide-image.png"}
          />
          <div class="flex flex-col gap-2">
            <h2>شرکت شماره 1</h2>
            <div class="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="102.558"
                height="19.508"
                viewBox="0 0 102.558 19.508"
              >
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
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          class="flex rounded-xl gap-4 items-center bg-white pl-10 shadow hover:shadow-lg duration-150 cursor-pointer"
        >
          <img
            alt="chamedan safar"
            class="w-20 h-20 rounded-xl shadow bg-cover"
            src={"/images/slide-image.png"}
          />
          <div class="flex flex-col gap-2">
            <h2>شرکت شماره 1</h2>
            <div class="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="102.558"
                height="19.508"
                viewBox="0 0 102.558 19.508"
              >
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
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          class="flex rounded-xl gap-4 items-center bg-white pl-10 shadow hover:shadow-lg duration-150 cursor-pointer"
        >
          <img
            alt="chamedan safar"
            class="w-20 h-20 rounded-xl shadow bg-cover"
            src={"/images/slide-image.png"}
          />
          <div class="flex flex-col gap-2">
            <h2>شرکت شماره 1</h2>
            <div class="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="102.558"
                height="19.508"
                viewBox="0 0 102.558 19.508"
              >
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
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</div>
