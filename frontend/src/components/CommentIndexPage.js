import React ,  { Component } from 'react'
import { PageHeader, Button } from 'react-bootstrap'
import CommentList from './CommentList'
import Sort from './Sort'

class CommentIndexPage extends Component {
  state = {
    sortBy: 'date'
  }

  changeSort = (sortBy) => {
    this.setState({ sortBy })
  }

  render() {
    const {postId, comments, category } = this.props

    return (
      <div style={styles.container}>
        <PageHeader style={styles.header}>
        <small>Comments</small>
        <Button
          href={`/posts/${category}/${postId}/comments/new`}
          style={styles.button}
          className="pull-right"
          bsSize="small"
          >Add Comment
        </Button>
        <Sort
          onChange={this.changeSort}/>
        </PageHeader>
        <CommentList
          sortBy={this.state.sortBy}
          parentId = {postId}
          comments = {comments}
          category={category}
        />
      </div>
    )
  }
}


const styles = {
  container: {
    marginRight: 10,
    marginLeft: 10,
  },
  noPost: {
    textAlign: 'center',
    padding: 20,
  },
  header: {
    marginLeft: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#BC8F8F",
    borderColor: "#BC8F8F",
    color: "#fff"
  }
}



export default CommentIndexPage
