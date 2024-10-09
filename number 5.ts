/*
● Create a function to find a factorial number using recursion
● Example
○ Input : 5
○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120
*/


// function factorialNum(x: number): string {
//     let result = 1;
//     let steps = `${x}! = `;

//     for (let i = x; i > 0; i--) {
//         result *= i;
//         steps += i; 

//         if (i > 1) {
//             steps += " x ";
//         }
//     }

//     steps += ` = ${result}`;

//     return steps;
// }

// const input = 5;
// console.log(factorialNum(input));

// function factorial(input: number): number {
//     if (input == 0) {
//         return 1
//     }
//     return input * factorial(input - 1)
// }

function factorial(n: number): number {
    return n == 0 ? 1 : n * factorial(n -1)
}

console.log(factorial(5))


