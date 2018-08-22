import React from 'react';
import Friends from './Friends';

const defaultProps = {

};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {

  };

  const component = <Friends {...actions} {...props} />;
  const shallowComponent = shallow(<Friends />);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('Friends', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });
});
