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
  default: () => Date_1
});
var import_index_ab1d6d64 = __toModule(require("../../chunks/index-ab1d6d64.js"));
var import_Mdate_210e77c4 = __toModule(require("../../chunks/Mdate-210e77c4.js"));
var import_store_db17b703 = __toModule(require("../../chunks/store-db17b703.js"));
var import_jalali_date = __toModule(require("jalali-date"));
var import_jalali_date_time = __toModule(require("jalali-date-time"));
var import_index_16edea52 = __toModule(require("../../chunks/index-16edea52.js"));
const Date_1 = (0, import_index_ab1d6d64.c)(($$result, $$props, $$bindings, slots) => {
  let dateval;
  let val = "";
  let valm = "";
  let cdp = "m";
  import_store_db17b703.c.subscribe((n) => cdp = n);
  function toggleDatePicker() {
    import_store_db17b703.c.update((n) => n === "m" ? "j" : "m");
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<h1>${(0, import_index_ab1d6d64.d)(val)}</h1>
<h1>${(0, import_index_ab1d6d64.d)(valm)}</h1>


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
    }, {})}`}`;
  } while (!$$settled);
  return $$rendered;
});
