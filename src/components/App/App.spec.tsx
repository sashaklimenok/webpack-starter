import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { App } from './App';

describe('Test', () => {
  it('should return 10', () => {
    const number = 10;
    const wrapper = shallow(<App />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
    expect(number).toBe(10);
  });
});
