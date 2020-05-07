function customeMap(sourceArray, callBack) {
    if(!Array.isArray(sourceArray) && !sourceArray.length && typeof callBack !== 'function' ) {
        return []
    }else {
        let newArray = [];
        for (let index = 0; index < sourceArray.length; index++) {
            newArray.push(callBack(sourceArray[index], index, sourceArray));
        }

        return newArray;
    }
}

const arr = [1,2,3,4,5];
const mapArr = customeMap(arr, (el) => `<li>${el}</li>`);

// console.log(mapArr);

function customFilter(sourceArray, callback) {
    if(!Array.isArray(sourceArray) && !sourceArray.length && typeof callback !== 'function') {
        return []
    }else{
        let newArray = [];
        for(let index = 0; index < sourceArray.length; index++) {
            if(callback(sourceArray[index], index, sourceArray)) {
                newArray.push(sourceArray[index]);
            }
        }

        return newArray;
    }
}

const filterArr = customFilter(arr, (el) => el !== 2);

// console.log(filterArr);


function customeReduce(sourceArray, callback, initialvalue) {
    if(!Array.isArray(sourceArray) && !sourceArray.length && typeof callback !== 'function') {
        return []
    }else {
        let hasInitialValue = Boolean(initialvalue);
        let accumValue = hasInitialValue ? initialvalue: sourceArray[0];
        for (let index = hasInitialValue ? 0 : 1; index < sourceArray.length; index++) {
            accumValue = callback(initialvalue, sourceArray[index], index, sourceArray);
        }

        return accumValue;
    }
}

const newReduce = customeReduce(arr, (acc, el, i) => {
    acc[i] = el;
    return acc
}, {});

console.log(newReduce);
console.log(arr);