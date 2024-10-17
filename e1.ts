/**
 * ● Given an array nums of size n, return the majority element. The majority element is the element that
appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
● Example 1:
○ Input: nums = [3,2,3]
○ Output: 3
● Example 2:
○ Input: nums = [2,2,1,1,1,2,2]
○ Output: 2
 */

// function majorityElement(nums: number[]): number {
//     return nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)];
//   };

function majorityElement(nums: number[]): number {
    let count = 0;
    let candidate = nums[0];

    for (let key of nums) {
        if (count === 0) {
            candidate = key;
        }
        count += (key === candidate) ? 1 : -1;
    }

    let majorityNumber = 0;
    const majorityCount = Math.floor(nums.length / 2);

    for (let num of nums) {
        if (num === candidate) {
            majorityNumber++;
        }
    }
    return majorityNumber > majorityCount ? candidate : -1;
}



const nums1 = [3, 2, 2, 3];
const nums2 = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(nums1));
console.log(majorityElement(nums2));
