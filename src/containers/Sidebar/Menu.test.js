import React from 'react';
import { MemoryRouter } from 'react-router';
import Navigation from 'components/Navigation/Navigation';
import { Menu } from './Menu';

const defaultProps = { classes: {}, list: [] };
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
    path: '/test',
    component: () => <div />,
    name: 'Home 2',
    icon: <span data-testid="icon" />,
  },
];

const setup = (props = {}, initialEntries = '/') => {
  props = { ...defaultProps, ...props };
  const actions = {};
  const component = (
    <MemoryRouter initialEntries={[initialEntries]}>
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

  it('should add active class to path "/test"', () => {
    const testRoute = List[1];
    const { component } = setup({ list: List }, testRoute.path);
    const renderComponent = mount(component);
    const activeLink = renderComponent.find(Navigation.Item).last().find('.active').last();
    expect(activeLink.length).toEqual(1);
    expect(activeLink.text()).toEqual(testRoute.name);
  });
});
