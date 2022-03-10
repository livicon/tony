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
  default: () => Blog
});
var import_index_ab1d6d64 = __toModule(require("../../chunks/index-ab1d6d64.js"));
var import_PostCard_94b3b3b4 = __toModule(require("../../chunks/PostCard-94b3b3b4.js"));
const Blog = (0, import_index_ab1d6d64.c)(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"page__title"}">\u0648\u0628\u0644\u0627\u06AF</h1>
  <div class="${"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"}">${(0, import_index_ab1d6d64.v)(import_PostCard_94b3b3b4.P, "PostCard").$$render($$result, {}, {}, {})}
    ${(0, import_index_ab1d6d64.v)(import_PostCard_94b3b3b4.P, "PostCard").$$render($$result, {}, {}, {})}
    ${(0, import_index_ab1d6d64.v)(import_PostCard_94b3b3b4.P, "PostCard").$$render($$result, {}, {}, {})}
    ${(0, import_index_ab1d6d64.v)(import_PostCard_94b3b3b4.P, "PostCard").$$render($$result, {}, {}, {})}
    ${(0, import_index_ab1d6d64.v)(import_PostCard_94b3b3b4.P, "PostCard").$$render($$result, {}, {}, {})}
    ${(0, import_index_ab1d6d64.v)(import_PostCard_94b3b3b4.P, "PostCard").$$render($$result, {}, {}, {})}</div>`;
});
