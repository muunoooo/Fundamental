/*
    Write a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
*/

function secondSmallest (num: number[]) {
    num.sort((a, b) => a - b)
    const newNum = num.filter((item) => item > num[0])

    return newNum[0]
}

let num: number[] = [5, 3, 1, 1, 1, 7, 2, 6]
console.log(secondSmallest([5, 1, 2]))




