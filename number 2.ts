/*
    ● Create a function to get the intersection of two objects
    ● Example
    ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
    ○ Output: { a: 1 }
*/
interface Input {
    [x: string]: any
}


function intersection (a: Input, b:Input): any {
    let res: any = {}

    for (let item in a)
        if (a[item] == b[item]) {
            res[item] = a[item]
        }

    return console.log(res)
}

const x = {a: 1, b: 2}
const y = {a: 1, c: 3, b: 2}
intersection(x,y)