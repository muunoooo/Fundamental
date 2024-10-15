/**
 * ● Given two strings s and t, return true if t is an anagram of s, and false otherwise.
● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
● Example 1:
○ Input: s = "anaGram", t = "nagaram"
○ Output: true
● Example 2:
○ Input: s = "rat", t = "car"
○ Output: false
 */

function anagram(input: string, input2: string): boolean {
  const ea = (str: string) => str.toLowerCase().split("").sort().join("");

  return ea(input) === ea(input2);
}

console.log(anagram("garAm", "Marga"));
