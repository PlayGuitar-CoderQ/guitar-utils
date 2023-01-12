import { expect, test } from 'vitest';

import { isArray, isFunction, isBoolean, isDate } from '@guitar/utils';

test("isArray", () => {
  expect(isArray([])).toBe(true);
})

test("isFunction", () => {
  const test = () => {};
  expect(isFunction(test)).toBe(true);
})

test("isBoolean", () => {
  const isShow = true;
  expect(isBoolean(isShow)).toBe(true);
})

test("isDate", () => {
  expect(isDate(new Date())).toBe(true);
})