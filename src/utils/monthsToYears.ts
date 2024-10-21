function convertMonthsToYears(months: number) {
    if (months < 0) {
        throw new Error("Number of months cannot be negative.");
    }

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years > 0) {
        return { value: years, type: "years" }
    } else {
        return { value: remainingMonths, type: "months" }
    }
}