const user = {
    name: "Alex",
    age: 26,
    role: 'SoftWare Engineer'
}

Object.keys(user) //["name", "age", "role"]
Object.values(user) //["Alex", 26, 'SoftWare Engineer']
Object.entries(user); //[["name", "Alex"], ["age", 26], ['role', 'SoftWare Engineer']]


for (let [key, value] of Object.entries(user)) {
    // console.log(`${key}:${value}`); // name:John, then age:30
}

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let doublePrices = Object.fromEntries( //fromEntries трансформирует обратно объект
    // преобразовать в массив, затем map, затем fromEntries обратно объект
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);

// console.log(doublePrices.meat); // 8


function sumSalaries(salaries) {
    // return Object.values(salaries).reduce((prev, next) => prev + next, 0);
    let sum = null;
    for (let salary of Object.values(salaries)) {
        sum += salary
    }

    return sum;
}

function count(obj) {
    return Object.values(obj).length;
}

module.exports = {
    sumSalaries,
    salaries,
    count
}