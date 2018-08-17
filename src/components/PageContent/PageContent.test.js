import React from 'react';
import PageContent from './PageContent';

const defaultProps = {

};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {};
  const component = <PageContent {...actions} {...props} />;
  const shallowComponent = shallow(component);

  return {
    actions,
    component,
    shallowComponent,
  };
};

describe('PageContent', () => {
  it('should render', () => {
    const { shallowComponent } = setup();

    expect(shallowComponent.exists()).toBe(true);
  });
});
