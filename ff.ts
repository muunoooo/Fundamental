function factorialWithSteps(n: number): string {
    function factorialRecursive(n: number, steps: string[] = []): [number, string[]] {
        if (n <= 1) {
            steps.push("1");
            return [1, steps];
        }
        
        const [subResult, subSteps] = factorialRecursive(n - 1, steps);
        const result = n * subResult;
        steps[steps.length - 1] = `${n} x ${subSteps[subSteps.length - 1]}`;
        
        return [result, steps];
    }

    const [result, steps] = factorialRecursive(n);
    const stepString = steps[0];
    return `${n}! = ${stepString} = ${result}`;
}

console.log(factorialWithSteps(2))