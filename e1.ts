/**
 * ● Create a function to convert Excel sheet column title to its corresponding column number.
● Example :
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
…
● Example :
○ Input : AB
○ Output : 28
 *
 */

// let x = "B"
// console.log("B".charCodeAt(0) + "A".charCodeAt(0) - "a".charCodeAt(0) - 8);
// console.log("a".charCodeAt(0));

// function WordsToNumber(input: string): number {
//     let inputArray = input.split("");
//     let res: number = 0
//     if (input.length === 1) {
//         res += inputArray[0].charCodeAt(0) - "a".charCodeAt(0) + 33
//     } else if (input.length === 2) {
//         res += inputArray[0].charCodeAt(0) + inputArray[1].charCodeAt(0) - "a".charCodeAt(0) - 6
//     } else if (input.length === 3) {
//         res += inputArray[0].charCodeAt(0) 
//         + inputArray[1].charCodeAt(0)
//         + inputArray[2].charCodeAt(0)
//         - "a".charCodeAt(0) - 6
//     }
//     return res
// }
// console.log(WordsToNumber("BA"));

function excelColumnToNumber(input: string): number {
    let result = 0;

    for (let i = 0; i < input.length; i++) {
        let charValue = input.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
        result = result * 26 + charValue;
    }

    return result;
}

console.log(excelColumnToNumber("AAA"));  