const {
  lengthOfLongestSubString,
} = require("../../strings/lengthOfLongestSubString");
const argFormatter = require("../helpers/argFormatter");

describe("lengthOfLongestSubString", () => {
  const str1 = "abcabcbb";
  const expected1 = 3;
  // Explanation: The answer is "abc", with the length of 3.

  const str2 = "bbbbb";
  const expected2 = 1;
  // Explanation: The answer is "b", with the length of 1.

  const str3 = "pwwkew";
  const expected3 = 3;
  /* Explanation: The answer is "wke", with the length of 3. 
    Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

  const str4 = "dvadf";
  const expected4 = 4;
  // Explanation: "vadf"

  const testCases = [
    { arguments: [str1], expected: expected1 },
    { arguments: [str2], expected: expected2 },
    { arguments: [str3], expected: expected3 },
    { arguments: [str4], expected: expected4 },
  ];

  it("should return the length of the longest substring (without dupes) from the given string.", () => {
    testCases.forEach(({ arguments, expected }) => {
      expect(lengthOfLongestSubString(...arguments))
        .withContext(argFormatter(lengthOfLongestSubString, arguments))
        .toEqual(expected);
    });
  });
});
