const { concat } = require("../../../recreated_methods/Array/concat");
const argFormatter = require("../../helpers/argFormatter");

describe("concat", () => {
  const arrA1 = ["a", "b"];
  const arrB1 = [1, 2, 3];
  const expected1 = ["a", "b", 1, 2, 3];

  const arrA2 = [1, 2, 3];
  const arrB2 = ["a", "b"];
  const expected2 = [1, 2, 3, "a", "b"];

  const testCases = [
    { arguments: [arrA1, arrB1], expected: expected1 },
    { arguments: [arrA2, arrB2], expected: expected2 },
  ];

  testCases.forEach(({ arguments, expected }) => {
    const pristineArgs = JSON.parse(JSON.stringify(arguments));
    const outputArr = concat(...arguments);

    it("should return a new array that has all the first given array's items and then the second given array's items.", () => {
      expect(outputArr)
        .withContext(argFormatter(concat, arguments))
        .toEqual(expected);
    });

    arguments.forEach((inputArr, i) => {
      it("should have returned a new array.", () => {
        expect(outputArr).not.toBe(inputArr);
      });

      it("should not have mutated the given arrays.", () => {
        expect(inputArr).toEqual(pristineArgs[i]);
      });
    });
  });
});
