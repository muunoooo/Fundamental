/*
    n = 5
    
    *
    **
    ***
    ****
    *****
*/

let N:number = 5

for (let i = 1; i <= N ; i * 2) {
    console.log("*".repeat(i))
}

let n1 = 5; // Number of rows

// for (let i = 1; i <= n1; i++) {
//     let spaces = " ".repeat(n1 - i);
//     let stars = "*".repeat(i);

//     console.log(spaces + stars);
// }

// cara lain
for (let i = 1; i <= n1; i++) {
        console.log(" ".repeat(n1 - i) + "*".repeat(i))    
}




