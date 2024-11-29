import React, { useState } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NetflixLogo from '../img/netflix_logo.png'
import KidsLogo from '../img/kids_icon.png'
import User1 from '../img/avatar.png'
import User2 from '../img/avater2.png'
import User3 from '../img/avater3.jpg'
import { Link } from 'react-router-dom'
import { FaBell } from 'react-icons/fa'

const NetflixNavbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [debounceTimeout, setDebounceTimeout] = useState(null)

  const handleSearchChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)

    if (debounceTimeout) {
      clearTimeout(debounceTimeout)
    }

    const timeout = setTimeout(() => {
      onSearch(query)
    }, 500)

    setDebounceTimeout(timeout)
  }

  return (
    <Navbar expand="md" className="navbar navbar-expand-md">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={NetflixLogo} width="100px" alt="Netflix Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarSupportedContent"
          className="border-danger text-danger"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <a href="#" className="nav-link active text-light">
              Home
            </a>
            <a href="#" className="nav-link fw-bold text-light">
              TV Shows
            </a>
            <a href="#" className="nav-link text-light">
              Movies
            </a>
            <a href="#" className="nav-link text-light">
              Recently Added
            </a>
            <a href="#" className="nav-link text-light">
              My List
            </a>
            <div className="d-flex align-items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Cerca i tuoi film"
                className="border bg-black text-light border-danger ms-2"
              />
            </div>
          </Nav>
          <div className="d-none d-md-flex align-items-center">
            <NavDropdown
              title={
                <img src={User1} width="50px" alt="Avatar" className="me-3" />
              }
              id="navbarScrollingDropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item>
                <img src={User2} width="50px" alt="Astrubale Avatar" />{' '}
                Astrubale
              </NavDropdown.Item>
              <NavDropdown.Item>
                <img src={User3} width="50px" alt="Carmelito98 Avatar" />{' '}
                Carmelito98
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/edit">
                Edit Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/account">
                Settings
              </NavDropdown.Item>
            </NavDropdown>
            <FaBell className="text-light fs-3 m-3" />
            <img src={KidsLogo} width="60px" alt="" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NetflixNavbar
