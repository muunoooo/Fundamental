/**
 * input = "HelloWorld"
 * output = ["hello", "World"]
 *
 * input = "johnDoeMiller"
 * output = ["john" , "Doe", "Miller"]
 */

function splitCamelCase(input: string): string[] {
  // Use a regular expression to match the boundary between lowercase and uppercase letters
  return input.split(/(?=[A-Z])/);
}

function space(input:string): string[] {
    return input
    .split("")
    .map((item) => item.replace("/A-Z/", ` ${item}`))
    .join("")
    .trim()
    .split(" ")

}
function space1(input:string): string[] {
    return input
    .split("")
    .map((item) => item == item.toUpperCase() ? ` ${item}` : item)
    .join("")
    .trim()
    .split(" ")

}

// Test cases
let pola = /a-z/;
console.log(space("helloWorld"));
