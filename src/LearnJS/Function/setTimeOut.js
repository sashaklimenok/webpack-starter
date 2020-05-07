/*

Например, таймер в браузере может замедляться по многим причинам:

Перегружен процессор.
Вкладка браузера в фоновом режиме.
Работа ноутбука от аккумулятора.

*/

function printNumber(from, to) {
    let current = from;
    setTimeout(function go() {
        console.log(current);
        if(current < to) {
            setTimeout(go, 1e3);
        }

        current++;
    }, 1e3)
}

printNumber(10, 15)




