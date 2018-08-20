import React from 'react';
import 'jest-styled-components';
import { MemoryRouter } from 'react-router';
import User from './User';

const defaultProps = {};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {};
  const component = <User {...actions} {...props} />;
  const memoryComponent = (
    <MemoryRouter initialEntries={['/']}>
      {component}
    </MemoryRouter>
  );
  const shallowComponent = shallow(component);

  return {
    actions,
    component,
    shallowComponent,
    memoryComponent,
  };
};

describe('User', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });

  it('should match basic snapshot', () => {
    const { memoryComponent } = setup();

    const tree = renderer
      .create(memoryComponent)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
