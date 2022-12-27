import React from 'react'
import {Nav,Navbar} from 'react-bootstrap';
import './Header.css'
function Header() {
  return (
    
      <Navbar className='navbard px-5 m-0' collapseOnSelect expand="lg"  variant="dark">
        <Nav.Link  className='fs-4'href="#home">Gotel</Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='d-flex justify-content-end'>
          <Nav className="">
            <Nav.Link className='navlinks' href="#features">Home</Nav.Link>
            <Nav.Link className='navlinks' href="#About us">About Us</Nav.Link>
            <Nav.Link className='navlinks' href="#partners">Partners</Nav.Link>
            <Nav.Link className='navlinks' href="#Contactus">Contact Us</Nav.Link>
            <Nav.Link className='navlinks me-5' href="#portal">Portal</Nav.Link>
            <button className='findjobbtn m-0 px-3 py-0'>Find a Job</button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    
  )
}

export default Header