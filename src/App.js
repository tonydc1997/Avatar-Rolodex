import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      avatars: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({ avatars: users }));
  }

  render() {
    const { avatars, searchField } = this.state;
    const filteredAvatars = avatars.filter(avatar =>
      avatar.lowerCase().includes(searchField.lowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="search avatars"
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList avatars={this.state.avatars} />
      </div>
    );
  }
}

export default App;
