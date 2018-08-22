import React from 'react';
import Players from './Players';

const defaultProps = {

};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {

  };

  const component = <Players {...actions} {...props} />;
  const shallowComponent = shallow(<Players />);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('Players', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });
});
