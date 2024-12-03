// Напишите функцию task, принимающую объект. У этого объекта есть цепочка
// прототипов. Т.е. у него самого есть прототип, у этого прототипа есть прототип
// и так далее до шага, на котором очередным прототипом оказывается null.
// Функция должна возвращать число ненулевых прототипов. При передаче ей
// значения null она должна возвращать ваш номер в ИСУ. Функция должна быть одна - task.
// Не используйте console.log

function task(x) {
    if (x === null) { return 456778; }
    x = Object.getPrototypeOf(x);
    let counter = 0;
    while (x !== null) {
        counter += 1;
        x = Object.getPrototypeOf(x);
    }
    return counter;
}

const pro1 = { a: 1};
const pro2 = Object.create(pro1);
pro2.b = 2;
const pro3 = Object.create(pro2);
pro3.c = 3;
const test = Object.create(pro3);
test.d = 4;
console.log(task(test));
