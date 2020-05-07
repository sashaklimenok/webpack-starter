//Существует 3 варианта преоброзований string, number, default
// default such like type number

const user = {
    name: 'Alex',
    jobFunction: 'SoftwareEngeneer',
    salaries: 900,
    // [Symbol.toPrimitive](hint) {
    //     switch (hint) {
    //         case 'number':
    //             return this.salaries
    //         case 'string':
    //             return `${this.name} have salaries ${this.salaries}`
    //         default:
    //             return this.salaries
    //     }
    // },

    toString() {
        return `${this.name} have salaries ${this.salaries}`
    },

    valueOf() {
        return this.salaries
    }
}

console.log(Number(user))
console.log(String(user))
console.log(user.toString())
console.log(user.valueOf())