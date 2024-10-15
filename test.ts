// function dominantIndex(nums: number[]): number {
//     if (nums.length === 0) return -1;
    
//     const sortedIndices = nums.map((num, index) => ({ num, index }))
//         .sort((a, b) => b.num - a.num);

//     const maxNum = sortedIndices[0].num; 
//     const maxIndex = sortedIndices[0].index; 

//     if (maxNum >= (sortedIndices[1]?.num || 0) * 2) {
//         return maxIndex;
//     } else {
//         return -1; 
//     }
// }

// const sortedIndices = [1,2,4,3].map((num, index) => ({ num, index }))
// .sort((a, b) => b.num - a.num);

// // console.log(sortedIndices);
// const maxindex = sortedIndices[0]

// console.log(maxindex.index);

function dominantIndex(nums: number[]): number {
    const x:any = {}
    
    nums.forEach((n, i) => x[n] = i)
    // console.log(x)
    nums.sort((a,b) => b - a);

    const maxNum = nums[0];
    const secondMax = nums[1];

    if (secondMax*2 <= maxNum) return x[maxNum]

    return -1;
};
// console.log(dominantIndex([2,5,10,3]));


function reverseWords(s: string): string {
    return s.trim().split(/\s+/).reverse().join(" ")
};

console.log(reverseWords("Hello  World"));


function reverse(x: number): number {
    const isNegative = x < 0; // Check if the number is negative
    const reversedString = String(Math.abs(x)).split('').reverse().join(''); // Reverse the digits as a string
    const reversedNumber = isNegative ? -Number(reversedString) : Number(reversedString); // Reapply the sign

    // Check for overflow
    if (reversedNumber < -2147483648 || reversedNumber > 2147483647) {
        return 0; // Return 0 in case of overflow
    }

    return reversedNumber; // Return the reversed number
}

