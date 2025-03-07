// Напишите код функции task(name, familyname, login), которая в качестве
// конструктора создаёт объект с тремя собственными полями – name, familyname
// и login. По умолчанию значение поля login – строковое значение, равное
// вашему номеру в ИСУ. Кроме того, в прототипе должен быть метод getFullName,
// который возвращает результат конкатенации name, familyname и восклицательного знака.

function task(name, familyname, login = '465778') {
    this.name = name;
    this.familyname = familyname;
    this.login = login;
    return;
}

task.prototype.getFullName = function() {
    return this.name + this.familyname + '!';
}

const obj = new task('Vladimir', 'Dovydenkov');
console.log(obj.getFullName());