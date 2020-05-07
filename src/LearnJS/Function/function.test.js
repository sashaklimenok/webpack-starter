const { inArray, inBetween, makeArmy } = require('./clouser');
const { makeCounter } = require('./FunctionLikeObject');
const chai = require('chai');
const assert = chai.assert;
let arr = [1, 2, 3, 4, 5, 6, 7];

describe('Function inArray', () => {
    it('return true if has element in array', () => {
        let filter = inArray(arr);
        assert.isTrue(filter(5))
        assert.isFalse(filter(10))
    })
})


describe('Function inBetween', () => {
    it('return elements between value', () => {
        assert.equal(arr.filter(inBetween(3, 5)), '3,4,5');
        assert.notEqual(arr.filter(inBetween(32, 35)), 'these numbers are not equal');
    })
})

describe('Function makeArmy', () => {
    it('return soilder with id', () => {
        const soilder = makeArmy();
        assert.equal(soilder[5](), '5');
    })
})

describe('Counter from makeCounter', () => {
    const counter = makeCounter()
    it('incresse call to call', () => {
        assert.equal(counter(), 0)
        assert.equal(counter(), 1)
        assert.equal(counter(), 2)
    })

    it('Count setter', () => {
        assert.equal(counter.set(10), 10)
    })

    it('Count decrise', () => {
        assert.equal(counter.decrise(), 10)
        assert.equal(counter.decrise(), 9)
    })
})