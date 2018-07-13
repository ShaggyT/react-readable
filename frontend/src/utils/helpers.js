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
