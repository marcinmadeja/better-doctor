// @flow strict
import * as React from 'react';
import MenuList from '@material-ui/core/MenuList';
import Item from './Item';

type Props = {
  children: React.ChildrenArray<React.Element<typeof Item>>
};

class Navigation extends React.Component<Props> {
  static Item = Item;

  render() {
    const { children } = this.props;

    return (
      <MenuList>
        {children}
      </MenuList>
    );
  }
}

export default Navigation;
