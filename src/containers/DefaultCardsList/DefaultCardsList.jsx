import React, { Component } from 'react';
import CardList from 'components/CardsList/CardsList';
import API from 'api';

API.cards.getCards();

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
