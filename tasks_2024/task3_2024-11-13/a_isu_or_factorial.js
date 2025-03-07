﻿// Задание А от 13 ноября 2024 с автоматической проверкой
// Напишите код функции (function task(x)), которая в своём теле не содержит инструкций if.. else, for или while и при этом возвращает ваш номер в МСУ если x есть null, а иначе факториал от x
// Для проверки перейдите по адресу https://node-server.online/a?id=x#y|85 и подставьте вместо икса свой номер в ИСУ

function task(x) {
    return x === null ? 465778 : (x <= 1 ? 1 : x * task(x - 1));
}

console.log(task(5))
