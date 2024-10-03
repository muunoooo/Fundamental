/*
    Problem :
    Check number wheter number is prime number or not

*/

// let num:number = 121

/*
if (num % 2 == 0){
    console.log(`${num} Not Prime Number`)
} else if (num % 3 == 0){
    console.log(`${num} Not Prime Number`)
} else if (num % 5 == 0){
    console.log(`${num} Not Prime Number`)
} else if (num % 7 == 0){
    console.log(`${num} Not Prime Number`)
} else{
    console.log(`${num} Prime number`)
}

KURANG TEPAT
*/



const num: number = 361

let divider: number = 0
for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        divider++
    }
}

console.log(
    divider == 2 ? 
    `${num} is a prime number` : 
    `${num} is not a prime number`
)

