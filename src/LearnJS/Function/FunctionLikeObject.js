// NFE = Named Function Expression


function ask(question, ...handlers) {
    ask.counter++
    let isYes = true;
    for (let handler of handlers) {
        if (handler.length == 0) {
            if (isYes) handler();
        } else {
            handler(isYes);
        }
    }

}

ask.counter = 0
// ask("Вопрос?", () => console.log('Вы ответили да'), result => console.log(result));



let sayHi = function func(who) {
    if (who) {
        console.log(`Hello, ${who}`);
    } else {
        func("Guest"); // использует func, чтобы снова вызвать себя же
    }
};

sayHi(); // Hello, Guest

// А вот так - не cработает:
// func(); // Ошибка, func не определена (недоступна вне функции)

function makeCounter() {
    let count = 0;

    function counter() {
        return count++
    }

    counter.set = value => count = value;
    counter.decrise = () => count--;

    return counter

}

module.exports = {
    makeCounter
}

