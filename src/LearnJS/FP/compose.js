const sum = (value) => value + 10;
const mull = (value) => value * 5;

const mult5afteradd10 = (value) => mull(sum(value));
const resault = mult5afteradd10(5);

console.log(resault);

const compose = (f, g) => x => f(g(x));
const mult5AfterAdd10 = compose(mult5, add(10));