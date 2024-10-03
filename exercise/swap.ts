const word: string = "The QuiCk BrOwN Fox";
let res: string ="";

for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i);
    
    if( char === word.toUpperCase()) {
        res += char.toLowerCase()
    } else {
        res += char.toUpperCase()
    }
}

console.log (res); 