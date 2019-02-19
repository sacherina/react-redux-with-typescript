import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Header from './Header';

Enzyme.configure({adapter: new Adapter()})

describe('Header component', () => {
  
  test('renders', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

});
