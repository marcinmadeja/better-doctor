import React from 'react';
import Favourite from './Favourite';

const defaultProps = {

};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {

  };

  const component = <Favourite {...actions} {...props} />;
  const shallowComponent = shallow(<Favourite />);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('Favourite', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });
});
