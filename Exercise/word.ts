/*
    Write a function to split a string and convert it into an array of words
    ○ Example : “Hello World” → [“Hello”, “World”]
*/

function word(str: string) {
    return str.split(" ")
}

console.log(word("Hello World"));