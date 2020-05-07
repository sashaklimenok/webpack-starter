// Сначала создадим ряд функций, предоставляющих значения и управляющих консолью. 
// Нам понадобится функция, выдающая секунду, 
// функция, выдающая текущее время, 
// и пара функций, выводящих сообщения на консоль и очищающих ее. 
// В функциональных программах везде, где только возможно, вместо значений будут использоваться функции. 
// При необходимости получить значение мы станем вызывать функцию. 

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

//serializeClockTime — получает объект времени и возвращает объект для показания часов, содержащих часы, минуты и секунды; 

const serializeClockTime = date => {
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    }
}

//civilianHours — получает объект показания часов и возвращает объект, где показание часов преобразовано к формату гражданского времени. Например: 1300 превращается в 1 час

const civilianHours = clockTime => {
    return {
        ...clockTime,
        hours: (clockTime.hours > 12) ? clockTime.hours - 12 : clockTime.hours
    }
}

// appendAM PM — получает объект показания часов и добавляет к нему время суток, AM или PM

const appendAMPM = clockTime => {
    return {
        ...clockTime,
        ampm: (clockTime.hours >= 12) ? "PM" : "AM"
    }
}


// display — получает функцию цели target и возвращает функцию, которая будет отправлять время в адрес цели. В данном примере целью будет console.log.

const display = target => time => target(time);


// formatClock — получает шаблонную строку и использует ее для возвращения показания времени, отформатированного по критериям, заданным строкой. В данном примере шаблон имеет вид hh:mm:ss tt. Таким образом, formatClock будет заменять заполнители показаниями часов, минут, секунд и времени суток

const formatClock = format => time => {
    return format
        .replace("hh", time.hours)
        .replace("mm", time.minutes)
        .replace("ss", time.seconds)
        .replace("tt", time.ampm)
}

// prependZero — получает в качестве аргумента ключ объекта и ставит нуль впереди значения, хранящегося под этим ключом объекта. Функция получает ключ к указанному полю и ставит перед значениями нуль, если значение меньше 10. 

const prependZero = key => clockTime => {
    return {
        ...clockTime,
        [key]: (clockTime[key] < 10) ? "0" + clockTime[key] : clockTime[key]
    }
}

// convertToCivilianTime — отдельная функция, получающая в качестве аргумента показание времени и преобразующая его в формат гражданского времени с помощью обеих форм этого времени. 

const convertToCivilianTime = clockTime => compose(appendAMPM, civilianHours)(clockTime);

// doubleDigits — отдельная функция, получающая в качестве аргумента показание времени и обеспечивающая отображение часов, минут и секунд парой цифр, подставляя для этого ноль, где необходимо.

const doubleDigits = civilianTime => compose(
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds"))
    (civilianTime);


//startTicking — запускает часы, устанавливая интервал, вызывающий функцию обратного вызова каждую секунду. Функция обратного вызова представляет собой композицию из всех наших функций. Каждую секунду консоль очищается, получается текущее время, показание которого проходит преобразование, перевод в гражданский формат, форматирование и отображение


const startTicking = () => setInterval(
    compose(
        clear, getCurrentTime, serializeClockTime, convertToCivilianTime, doubleDigits,
        formatClock("hh:mm:ss tt"),
        display(log)
    ), oneSecond());

startTicking()

