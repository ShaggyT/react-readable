import React from 'react'
import Moment from 'react-moment'

export function capitalize (str = '') {
  return typeof str !== 'string'
    ? ''
    : str[0].toUpperCase() + str.slice(1)
}


export const formattedDate = (date)=> {
  return <Moment format='lll'>{date}</Moment>
}
