/**
 * @jest-environment jsdom
 */
import { createElement } from "./shared"

describe('createElement', () => {
  it('test', () => {
    const test = createElement('div', {margin: '10px'});
    expect(test).toMatchSnapshot();
  })
})