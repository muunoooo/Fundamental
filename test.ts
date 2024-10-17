function removeElement(nums: number[], val: number): number {
    let res: number = 0

    for (let key of nums) {
        if (key !== val) {
            // console.log(res)
            nums[res] = key
            res++
        }
    }
    return res
};
console.log(removeElement([3,2,2,3], 3));
