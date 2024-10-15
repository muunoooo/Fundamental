function subsets(nums: number[]): number[][] {
    const res: number[][] = []
    if (nums.length < 2) {
        return res
    }
    return res
};

// const x: number[]= [[], [2]]
// console.log(subsets([2,2]));

console.log("1" + 2);

function climbStairs(n: number): number {
    if (n === 1) {
        return 1;
    }

    let dp: number[] = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

console.log(climbStairs(4));
