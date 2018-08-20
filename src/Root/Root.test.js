import React from 'react';
import Sidebar from 'containers/Sidebar/Sidebar';
import PageContent from 'components/PageContent/PageContent';
import MainContent from 'components/MainContent/MainContent';
import Root from './Root';

const defaultProps = {};

const setup = (props = {}) => {
  props = { ...defaultProps, ...props };
  const actions = {};

  const component = <Root {...actions} {...props} />;

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

  it('should contain MainContent, Sidebar and PageContent', () => {
    const { shallowComponent } = setup();

    expect(shallowComponent.find(MainContent).exists()).toBe(true);
    expect(shallowComponent.find(PageContent).exists()).toBe(true);
    expect(shallowComponent.find(Sidebar).exists()).toBe(true);
  });
});
