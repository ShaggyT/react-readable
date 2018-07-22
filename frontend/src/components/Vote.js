import React ,  { Component } from 'react'
import ThumbsUpIcon from 'react-icons/lib/fa/thumbs-up'
import ThumbsDownIcon from 'react-icons/lib/fa/thumbs-down'
import { Link } from 'react-router-dom'

class Vote extends Component {

  render() {
    const { onVoteUp, onVoteDown, voteResult } = this.props
    return(
      <span>
        <Link to='#' onClick={onVoteUp}>
          <ThumbsUpIcon size={18} style={styles.icon} />
        </Link>
        <span> &nbsp; {voteResult} &nbsp; </span>
        <Link to='#' onClick={onVoteDown}>
          <ThumbsDownIcon size={18} style={styles.icon} />
        </Link>
      </span>
    )
  }
}

const styles = {
  icon: {
    color: "#BC8F8F",
  }
}

export default Vote
