import { assert, expect, test } from 'vitest';

import { isArray } from '@guitar/utils';

test("isArray", () => {
  expect(isArray([])).toBe(true);
})