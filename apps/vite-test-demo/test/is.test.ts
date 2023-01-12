import { expect, test } from 'vitest';

import { isArray, isFunction, isBoolean } from '@guitar/utils';

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