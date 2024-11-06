// Задание №1. 30.10.2024.
// Поиск корней системы уравнений по Крамеру.

// Коэффициенты уравнений
const n1 = 5,  n2 = 10, n3 = 15;
const n4 = 20, n5 = 25, n6 = 30;

console.log(`
    Система уравнений
${n1} * x + ${n2} * y = ${n3}
${n4} * x + ${n5} * y = ${n6}
`);

// Определитель основной матрицы
const D = n1 * n5 - n2 * n4;

if (D == 0) {
    console.log(`    либо не имеет решений, либо имеет бесконечное множество решений.`);
} else { // Определитель не ноль, считаем дальше
    // Определитель матрицы для x
    const Dx = n3 * n5 - n2 * n6;
    // Определитель матрицы для y
    const Dy = n1 * n6 - n3 * n4;

    // Находим корни
    const result1 = Dx / D
    const result2 = Dy / D

    console.log(`    Имеет решение:
x = ${result1}
y = ${result2}
    `);
}

