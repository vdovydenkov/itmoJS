﻿// Задание для автопроверки: https://node-server.online/a?id=465778#y|83
// Тернарный оператор, третьим операндом которого является также тернарный оператор.
// Выражение должно возвращать: 'yes' если значение age меньше 18, 'no' если значение age больше 18, и логин в системе в оставшемся случае.

const age = 18; // Тестовое значение
const result = age < 18 ? "yes" : age === 18 ? '465778' : 'no';
console.log(result)
