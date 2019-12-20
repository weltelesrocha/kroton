const n = 5;
const v = [4, -3, 7, 8, 2];
const validateNumberN = (number) => {
    if (!Number.isInteger(number)
        || number < 2
        || number > 10) {
        throw new Error(`Invalid number N ${n}`);
    }
}
const validateNumberV = (number) => {
    if (!Number.isInteger(number)
        || number > 10e+8
        || number < -10e+8) {
        throw new Error(`Invalid number V ${number}`);
    }
}
const validateArrayNumberV = (numberArray) => {
    numberArray.map(number => validateNumberV(number));
};
const lowestPossibleSum = (n, v) => {
    return v
        .sort()
        .slice(0, n - 1)
        .reduce((accumulator, currentValue) => accumulator + currentValue);
}
const highestPossibleSum = (n, v) => {
    return (v
        .sort()
        .reverse())
        .slice(0, n - 1)
        .reduce((accumulator, currentValue) => accumulator + currentValue);
}
const calculateAlgorithm = (n, v) => {
    try {
        validateNumberN(n);
        validateArrayNumberV(v);
        return [
            lowestPossibleSum(n, v),
            highestPossibleSum(n, v)
        ];
    } catch (e) {
        console.log(e.message);
    }
}
console.log(calculateAlgorithm(n, v));

