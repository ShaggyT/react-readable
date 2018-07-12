import React, { Component } from 'react';
import NavBar from './components/NavBar'
import { fetchCategories } from './utils/api'

class App extends Component {

  componentDidMount() {
    fetchCategories()
  }

  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App
