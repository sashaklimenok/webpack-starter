import { countChar } from './countChar';

describe('CountChar', () => {
  it('should find char W coun will be 3', () => {
    expect(countChar('Hello World', 'l')).toBe(3);
  })
});
