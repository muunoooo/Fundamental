// /*
//     input = "Pig latin is cool"
//     out = "igPay atinlay siay oolcay"
// */

// function pigLatin(str:string ) {
//     // Split the sentence into words
//     let words = str.split(' ');

//     // Convert each word to Pig Latin
//     let pigLatinWords = words.map(word => {
//         // Move the first letter to the end and add "ay"
//         return word.slice(1) + word[0] + 'ay';
//     });

//     // Join the Pig Latin words back into a sentence
//     return pigLatinWords.join(' ');
// }

// let input = "Pig latin is cool";
// let output = pigLatin(input);

// console.log(output); 


function changeLetterAy (str: string) {
    return str
        .split(' ')
        .map(item => item.slice(1) + item[0] + 'ay')
        .join(' ');
}
const input = "Pig latin is cool"
const output = changeLetterAy(input);

console.log(output);