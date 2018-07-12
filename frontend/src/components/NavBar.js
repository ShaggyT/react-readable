import React, { Component } from 'react'
import { Navbar, Nav,  MenuItem, NavDropdown } from 'react-bootstrap'
import { getCategories } from '../actions/categories'
import { connect } from 'react-redux'
import { capitalize } from '../utils/helpers'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  componentDidMount () {
    this.props.getCategories()
  }

  render() {
    const { categories } = this.props
    return (
      <Navbar inverse collapseOnSelect style={styles.navbar}>
        <Navbar.Header >
          <Navbar.Brand >
            <Link style={styles.header} to="/">Readable</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown eventKey={1}
               title="Categories" id="basic-nav-dropdown">
              <MenuItem eventKey={1.1} href="/"> All </MenuItem>
              {
                categories.length > 0 &&
                 categories.map((category, index) => (
                  <MenuItem
                    key={`1.${index + 2}`}
                    eventKey={`1.${index + 2}`}
                    href={`/${category.name}`}
                    >
                    { capitalize(category.name) }
                  </MenuItem>
                ))
              }
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
    // backgroundColor: "#BC8F8F",
    // borderColor: "#BC8F8F",
  },
  header: {
    color: "#fff"
  }
}


function mapStateToProps ( categories ) {
    return categories
}

function mapDispatchToProps (dispatch) {
  return {
    getCategories: (data) => dispatch(getCategories(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
