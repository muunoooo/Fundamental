/**
 * input = "Purwadhika Bandung"
 * n = 10
 * output = "Purwadhika..."
 * 
 * * input = "Purwadhika Bandung"
 * n = 15
 * output = "Purwadhika Band..."
 * 
 * * input = "Purwadhika Bandung"
 * n = 20
 * output = "Purwadhika Bandung"
 */

function longWord (str: string,n: number) {
    if (str.length > n) {
            return str.substring(0,n) + "..."
    } else {
    return str
}
}

console.log(longWord("Purwadhika Bandung",5))

console.log("123".split(""))