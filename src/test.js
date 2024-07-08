const { getSortedArray } = require(".");

test("1 - Merges two sorted arrays ", () => {
  expect(getSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([
    1, 2, 2, 3, 5, 6,
  ]);
});

test("2 - Merges two sorted arrays correctly ", () => {
  expect(getSortedArray([1], 1, [], 0)).toEqual([1]);
});

test("3 - Merges two sorted arrays correctly ", () => {
  expect(getSortedArray([0], 0, [1], 1)).toEqual([1]);
});

test("4 - merges two sorted arrays correctly ", () => {
  expect(getSortedArray([1, 4, 7, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([
    1, 2, 4, 5, 6, 7,
  ]);
});

test("merges two sorted arrays correctly - additional case 2", () => {
  expect(getSortedArray([1, 2, 0, 0, 0, 0], 2, [3, 4, 5, 6], 4)).toEqual([
    1, 2, 3, 4, 5, 6,
  ]);
});
