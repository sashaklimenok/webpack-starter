// Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c).
// Каррирование не вызывает функцию. Оно просто трансформирует её.


function add(a) {
    return (b) => {
        return a + b
    }
}

add(2)(2)

function advancedCarring(a) {
    let result = a;

    function next(b) {
        result += b;
        return next
    }

    next.valueOf = function () {
        return result
    }

    return next
}

let res = advancedCarring(10)(10)(10)(10);


function advancedCarringNew(a) {
    let list = [a];

    function next(b) {
        if (typeof b === 'number') {
            list.push(b);
            return next;
        } else {
            return list.reduce((prev, item) => b(prev, item))
        }
    }

    return next;
}

let calcResult = advancedCarringNew(10)(15)(20);
let sum = (a, b) => a + b;
let mul = (a, b) => a * b;

calcResult(sum); //45
calcResult(mul);


function curry(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };

}

function sum(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6, всё ещё можно вызывать нормально
console.log(curriedSum(1)(2, 3)); // 6, каррирование первого аргумента
console.log(curriedSum(1)(2)(3)); // 6, каррирование всех аргументов