// @flow strict
import React, { Component } from 'react';
import Item from './Item';

type Props = {
  list: Array<any>,
};

class CardsList extends Component<Props> {
  static Item = Item;

  render() {
    const { list } = this.props;

    return (
      <div>
        {list.map((card, key) => <Item key={key} />)}
      </div>
    );
  }
}

export default CardsList;
