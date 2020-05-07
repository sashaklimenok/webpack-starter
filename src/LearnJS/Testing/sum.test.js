
`Для написания тестов нужно организовать код таким образом, 
чтобы у каждой функции была ясно поставленная задача и точно определены 
её аргументы и возвращаемое значение. А это означает, 
что мы получаем хорошую архитектуру с самого начала.`


var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("тест", function() {

    before(() => console.log("Тестирование началось – перед тестами"));
    after(() => console.log("Тестирование закончилось – после всех тестов"));
  
    beforeEach(() => console.log("Перед тестом – начинаем выполнять тест"));
    afterEach(() => console.log("После теста – заканчиваем выполнение теста"));
  
    it('тест 1', () => console.log(1));
    it('тест 2', () => console.log(2));
  
  });

