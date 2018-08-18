import React from 'react';
import Practices from './Practices';

const defaultProps = {

};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {

  };

  const component = <Practices {...actions} {...props} />;
  const shallowComponent = shallow(<Practices />);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('Practices', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });
});
