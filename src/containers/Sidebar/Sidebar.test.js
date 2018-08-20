import React from 'react';
import { Sidebar } from './Sidebar';
import Menu from './Menu';
import User from './User/User';

const defaultProps = {
  classes: {},
};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {};
  const component = <Sidebar {...actions} {...props} />;
  const shallowComponent = shallow(component);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('Sidebar', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });

  it('should render Menu', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.find(Menu).exists()).toBe(true);
  });

  it('should render User', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.find(User).exists()).toBe(true);
  });
});
