/**
 * input = "1234556789"
 * output = "(123)-456-789"
 * 
 * input = "987654321"
 * output = "(987)-654-321"
 */

function number(num: string) {
    return `(${num[0]}${num[1]}${num[2]})-${num[3]}${num[4]}${num[5]}-${num[6]}${num[7]}${num[8]}`
    }

const x = ("123456789")
console.log(number(x))
console.log(phoneNumber(x))

function phoneNumber(num: string){
    let res = "(xxx)-xxx-xxx"
    for (let i = 0; i < num.length; i++){
        res = res.replace("x",num[i])
    }
    return res
}



