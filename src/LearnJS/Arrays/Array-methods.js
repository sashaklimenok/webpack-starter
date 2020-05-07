/* eslint-disable no-unused-vars */
let arrayList = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
let arrayLength = arrayList.length;
let javaScript = arrayList.slice(2, 3);

// /Обратите внимание, что методы sort, reverse и splice изменяют исходный массив.



const learn = arrayList.splice(0, 3, "Давай", "танцевать");
// arrayList.splice(arrayLength / 2, 0 , 'Крутой Язык', 'Если разобраться');

let concatList = arrayList.concat(learn);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    // //console.log(`${item} имеет позицию ${index} в ${array}`);
});


// //console.log(concatList);

//Поиск в массиве
// indexOf/lastIndexOf и includes
let dance = arrayList.indexOf('танцевать');
let includeDance = arrayList.includes('танцевать');

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];

let commentList = [
    {
        id: '#com1',
        autor: {id: '#aut1', name: 'Alex1'},
        text: 'Cool Post!!!',
        postId: '#post1'
    },
    {
        id: '#com1',
        autor: {id: '#aut1', name: 'Alex1'},
        text: 'Cool Post!!!',
        postId: '#post1'
    },
    {
        id: '#com1',
        autor: {id: '#aut1', name: 'Alex1'},
        text: 'Cool Post!!!',
        postId: '#post1'
    },
    {
        id: '#com1',
        autor: {id: '#aut2', name: 'Alex2'},
        text: 'Cool Post!!!',
        postId: '#post1'
    },
]

let firstUserId = users.find( user => user.id === 1);
let firstUserIdIndex = users.findIndex((item) => item.id === 1);
let userGreatingThem = users.filter(user => user.id > 1);
let userPlusOne = users.map(user => user.name + ' The Best');

let commentText = commentList
    .filter(commnet => commnet.postId === '#post1')
    .map(commnet => commnet.text);

let commentAutorName = commentList
    .map(commnet => commnet.autor)
    .filter((autor, index, currentComment) => {
        return currentComment.findIndex(item => item.id === autor.id) === index
    })
    .map(autor => autor.name);

//console.log('commentAutorName',commentAutorName);


//Get pairs Autor.id commnet.count

let autorCountComment = commentList
    .map(comment => comment.autor.id)
    .reduce( (acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {} );

//console.log('autorCountComment:',autorCountComment);

let moreArray = [1,2,3,[11,[23, 'inner array'],235],2111,[2451]];

//Flatton  уменьшить на одну размерность

let flattonArray = moreArray.reduce((arr, elem) => arr.concat(elem), [])

//console.log(flattonArray);


let sortList = [ 1, 2, 15 ];
sortList.sort((a, b) => a < b);

let list = [1, 2, 3, 4, 5];
let reversList = list.reverse();

let names = 'Вася, Петя, Маша';
let arrayNames = names.split(', ');
for (let name of arrayNames) {
    // //console.log( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
}

// //console.log(list);
// //console.log(reversList);


//Home Exercise

//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

function camelize(str) {
    return str.split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
}

// console.log(camelize('my-short-string'));

//Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

let rangeArray = [5, 3, 8, 1];

function findRange(a, b) {
    return (item) => item >= a && item <= b;
}

function filterRange(arr, a , b) {
    let resault = arr.filter(findRange(a, b));
    return resault
}

// console.log('FILTER_RANGE: ',filterRange(rangeArray, 1, 4));

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

function filterRangeInPlace(arr, a, b) {
    for(let i = 0; i < arr.length; i++) {
        let res = arr[i];
        if(res < a || res > b) {
            arr.splice(i, 1);
            i--;
        }


    }
}
filterRangeInPlace(rangeArray, 1, 4)
// console.log(rangeArray);


let arrSort = [5, 2, 1, -10, 8];

// arrSort.sort((a, b) => a > b ? 1: -1);
arrSort.sort((a, b) => b > a ? 1: -1);
// console.log(arrSort);

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arrStr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.concat().sort();
}

// console.log(copySorted(arrStr));
// console.log(arrStr);

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let vasya = { name: "Вася", surname: "Пупкин", id: 1, age: 25 };
let petya = { name: "Петя", surname: "Иванов", id: 2, age: 23 };
let masha = { name: "Маша", surname: "Петрова", id: 3, age: 32 };

let users2 = [ vasya, petya, masha ];
// let names = users.map(item => item.name);

// let usersMapped = users2.map(item => {
//     return ({
//         fullName : item.name + ' ' + item.surname, 
//         id: item.id
//     })
// });

// console.log(usersMapped)

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

function sortByAge(usersField, arr) {
    return arr.sort((a, b) => a[usersField] < b[usersField] ? 1: -1);
}

// console.log(sortByAge('age', users2));


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // подсчёт вероятности для всех возможных вариантов
  let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
//   for (let i = 0; i < 1000000; i++) {
//     let array = [1, 2, 3];
//     shuffle(array);
//     count[array.join('')]++;
//   }
  
  // показать количество всех возможных вариантов
//   for (let key in count) {
//     console.log(`${key}: ${count[key]}`);
//   }

//   Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

  function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }

//   console.log(getAverageAge(users2));

//   Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr) {
    let resault = [];

    for (const name of arr) {
        if(!resault.includes(name)) {
            resault.push(name)
        }
    }

    return resault;

}


let person = {name: 'Ivan', age: 22}

let person2 = {...person, age: 25, job: 'web'}

// console.log(unique(strings));

function func(a) {
    var a = 2;
    return a;
}

func.get = function (a) {
    return func()
}

func(1)