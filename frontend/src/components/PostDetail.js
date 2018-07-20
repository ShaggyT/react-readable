import React ,  { Component } from 'react'
import { getPost } from '../actions/posts'
import { connect } from 'react-redux'
import { Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { formattedDate, capitalize, commentsCount } from '../utils/helpers'
import DeletePostButton from './DeletePostButton'
import EditPostButton from './EditPostButton'
import CommentIndexPage from './CommentIndexPage'
import { getComments } from '../actions/comments'


class PostDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getPost(id)
    this.props.getComments(id)
  }

  render() {
    const { post, comments } = this.props
    if (!post.id) {
      return(
        <div> </div>
      )
    }

    return(
      <div>
        <Jumbotron style={styles.container}>
          <div style={styles.innerContainer}>
            <h3>{post.title}</h3>
            <h4 >
              {post.body}
            </h4>
            <p style={{fontSize: 15}}>
              Category: <Link
                to={`/${post.category}`}
                style={{color: 'blue',}}
                >
               {capitalize(post.category)}
            </Link> | Posted At: {formattedDate(post.timestamp)}
            </p>
            <p style={{fontSize: 15}}>
              By: <b>{post.author}</b> | {commentsCount(post.commentCount)}
            </p>
            <p>
              <DeletePostButton post={post}/>
              <EditPostButton post={post} />
            </p>
          </div>
        </Jumbotron>
        {post &&
          <CommentIndexPage
            postId={post.id}
            comments={comments}
            category={post.category}
          />
        }
      </div>
    )
  }
}


const styles = {
  container: {
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 2
  },
  innerContainer: {
    marginRight: 10,
    marginLeft: 10,
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

const mapStateToProps = ({ post, comments }) => ({
  post: post,
  comments: comments,

})

function mapDispatchToProps (dispatch) {
  return {
    getPost: id => dispatch(getPost(id)),
    getComments: id => dispatch(getComments(id)),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
