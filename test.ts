function twoSum(nums: number[], target: number): number[] {
    const x: any = {};

    for(let i = 0; i < nums.length; i++) {
        const left = target - nums[i];

        if (x[left] !== undefined) return [x[left], i];
        x[nums[i]] = i;
    }

    return []
};

// console.log(twoSum([2,3,4], 6))

function binarySearch(arr: number[], l: number, r: number, x: number) {
    if (r >= l) {
        let mid = l + Math.floor((r - l) / 2)

        if (arr[mid] == x) return mid

        if (arr[mid] > x) {
            return binarySearch(arr, l, mid - 1, x)
        }
        return binarySearch(arr, mid + 1,r, x)
    }
    return -1
}

const arr: number[] = [2, 3, 4, 10, 40]
let x = 10
// console.log(binarySearch(arr, 0, arr.length - 1, x))

console.log(arr.reduce((a, b) => a + b));

