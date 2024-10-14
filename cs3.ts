/**
 * input = "Hello Purwadhika"
 * output = [13,2]
 * 
 * input = "B4ndung"
 * output = [5, 1]
 */

function HowMany (str: string): number[] {
    let resCapital:number = 0
    let resLower: number = 0
    let arrStr = str
    .replace(" /g", "")
    .replace("1", "")
    .replace("2", "")
    .replace("3", "")
    .replace("4", "")
    .replace("5", "")
    .replace("6", "")
    .replace("7", "")
    .replace("8", "")
    .replace("9", "")
    .replace("0", "")
    .split("")
    .map((item) => item === item.toLowerCase() ?  resLower++ : resCapital++  )
    

    return [resLower,resCapital]

}

// console.log(HowMany("Hello Purwa dhika"))

function count (str: string) {
    const letter = str.replace(/[\s/0-9!-+]/g, "")
    const lover = letter.replace(/[A-Z]/g,"")
    return [lover.length, letter.length - lover.length]
}

console.log(count("Hello Purw$adh++ika"))