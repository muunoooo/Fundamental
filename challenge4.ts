/**
 *  input : "Purwadhika"
 *  output : 4
 * 
 *  input : "Bandung"
 *  output : 2
 */

const vowel: string [] = ["a", "i", "u", "e", "o"]

function checkVokal(str: string) {
    let x: number = 0
    for (let i = 0; i < str.length; i++){
        if (str[i] == "a" ||str[i] == "i" || str[i] == "e" || str[i] == "u" || str[i] == "o") {
            x += 1
        }
    }
    return x
}

const x: string = "PurwAdhika"
console.log(checkVokal(x))

// console.log(x.toLowerCase().split(""))
// console.log(vokal)

function checkVokal1 (str: string) {
    let y = str.toLowerCase().split("")
    let x: number = 0
    for (let i = 0; i < str.length; i++){
         if (vowel.includes(y[i])){
            x += 1
        }
    }
    return x
}

// console.log(vokal.findIndex((item) => vokal))
console.log(checkVokal1(x));

// console.log(x.toLowerCase().split(""));

function searchAmountOfVowel(str:string):number {

    return str.split('').filter(item => 'aiueoAIUEO'.includes(item)).length

}

console.log(searchAmountOfVowel('Bandung'))