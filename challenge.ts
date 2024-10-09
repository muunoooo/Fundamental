// // /**
// //  * input = "seekor anjing dan babi bermain di taman"
// //  * output = "seekor a****ng dan b**i bermain di taman"
// //  */

// // function badWords (input: string) {
// //     const x: any = input.split(" ")

// //     for (let key of x) {
// //         if (x[0][key] === "anjing") {
// //                                      // "anjing" === "a****g"
// //         }
// //     } 
// //     return x
// // }

// // let input = "seekor anjing dan babi bermain di taman"

// // console.log(input.split(" ").map(word =>))
// // console.log(badWords(input))

// function censorWords(input: string): string {
//     // Define the list of words to censor
//     const censorList = ["anjing", "babi"];

//     // Function to censor a word by keeping the first and last letters intact
//     const censor = (word: string): string => {
//         if (word.length <= 2) return word; // No need to censor short words
//         const firstLetter = word[0];
//         const lastLetter = word[word.length - 1];
//         const middlePart = "*".repeat(word.length - 2);
//         return firstLetter + middlePart + lastLetter;
//     };

//     // Split the input string into words
//     const words = input.split(" ");

//     // Replace words that match the censor list
//     const censoredWords = words.map(word => {
//         return censorList.includes(word) ? censor(word) : word;
//     });

//     // Join the words back into a string
//     return censoredWords.join(" ");
// }

// // Test the function
// const input = "seekor anjing dan babi bermain di taman";
// const output = censorWords(input);
// console.log(output);  // Output: "seekor a****ng dan b**i bermain di taman"


function badWords(input: string){
    let wordSendor = ["anjing", "babi", "monyet"]
    const res: any = []

    input.split(" ").forEach((item => {
        if (wordSendor.includes(item)){
            const first = item.charAt(0)
            const last = item.charAt(item.length-1);
            const middle = "*".repeat(item.length-2);

            res.push(first + middle + last)
            
        } else (
            res.push(item)
        )
    }))

    return res.join(" ")
}

let input = "seekor anjing dan babi bermain di taman"
console.log(badWords(input))