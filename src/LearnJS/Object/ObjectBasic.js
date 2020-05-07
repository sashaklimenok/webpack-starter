// `1. Зарезервированные слова РАЗРЕШЕНО использовать как имена свойств`
// `2. С другой стороны, если ключи не целочисленные, то они перебираются в порядке создания,`
// `3. Объект, объявленный через const, может быть изменён.`

const name = 'Alex';
const key = 'name';


const user = {
    name: "Alex",
    surname: 'Klimianok',
    age: 26,
    role: 'SoftWare Engineer',
    isAdmin: true,
}


for (const key in user) {
    console.log(`Key ${key}: Val ${user[key]}`)
}



let codes = {
    "+49": "Германия",
    "+41": "Швейцария",
    "+44": "Великобритания",
    // ..,
    "+1": "США"
};


//HomeWork  

function isEmpty(obj) {
    for (const key in obj) {
        return false
    }

    return true
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function calculation(obj) {

    let commonSalaries = null;

    for (const salary of Object.values(obj)) {
        commonSalaries += salary
    }

    for (const key in obj) {
        commonSalaries += obj[key]
    }

    if (!isEmpty(obj)) {
        return Object.values(obj).reduce((acc, el) => acc + el);
    } else {
        return 0
    }
}


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};


function multiplyNumeric(obj) {
    let mapMultiplyObj = {}

    for (const [key, value] of Object.entries(obj)) {
        mapMultiplyObj[key] = typeof value === 'number' ? value * 2 : value
    }

    for (const key in obj) {
        mapMultiplyObj[key] = typeof obj[key] === 'number' ? obj[key] * 2 : obj[key]
    }

    return mapMultiplyObj
}
