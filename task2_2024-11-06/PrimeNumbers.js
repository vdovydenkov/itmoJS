function isPrime(n) {
    if (!Number.isInteger(n)) {
        return false;
    }
    if (n < 2) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    if (n % 2 === 0) {
        return false;
    }
    // Цикл по нечетным числам, до корня из числа, с шагом 2.
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        // Если остаток от деления дал ноль - число не простое
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

const upperBound = Number(process.argv[2]);
if (!Number.isInteger(upperBound) || upperBound < 2) {
    console.error("The upper bound is incorrect.");
} else {
    let counter = 1;
    if (upperBound > 2) {
        for (let i = 3; i <= upperBound; i += 2) {
            if (isPrime(i)) {
                counter++;
            }
        }
    }
    console.log(`The number of prime numbers in the range from 2 to ${upperBound} is ${counter}.`)
}