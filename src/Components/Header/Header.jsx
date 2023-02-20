import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../Assets/GOTEL.png'
import './Header.css'

function Header() {
  return (
    <Navbar className='navbard px-2 px-lg-5 m-0' collapseOnSelect expand="lg" variant="light">
      <Nav.Link className='fs-4' href="#home">
        <img src={Logo} alt="" className='logoimg' />
      </Nav.Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  className=''/>
      <Navbar.Collapse id="responsive-navbar-nav" className='d-lg-flex justify-content-lg-end'>
        <Nav className="d-flex justify-content-center">
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
          <div className="row m-0 p-0 d-flex justify-content-lg-between justify-content-center">
          <Link to='../Signup'className='findjobbtn col-8 col-lg-6 m-0 px-3 py-2'>Register</Link>
          <Link to='../Login' className='findjobbtn m-0 px-3 col-8 mt-2 mt-lg-0 col-lg-5 py-2'>Login</Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}

export default Header
