// Напишите код функции task(x), возвращающей объект: у  объекта должно быть собственное перечислимое свойство login со строковым значением, равным вашему номеру в ИСУ. И ещё 3 свойства
//  key1 – несобственное неперечислимое,
//  key2 – несобственное перечислимое,
//  key3 – собственное неперечислимое. 
// Их значениями должны быть числа от 2022 до 2024 соответственно. Не используйте proto и console.log в своём ответе

function task(x) {
    const pro = { key2: 2023 };
    Object.defineProperty(pro, "key1", {
        value: 2022,
        enumerable: false
    })

    const result = Object.create(pro);
    result.login = '465778';
    Object.defineProperty(result, 'key3', {
        value: 2024,
        enumerable: false
    })

    return result;
}

// Проверяем
obj = task();

console.log(obj.login, obj.key1, obj.key2, obj.key3);

for (let key in obj) {
    console.log(key);
}