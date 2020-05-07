const { topSalary } = require('./Destructurization');
const { salaries } = require('../Object/Object.keys.values.intries');
const { assert } = require('chai');

describe('Function topSalary', () => {
    it('It return name the most hight salaruy', () => {
        assert.equal(topSalary(salaries), 'Pete')
    } )

    it("returns null for the empty object", function() {
        assert.isNull( topSalary({}) );
      });
})
