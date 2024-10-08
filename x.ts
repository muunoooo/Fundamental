// function findSecondSmallest (arr: number[]){
//     arr.sort((a, b) => a - b)
//     const newArr = arr.filter((item) => item > arr[0] || item !== 0)
//     return newArr[0]
// }
// const numbers = [5, 3, 1, 1, 1, 1, 1, 7, 2, 6];
// const secondSmallest = findSecondSmallest(numbers);
// console.log(secondSmallest);

// function tambahElemenUnik(arr: number[], elemenBaru: number): number[] {
//     if (arr.includes(elemenBaru) == false) { //negasi (jika belum ada)
//         arr.push(elemenBaru);
//     }
//     return arr;
// }

// let arr1 = [1, 2, 3, 4];
// console.log(tambahElemenUnik(arr1, 4)); 
// console.log(tambahElemenUnik(arr1, 7)); 

function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false
    }
    const reverseX = parseInt(x.toString().split("").reverse(g).join(""));
    return(x == reverseX)
};

console.log(isPalindrome(12))