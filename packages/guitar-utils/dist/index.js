"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  is: () => is,
  isArray: () => isArray,
  isString: () => isString
});
module.exports = __toCommonJS(src_exports);
var toString = Object.prototype.toString;
function is(val, type) {
  return toString.call(val) === `[object ${type}]`;
}
var isArray = (val) => {
  return Array.isArray(val);
};
var isString = (val) => {
  return is(val, "String");
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  is,
  isArray,
  isString
});
