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
  default: () => Airlines
});
var import_index_ab1d6d64 = __toModule(require("../../chunks/index-ab1d6d64.js"));
const AirlineCard = (0, import_index_ab1d6d64.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"agency__card"}"><img class="${"agency__card__image"}" src="${"/images/iwan-shimko-tCp2K2sYpFg-unsplash.jpg"}">
    <div class="${"agency__card__body"}"><h2 class="${"agency__card__title"}">\u0634\u0631\u06A9\u062A \u0647\u0648\u0627\u067E\u06CC\u0645\u0627\u06CC\u06CC \u0634\u0645\u0627\u0631\u0647 1</h2>
      <p class="${"agency__card__description"}">\u062C\u0632\u0626\u06CC\u0627\u062A \u0634\u0631\u06A9\u062A \u0647\u0648\u0627\u067E\u06CC\u0645\u0627\u06CC\u06CC \u0634\u0645\u0627\u0631\u0647 \u062F\u0648</p>
      <div class="${"agency__card__stars"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"102.558"}" height="${"19.508"}" viewBox="${"0 0 102.558 19.508"}"><g id="${"rate"}" transform="${"translate(-1563.342 -895)"}"><path id="${"Path_316"}" data-name="${"Path 316"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1644.654 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_315"}" data-name="${"Path 315"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1624.143 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_314"}" data-name="${"Path 314"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1603.631 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_313"}" data-name="${"Path 313"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1583.12 895)"}" fill="${"#ffcb14"}"></path><path id="${"Path_312"}" data-name="${"Path 312"}" d="${"M10.99,0l2.421,7.451h7.835l-6.338,4.605,2.421,7.451L10.99,14.9,4.652,19.508l2.421-7.451L.734,7.451H8.569Z"}" transform="${"translate(1562.607 895)"}" fill="${"#ffcb14"}"></path></g></svg></div>
      <button class="${"agency__card__button"}"><span>\u0645\u0634\u0627\u0647\u062F\u0647 \u062C\u0632\u0626\u06CC\u0627\u062A</span>
        <svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M10 19l-7-7m0 0l7-7m-7 7h18"}"></path></svg></button></div></div>`;
});
const Airlines = (0, import_index_ab1d6d64.c)(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"page__title"}">\u0634\u0631\u06A9\u062A \u0647\u0627\u06CC \u0647\u0648\u0627\u067E\u06CC\u0645\u0627\u06CC\u06CC</h1>
<div class="${"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"}">${(0, import_index_ab1d6d64.v)(AirlineCard, "AirlineCard").$$render($$result, {}, {}, {})}
  ${(0, import_index_ab1d6d64.v)(AirlineCard, "AirlineCard").$$render($$result, {}, {}, {})}
  ${(0, import_index_ab1d6d64.v)(AirlineCard, "AirlineCard").$$render($$result, {}, {}, {})}
  ${(0, import_index_ab1d6d64.v)(AirlineCard, "AirlineCard").$$render($$result, {}, {}, {})}
  ${(0, import_index_ab1d6d64.v)(AirlineCard, "AirlineCard").$$render($$result, {}, {}, {})}
  ${(0, import_index_ab1d6d64.v)(AirlineCard, "AirlineCard").$$render($$result, {}, {}, {})}</div>`;
});
