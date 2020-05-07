//Информация о процессе выполнения запущенной функции хранится в её контексте выполнения

// Когда функция производит вложенный вызов, происходит следующее:

// Выполнение текущей функции приостанавливается.
// Контекст выполнения, связанный с ней, запоминается в специальной структуре данных – стеке контекстов выполнения.
// Выполняются вложенные вызовы, для каждого из которых создаётся свой контекст выполнения.
// После их завершения старый контекст достаётся из стека, и выполнение внешней функции возобновляется с того места, где она была остановлена.


/*

----- call stack ----
    pow(2, 0)  2    |
    pow(2, 1)  4    |
    pow(2, 2)  8    |
    pow(2, 3)  16   |

*/

function pow(x, n) {
    if (n === 1) return x
    return x * pow(x, n - 1);
}

// pow(3, 3) =  3 * pow(3, 3) = 3 * pow(3, 2) = 3 * pow(3, 1)
//                     2 * 2 * 2        2 * 2            2
//              8                   3                2                                                   


function deepEqual(a, b) {

    if (a === b) return true;
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;

    let keysA = Object.keys(a);
    let keysB = Object.keys(b);


    if (keysA.length != keysB.length) return false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }

    return true;
}

let obj = { here: { is: "an" }, object: 2 };
let obj2 = { here: { is: "an" }, object: 23 };

// console.log(deepEqual(obj, obj2))



let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

// Функция для подсчёта суммы зарплат
function sumSalaries(department) {
    if (Array.isArray(department)) { // случай (1)
        return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
    } else { // случай (2)
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
        }
        return sum;
    }
}

// console.log(sumSalaries(company)); // 6700\


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {

    console.log(list.value); // выводим текущий элемент

    if (list.next) {
        printList(list.next); // делаем то же самое для остальной части списка
    }

}

// printList(list);