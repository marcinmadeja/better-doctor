import React from 'react';
import DefaultCardsList from './DefaultCardsList';

const defaultProps = {};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {};
  const component = <DefaultCardsList {...actions} {...props} />;
  const shallowComponent = shallow(component);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('DefaultCardsList', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });
});
