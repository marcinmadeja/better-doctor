import React from 'react';
import Decks from './Decks';

const defaultProps = {

};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {

  };

  const component = <Decks {...actions} {...props} />;
  const shallowComponent = shallow(<Decks />);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('Decks', () => {
  it('should render', () => {
    const { shallowComponent } = setup();
    expect(shallowComponent.exists()).toBe(true);
  });
});
