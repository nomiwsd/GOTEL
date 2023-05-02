import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../Images/GOTEL.png';
import './Homepage.css'

function Header() {
  return (
      <Navbar className='navbarbg px-2 px-lg-5 m-0 ' collapseOnSelect expand="md" variant="light">
        <img src={Logo} alt="" className='logoimg ' />
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  className=''/>
      <Navbar.Collapse id="responsive-navbar-nav" className=' d-md-flex justify-content-md-end'>
        <Nav className="d-lg-flex justify-content-center">
          <Nav.Link className='navlinks'>Home</Nav.Link>
          <Nav.Link className='navlinks'>About Us</Nav.Link>
          <Nav.Link className='navlinks'>Partners</Nav.Link>
          <Nav.Link className='navlinks'>Contact Us</Nav.Link>

          <div className="row m-0 p-0 d-lg-flex justify-content-lg-between justify-content-center gap-2 gap-lg-1">
          <Link to='../Signup'className='mainbtn col-4 col-md-6 py-2 px-3'>Register</Link>
          <Link to='../Login' className='mainbtn col-4 col-md-5 py-2 px-3'>Login</Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  
  )
}

export default Header
