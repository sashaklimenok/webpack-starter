// // const {user} = require( "../Object/ObjectBasic");
const {salaries} = require('../Object/Object.keys.values.intries');

// // const {name, age: years, isAdmin = false} = user;

function topSalary(salaries) {

    let maxSalaries = 0;
    let maxName  = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if(maxSalaries < salary) {
            maxSalaries = salary;
            maxName = name;
        }
    }

    return maxName;
}

module.exports = {
    topSalary
}