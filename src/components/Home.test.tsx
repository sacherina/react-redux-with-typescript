import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Home from './Home';

import { IHomeProps } from '../container/Home';

Enzyme.configure({adapter: new Adapter()})

describe('Home component', () => {

    const defaultProps: IHomeProps = {
        onButtonClick: jest.fn()
    }

    const getHome = (props: any) => (
        <Home {...defaultProps}{...props}/>
        );

  test('renders', () => {
    const wrapper = shallow(getHome({}));
    expect(wrapper).toMatchSnapshot();
  });
});
