import React from 'react';
import Item from './Item';

const defaultProps = {
  Icon: () => <p />,
  children: '',
};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {};
  const component = <Item {...actions} {...props} />;
  const shallowComponent = shallow(component);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('Item', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });
});
