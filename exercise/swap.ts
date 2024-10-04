const word: string = "The QuiCk cheEtaH";
let res: string ="";

for (let i = 0; i < word.length; i++) {
    let char = word[i];
    
    if( char === word[i].toUpperCase()) {
        res += char.toLowerCase()
    } else {
        res += char.toUpperCase()
    }
}

console.log (res); 