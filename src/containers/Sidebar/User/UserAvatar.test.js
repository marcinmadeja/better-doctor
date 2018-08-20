import React from 'react';
import 'jest-styled-components';
import UserAvatar from './UserAvatar';

const defaultProps = {
  src: 'image/src/',
  alt: 'image alt',
  status: 'active',
  classes: {},
};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {};
  const component = <UserAvatar {...actions} {...props} />;
  const shallowComponent = shallow(component);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('UserAvatar', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });

  it('should match main snapshot', () => {
    const { component } = setup();
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
