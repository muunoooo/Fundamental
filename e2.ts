/**
 * ● Given a non-empty array of integers nums, every element appears twice except for one. Find that
single one.
● Example 1:
○ Input: nums = [2,2,1]
○ Output: 1
● Example 2:
○ Input: nums = [4,1,2,1,2]
○ Output: 4
● Example 3:
○ Input: nums = [1]
○ Output: 1
Exercise
 */

// function singleNumber(nums: number[]): number {
//     let res: number = 0
//     for (let key of nums) {
//         res ^= key
//     }
//     return res
// };

function singleNumber(nums: number[]):number[] {
    nums.sort((a, b) => a - b);
    const res: number[] = []
    // [1, 1, 2, 2, 2, 4]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) {
            res.push(nums[i]);
        }
    }
    return res;
}

console.log(singleNumber([2,2,2,1,1,4,0]));

function single (arr: number[]) {
    return arr
        .filter((item,idx,num) => 
        num.filter(val => val == item).length == 1)
}