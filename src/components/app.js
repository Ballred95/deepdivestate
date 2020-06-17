import React, { Component } from 'react';
import JournalList from "./journals/journal_list";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>React props and state</h1>
        <JournalList heading = 'list 1' />
        <JournalList heading = 'list 2' />
      </div>
    );
  }
}
