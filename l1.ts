/**

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 */

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let numsJoin: number[] = nums1.concat(nums2).sort((a,b) => a - b)
    let mid: number = Math.floor(numsJoin.length / 2)

    if (numsJoin.length % 2 == 0) {
        return (numsJoin[mid] + numsJoin[mid - 1]) / 2 
    } {
        return numsJoin[mid]
    }
};

const x: number[] = [1,2,3,4,5]
const y: number[] = [6,7,8,9,10,11,12,13,14,15,16,17]
const z: number[] = x.concat(y).sort((a,b)=> a - b)

console.log(x.concat(y).sort((a,b)=> a - b));
console.log(Math.floor(z.length / 2));


console.log(findMedianSortedArrays(x,y));


