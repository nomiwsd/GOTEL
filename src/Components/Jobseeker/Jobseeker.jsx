import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FaFacebookSquare, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa'
import './Jobseeker.css'
function Jobseeker() {
    const now = 60;
    return (
        <div>
            <Navbar className='Usernavbar px-lg-5 m-0' collapseOnSelect expand="lg" variant="dark">
                <Nav.Link className='fs-4' href="#home">Gotel</Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='d-flex justify-content-center'>
                    <Nav className="">
                        <Nav.Link className='userlinks' href="#Contactus">Profile</Nav.Link>
                        <Nav.Link className='userlinks' href="#features">Messages</Nav.Link>
                        <Nav.Link className='userlinks' href="#About us">Find Job</Nav.Link>
                        <Nav.Link className='userlinks' href="#About us">Courses</Nav.Link>
                        <Nav.Link className='userlinks' href="#About us">Settings</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className='d-flex justify-content-end d-none d-lg-flex'>
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

            {/* Profile Page */}
            <div className="row m-0 p-0 userpage ">
                <div className='col-md-5 col-lg-3 col-12 my-lg-4 mt-4 px-0 px-md-2'>
                    <div className="d-flex justify-content-center">
                        <div className="editprofile border-1 rounded-2 px-4 col-10 col-md-11 py-2">
                            <div className="d-flex justify-content-center">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{ width: "100px" }}
                                    alt="Avatar" />
                            </div>
                            <p className='text-center pt-2 m-0 textef'>User Name</p>
                            <p className='text-center m-0 py-1 textds text-muted'>Designation</p>
                            <div className="d-flex justify-content-center">
                                <Button className='btn createbtn my-3 w-75'>Edit Profile</Button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3">
                        <div className="col-md-11 col-10 row  border-1 rounded-2">
                            <div className="col-12 col-md-12 d-flex pt-2  px-3 justify-content-between m-0">
                                <p className='fw-bold mainhead mb-2'>Work Experience</p>
                                <a href='#edit' className='textedit m-0'>Edit</a>
                            </div>
                            <div className="col-12 d-flex justify-content-between">
                                <div className="info d-inline-flex me-3">
                                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle me-2" style={{ width: "40px" }}
                                        alt="Avatar" />
                                    <div>
                                        <p className='m-0 textcom'>BetterLogics</p>
                                        <p className='m-0 textloc text-muted'>Lahore</p>
                                    </div>
                                </div>
                                <p className='m-0 textloc text-muted text-md-center'>2+ Years</p>
                            </div>
                            <div className="col-12  d-flex justify-content-between my-2">
                                <div className="info d-inline-flex me-3">
                                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle me-2" style={{ width: "40px" }}
                                        alt="Avatar" />
                                    <div>
                                        <p className='m-0 textcom'>BetterLogics</p>
                                        <p className='m-0 textloc text-muted '>Karachi</p>
                                    </div>
                                </div>
                                <p className='m-0 textloc text-muted text-md-center'>2+ Years</p>
                            </div>
                        </div>

                    </div>

                    {/* Social Media Links */}
                    <div className="d-flex justify-content-center my-3">
                        <div className="col-10 col-md-11 col-lg-10 row  border-1 rounded-2">
                            <div className="col-12 col-md-12 d-flex pt-2  px-3 justify-content-between">
                                <p className='mainhead fw-bold mb-2'>Social Links</p>
                                <a href='#edit' className='textedit m-0'>Edit</a>
                            </div>

                            <div className="col-12 col-md-12 d-flex justify-content-between px-3">
                                <div className='d-flex m-0 p-0'> <FaFacebookSquare className='me-1 p-' style={{ color: "#3b5998" }} />
                                    <p className='m-0 textsocial '>Facebook</p></div>
                                <p className='m-0 textloc text-muted'>www.facebook.com</p>
                            </div>
                            <div className="col-12 col-md-12 d-flex justify-content-between px-3 mt-2">
                                <div className='d-flex m-0 p-0'> <FaInstagram className='me-1 p-' style={{ color: "#ac2bac" }} />      <p className='m-0 textsocial '>Instagram</p></div>
                                <p className='m-0 textloc text-muted'>www.instagram.com</p>
                            </div>
                            <div className="col-12 col-md-12 d-flex justify-content-between px-3 mt-2">
                                <div className='d-flex m-0 p-0'><FaTwitter className='me-1 p-' style={{ color: "#55acee" }} /><p className='m-0 textsocial '>Twitter</p></div>
                                <p className='m-0 textloc text-muted'>www.twitter.com</p>
                            </div>
                            <div className="col-12 col-md-12 d-flex justify-content-between px-3 my-2">
                                <div className='d-flex m-0 p-0'> <FaGithub className='me-1 p-' style={{ color: '#333333' }} /> <p className='m-0 textsocial '>Github</p></div>
                                <p className='m-0 textloc text-muted'>www.github.com</p>
                            </div>


                        </div>

                    </div>


                </div>

                {/* Personal info */}
                <div className="col-12  col-md-7 my-md-2 p-0 pe-md-3 px-4">
                    <div className="d-flex justify-content-center my-3">
                        <div className="col-12 col-md-12 row  border-1 rounded-2 m-0">
                            <div className="col-12 col-md-12 d-flex pt-2  px-3 justify-content-between m-0">
                                <p className='mainhead fw-bold mb-2'>Personal Information</p>
                                <a href='#edit' className='textedit m-0'>Edit</a>
                            </div>
                            <div className="col-12 col-md-12 d-flex justify-content-between px-3">
                                <p className='m-0 textlang fw-bold'>CNIC No</p>
                                <p className='m-0 textloc text-muted'>38303-1136704-9</p>
                            </div>
                            <div className="col-12 col-md-12 d-flex justify-content-between px-3 mt-2">
                                <p className='m-0 textlang fw-bold'>Date of Birth</p>
                                <p className='m-0 textloc text-muted'>05-04-2001</p>
                            </div>
                            <div className="col-12 col-md-12 d-flex justify-content-between mt-2 px-3">
                                <p className='m-0 textlang fw-bold'>Gender</p>
                                <p className='m-0 textloc text-muted'>Male</p>
                            </div>
                            <div className="col-12 d-flex justify-content-between my-2 px-3">
                                <p className='m-0 textlang fw-bold'>Languages</p>
                                <p className='m-0 textloc text-muted'>Urdu,English</p>
                            </div>
                        </div>

                    </div>
                    {/* Contact Info section */}
                    <div className="d-flex justify-content-center my-3">
                        <div className="col-12 col-md-12 row  border-1 rounded-2">
                            <div className="col-12  col-md-12 d-flex pt-2  px-3 justify-content-between">
                                <p className='mainhead fw-bold mb-2'>Contact Information</p>
                                <a href='#edit' className='textedit m-0'>Edit</a>
                            </div>
                            <div className="col-12  col-md-12 d-flex justify-content-between px-3">
                                <p className='m-0 textlang fw-bold'>Email</p>
                                <p className='m-0 textloc text-muted'>nomimalik8051@gmail.com</p>
                            </div>
                            <div className="col-12  col-md-12 d-flex justify-content-between mt-2 px-3">
                                <p className='m-0 textlang fw-bold'>Phone No</p>
                                <p className='m-0 textloc text-muted'>03187680511</p>
                            </div>
                            <div className="col-12  col-md-12 d-flex justify-content-between mt-2 px-3">
                                <p className='m-0 textlang fw-bold'>Nationality</p>
                                <p className='m-0 textloc text-muted'>Pakistan</p>
                            </div>
                            <div className="col-12  col-md-12 d-flex justify-content-between my-2 px-3">
                                <p className='m-0 textlang fw-bold'>Address</p>
                                <p className='m-0 textloc text-muted'>Wah Cantt,Pakistan</p>
                            </div>
                        </div>

                    </div>
                    {/* Education Section */}
                    <div className="d-flex justify-content-center my-3">
                        <div className="col-12 col-md-12  row  border-1 rounded-2">
                            <div className="col-12 col-md-12  d-flex pt-2  px-3 justify-content-between">
                                <p className='mainhead fw-bold mb-2'>Education</p>
                                <a href='#edit' className='textedit m-0'>Edit</a>
                            </div>
                            <div className="col-12 col-md-12  d-flex justify-content-between px-3">
                                <div className="info d-inline-flex me-3">
                                    <div>
                                        <p className='m-0 textcom'>University of Wah</p>
                                        <p className='m-0 textloc text-muted'>Wah Cantt,Pakistan</p>
                                    </div>
                                </div>
                                <p className='m-0 textloc text-muted'>2019-23</p>
                            </div>
                            <div className="col-12 col-md-12  d-flex justify-content-between mt-2 px-3">
                                <div className="info d-inline-flex me-3">
                                    <div>
                                        <p className='m-0 textcom'>Superior College for Boys</p>
                                        <p className='m-0 textloc text-muted'>Bhakkar,Pakistan</p>
                                    </div>
                                </div>
                                <p className='m-0 textloc text-muted'>2017-19</p>
                            </div>
                            <div className="col-12 col-md-12  d-flex justify-content-between my-2 px-3">
                                <div className="info d-inline-flex me-3">
                                    <div>
                                        <p className='m-0 textcom'>Govt High School</p>
                                        <p className='m-0 textloc text-muted'>Kundian,Pakistan</p>
                                    </div>
                                </div>
                                <p className='m-0 textloc text-muted'>2015-17</p>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="col-12 col-md-12 row m-0">
                    {/* Bio Section */}
                    <div className=" col-md-4 col-12 d-flex justify-content-center">
                        <div className="col-12 col-md-12  row  border-1 rounded-2">
                            <div className="col-12 col-md-12 d-flex pt-2  m-0 justify-content-between">
                                <p className='mainhead fw-bold mb-2 mb-md-0'>Bio</p>
                                <a href='#edit' className='textedit m-0'>Edit</a>
                            </div>

                            <div className="col-12 d-flex justify-content-between mb-2 px-3">
                                <p className='m-0 textloc text-muted text-justify'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nulla, assumenda optio nihil quod neque accusantium commodi eos. Ducimus repellat labore cum enim repellendus doloremque tenetur sapiente necessitatibus, eveniet expedita?
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className=" col-md-4 col-12 d-flex justify-content-center my-3 my-md-0">
                        <div className="col-12 col-md-12 row  border-1 rounded-2">
                            <div className="col-12 d-flex justify-content-between pt-2">
                                <p className='mainhead fw-bold mb-2'>Achievements</p>
                                <a href='#edit' className='textedit m-0'>Edit</a>
                            </div>

                            <div className="col-12 col-md-10 d-flex justify-content-between my-2">
                                    <ul  className='ps-4' style={{
                                        listStyleType: 'Square'
                                    }}>
                                        <li> Come up with a new idea that improved things.</li>
                                        <li>Developed or implemented new procedures or systems.</li>
                                        <li> Worked on special projects.</li>
                                        <li> Received awards.</li>
                                    </ul>
                                
                            </div>

                        </div>

                    </div>
                    {/* Skills Section */}
                    <div className=" col-md-4 col-12 d-flex justify-content-center mb-3 my-md-0">
                        <div className="col-12 col-md-12 row  border-1 rounded-2">
                            <div className="col-12 col-md-12 d-flex justify-content-between pt-2">
                                <p className='mainhead fw-bold mb-2 m-md-0'>Top Skills</p>
                                <a href='#edit' className='textedit m-0' >Edit</a>
                            </div>
                            <div className="col-12 d-flex px-3 mt-2 row">
                                <p className='m-0 textlang fw-bold col-2 col-md-12'>HTML</p>
                                <ProgressBar animated striped className='progressbar col-9 col-md-12 ms-4 mx-md-2 p-0' now={now} label={`${now}%`} />
                            </div>
                            <div className="col-12 d-flex px-3 row mt-2">
                                <p className='m-0 textlang fw-bold col-2 col-md-12'>CSS</p>
                                <ProgressBar animated striped className='progressbar col-9 col-md-12 ms-4 mx-md-2 p-0  ' now={now} label={`${now}%`} />
                            </div>
                            <div className="col-12 d-flex px-3 row my-2">
                                <p className='m-0 textlang fw-bold col-2 col-md-12'>Javascript</p>
                                <ProgressBar animated striped className='progressbar col-9 col-md-12 ms-4 mx-md-2 p-0' now={now} label={`${now}%`} />
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}
// const LinearProgressBar = (props) => {
//     return (React.createElement("div", { className: "mainProgressBarDiv" },
//         React.createElement("span", { className: "percentage", style: { fontSize: props.fontSize || 46 } },
//             props.percent,
//             " %"),
//         React.createElement("div", { className: "emptyProgressBar", style: { width: "100%" } },
//             React.createElement("div", { className: "fillingProgressBar", style: {
//                     left: props.percent - 100 + "%",
//                     transition: "3s"
//                 } }))));};
export default Jobseeker
