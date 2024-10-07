// const x: string = "day 4, 4 oktober 2024"

// let S = 2;

// for (let i = 1; i <= S; i++) {
//     let spaces = " ".repeat(S - i);        
//     let stars = "*".repeat(2 * i - 1);     
//     console.log(spaces + stars);
// }

function reverseStr (input: string) {
    return input.split("").reverse().join("").toUpperCase();
    console.log(reverseStr)
}

// const letter: string = reverseStr("kasur rusak")
reverseStr("halo")