/**
 * ● Create a function to convert roman numeral to integer.
● Example 1:
○ Input: s = "III”
○ Output: 3
○ Explanation: III = 3.
● Example 2:
○ Input: s = "LVIII"
○ Output: 58
○ Explanation: L = 50, V= 5, III = 3.
● Example 3:
○ Input: s = "MCMXCIV"
○ Output: 1994
○ Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 */

// function romanToInteger(input: string): number {
//     const roman: {[key:string]:number} = {
//         "I" : 1,
//         "V" : 5,
//         "X" : 10,
//         "L" : 50,
//         "C" : 100,
//         "D" : 500,
//         "M" : 1000
//     }

// }

function romanToInt(input: string): number {
  const romanMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = 0;

  for (let i = 0; i < input.length; i++) {
    const curr = romanMap[input[i]];
    const next = romanMap[input[i + 1]];

    curr < next ? (res -= curr) : (res += curr);
  }

  return res;
}

let x = "MVIM";
console.log(romanToInt(x));

// console.log(romanToInt("IV"));
// console.log(0 < 1);
