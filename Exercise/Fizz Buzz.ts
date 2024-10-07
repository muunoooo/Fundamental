/* 
    Create a function that can loop the number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz".
    ● Parameters : n → total looping    
    ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
    ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz
*/

function fizzbuzz(n:number) {
    let res:string = '';
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            res += 'FizzBuff '
        }else if (i % 3 === 0 ) {
            res += 'Fizz '
        }else if (i % 5 === 0) {
            res += 'Buzz '
        }else{
            res += `${i} `
        }
    }
    console.log(res);
}
fizzbuzz(16)

function FizzBuzz(n: number) {
    const result: (string | number)[] = []
    for (let i = 1; i <= n; i++) {
        if ( i % 3 == 0 && i % 5 == 0) {
            result.push("FizzBuff");
        } else if ( i % 3 == 0) {
            result.push("Fizz");
        } else if ( i % 5 == 0) {
            result.push("Buzz");
        } else {
            result.push(i)
        }
    }
    return result.join(", ")
}

console.log(FizzBuzz(15))