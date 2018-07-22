import React ,  { Component } from 'react'
import { formattedDate, capitalize, commentsCount,  } from '../utils/helpers'
import DeletePostButton from './DeletePostButton'
import EditPostButton from './EditPostButton'
import Vote from './Vote'
import { votePost } from '../actions/posts'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListGroupItem } from 'react-bootstrap'

class Post extends Component {
  renderTitle = (post,title) => {
    return (
      <Link to={`/posts/${post.category}/${post.id}`}
        style={styles.title}>
        {capitalize(title)}
      </Link>
    )
  }

  render() {
    const { post, id , title, category, timestamp, author, commentCount, voteScore, votePost } = this.props
    return(
      <div style= {styles.container}>
        <ListGroupItem
          key={id}
          style={styles.postItem}
          header={this.renderTitle(post,title)}>
          <span style={{marginBottom: 10, marginTop: 10, display: 'block' }}>
            Category: <Link to={`/${category}`}
            style={{color: 'blue',}}
            >{capitalize(category)}</Link> | Posted At: {formattedDate(timestamp)}
          </span>
          <span style={{display : 'block'}}> By: <b>{author}</b> | {commentsCount(commentCount)} | &nbsp;
            <Vote
              onVoteUp={() => votePost(id, "upVote")}
              onVoteDown={() => votePost(id, "downVote")}
              voteResult={voteScore}
            />
          </span>
          <DeletePostButton post={post}/>
          <EditPostButton post={post} />
        </ListGroupItem>
      </div>
    )
  }
}


const styles = {
  container: {
    marginRight: 10,
    marginLeft: 10,
  },
  postItem: {
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    textDecoration: 'none',
    color:'blue',
    fontSize: 18,
    marginBottom: 10,
  }
}

export default connect(
  undefined,
  { votePost: votePost }
)(Post)
