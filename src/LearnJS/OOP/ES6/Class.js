//В объектно-ориентированном программировании класс – это расширяемый шаблон кода для создания объектов, 
// который устанавливает в них начальные значения (свойства) и реализацию поведения (методы).

//1. конструктор класса не может быть вызван без new:
//2. Методы класса являются неперечислимыми. 
//3. Классы всегда используют use strict

class User {
    constructor(name) {
        this.name = name
    }

    sayHi() {
        return console.log(`Hi mr. ${this.name}`);
    }

}

function dynamicClass(name) {
    return class {
        constructor() {
            this.name = name
        }

        
        sayHi() {
            console.log(`Hello ${this.name}`)
        }
    }
}

const User2 = dynamicClass('Alex');
const user2 = new User2()

user2.sayHi()