import React from 'react';
import { MemoryRouter } from 'react-router';
import Item from './Item';

const defaultProps = {
  icon: <p />,
  path: '',
  children: '',
  className: '',
};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {};
  const component = (
    <MemoryRouter initialEntries={['/']}>
      <Item {...actions} {...props} />
    </MemoryRouter>
  );
  const shallowComponent = shallow(component);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('Item', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });

  it('should match base snapshot', () => {
    const { component } = setup({
      children: 'Lorem ipsum',
      path: 'example/path',
      className: 'example class name',
    });

    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
