import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.png'
import './Header.css'

function Header() {
  return (
    <Navbar className='navbard px-5 m-0' collapseOnSelect expand="lg" variant="dark">
      <Nav.Link className='fs-4' href="#home">
        <img src={Logo} alt="" className='logoimg' />
      </Nav.Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className='d-flex justify-content-end'>
        <Nav className="">
          <Nav.Link className='navlinks' href="#features">Home</Nav.Link>
          <Nav.Link className='navlinks' href="#About us">About Us</Nav.Link>
          <Nav.Link className='navlinks' href="#partners">Partners</Nav.Link>
          <Nav.Link className='navlinks' href="#Contactus">Contact Us</Nav.Link>
          {/* <div class="dropdown me-3">
            <button class="btn  dropdownbtn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
              Portal
            </button>
            <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
              <li><Link class="dropdown-item active" to="../Login">Company</Link></li>
              <li><Link class="dropdown-item" to="../Login">Admin</Link></li>
              <li><Link class="dropdown-item" to="../Login">Employer</Link></li>
            </ul>
          </div> */}
          <Link to='../Signup'className='findjobbtn m-0 px-3 py-1'>Register</Link>
          <Link to='../Login' className='findjobbtn m-0 px-3 py-1 mx-2'>Login</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}

export default Header
