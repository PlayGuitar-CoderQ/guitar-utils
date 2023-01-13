const toString = Object.prototype.toString;

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

export const isArray = (val: unknown): boolean => {
  return Array.isArray(val);
}

export const isString = (val: unknown): val is string => {
  return is(val, 'String');
}

export const isFunction = (val: unknown): val is Function => {
  return typeof val === 'function';
}

export const isBoolean = (val: unknown): val is boolean => {
  return is(val, "Boolean")
}

export const isDate = (val: unknown): val is Date => {
  return is(val, 'Date');
}

export function isDef<T = unknown>(val?: T): val is T {
  return typeof val !== 'undefined';
}

export function isUnDef<T = unknown>(val?: T): val is T {
  return !isDef(val);
}