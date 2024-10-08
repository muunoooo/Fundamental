/*
Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
of the same length.
a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/

function calculate (num1: number [], num2: number []) {
    let result = [];
    
    for (let i = 0; i < num1.length ; i++) {
        result.push(num1[i]+num2[i]);
    }

    return result
}

let num1: number [] = [1, 2, 3, 5]
let num2 : number [] = [3, 2, 1, 4]

console.log(calculate(num1, num2))