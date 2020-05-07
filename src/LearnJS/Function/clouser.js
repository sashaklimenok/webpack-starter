function makeCounter() {
    //[[Environment]] coдержит ссылку на Lexical Enviroment
    let count = 0;
    return function () {
        // [[Environment]] => makeCounter
        return count++;
    }
}

const firstCounter = makeCounter();
const secondCounter = makeCounter();

function sum(a) {
    return (b) => a + b;
}

// console.log(sum(10)(10))
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];


function inArray(arr) {
    return (el) => arr.includes(el);
}


function inBetween(a, b) {
    return (el) => el >= a && el <= b;
}

function sortObj(field) {
    return (current, next) => current[field] > next[field] ? 1 : -1;
}


function makeArmy() {
    let shooters = [];

    for(let i = 0; i <= 10; i++) {
        let shooter = function () { // функция shooter
            return i ; // должна выводить порядковый номер
        };
        shooters.push(shooter);
    }

    return shooters;
}


module.exports = {
    inArray, inBetween, makeArmy
}

