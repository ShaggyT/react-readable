import React ,  { Component } from 'react'
import { PageHeader, Button } from 'react-bootstrap'
import CommentList from './CommentList'

class CommentIndexPage extends Component {

  render() {
    const {postId, comments } = this.props

    return (
      <div style={styles.container}>
        <PageHeader style={styles.header}>
        <small>Comments</small>
        <Button
          // href="/posts/new"
          style={styles.button}
          className="pull-right"
          bsSize="small"
          // onClick={this.addComment}
          >Add Comment
        </Button>
        </PageHeader>
        <CommentList
          parentId = { postId }
          comments = { comments }
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
