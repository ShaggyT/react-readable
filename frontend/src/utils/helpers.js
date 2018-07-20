import React from 'react'
import Moment from 'react-moment'

export function capitalize (str = '') {
  if (str === '')
    return str
  return typeof str !== 'string'
    ? ''
    : str[0].toUpperCase() + str.slice(1)
}

export const formattedDate = (date)=> {
  return <Moment format='lll'>{date}</Moment>
}

export function commentsCount (commentsCount) {
  return commentsCount === 1 ? '1 comment' : `${commentsCount} comments`
}

export const sortByDateAscending = (data) => {
  return data.sort((a, b) =>   b.timestamp - a.timestamp  )
}
export const sortByDateDescending = (data) => {
  return data.sort((a, b) =>   a.timestamp - b.timestamp  )
}

export const sortByVotesAscending = (data) => {
  return data.sort((a, b) => b.voteScore -  a.voteScore )
}

export const sortByVotesDescending = (data) => {
  return data.sort((a, b) => a.voteScore  - b.voteScore  )
}
