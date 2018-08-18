import React from 'react';
import Menu from './Menu';

const defaultProps = { list: [] };

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {};
  const component = <Menu {...actions} {...props} />;
  const shallowComponent = shallow(component);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('Menu', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });
});
