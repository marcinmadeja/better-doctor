import React from 'react';
import Cards from './Cards';

const defaultProps = {

};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {

  };

  const component = <Cards {...actions} {...props} />;
  const shallowComponent = shallow(<Cards />);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('Cards', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });
});
