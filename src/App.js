import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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

  handleChange = e => this.setState({ searchField: e.target.value });

  render() {
    const { avatars, searchField } = this.state;
    const filteredAvatars = avatars.filter(avatar =>
      avatar.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Avatar Rolodex</h1>
        <SearchBox
          placeholder="search avatars"
          handleChange={this.handleChange}
        />
        <CardList avatars={filteredAvatars} />
      </div>
    );
  }
}

export default App;
