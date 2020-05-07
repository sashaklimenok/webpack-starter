//Операция записи не использует прототип

const animal = {
    eats: true,
    walk: function () {
        return console.log(this.name, 'Вышли погулять');
    },

    sleep: function() {
        console.log(this.name, 'sleeep')
        this.isSleeping = true;
    },

    set fullName(name) {
        return [this.firstName, this.lastName] = name.split(' ');
    },

    get fullName() {
        return console.log(this.firstName, this.lastName);
    }
}

const rabbit = {
    name: 'rabbit',
    jump: true,
    __proto__: animal
}

const bear = Object.create(animal, {
    weight: {
        value: '1000кг'
    },
    name: {
        value: 'Bear'
    }
});

// Object.setPrototypeOf(bear, {});
console.log(bear.eats)