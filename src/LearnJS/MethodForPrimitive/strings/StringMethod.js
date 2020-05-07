// `Внутренний формат для строк — всегда UTF-16, вне зависимости от кодировки страницы.`

const smile = "\u{1F60D}" ;
const hello = 'Hello World';

hello.length;

hello[1000]; // undefined
hello.charAt(1000); // '' (пустая строка)

const firstSymbol = hello.charAt(0);
const lastSymbol = hello.charAt(hello.length -1);


console.log(
    `First ${firstSymbol} \n`,
    `Last ${lastSymbol} \n`
)

'Interface'.toUpperCase(); // INTERFACE
'Interface'.toLowerCase(); // interface


`Поиск подстроки:`

//Старый поиск подстроки

let str = 'Widget with id';
alert( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
alert( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру

alert( str.indexOf("id") ); // 1, подстрока "id" найдена на позиции 1 (..idget with id)

alert( ~2 ); // -3, то же, что -(2+1)
alert( ~1 ); // -2, то же, что -(1+1)
alert( ~0 ); // -1, то же, что -(0+1)
alert( ~-1 ); // 0, то же, что -(-1+1)

if ( ~str.indexOf("…") );

//Нужно использовать
"Widget with id".includes("Widget"); // true


"Widget".startsWith("Wid"); // true, "Wid" — начало "Widget"
"Widget".endsWith("get"); // true, "get" — окончание "Widget"


`slice(start, end)	от start до end (не включая end)	можно передавать отрицательные значения
substring(start, end)	между start и end	отрицательные значения равнозначны 0
substr(start, length)	length символов, начиная от start	значение start может быть отрицательным`