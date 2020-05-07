function Admin(name, pass) {
    User.apply(this, arguments);
    this.pass = pass;
    this.isAdmin = true;

}

function User(name) {
    this.name = name;
    this.isAdmin = false;
    if (typeof new.target === 'undefined') return new User(name);
}

User.prototype.sayHi = function () {
    console.log(this.name)
}


function Accumulator(strVal) {
    this.value = strVal;
    this.read = function () {
        return this.value += Number(prompt('Enter number', 5))
    }
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

const user = new User('Alex User');
const admin = new Admin('Alex', 'Alex 123');

admin.sayHi()