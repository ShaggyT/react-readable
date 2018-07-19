import React ,  { Component } from 'react'
import ThumbsUpIcon from 'react-icons/lib/fa/thumbs-up'
import ThumbsDownIcon from 'react-icons/lib/fa/thumbs-down'
import { Link } from 'react-router-dom'

class Vote extends Component {

  render() {
    const { onUpvote, onDownvote, voteScore } = this.props
    return(
      <span>
        <Link to='#' onClick={onUpvote}>
          <ThumbsUpIcon style={{color: "#BC8F8F"}} />
        </Link>
        <span> &nbsp; {voteScore} &nbsp; </span>
        <Link to='#' onClick={onDownvote}>
          <ThumbsDownIcon style={{color: "#BC8F8F"}} />
        </Link>
      </span>
    )
  }
}

export default Vote
