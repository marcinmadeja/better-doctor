import React from 'react';
import Specialties from './Specialties';

const defaultProps = {

};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {

  };

  const component = <Specialties {...actions} {...props} />;
  const shallowComponent = shallow(<Specialties />);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('Specialties', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });
});
