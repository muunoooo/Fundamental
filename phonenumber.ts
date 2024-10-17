function letterCombinations(digits: string): string[] {
    const digitToNumber: { [num: string]: string[]} = {
        '2' : ["a","b","c"],
        '3' : ["d","e","f"],
        '4' : ["g","h","i"],
        '5' : ["j","k","l"],
        '6' : ["m","n","o"],
        '7' : ["p","q","r","s"],
        '8' : ["t","u","v"],
        '9' : ["w","x","y","z"]
    }

    let res: string[] = []

    if (digits.length === 0) {
        return [];
    }
    return res
};