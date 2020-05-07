function callStack() {

    function first() {
        console.log('first func'); //3
        throw new Error('Error tut')
    }

    function second() {
        console.log('second func'); //2 
        first();
    }

    function third() {
        console.log('third function'); //1
        second();
    }

    third()

}


function callBacks() {

    let arr = [1, 2, 3];

    function asyncForEach(arr, callBack) {
        arr.forEach(el => setTimeout(() => callBack(el), 1e3))
    }

    function sloww(a) {
        console.log('I am very sloooow function', a);
    }

    asyncForEach(arr, el => sloww(el));
    arr.forEach(el => console.log(`Sync ${el}`));

}

function onlyTimeOut() {
    console.log(1)
    setTimeout(() => console.log(3), 1e3);
    setTimeout(() => console.log(2), 0);
    console.log(4)
}

function promiseGame() {
    console.log(1);
    setTimeout(() => console.log(2), 0);
    Promise.resolve(3).then(a => console.log(a));
    console.log(4);

    new Promise((res, rej) => {
        console.log('p', 1)
        console.log('p',2)
    })

}


// callStack()
// callBacks()
// onlyTimeOut()
// promiseGame()
