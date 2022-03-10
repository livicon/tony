var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => Routes
});
var import_index_ab1d6d64 = __toModule(require("../../chunks/index-ab1d6d64.js"));
var import_PostCard_94b3b3b4 = __toModule(require("../../chunks/PostCard-94b3b3b4.js"));
var import_Select_833eff02 = __toModule(require("../../chunks/Select-833eff02.js"));
var import_lang_873a7a94 = __toModule(require("../../chunks/lang-873a7a94.js"));
var import_Mdate_210e77c4 = __toModule(require("../../chunks/Mdate-210e77c4.js"));
var import_store_db17b703 = __toModule(require("../../chunks/store-db17b703.js"));
var import_scrollbar_min_6b88ea71 = __toModule(require("../../chunks/scrollbar.min-6b88ea71.js"));
var import_axios = __toModule(require("axios"));
var import_fuse = __toModule(require("fuse.js"));
var import_index_16edea52 = __toModule(require("../../chunks/index-16edea52.js"));
var import_jalali_date = __toModule(require("jalali-date"));
var import_jalali_date_time = __toModule(require("jalali-date-time"));
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  const document = (0, import_scrollbar_min_6b88ea71.g)();
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach((key) => {
      if (!params[key] && params.auto === true) {
        let element = swiper.$el.children(`.${checkProps[key]}`)[0];
        if (!element) {
          element = document.createElement("div");
          element.className = checkProps[key];
          swiper.$el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}
function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock"
    }
  });
  swiper.navigation = {
    nextEl: null,
    $nextEl: null,
    prevEl: null,
    $prevEl: null
  };
  function getEl(el) {
    let $el;
    if (el) {
      $el = (0, import_scrollbar_min_6b88ea71.$)(el);
      if (swiper.params.uniqueNavElements && typeof el === "string" && $el.length > 1 && swiper.$el.find(el).length === 1) {
        $el = swiper.$el.find(el);
      }
    }
    return $el;
  }
  function toggleEl($el, disabled) {
    const params = swiper.params.navigation;
    if ($el && $el.length > 0) {
      $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
      if ($el[0] && $el[0].tagName === "BUTTON")
        $el[0].disabled = disabled;
      if (swiper.params.watchOverflow && swiper.enabled) {
        $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
      }
    }
  }
  function update() {
    if (swiper.params.loop)
      return;
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind)
      return;
    swiper.slidePrev();
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind)
      return;
    swiper.slideNext();
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    });
    if (!(params.nextEl || params.prevEl))
      return;
    const $nextEl = getEl(params.nextEl);
    const $prevEl = getEl(params.prevEl);
    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on("click", onNextClick);
    }
    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on("click", onPrevClick);
    }
    Object.assign(swiper.navigation, {
      $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });
    if (!swiper.enabled) {
      if ($nextEl)
        $nextEl.addClass(params.lockClass);
      if ($prevEl)
        $prevEl.addClass(params.lockClass);
    }
  }
  function destroy() {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    if ($nextEl && $nextEl.length) {
      $nextEl.off("click", onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }
    if ($prevEl && $prevEl.length) {
      $prevEl.off("click", onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }
  on("init", () => {
    init();
    update();
  });
  on("toEdge fromEdge lock unlock", () => {
    update();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    if ($nextEl) {
      $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
    }
    if ($prevEl) {
      $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
    }
  });
  on("click", (_s, e) => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    const targetEl = e.target;
    if (swiper.params.navigation.hideOnClick && !(0, import_scrollbar_min_6b88ea71.$)(targetEl).is($prevEl) && !(0, import_scrollbar_min_6b88ea71.$)(targetEl).is($nextEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl)))
        return;
      let isHidden;
      if ($nextEl) {
        isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
      } else if ($prevEl) {
        isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit("navigationShow");
      } else {
        emit("navigationHide");
      }
      if ($nextEl) {
        $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
      }
      if ($prevEl) {
        $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
      }
    }
  });
  Object.assign(swiper.navigation, {
    update,
    init,
    destroy
  });
}
const Routes = (0, import_index_ab1d6d64.c)(($$result, $$props, $$bindings, slots) => {
  let site = null;
  import_lang_873a7a94.c.subscribe((e) => site = e);
  let dateval;
  let cdp = "m";
  import_store_db17b703.c.subscribe((n) => cdp = n);
  function toggleDatePicker() {
    import_store_db17b703.c.update((n) => n === "m" ? "j" : "m");
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"relative mb-32"}"><img class="${"rounded-t-[15px] shadow-xl rounded-b-[80px] w-full object-cover h-[600px]"}" src="${"/images/9439.jpg"}">
  <div class="${"absolute top-16 text-center w-full text-white"}"><h1 class="${"text-4xl font-bold mb-3"}">${(0, import_index_ab1d6d64.d)(site == null ? void 0 : site.BRANDNAME)}</h1>
    <p>\u067E\u0644\u062A\u0641\u0631\u0645 \u062C\u0633\u062A\u062C\u0648\u06CC \u0622\u0646\u0644\u0627\u06CC\u0646 \u0628\u0644\u06CC\u0637 \u0647\u0648\u0627\u067E\u06CC\u0645\u0627</p></div>
  <div class="${"absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-secondary grid lg:grid-cols-4 grid-cols-1 p-8 gap-5 rounded-xl shadow-lg w-full lg:w-2/3"}">${(0, import_index_ab1d6d64.v)(import_Select_833eff02.S, "Select").$$render($$result, { placeholder: "\u0645\u0628\u062F\u0627" }, {}, {})}
    ${(0, import_index_ab1d6d64.v)(import_Select_833eff02.S, "Select").$$render($$result, { placeholder: "\u0645\u0642\u0635\u062F" }, {}, {})}

    
    <div class="${"select"}"><button class="${"w-full p-3 shadow-lg px-4 leading-8 border-0 text-lg font-bold rounded-lg focus:ring-2 ring-blue"}" data-modal-toggle="${"dater"}">${(0, import_index_ab1d6d64.d)("\u062A\u0627\u0631\u06CC\u062E")}</button>
      <div class="${"absolute left-3 top-1/2 transform -translate-y-1/2"}"><svg xmlns="${"http://www.w3.org/2000/svg"}"${(0, import_index_ab1d6d64.h)("class", "h-4 w-4 transform duration-150 ease-outshow", 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M19 9l-7 7-7-7"}"></path></svg></div></div>
    <a href="${"/search"}" class="${"bg-blue text-center py-3 px-6 leading-8 text-white rounded-lg active:scale-90 duration-150 ease-out filter active:opacity-80"}">\u062C\u0633\u062A\u062C\u0648</a></div></div>
<div id="${"dater"}" aria-hidden="${"true"}"${(0, import_index_ab1d6d64.h)("class", "hidden w-full h-full overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0", 0)}><div class="${"relative px-4 w-full h-full md:h-auto"}">
    <div class="${"relative h-full"}">
      ${cdp !== "m" ? `${(0, import_index_ab1d6d64.v)(import_Mdate_210e77c4.D, "Date").$$render($$result, { change: toggleDatePicker, value: dateval }, {
      value: ($$value) => {
        dateval = $$value;
        $$settled = false;
      }
    }, {})}` : `${(0, import_index_ab1d6d64.v)(import_Mdate_210e77c4.M, "Mdate").$$render($$result, { change: toggleDatePicker, value: dateval }, {
      value: ($$value) => {
        dateval = $$value;
        $$settled = false;
      }
    }, {})}`}</div></div></div>
<div class="${"home__section"}"><div class="${"inline-flex w-full text-white justify-between items-center px-10 pt-10"}"><h3 class="${"text-3xl font-bold"}">\u0622\u0698\u0627\u0646\u0633 \u0647\u0627</h3>
    <button class="${"text-lg font-bold"}">\u0645\u0634\u0627\u0647\u062F\u0647 \u0628\u06CC\u0634\u062A\u0631</button></div>
  <div class="${"grid grid-cols-3 gap-10 px-20 mt-16"}">${(0, import_index_ab1d6d64.j)([1, 2, 3], (item) => {
      return `<div class="${"p-3 rounded-3xl relative cursor-pointer duration-200 transform hover:-translate-y-5"}"><div class="${"rounded-3xl p-2 bg-secondary"}"><img src="${"/images/iwan-shimko-tCp2K2sYpFg-unsplash.jpg"}" class="${"rounded-3xl"}"></div>
        <div class="${"bg-secondary absolute w-64 left-1/2 transform -translate-x-1/2 -bottom-10 flex flex-col gap-2 py-5 rounded-md shadow-lg"}"><h4 class="${"font-bold text-2xl text-center"}">\u0622\u0698\u0627\u0646\u0633 \u0634\u0645\u0627\u0631\u0647 1</h4>
          <div class="${"flex justify-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"102.558"}" height="${"19.508"}" viewBox="${"0 0 102.558 19.508"}"><g id="${"rate"}" transform="${"translate(-1563.342 -895)"}"><path id="${"Path_316"}" data-name="${"Path 316"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1644.654 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_315"}" data-name="${"Path 315"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1624.143 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_314"}" data-name="${"Path 314"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1603.631 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_313"}" data-name="${"Path 313"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1583.12 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_312"}" data-name="${"Path 312"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1562.607 895)"}" fill="${"#ffcb14"}"></path></g></svg>
          </div></div>
      </div>`;
    })}</div></div>

<div class="${"home__section mb-64"}"><div class="${"inline-flex w-full text-white justify-between items-center px-10 pt-10"}"><h3 class="${"text-3xl font-bold"}">\u0648\u0628\u0644\u0627\u06AF</h3>
    <button class="${"text-lg font-bold"}">\u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647</button></div>
  <div class="${"px-20 mt-16"}">${(0, import_index_ab1d6d64.v)(import_scrollbar_min_6b88ea71.S, "Swiper").$$render($$result, {
      spaceBetween: 50,
      slidesPerView: 3,
      navigation: true,
      pagination: { clickable: true },
      style: "padding-top: 20px; padding-bottom: 20px;"
    }, {}, {
      default: () => {
        return `${(0, import_index_ab1d6d64.v)(import_scrollbar_min_6b88ea71.a, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `${(0, import_index_ab1d6d64.v)(import_PostCard_94b3b3b4.P, "PostCard").$$render($$result, {}, {}, {})}`;
          }
        })}
      ${(0, import_index_ab1d6d64.v)(import_scrollbar_min_6b88ea71.a, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `${(0, import_index_ab1d6d64.v)(import_PostCard_94b3b3b4.P, "PostCard").$$render($$result, {}, {}, {})}`;
          }
        })}
      ${(0, import_index_ab1d6d64.v)(import_scrollbar_min_6b88ea71.a, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `${(0, import_index_ab1d6d64.v)(import_PostCard_94b3b3b4.P, "PostCard").$$render($$result, {}, {}, {})}`;
          }
        })}
      ${(0, import_index_ab1d6d64.v)(import_scrollbar_min_6b88ea71.a, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `${(0, import_index_ab1d6d64.v)(import_PostCard_94b3b3b4.P, "PostCard").$$render($$result, {}, {}, {})}`;
          }
        })}
      ${(0, import_index_ab1d6d64.v)(import_scrollbar_min_6b88ea71.a, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `${(0, import_index_ab1d6d64.v)(import_PostCard_94b3b3b4.P, "PostCard").$$render($$result, {}, {}, {})}`;
          }
        })}
      ${(0, import_index_ab1d6d64.v)(import_scrollbar_min_6b88ea71.a, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `${(0, import_index_ab1d6d64.v)(import_PostCard_94b3b3b4.P, "PostCard").$$render($$result, {}, {}, {})}`;
          }
        })}
      ${(0, import_index_ab1d6d64.v)(import_scrollbar_min_6b88ea71.a, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `${(0, import_index_ab1d6d64.v)(import_PostCard_94b3b3b4.P, "PostCard").$$render($$result, {}, {}, {})}`;
          }
        })}`;
      }
    })}</div>
  <div class="${"px-20 mt-16"}"><div class="${"flex justify-between items-center"}"><h2 class="${"page__title"}">\u0634\u0631\u06A9\u062A \u0647\u0627\u06CC \u0628\u0631\u06AF\u0632\u06CC\u062F\u0647</h2>
      <button>\u0645\u0634\u0627\u0647\u062F\u0647 \u0647\u0645\u0647</button></div>
    ${(0, import_index_ab1d6d64.v)(import_scrollbar_min_6b88ea71.S, "Swiper").$$render($$result, {
      spaceBetween: 50,
      slidesPerView: 3,
      modules: [Navigation],
      navigation: true,
      style: "padding-top: 20px; padding-bottom: 20px;"
    }, {}, {
      default: () => {
        return `${(0, import_index_ab1d6d64.v)(import_scrollbar_min_6b88ea71.a, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="${"flex rounded-xl gap-4 items-center bg-white pl-10 shadow hover:shadow-lg duration-150 cursor-pointer"}"><img alt="${"chamedan safar"}" class="${"w-20 h-20 rounded-xl shadow bg-cover"}"${(0, import_index_ab1d6d64.h)("src", "/images/slide-image.png", 0)}>
          <div class="${"flex flex-col gap-2"}"><h2>\u0634\u0631\u06A9\u062A \u0634\u0645\u0627\u0631\u0647 1</h2>
            <div class="${"flex justify-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"102.558"}" height="${"19.508"}" viewBox="${"0 0 102.558 19.508"}"><g id="${"rate"}" transform="${"translate(-1563.342 -895)"}"><path id="${"Path_316"}" data-name="${"Path 316"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1644.654 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_315"}" data-name="${"Path 315"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1624.143 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_314"}" data-name="${"Path 314"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1603.631 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_313"}" data-name="${"Path 313"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1583.12 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_312"}" data-name="${"Path 312"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1562.607 895)"}" fill="${"#ffcb14"}"></path></g></svg></div></div></div>`;
          }
        })}
      ${(0, import_index_ab1d6d64.v)(import_scrollbar_min_6b88ea71.a, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="${"flex rounded-xl gap-4 items-center bg-white pl-10 shadow hover:shadow-lg duration-150 cursor-pointer"}"><img alt="${"chamedan safar"}" class="${"w-20 h-20 rounded-xl shadow bg-cover"}"${(0, import_index_ab1d6d64.h)("src", "/images/slide-image.png", 0)}>
          <div class="${"flex flex-col gap-2"}"><h2>\u0634\u0631\u06A9\u062A \u0634\u0645\u0627\u0631\u0647 1</h2>
            <div class="${"flex justify-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"102.558"}" height="${"19.508"}" viewBox="${"0 0 102.558 19.508"}"><g id="${"rate"}" transform="${"translate(-1563.342 -895)"}"><path id="${"Path_316"}" data-name="${"Path 316"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1644.654 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_315"}" data-name="${"Path 315"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1624.143 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_314"}" data-name="${"Path 314"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1603.631 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_313"}" data-name="${"Path 313"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1583.12 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_312"}" data-name="${"Path 312"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1562.607 895)"}" fill="${"#ffcb14"}"></path></g></svg></div></div></div>`;
          }
        })}
      ${(0, import_index_ab1d6d64.v)(import_scrollbar_min_6b88ea71.a, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="${"flex rounded-xl gap-4 items-center bg-white pl-10 shadow hover:shadow-lg duration-150 cursor-pointer"}"><img alt="${"chamedan safar"}" class="${"w-20 h-20 rounded-xl shadow bg-cover"}"${(0, import_index_ab1d6d64.h)("src", "/images/slide-image.png", 0)}>
          <div class="${"flex flex-col gap-2"}"><h2>\u0634\u0631\u06A9\u062A \u0634\u0645\u0627\u0631\u0647 1</h2>
            <div class="${"flex justify-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"102.558"}" height="${"19.508"}" viewBox="${"0 0 102.558 19.508"}"><g id="${"rate"}" transform="${"translate(-1563.342 -895)"}"><path id="${"Path_316"}" data-name="${"Path 316"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1644.654 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_315"}" data-name="${"Path 315"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1624.143 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_314"}" data-name="${"Path 314"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1603.631 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_313"}" data-name="${"Path 313"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1583.12 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_312"}" data-name="${"Path 312"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1562.607 895)"}" fill="${"#ffcb14"}"></path></g></svg></div></div></div>`;
          }
        })}
       ${(0, import_index_ab1d6d64.v)(import_scrollbar_min_6b88ea71.a, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="${"flex rounded-xl gap-4 items-center bg-white pl-10 shadow hover:shadow-lg duration-150 cursor-pointer"}"><img alt="${"chamedan safar"}" class="${"w-20 h-20 rounded-xl shadow bg-cover"}"${(0, import_index_ab1d6d64.h)("src", "/images/slide-image.png", 0)}>
          <div class="${"flex flex-col gap-2"}"><h2>\u0634\u0631\u06A9\u062A \u0634\u0645\u0627\u0631\u0647 1</h2>
            <div class="${"flex justify-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"102.558"}" height="${"19.508"}" viewBox="${"0 0 102.558 19.508"}"><g id="${"rate"}" transform="${"translate(-1563.342 -895)"}"><path id="${"Path_316"}" data-name="${"Path 316"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1644.654 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_315"}" data-name="${"Path 315"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1624.143 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_314"}" data-name="${"Path 314"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1603.631 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_313"}" data-name="${"Path 313"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1583.12 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_312"}" data-name="${"Path 312"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1562.607 895)"}" fill="${"#ffcb14"}"></path></g></svg></div></div></div>`;
          }
        })}
       ${(0, import_index_ab1d6d64.v)(import_scrollbar_min_6b88ea71.a, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="${"flex rounded-xl gap-4 items-center bg-white pl-10 shadow hover:shadow-lg duration-150 cursor-pointer"}"><img alt="${"chamedan safar"}" class="${"w-20 h-20 rounded-xl shadow bg-cover"}"${(0, import_index_ab1d6d64.h)("src", "/images/slide-image.png", 0)}>
          <div class="${"flex flex-col gap-2"}"><h2>\u0634\u0631\u06A9\u062A \u0634\u0645\u0627\u0631\u0647 1</h2>
            <div class="${"flex justify-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"102.558"}" height="${"19.508"}" viewBox="${"0 0 102.558 19.508"}"><g id="${"rate"}" transform="${"translate(-1563.342 -895)"}"><path id="${"Path_316"}" data-name="${"Path 316"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1644.654 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_315"}" data-name="${"Path 315"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1624.143 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_314"}" data-name="${"Path 314"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1603.631 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_313"}" data-name="${"Path 313"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1583.12 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_312"}" data-name="${"Path 312"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1562.607 895)"}" fill="${"#ffcb14"}"></path></g></svg></div></div></div>`;
          }
        })}
       ${(0, import_index_ab1d6d64.v)(import_scrollbar_min_6b88ea71.a, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="${"flex rounded-xl gap-4 items-center bg-white pl-10 shadow hover:shadow-lg duration-150 cursor-pointer"}"><img alt="${"chamedan safar"}" class="${"w-20 h-20 rounded-xl shadow bg-cover"}"${(0, import_index_ab1d6d64.h)("src", "/images/slide-image.png", 0)}>
          <div class="${"flex flex-col gap-2"}"><h2>\u0634\u0631\u06A9\u062A \u0634\u0645\u0627\u0631\u0647 1</h2>
            <div class="${"flex justify-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"102.558"}" height="${"19.508"}" viewBox="${"0 0 102.558 19.508"}"><g id="${"rate"}" transform="${"translate(-1563.342 -895)"}"><path id="${"Path_316"}" data-name="${"Path 316"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1644.654 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_315"}" data-name="${"Path 315"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1624.143 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_314"}" data-name="${"Path 314"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1603.631 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_313"}" data-name="${"Path 313"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1583.12 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_312"}" data-name="${"Path 312"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1562.607 895)"}" fill="${"#ffcb14"}"></path></g></svg></div></div></div>`;
          }
        })}`;
      }
    })}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
