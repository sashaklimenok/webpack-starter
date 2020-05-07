// `REFERENCE TYPE-------------`

// `Значение ссылочного типа – это «триплет»: комбинация из трёх значений (base, name, strict), где:
// 1. base – это объект.
// 2. name – это имя свойства объекта.
// 3. strict – это режим исполнения. Является true, если действует строгий режим (use strict).`

// // ---------------------------------------------------------------------------------------


// `При любой другой операции, например, присваивании hi = user.hi, 
// ссылочный тип заменяется на собственно значение user.hi (функцию), и дальше работа уже идёт только с ней. 
// Поэтому дальнейший вызов происходит уже без this.`


const user = {
    name: 'Alex',
    age: 26,
    sayHi: function () {
        console.log(`Hello mr ${this.name}`)
    }
}

    // `JavaScript не вставляет автоматически точку с запятой перед круглой скобкой (user.go)(), поэтому читает этот код так:
    // let user = { go:... }(user.go)()`

    ; (user.sayHi)();


//Здесь функция makeUser возвращает объект.
//Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser1() {
    return {
        name: "Джон",
        ref: this
    };
};

let user2 = makeUser1();
user2.ref.name //  // Error: Cannot read property 'name' of undefined
/* 
Это потому, что правила, которые определяют значение this, никак не смотрят на объявление объекта. Важен лишь момент вызова метода.
Здесь значение this внутри makeUser() является undefined, потому что makeUser() вызвана как функция, не через «точку» как метод.
Литерал объекта сам по себе не влияет на this. Значение this одно для всей функции и блоков кода в ней, литеральные объекты не меняют его.
Таким образом, при создании объекта ref: this берёт текущее значение this функции makeUser().
*/


function makeUser2() {
    return {
        name: "Джон",
        ref() {
            return this;
        }
    };
};

let user3 = makeUser2();
user3.ref().name //Теперь это работает, поскольку user.ref() вызывается как метод. И значением this становится объект перед точкой



function Calculator() {

    this.a = null;
    this.b = null;

    this.read = function () {
        this.a = 5 //prompt('Enter your number a', 1);
        this.b = 5 //prompt('Enter your number b', 1);
    }

    this.sum = function () {
        return this.a + this.b;
    }

    this.mull = function () {
        return this.a * this.b;
    }
}




const user4 = {
    name: "Alex",
    sayHi() {
        return () => console.log(this.name)
    },

    sayBye() {
        return console.log(this.name)
    }
}
const userHi = user4.sayHi();
userHi()
user4.sayBye()

module.exports = Calculator;








