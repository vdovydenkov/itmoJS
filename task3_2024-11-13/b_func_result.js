﻿// Задание Б от 13 ноября 2024 с автоматической проверкой
// Напишите код функции function task(x), возвращающей результат работы функции, переданной ей в качестве аргумента x и ваш номер в ИСУ если типом x не является функция, при этом не используйте инструкцию if..else (используйте тернарный оператор)
// Для проверки перейдите по адресу https://node-server.online/a?id=x#y|86 и и подставьте вместо икса свой номер в ИСУ

function task(x) {
    return typeof x === 'function' ? x() : 465778;
}

console.log(task(x => 7));
