import { assert, expect, test } from 'vitest';

import { isArray, isFunction } from '@guitar/utils';

test("isArray", () => {
  expect(isArray([])).toBe(true);
})

test("isFunction", () => {
  const test = () => {};
  expect(isFunction(test)).toBe(true);
})