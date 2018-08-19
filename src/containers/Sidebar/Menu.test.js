import React from 'react';
import { MemoryRouter } from 'react-router';
import Menu from './Menu';

const defaultProps = {};
const List = [
  {
    exact: true,
    path: '/',
    component: () => <div />,
    name: 'Home',
    icon: <span />,
  },
  {
    exact: true,
    path: '/home',
    component: () => <div />,
    name: 'Home 2',
    icon: <span />,
  },
];

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {};
  const component = (
    <MemoryRouter initialEntries={['/']}>
      <Menu {...actions} {...props} />
    </MemoryRouter>
  );
  const shallowComponent = shallow(component);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('Menu', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });

  it('should render correctly when proper List passed', () => {
    const { component } = setup({ list: List });

    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
