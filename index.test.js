import { groupArrayElements } from "./index.js";

describe("groupArrayElements function are being tested", function () {
  test("invalid arguments should throw exception", function () {
    expect(() => groupArrayElements([1, 2, 3], -1)).toThrow();
    expect(() => groupArrayElements(null, 5)).toThrow();
  });

  test("array with length greater or equal than size should return proper list", function () {
    expect(groupArrayElements([1, 2, 3, 4, 5], 3)).toEqual([
      [1, 2],
      [3, 4],
      [5],
    ]);

    expect(groupArrayElements([1, 2, 3, 4], 3)).toEqual([[1], [2], [3, 4]]);

    expect(groupArrayElements([1, 2, 3, 4, 5, 6], 4)).toEqual([
      [1],
      [2],
      [3],
      [4, 5, 6],
    ]);
  });

  test("array with length less than size should return proper list", function () {
    expect(groupArrayElements([1, 2, 3, 4, 5], 7)).toEqual([
      [1],
      [2],
      [3],
      [4],
      [5],
      [],
      [],
    ]);
  });
});
