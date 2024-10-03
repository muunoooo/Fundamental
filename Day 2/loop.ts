for ( let i: number = 0; i <= 5; i++){
    if (i == 3 ) continue
    console.log(`Hello ke - ${i}`);
}

for ( let k: number = 1; k <=11 ; k +=2){
    console.log(`Hi ke - ${k}`)
}

let i: number = 1

while (true){
    console.log(`Nomor ke - ${i}`)
    if (i > 10) break
    i +=2 
}

// method do while

do {
    console.log(`Hi ke - ${i}`)
    i++
} while (i <= 5)

/*
    while vs do while
    while = mikir dulu baru kerja
    do while = kerja dulu baru mikir
*/

const n: number = 6

let result: number = 1
for (let i: number = n; i > 0; i--){
    result *= i
}

console.log(result);