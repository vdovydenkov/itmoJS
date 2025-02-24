// Задание №2. 06.11.2024.
// Определить количество простых чисел в диапазоне от 2 до заданного значения.

function isPrime(n) {
    if (!Number.isInteger(n)) // Если аргумент не целое число
        return false;
    if (n < 2)
        return false;
    if (n === 2) // Исключаем двойку, чтобы не перебирать четные числа
        return true;
    if (n % 2 === 0) // Исключаем из оценки все четные числа
        return false;
    // Цикл по нечетным числам, до корня из числа, с шагом 2.
    for (let i = 3; i <= Math.sqrt(n); i += 2)
        // Если остаток от деления дал ноль - число не простое
        if (n % i === 0)
            return false;
    return true;
}

const upperBound = Number(process.argv[2]);
if (!Number.isInteger(upperBound) || upperBound < 2) {
    console.error("The upper bound is incorrect.");
} else {
    let counter = 1; // Как минимум 2 - простое число
    if (upperBound > 2) {
        // По нечетным числам, до верхней границы, с шагом 2.
        for (let i = 3; i <= upperBound; i += 2)
            if (isPrime(i))
                counter++;
    }
    console.log(`The number of prime numbers in the range from 2 to ${upperBound} is ${counter}.`)
}