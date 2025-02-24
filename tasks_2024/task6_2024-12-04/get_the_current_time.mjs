// Запрашиваем страницу
const req = await fetch('https://www.worldtimeserver.com/current_time_in_RU-SPE.aspx?city=Saint_Petersburg');
// Берем текст из ответа
const text = await req.text();
// Извлекаем время из строки по шаблону
const time = text.match(/\b\d{2}:\d{2}:\d{2}\b/);
//  /\b\d{2}:\d{2}:\d{2}\b/
// поиск с тегом /<\w[^<]*\d:\d\d/
// А если мы хотим уточнить само имя тега, то можно дополнительно уточнить:
// /<\w* /

// Если нашлось - выводим
if (time) {
  console.log('Найденное время:', time[0]);
} else {
  console.log('Время в формате hh:mm:ss не найдено.');
}
