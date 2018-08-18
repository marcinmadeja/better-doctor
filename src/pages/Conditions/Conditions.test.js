import React from 'react';
import Conditions from './Conditions';

const defaultProps = {

};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {

  };

  const component = <Conditions {...actions} {...props} />;
  const shallowComponent = shallow(<Conditions />);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('Conditions', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });
});
