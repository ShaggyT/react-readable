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
import { getPosts } from '../actions/posts'
import Vote from './Vote'
import { votePost } from '../actions/posts'
import { Grid, Row, Col } from 'react-bootstrap'

class PostDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getPost(id)
    this.props.getComments(id)
    const { category } = this.props.match.params
    this.props.getPosts(category)
  }

  render() {
    const { post, comments, votePost } = this.props
    if (!post.id) {
      return(
        <div> </div>
      )
    }

    return(
      <div style={styles.container}>
        <Jumbotron style={styles.container}>
          <div style={styles.innerContainer}>
            <h3>{capitalize(post.title)}</h3>
            <h4 >
              {post.body}
            </h4>
            <p style={{fontSize: 15}}>
              Category: <Link
                to={`/${post.category}`}
                style={{color: "#BC8F8F"}}
                >
               {capitalize(post.category)}
            </Link> | Posted At: {formattedDate(post.timestamp)}
            </p>
            <p style={{fontSize: 15}}>
              By: <b>{capitalize(post.author)}</b> | {commentsCount(post.commentCount)} | &nbsp;
              <Vote
                onVoteUp={() => {
                  votePost(post.id, "upVote").then(() => {
                    setTimeout(function(){window.location.reload();},0.0000001)
                    })
                  }
                }
                onVoteDown={() => {
                  votePost(post.id, "downVote").then(() => {
                    setTimeout(function(){window.location.reload();},0.0000001)
                    })
                  }
                }
                voteResult={post.voteScore}
              />
            </p>
            <p>
              <DeletePostButton  style={styles.deleteBtn} post={post}/>
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
    borderRadius: 2,
    height: 280,
  },
  innerContainer: {
    marginRight: 10,
    marginLeft: 30,
  },
  header: {
    marginLeft: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#BC8F8F",
    borderColor: "#BC8F8F",
    color: "#fff",
  },
  vote: {
    marginTop: 60,
  },
}

const mapStateToProps = ({ post, comments }) => ({
  post: post,
  comments: comments,
})

function mapDispatchToProps (dispatch) {
  return {
    getPost: id => dispatch(getPost(id)),
    getComments: id => dispatch(getComments(id)),
    getPosts: (category) => dispatch(getPosts(category)),
    votePost: (id,option) => dispatch(votePost(id,option)),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
