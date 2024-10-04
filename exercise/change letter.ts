/* 
    Write a code to change every letter a into * from a string of input
*/

const word: string = "An apple keeps the doctor away"
const smallword: string = word.toUpperCase();
let res: string ="";

for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i);
    
    if (char === 'a' || char === "A") {
        res += '*';  
    } else {
        res += char; 
    }    
}

console.log(res); 

const result: string = word.replace(/a/gi, "*"); // regEx
console.log(result);

const letter: string = "Hello@ Eve3ry?one";
console.log (letter.replace(/[^a-zA-Z0-9\s]/g, ""))