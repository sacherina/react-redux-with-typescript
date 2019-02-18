import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Routing from './Routing';

import { Switch } from 'react-router';

Enzyme.configure({adapter: new Adapter()})
describe('Routing component', () => {

    const getRouting = (props: any) => 
        <Routing {...props}/>

  test('renders', () => {
    const wrapper = shallow(getRouting({}));
    expect(wrapper).toMatchSnapshot();
  });

  test('renders switch', () => {
    const wrapper = shallow(getRouting({}));
    expect(wrapper.find(Switch)).toHaveLength(1);
  });
});
