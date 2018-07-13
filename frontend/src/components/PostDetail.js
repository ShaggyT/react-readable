import React ,  { Component } from 'react'
import { getPost } from '../actions/posts'
import { connect } from 'react-redux'
import { Jumbotron, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { formattedDate, capitalize, commentsCount } from '../utils/helpers'

class PostDetail extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id)
  }

  render() {
    const { post } = this.props
    console.log("this is a post", post)

    if (!post.id) {
      return(
        <div> </div>
      )
    }

    return(
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
            <Button style={{ width: 70 , marginRight:5}}>Edit</Button>
            <Button style={{ width: 70 }}>Delete</Button>
          </p>
        </div>
      </Jumbotron>
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
  }
}

function mapStateToProps ( post ) {
    return post
}

function mapDispatchToProps (dispatch) {
  return {
    getPost: id => dispatch(getPost(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
