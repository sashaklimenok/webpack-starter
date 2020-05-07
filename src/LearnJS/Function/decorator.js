function decorator(fn) {
    const cache = new Map();

    return function(x) {

        if (cache.has(x)) {
            console.log('From cache');
            return cache.get(x)
        };
        
        const resault = fn.call(this, x);
        cache.set(x, resault);
        return resault;

    }
}

const obj = {
    name: 'Alex',
    lastName: 'Klimianok',
    sayHi(title) {
        return console.log(`${title} ${this.name}  ${this.lastName}`);
    }
}





obj.sayHi = decorator(obj.sayHi);
obj.sayHi('Hello')