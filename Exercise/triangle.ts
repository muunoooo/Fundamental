// method 1

function traingle (height: number){
    for (let i = 1; i <= height; i++) {
        let res: string = "";
        for (let j = 1; j <= i; j++) {
            res += `${j} `
        }
        console.log(res);
    }
}

traingle(2);

// method 2

function traingle1 (height: number){
    let result: string = ""
    for (let i = 1; i <= height; i++) {
        let res: string = "";
        for (let j = 1; j <= i; j++) {
            res += `${j} `
        }
        if (i !==height) {
            res += `\n`
        }
        result += res
    }
    return result
}

console.log(traingle1(2))