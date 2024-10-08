/*
    Write a function to get the lowest, highest and average value in the array (with and without sort function).
    a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
*/

function decider(arr: number[]){
    let sortedArr = arr.sort((a, b) => a - b)

    let lowest:number = sortedArr[0]
    let highest:number = sortedArr[sortedArr.length- 1]
    let average:number = sortedArr.reduce((a, b) => a + b, 0) / arr.length

    return {
        lowest:lowest,
        highest:highest,
        average:average
    }
} 
let arr: number[] = [12, 5, 23, 18, 4, 45, 32]

console.log(decider(arr))


