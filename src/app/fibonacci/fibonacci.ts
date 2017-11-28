export class Fibonacci {
    public static calculate(n: number) {
        const calculate = (n: number): number => {
            if (n < 2) return 1;
            return calculate(n - 1) + calculate(n - 2);
        };
        return calculate(n);
    }
}