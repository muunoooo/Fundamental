/*
    Make a code Fibonacci Numbers
    0, 1, 2, 3, 5, 8, 13, 21, ....
*/

const z: number = 15
let a: number = 0
let b: number = 1
let description: string =""

for (let i = 1; i < z; i++){
    console.log(a)
    let nextnumber = a + b
    a = b
    b = nextnumber
}

