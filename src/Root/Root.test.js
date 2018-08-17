import React from 'react';
import { MemoryRouter } from 'react-router';
import Root from './Root';

const defaultProps = {
  location: {
    pathname: '/',
  },
};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {};

  const component = (
    <MemoryRouter initialEntries={[props.location.pathname]}>
      <Root {...actions} {...props} />
    </MemoryRouter>
  );

  const shallowComponent = shallow(component);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('Root', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });
});
