export function calculatePercentage(part: number, total: number): any {
    if (total === 0) {
        throw new Error("Total cannot be zero.");
    }
    const rounded = (part / total) * 100
    return rounded.toFixed(0)
}