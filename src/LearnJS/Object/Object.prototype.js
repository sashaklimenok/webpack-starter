const obj = {
    name: 'Alex',
    role: 'SoftWare Engineer'
}

const obj2 = Object.create(obj);
obj2.age = 22;


console.log(obj2.name);

