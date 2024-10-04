// function declaration

function reverseStr (input: string) {
    return input.split("").reverse().join("").toUpperCase();
}

const letter: string = reverseStr("kasur rusak")

// console.log(letter);
// console.log(reverseStr("Hello Wolrd"));


// function expression

const sum = function (a:number = 1 , b:number = 4, ...others: number[]) {
    let jumlah = a + b
    console.log(others);
    return jumlah
}

// console.log (sum(4,5))

// console.log(sum(0, 4, 4, 7));

// nested function

function getMessage(firstname: string) {
    function sayhello () {
        return "Hello" + " " + firstname;
    }
    function welcomeMessage () {
        return "Welcome to Purwadhika!";
    }

    return sayhello() + " " + welcomeMessage()
}

const message: string = getMessage("David");
// console.log (message);

// clousre function
function greeting (name: string) {
    const defaultMsg: string = "Hello" + " "
    return function () {
        return defaultMsg + name
    }
}

const greetingDavid = greeting("David");
// console.log(greetingDavid())


// implentasi function dalam capitalize word

function capitalize (str: string){
    let res: string = ""
    for (let i = 0; i < str.length; i++) {
        if ( i == 0 || str.charAt(i - 1) == " ") {
            res += str.charAt(i).toUpperCase()
        } else {
        res += str.charAt(i).toLowerCase()
        }
    }
    return res
}

// currying
function multiplier (factor: number) {
    return function (num: number) {
        return factor * num;
    }
}

const mul3 = multiplier(3);
const mul5 = multiplier(5);

// console.log(mul3(4))
// console.log(mul5(4))

// recursive, function yang memanggil dirinya sendiri
function countDown (fromNumber: number) {
    console.log(fromNumber)

    let nextNumber:number = fromNumber - 1
    if (nextNumber > 0) {
        countDown(nextNumber)
    }
}

// countDown(10)

// arrow function, mempercepat sintax function

const square = (a:number, b:number) => a * b
console.log(square(4,1));

