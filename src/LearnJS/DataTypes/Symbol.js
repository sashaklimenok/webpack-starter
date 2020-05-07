const secret = Symbol.for('secret-key'); // Symbol creates a global
const symbolValue = Symbol.keyFor(secret); //secret-key  // Get a global key

const user = {
    name: "Alex",
    surname: 'Klimianok',
    age: 26,
    role: 'SoftWare Engineer',
    isAdmin: true,
    [secret]: 'It is secret message'
}

console.log('%c%s', 'color: red; font: 1.2rem/1 Tahoma;',`\n SECRET ${user[secret]} `)

const keys = Object.getOwnPropertySymbols(user); // get all sembol property from obj
