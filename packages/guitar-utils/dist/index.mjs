// src/index.ts
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
export {
  is,
  isArray,
  isString
};
