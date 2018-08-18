import React from 'react';
import Insurances from './Insurances';

const defaultProps = {

};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {

  };

  const component = <Insurances {...actions} {...props} />;
  const shallowComponent = shallow(<Insurances />);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('Insurances', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });
});
