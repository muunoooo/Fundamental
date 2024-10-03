// questions number 1

// let num: number = 2

// for (let i = 1; i <= 10; i++){
//     console.log(`${num} x ${i} = ${num * i}`)
// }

// // questions number 3

// let cm: number = 200200
// let km: number = cm / 100000

// console.log(`${cm} -> ${km} km`)

// console.log( cm / 100000 ? "km": "km")



// questions number 4

let money: number = 123456789
let moneyStr: string = money.toString()

let res: string = ""
let count: number = 0

for (let i = moneyStr.length - 1; i >= 0; i--){
    if (count % 3 == 0 && count > 0){
        res = "." + res
    }

    res = moneyStr.charAt(i) + res
    count++
    
}

console.log(`Rp ${res},00`)

let idr: string = money.toLocaleString()

console.log (idr)
