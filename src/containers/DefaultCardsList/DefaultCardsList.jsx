import React, { Component } from 'react';
import CardList from 'components/CardsList/CardsList';

class DefaultCardsList extends Component {
  render() {
    return (
      <div>
        <CardList list={[]} />
      </div>
    );
  }
}

export default DefaultCardsList;
