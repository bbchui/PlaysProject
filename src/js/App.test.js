import React from 'react';
import { shallow } from 'enzyme';
import Plays from './App';

test('it says hello!', () => {
  const wrapper = shallow(<Plays />);
  expect(wrapper.text()).toBe('Hello from Plays!');
});
