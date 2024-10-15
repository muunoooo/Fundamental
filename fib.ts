// 0, 1, 1, 2, 3, 5, 8, 13 ...
// 15 => 610


function climb(input: number): number {
    let a: number = 0
    let b: number = 1
    let c: number = 0

    for (let i = 1; i <= input; i++) {
        c = a + b
        a = b
        b = c
    }

    return c
}

console.log(climb(4))