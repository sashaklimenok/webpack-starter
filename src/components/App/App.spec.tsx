import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { App } from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('Test', () => {
  it('should return 10', () => {
    const number = 10;
    const wrapper = shallow(<App />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
    expect(number).toBe(10);
  });
});
