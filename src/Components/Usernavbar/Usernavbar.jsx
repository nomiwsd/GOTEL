import React,{useState} from 'react'
import { Button, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import {Link} from 'react-router-dom'
function Usernavbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

  return (
    <div>
       <Navbar className='Usernavbar px-md-3 m-0 d-none d-md-flex' collapseOnSelect expand="md" variant="dark">
                <Nav.Link className='fs-4' href="#home">Gotel</Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='d-flex justify-content-center'>
                    <Nav className="">
                        <Link className='userlinks me-2 mt-2' to="../Jobseeker">Profile</Link>
                        <Link className='userlinks me-2 mt-2' to="../Messages">Messages</Link>
                        <Nav.Link className='userlinks' href="#About us">Find Job</Nav.Link>
                        <Nav.Link className='userlinks' href="#About us">Courses</Nav.Link>
                        <Nav.Link className='userlinks' href="#About us">Settings</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className='d-flex justify-content-end d-none d-md-flex'>
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle me-2" style={{ width: "50px" }}
                        alt="Avatar" />
                    <div class="dropdown me-3 pt-2 ">
                        <button class="btn dropdownbtn dropdown-toggle " type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            User Name
                        </button>
                        <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                            <li><a class="dropdown-item active" href="#Company">Log Out</a></li>
                        </ul>
                    </div>
                </Nav>
            </Navbar>
            <div className='background px-2 py-2'>
            <Button variant="primary"  className="d-md-none w-100 me-2" onClick={toggleShow} >
                Menu
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement='start'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Gotel</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="">
                        <Nav.Link className='userlinks' href="#Contactus">Profile</Nav.Link>
                        <Nav.Link className='userlinks' href="#features">Messages</Nav.Link>
                        <Nav.Link className='userlinks' href="#About us">Find Job</Nav.Link>
                        <Nav.Link className='userlinks' href="#About us">Courses</Nav.Link>
                        <Nav.Link className='userlinks' href="#About us">Settings</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
            </div>
    </div>
  )
}

export default Usernavbar
