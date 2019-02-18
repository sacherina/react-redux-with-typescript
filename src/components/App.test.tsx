import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import App from './Header';
import Header from '../container/Header';
import Footer from '../container/Footer';
import Routing from './Routing';

Enzyme.configure({adapter: new Adapter()});

describe('App component', () => {

  const getApp = (props: any) => (
    <App {...props}/>
  );

  test('renders', () => {
    const wrapper = shallow(getApp({}));
    expect(wrapper).toMatchSnapshot();
  });

  test('renders header', () => {
    const wrapper = shallow(getApp({}));
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  test('renders footer', () => {
    const wrapper = shallow(getApp({}));
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  test('renders routing', () => {
    const wrapper = shallow(getApp({}));
    expect(wrapper.find(Routing)).toHaveLength(1);
  });
});
