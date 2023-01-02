import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import './Jobseeker.css'
function Jobseeker() {
    return (
        <div>
            <Navbar className='Usernavbar px-5 m-0' collapseOnSelect expand="lg" variant="dark">
                <Nav.Link className='fs-4' href="#home">Gotel</Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='d-flex justify-content-center'>
                    <Nav className="">
                        <Nav.Link className='userlinks' href="#About us">Find Job</Nav.Link>
                        <Nav.Link className='userlinks' href="#features">Messages</Nav.Link>
                        <Nav.Link className='userlinks' href="#partners">CV Maker</Nav.Link>
                        <Nav.Link className='userlinks' href="#Contactus">Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className='d-flex justify-content-end'>
                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle"  style={{width: "50px"}}
                alt="Avatar" />
                    <div class="dropdown me-3 pt-2">
                        <button class="btn  dropdownbtn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            User Name
                        </button>
                        <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                            <li><a class="dropdown-item active" href="#Company">Log Out</a></li>
                        </ul>
                    </div>
                </Nav>
            </Navbar>

        </div>
    )
}

export default Jobseeker
