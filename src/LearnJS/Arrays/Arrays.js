/* eslint-disable no-unused-vars */
let arrayList = ["Яблоко", "Апельсин", "Слива"];
let arrayConstructor = new Array(10) // вернёт только длинну массива. Все ячейки массива будут пустыми

let arrayLength = arrayList.length;
let orange = arrayList[1];

//Структура данных Stack Последний зашёл и первый вышел
let plum = arrayList.pop();
arrayList.push(plum);

//Методы, работающие с началом массива:

let apple = arrayList.shift();
arrayList.unshift(apple);

for (let i = 0; i < arrayList.length; i++) {
    const fruit = arrayList[i];
}

for (const fruit of arrayList) {
    // console.log(fruit);
}

//Очистка массива 
arrayList.length = 0;


// console.log(arrayConstructor);

// console.log(arrayList, ":Длинна:", arrayList.length);


//----------------------------- HOME WORK

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits.concat();
shoppingCart.push("Банан");


// console.log(shoppingCart)

// что в fruits? 
// console.log(fruits.length); // 4

// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.

let styles = ['Джаз','Блюз'];
styles.push('Рок-н-ролл');
styles[Math.floor(styles.length / 2)] = 'Классика';

console.log(Math.floor((styles.length -1) / 2));

let jazz = styles.shift();

styles.unshift('Рэп','Регги');

// console.log(styles);





