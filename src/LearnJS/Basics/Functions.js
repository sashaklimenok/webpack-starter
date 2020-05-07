function sayHi(name) {
    console.log(`Hello ${name = '**' + name + '**'}`);
}

let name = 'Alex';
// значение "name" осталось прежним, функция изменила значение локальной переменной
// sayHi(name);


function showPrimes(n) {

    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

// showPrimes(10)


function checkAge(age) {
    return (age > 18) || console.log('Родители разрешили?')
}

// checkAge(10);

function min(a,b) {
    return a < b ? a: b;
}


function pow(x, n) {
    if(n == 1) return x;
    return x * pow(x, n -1);
}

console.log(pow(2, 4));

