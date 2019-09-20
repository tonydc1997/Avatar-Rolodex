import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      avatars: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({ avatars: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList avatars={this.state.avatars} />
      </div>
    );
  }
}

export default App;
