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
  S: () => Select
});
var import_index_ab1d6d64 = __toModule(require("./index-ab1d6d64.js"));
var import_axios = __toModule(require("axios"));
var import_fuse = __toModule(require("fuse.js"));
const Select = (0, import_index_ab1d6d64.c)(($$result, $$props, $$bindings, slots) => {
  let cities = [];
  import_axios.default.create({
    baseURL: "http://185.235.42.238:8080",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
  let { placeholder = "" } = $$props;
  let show = false;
  let cityText = "";
  let filters = [];
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  return `<div class="${"select"}"><input type="${"text"}" class="${"select__input"}"${(0, import_index_ab1d6d64.h)("placeholder", placeholder, 0)}${(0, import_index_ab1d6d64.h)("value", cityText, 0)}>
  <div class="${"absolute left-3 top-1/2 transform -translate-y-1/2"}"><svg xmlns="${"http://www.w3.org/2000/svg"}"${(0, import_index_ab1d6d64.h)("class", `h-4 w-4 transform duration-150 ease-out ${show}`, 0)} fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M19 9l-7 7-7-7"}"></path></svg></div>
  <ul${(0, import_index_ab1d6d64.h)("class", `select__menu ${show}`, 0)}>${filters.length ? `${(0, import_index_ab1d6d64.j)(filters, (city) => {
    return `<li class="${"select__item"}"><span>${(0, import_index_ab1d6d64.d)(city.item.Name)}</span>
        <svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}"></path></svg>
      </li>`;
  })}` : `${(0, import_index_ab1d6d64.j)(cities, (city) => {
    return `<li class="${"select__item"}"><span>${(0, import_index_ab1d6d64.d)(city.Name)}</span>
        <svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-5 w-5"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}"></path></svg>
      </li>`;
  })}`}</ul></div>`;
});
