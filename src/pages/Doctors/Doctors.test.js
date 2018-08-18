import React from 'react';
import Doctors from './Doctors';

const defaultProps = {

};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {

  };

  const component = <Doctors {...actions} {...props} />;
  const shallowComponent = shallow(<Doctors />);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('Doctors', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });
});
