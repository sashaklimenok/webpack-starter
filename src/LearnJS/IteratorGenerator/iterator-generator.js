//Деструктуризация работает с итераторами и генераторами


function* generator(start, end, step) {
    let current = start;

    while (current <= end) {
        yield current;
        current += step
    }

}

console.log([...generator(1, 15, 3)])

function* factorial() {
    let n = 1;
    let current = n;

    while (true) {
        yield current;
        current *= ++n;
    }

}

let fac = factorial();

console.log(
    fac.next().value,
    fac.next().value,
    fac.next().value,
    fac.next().value
)

Number.prototype[Symbol.iterator] = function* () {
    for (let i = 0; i < this; i++) {
        yield i
    }
}

let range = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() { // сокращение для [Symbol.iterator]: function*()
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
};

for (let value of range) {
    console.log(value); // 1, потом 2, потом 3, потом 4, потом 5
}