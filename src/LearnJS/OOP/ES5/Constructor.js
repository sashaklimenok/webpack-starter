function User(name) {
    this.name = name
}

const user = new User('Alex');
const user2 = new user.constructor('Alex2');


Function.prototype.defer = function (ms) {
    return (...args) => {
        console.log(this)
        setTimeout(() => this.apply(this, args), ms)
    }
}

function fDefer(a, b) {
    console.log(a + b);
}

fDefer.defer(1000)(1, 2)