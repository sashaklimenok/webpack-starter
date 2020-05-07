//new Date(year, month, date, hours, minutes, seconds, ms)

const now = new Date();
const fullYear = now.getFullYear(); //Получить год (4 цифры)
const getMounth = now.getMonth(); //Получить месяц, от 0 до 11.
const date = now.getDate(); //Получить день месяца, от 1 до 31, что несколько противоречит названию метода.
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const milliseconds = now.getMilliseconds();
const dayWeek = now.getDay(); //Вернуть день недели от 0 (воскресенье) до 6 (суббота).
const timeStamp = now.getTime() //Вернёт Целое число, представляющее собой количество миллисекунд, прошедших с начала 1970 года, называется таймстамп (англ. timestamp
 
let date = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));


let start = Date.now(); // количество миллисекунд с 1 января 1970 года
// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}
let end = Date.now(); // заканчиваем отсчёт времени

console.log(`Цикл отработал за ${end - start} миллисекунд`);



//Для получения наиболее достоверных результатов тестирования производительности весь набор бенчмарков нужно запускать по нескольку раз.

function diffSubtract(date1, date2) {
    return date2 - date1;
}

function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}

function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

// добавляем для "разогрева" перед основным циклом
bench(diffSubtract);
bench(diffGetTime);

// bench(upperSlice) и bench(upperLoop) поочерёдно запускаются 10 раз
for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
}

console.log('Итоговое время diffSubtract: ' + time1);
console.log('Итоговое время diffGetTime: ' + time2);

function getLocalDay(date) {

    let day = date.getDay();

    if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
        day = 7;
    }

    return day;
}
