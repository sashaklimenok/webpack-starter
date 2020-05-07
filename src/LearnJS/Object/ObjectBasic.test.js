const { assert } = require('chai');
const { multiplyNumeric } = require('./ObjectBasic')
const Calculator = require('./this');
const {sumSalaries, salaries, count} = require('./Object.keys.values.intries')

describe("multiplyNumeric", function () {
    it("умножаем все числовые свойства на 2", function () {
        let menu = {
            width: 200,
            height: 300,
            title: "My menu"
        };
        let result = multiplyNumeric(menu);
        assert.equal(menu.width, 400);
        assert.equal(menu.height, 600);
        assert.equal(menu.title, "My menu");
    });


});

let calc = null;

describe('CalculatorClass', () => {

    before(() => {
        calc = new Calculator();
    })

    it("method records to constructor props for this.a and this.b", () => {
        calc.read();
        assert.equal(calc.a, 5);
        assert.equal(calc.b, 5);
    })

    it('method sums two numbers', () => {
        assert.equal(calc.sum(), 10);
    })


    it('method multiplications two numbers', () => {
        assert.equal(calc.mull(), 25);
    })
})


describe('sumSalaries function from for of', () => {
    it('Func do Count salaries', () => {
        assert.equal(sumSalaries(salaries), 650)
    })
});

describe('Function counting values in obj', () => {
    it('Func most return 3', () => {
        assert.equal(count(salaries), 3)
    })
})