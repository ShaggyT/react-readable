import React, { Component } from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'

class NavBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect style={styles.navbar}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Readable</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown eventKey={3} title="Categories" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>All </MenuItem>
              <MenuItem eventKey={3.2}>React</MenuItem>
              <MenuItem eventKey={3.3}>Redux</MenuItem>
              <MenuItem eventKey={3.4}>Udacity</MenuItem>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const styles= {
  navbar: {
    borderRadius: 0,
  }
}

export default NavBar
