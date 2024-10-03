/* 
    find the factorial of the number N
*/

let numberOfFactorial = 6
let rest: number = 1

for (let i = 1; i <= numberOfFactorial ; i++){
    rest = rest * i
}
console.log(rest)