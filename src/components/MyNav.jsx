import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NetflixLogo from '../img/netflix_logo.png'
import KidsLogo from '../img/kids_icon.png'
import User1 from '../img/avatar.png'
import User2 from '../img/avater2.png'
import User3 from '../img/avater3.jpg'

const NetflixNavbar = () => {
  return (
    <Navbar expand="md" className="navbar navbar-expand-md">
      <Container fluid>
        <Navbar.Brand href="#">
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
            <Nav.Link href="#" className="nav-link active text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold text-light">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="text-light">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="text-light">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="text-light">
              My List
            </Nav.Link>
            <input
              type="text"
              placeholder="Cerca i tuoi film e serie tv preferiti"
              className="border border-black me-2"
            />
          </Nav>
          <div className="d-none d-md-flex align-items-center">
            <img src={KidsLogo} width="60px" alt="" />
            <span className="text-light m-3">Notifications</span>
            <NavDropdown
              title={
                <img src={User1} width="50px" alt="Avatar" className="me-3" />
              }
              id="navbarScrollingDropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#">
                <img src={User2} width="50px" alt="Astrubale Avatar" />{' '}
                Astrubale
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <img src={User3} width="50px" alt="Carmelito98 Avatar" />{' '}
                Carmelito98
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Edit Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Settings</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NetflixNavbar
