import React, { Component } from 'react';
import NavBar from './components/NavBar'
import { fetchCategories, fetchPosts } from './utils/api'
import { Route, Switch } from 'react-router-dom'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'

class App extends Component {

  componentDidMount() {
    fetchCategories()
    fetchPosts()
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route exact path='/:category/:id' component={PostDetail} />
        </Switch>
      </div>
    );
  }
}

export default App
