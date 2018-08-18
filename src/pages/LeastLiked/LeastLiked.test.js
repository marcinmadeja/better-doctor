import React from 'react';
import LeastLiked from './LeastLiked';

const defaultProps = {

};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {

  };

  const component = <LeastLiked {...actions} {...props} />;
  const shallowComponent = shallow(<LeastLiked />);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('LeastLiked', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });
});
