import React from 'react';
import CardsList from './CardsList';

const LIST = new Array(10).fill({ card: 'card' });
const defaultProps = {
  list: LIST,
};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {};
  const component = <CardsList {...actions} {...props} />;
  const shallowComponent = shallow(component);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('CardsList', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });

  it('should render all elements from list props', () => {
    const { shallowComponent } = setup();
    const listItems = shallowComponent.find(CardsList.Item);
    expect(listItems.length).toEqual(LIST.length);
  });
});
