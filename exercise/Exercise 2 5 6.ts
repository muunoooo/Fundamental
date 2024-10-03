// questions number 2

// const Name: string = "rotor"
// let reversedName: string = ""

// for (let i = Name.length - 1; i >= 0; i--){
//     // reversedName += Name[i]
//     reversedName += Name.charAt(i);
// }


// // console.log(Name.length)
// // console.log(reversedName)

// if (reversedName === Name){
//     console.log(`${Name} is Palindrome`)
// } else {
//     console.log(`${Name} is not Palindrome`)
// }

// console.log(Name == reversedName ? `${Name} is Palindrome Word` : `${Name} isn't Palindrome Word`);


// questions 5

const word1: string = "Hello world"
let searchWords1: string = "ell"
const rest: string = word1.replace(searchWords1,"")

console.log(rest);

// question 6

// let word: string = "hello everyone in the world"
// let result: string = ""
// let capt: boolean = true


// for (let i = 0; i < word.length; i++){
//     const char = word.charAt(i)

//     if (char === " "){
//        result += char
//        capt = true
//     } else {
//         if (capt) {
//             result += char.toUpperCase()
//             capt = false
//         } else {
//             result += char
//         }
//     }
// }

const sentence: string = "Hello Bandung Apa Kabar"
let sent: string = ""

for (let i = 0; i < sentence.length; i++){
    if ( i == 0 || sentence.charAt(i - 1) == " ") {
        sent += sentence.charAt(i).toUpperCase()
    } else {
        sent += sentence.charAt(i).toLowerCase()
    }
}

console.log(sent)
