import React, { Component } from 'react';
import NavBar from './components/NavBar'
import { fetchCategories, fetchPosts, fetchComments } from './utils/api'
import { Route, Switch } from 'react-router-dom'
import PostDetail from './components/PostDetail'
import PostIndexPage from './components/PostIndexPage'
import NewPostForm from './components/NewPostForm'
import EditPostForm from './components/EditPostForm'
import NewCommentForm from './components/NewCommentForm'
import EditCommentForm from './components/EditCommentForm'

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
          <Route exact path='/posts/new' component={NewPostForm} />
          <Route exact path='/edit' component={EditPostForm} />
          <Route exact path="/" component={PostIndexPage} />
          <Route exact path="/:category" component={PostIndexPage} />
          <Route exact path='/posts/:category/:id' component={PostDetail} />
          <Route exact path='/posts/:category/:id/comments/new' component={NewCommentForm} />
          <Route exact path='/posts/:category/:id/comments/edit' component={EditCommentForm} />
        </Switch>
      </div>
    );
  }
}

export default App
