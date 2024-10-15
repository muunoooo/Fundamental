function climbStairs(n: number): number {
  if (n <= 2) return n;

  let first = 1;
  let second = 2;
  let current = 0;

  for (let i = 3; i <= n; i++) {
    current = first + second;
    first = second;
    second = current;
  }

  return current;
}
console.log(climbStairs(1));

function fib(n: number) {
  const res: number[] = [0, 1];
  for (let i = 0; i < n; i++) {
    res.push(res[i] + res [i + 1])
  }

  return res[n+1]
}

console.log(fib(5));
