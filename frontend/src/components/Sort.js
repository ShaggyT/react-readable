import React, { Component } from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'

class Sort extends Component {
  render() {
    const { onChange, isPost } = this.props
    return (
      <div>
        <DropdownButton
          title={isPost ? "Sort Posts" : "Sort Comments" }
          id={isPost ? "sort-posts" : "sort-comments" }
          onSelect={(sortOption) => onChange(sortOption)}
          style={{marginTop: 10, color: "#BC8F8F"}}>
          <MenuItem
            eventKey="date-ascending"
            >
            <center>Most Recent</center>
          </MenuItem>
          <MenuItem divider />
          <MenuItem
            eventKey="date-descending"
            >
            <center>Least Recent</center>
          </MenuItem>
          <MenuItem divider />
          <MenuItem
            eventKey="votes-ascending"
            >
            <center>Most Popular</center>
          </MenuItem>
          <MenuItem divider />
          <MenuItem
            eventKey="votes-descending"
            >
            <center>Least Popular</center>
          </MenuItem>
        </DropdownButton>
      </div>
    )
  }
}

export default Sort
