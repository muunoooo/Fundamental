/*
    ● Create a function to check if two objects are equal
    ● Example
    ○ Input : { a: 2 } & { a: 1 }
    ○ Output: false
    ● Example
    ○ Input : { a: “Hello” } & { a: 1 }
    ○ Output: false
    ● Example
    ○ Input : { a: 1 } & { a: 1 }
    ○ Output: true 
*/

// function equal (a= {} , b= {}) {
//     if (Object.values(a).toString() == Object.values(b).toString() ) {
//         console.log (true)
//     } else {
//         console.log (false)
//     }
    
// }

// const a = {a: 11}
// const b = {b: "11"}

// equal(a, b)

// function compare(obj1:object,obj2:object){
//     const key1 = Object.keys(obj1)
//     const key2 = Object.keys(obj2)
//     if(key1.length !== key2.length){
//         return false
//     }
//     for (let key1 of key2){
//         if (obj1[key1 as keyof typeof obj1] !== obj2[key1 as keyof typeof obj2]) {
//             return false
//         }
//     }
//     return true

    
// }
// console.log(compare({a: 1},{a: "1"}))

interface Input {
    [x: string]: any
}

const obj1: Input = {a: 1}
const obj2: Input = {a: 1}

function isEqual (obj1: Input, obj2: Input) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length)
        return false

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }

    return true
}

console.log(isEqual(obj1, obj2));




