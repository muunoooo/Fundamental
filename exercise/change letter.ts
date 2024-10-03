const word: string = "An apple "
const smallword: string = word.toUpperCase()
let res: string =""

for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i);
    
    if (char === 'a' || char === "A") {
        res += '*'; // 
    } else {
        res += char; 
    }
    
}

console.log(res); 
