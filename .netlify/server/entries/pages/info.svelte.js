var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
  default: () => Info
});
var import_index_ab1d6d64 = __toModule(require("../../chunks/index-ab1d6d64.js"));
const Rates = (0, import_index_ab1d6d64.c)(($$result, $$props, $$bindings, slots) => {
  let rates = [
    { title: "\u0639\u0645\u0644\u06A9\u0631\u062F 1", count: 60 },
    { title: "\u0639\u0645\u0644\u06A9\u0631\u062F 2", count: 45 },
    { title: "\u0639\u0645\u0644\u06A9\u0631\u062F 3", count: 83 },
    { title: "\u0639\u0645\u0644\u06A9\u0631\u062F 4", count: 22 }
  ];
  function generateRaters() {
    const newList = rates.map((item) => {
      if (item.count > 80)
        return __spreadProps(__spreadValues({}, item), {
          color: "green",
          rateT: { en: "nice", ab: "\u06A9\u0645\u0627\u0644", fa: "\u0639\u0627\u0644\u06CC" }
        });
      else if (item.count < 35)
        return __spreadProps(__spreadValues({}, item), {
          color: "red",
          rateT: { en: "low", ab: "\u062A\u0636\u0639\u06CC\u0641", fa: "\u0636\u0639\u06CC\u0641" }
        });
      else
        return __spreadProps(__spreadValues({}, item), {
          color: "yellow",
          rateT: { en: "midle", ab: "\u0627\u0648\u0633\u0637", fa: "\u0645\u062A\u0648\u0633\u0637" }
        });
    });
    rates = newList;
  }
  generateRaters();
  return `<div class="${"rater"}">${(0, import_index_ab1d6d64.j)(rates, (item) => {
    return `<div class="${"flex justify-betweem items-center w-full"}"><h3 class="${"w-1/4"}">\u0639\u0645\u0644\u06A9\u0631\u062F 1</h3>
            <div class="${"w-3/4 rounded-full flex items-center justify-end gap-2"}"><span>${(0, import_index_ab1d6d64.d)(item.rateT.fa)}</span>
                <div${(0, import_index_ab1d6d64.h)("class", `rater__row ${item.color} text-xs font-medium text-white text-center p-2 leading-none rounded-full`, 0)}${(0, import_index_ab1d6d64.h)("style", `width: ${item.count}%`, 0)}></div></div>
        </div>`;
  })}</div>`;
});
const Info = (0, import_index_ab1d6d64.c)(($$result, $$props, $$bindings, slots) => {
  let meta = [
    { Rates: 5, ab: "ab", fa: "fa", en: "en" },
    { Rates: 1, ab: "ab", fa: "fa", en: "en" },
    { Rates: 2, ab: "ab", fa: "fa", en: "en" },
    { Rates: 3, ab: "ab", fa: "fa", en: "en" }
  ];
  return `<h1 class="${"page__title"}">\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0627</h1>
<div class="${"flex items-center gap-5 mb-32"}"><div class="${"w-1/2"}"><h3 class="${"text-3xl mb-5 text-black font-bold"}">\u0686\u0645\u062F\u0627\u0646 \u0633\u0641\u0631 \u0686\u06CC\u0633\u062A\u061F</h3>
    <p class="${"text-gray-500 text-justify leading-6"}">\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632
      \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646
      \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641
      \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F. \u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C \u062D\u0627\u0644
      \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F
    </p></div>
  <div class="${"w-1/2 p-10"}">${(0, import_index_ab1d6d64.v)(Rates, "Rates").$$render($$result, { data: meta }, {}, {})}</div></div>
<div class="${"flex items-center gap-5"}"><div class="${"w-1/2"}"><img class="${"w-full rounded-3xl"}" src="${"/images/phil-mosley-wOK2f2stPDg-unsplash.jpg"}"></div>
  <div class="${"w-1/2"}"><h3 class="${"text-3xl mb-5 text-black font-bold"}">\u0628\u0647\u062A\u0631\u06CC\u0646 \u0648\u0628 \u0633\u0627\u06CC\u062A \u062E\u0631\u06CC\u062F \u0628\u0644\u06CC\u0637 \u0647\u0648\u0627\u067E\u06CC\u0645\u0627
    </h3>
    <p class="${"text-gray-500 text-justify leading-6"}">\u0644\u0648\u0631\u0645 \u0627\u06CC\u067E\u0633\u0648\u0645 \u0645\u062A\u0646 \u0633\u0627\u062E\u062A\u06AF\u06CC \u0628\u0627 \u062A\u0648\u0644\u06CC\u062F \u0633\u0627\u062F\u06AF\u06CC \u0646\u0627\u0645\u0641\u0647\u0648\u0645 \u0627\u0632 \u0635\u0646\u0639\u062A \u0686\u0627\u067E \u0648 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632
      \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0633\u062A. \u0686\u0627\u067E\u06AF\u0631\u0647\u0627 \u0648 \u0645\u062A\u0648\u0646 \u0628\u0644\u06A9\u0647 \u0631\u0648\u0632\u0646\u0627\u0645\u0647 \u0648 \u0645\u062C\u0644\u0647 \u062F\u0631 \u0633\u062A\u0648\u0646 \u0648 \u0633\u0637\u0631\u0622\u0646\u0686\u0646\u0627\u0646
      \u06A9\u0647 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0648 \u0628\u0631\u0627\u06CC \u0634\u0631\u0627\u06CC\u0637 \u0641\u0639\u0644\u06CC \u062A\u06A9\u0646\u0648\u0644\u0648\u0698\u06CC \u0645\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0648 \u06A9\u0627\u0631\u0628\u0631\u062F\u0647\u0627\u06CC \u0645\u062A\u0646\u0648\u0639 \u0628\u0627 \u0647\u062F\u0641
      \u0628\u0647\u0628\u0648\u062F \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631\u062F\u06CC \u0645\u06CC \u0628\u0627\u0634\u062F. \u06A9\u062A\u0627\u0628\u0647\u0627\u06CC \u0632\u06CC\u0627\u062F\u06CC \u062F\u0631 \u0634\u0635\u062A \u0648 \u0633\u0647 \u062F\u0631\u0635\u062F \u06AF\u0630\u0634\u062A\u0647\u060C \u062D\u0627\u0644
      \u0648 \u0622\u06CC\u0646\u062F\u0647 \u0634\u0646\u0627\u062E\u062A \u0641\u0631\u0627\u0648\u0627\u0646 \u062C\u0627\u0645\u0639\u0647 \u0648 \u0645\u062A\u062E\u0635\u0635\u0627\u0646 \u0631\u0627 \u0645\u06CC \u0637\u0644\u0628\u062F
    </p></div></div>

<div class="${"max-w-sm mx-auto mt-10"}"><h2 class="${"text-xl mb-5 font-bold text-center text-black"}">\u0645\u0627 \u0631\u0627 \u062F\u0631 \u0634\u0628\u06A9\u0647 \u0647\u0627\u06CC \u0627\u062C\u062A\u0645\u0627\u0639\u06CC \u062F\u0646\u0628\u0627\u0644 \u06A9\u0646\u06CC\u062F
  </h2>
  <div class="${"grid grid-cols-4 gap-5"}"><div class="${"social__icon"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"100%"}" height="${"100%"}" viewBox="${"0 0 24 24"}" fill="${"var(--blue-color)"}"><path d="${"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"}"></path></svg></div>

    <div class="${"social__icon"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"100%"}" height="${"100%"}" fill="${"var(--blue-color)"}" viewBox="${"0 0 24 24"}"><path d="${"M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"}"></path></svg></div>

    <div class="${"social__icon"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"100%"}" height="${"100%"}" fill="${"var(--blue-color)"}" viewBox="${"0 0 24 24"}"><path d="${"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"}"></path></svg></div>

    <div class="${"social__icon"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 240 240"}"><defs><linearGradient id="${"a"}" x1="${".667"}" x2="${".417"}" y1="${".167"}" y2="${".75"}"><stop offset="${"0"}" stop-color="${"#37aee2"}"></stop><stop offset="${"1"}" stop-color="${"#1e96c8"}"></stop></linearGradient><linearGradient id="${"b"}" x1="${".66"}" x2="${".851"}" y1="${".437"}" y2="${".802"}"><stop offset="${"0"}" stop-color="${"#eff7fc"}"></stop><stop offset="${"1"}" stop-color="${"#fff"}"></stop></linearGradient></defs><circle cx="${"120"}" cy="${"120"}" r="${"120"}" fill="${"url(#a)"}"></circle><path fill="${"#c8daea"}" d="${"M98 175c-3.888 0-3.227-1.468-4.568-5.17L82 132.207 170 80"}"></path><path fill="${"#a9c9dd"}" d="${"M98 175c3 0 4.325-1.372 6-3l16-15.558-19.958-12.035"}"></path><path fill="${"url(#b)"}" d="${"M100.04 144.41l48.36 35.729c5.519 3.045 9.501 1.468 10.876-5.123l19.685-92.763c2.015-8.08-3.08-11.746-8.36-9.349l-115.59 44.571c-7.89 3.165-7.843 7.567-1.438 9.528l29.663 9.259 68.673-43.325c3.242-1.966 6.218-.91 3.776 1.258"}"></path></svg></div></div></div>`;
});
