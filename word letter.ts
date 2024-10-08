/*
    Write a function that takes an array of words and returns a string by concatenating the words in the array,
    separated by commas and - the last word - by an 'and'.
    a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
*/

function comas (arr: string[]) {
    if (arr.length == 1) {
        return '"' + arr[0] + '"'
    } else if (arr.length == 2) {
        return '"' + arr.join(" and ") + '"'
    } else if (arr.length > 2) {
        let allButLast = arr.slice(0, -1). join(', ');
        let lastWord = arr[arr.length-1]
        return '"' + allButLast + ', and ' + lastWord + '"'
    }
}

let arr: string [] = ["apple", "banana","cherry", "date", "banana"]
console.log(comas(arr))

let x: string[] = arr.slice(0, -1)

console.log(x)