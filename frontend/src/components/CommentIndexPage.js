import React ,  { Component } from 'react'
import { PageHeader, Button } from 'react-bootstrap'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

class CommentIndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCommentForm: false,
    }
    this.openCommentForm = this.openCommentForm.bind(this)
  }

  openCommentForm = () => {
    this.setState({
      showCommentForm: true,
    })
  }


  render() {
    const {postId, comments } = this.props
    const { showCommentForm } = this.state

    return (
      <div style={styles.container}>
        <PageHeader style={styles.header}>
        <small>Comments</small>
        <Button
          href={`/posts/${postId}`}
          style={styles.button}
          className="pull-right"
          bsSize="small"
          onClick={(event) => {
            event.preventDefault();
            this.openCommentForm();
            }}
          >Add Comment
        </Button>
        </PageHeader>
        {showCommentForm && <CommentForm
        postId={postId}
        /> }

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
