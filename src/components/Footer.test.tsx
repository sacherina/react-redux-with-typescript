import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Footer from '../containers/Footer';

Enzyme.configure({adapter: new Adapter()});

describe('Footer component', () => {

  test('renders', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
