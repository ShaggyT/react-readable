import React, { Component } from 'react';
import NavBar from './components/NavBar'
import { fetchCategories, fetchPosts, fetchComments } from './utils/api'
import { Route, Switch } from 'react-router-dom'
import PostDetail from './components/PostDetail'
import PostIndexPage from './components/PostIndexPage'
import PostForm from './components/PostForm'

class App extends Component {

  componentDidMount() {
    fetchCategories()
    fetchPosts()
    fetchComments()
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/posts/new' component={PostForm} />
          <Route exact path='/edit' component={PostForm} />
          <Route exact path="/" component={PostIndexPage} />
          <Route exact path="/:category" component={PostIndexPage} />
          <Route exact path='/posts/:category/:id' component={PostDetail} />
        </Switch>
      </div>
    );
  }
}

export default App
