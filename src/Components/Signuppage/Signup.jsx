import React from 'react'
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from './TabSelector';
import './Signup.css'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom';
// import Signupimg from '../Assets/Signupimg.jpg'
function Signup() {
    const [selectedTab, setSelectedTab] = useTabs([
        "Admin",
        "Company",
        "JobSeeker"
    ]);

    // style={{backgroundImage: `url(${Signupimg} )`,  backgroundRepeat: 'no-repeat',backgroundSize:'contain'}}
    return (
        <div className='signupimg ' >
        <div className='d-flex justify-content-center align-items-center pb-5' >
            <div className="col-md-8  col-10 col-lg-6 loginbg align-items-center my-5 bg-light px-md-3 pt-2 px-2">
                <p className="loginhead my-3">Register</p>
                <p className='logintxt text-muted'>Enter your details to get Registered</p>
                <nav className="d-flex navtab justify-content-center px-3">
                    <TabSelector
                        isActive={selectedTab === "Admin"}
                        onClick={() => setSelectedTab("Admin")}
                    >
                        Admin
                    </TabSelector>
                    <TabSelector
                        isActive={selectedTab === "Company"}
                        onClick={() => setSelectedTab("Company")}
                    >
                        Company
                    </TabSelector>
                    <TabSelector
                        isActive={selectedTab === "JobSeeker"}
                        onClick={() => setSelectedTab("JobSeeker")}
                    >
                        Job Seeker
                    </TabSelector>

                </nav>
                <div className="col-12 col-lg-12 d-grid justify-content-center m-0 px-4 px-lg-0">
                    <TabPanel hidden={selectedTab !== "Admin"}>
                        <div className="row my-3">
                            <div className="col-md-6  col-12"> <label for="ControlInput1" className="formlabel ">Full Name</label>
                                <input type="text" className="form-control" id="ControlInput1" placeholder="FullName" />
                            </div>
                            <div className="col-md-6  col-12">
                                <label for="mControlInput2" className="formlabel">Email Address</label>
                                <input type="email" className="form-control" id="ControlInput2" placeholder="Email" />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6  col-12"> <label for="ControlInput3" className="formlabel ">Password</label>
                                <input type="password" className="form-control" id="ControlInput3" placeholder="********" />
                            </div>
                            <div className="col-md-6  col-12">
                                <label for="mControlInput4" className="formlabel">Confirm Password</label>
                                <input type="password" className="form-control" id="ControlInput4" placeholder="********" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center"><Link to='../Admin' className='btn civibtn col-lg-6 col-6 my-3'>Register</Link></div>
                       
                        <p className='text-center'>--------Or Signup With--------</p>

                        <div className='d-flex justify-content-center mb-3'>
                            <button className='btn col-1 socialicon  p-0 px-1 py-1'><FaFacebook className='fs-3 fbicon' /></button>
                            <button className='btn  col-1 socialicon p-0 px-1 py-1'><FcGoogle className='fs-3 p-0' /></button>
                        </div>
                        <p className='text-center'>Already have an Account?
                        <Link to='../Login'>Login</Link>
                        </p>

                    </TabPanel>
                    <TabPanel hidden={selectedTab !== "Company"}>
                    <div className="row my-3">
                            <div className="col-md-6  col-12"> <label for="ControlInput1" className="formlabel ">Company Name</label>
                                <input type="text" className="form-control" id="ControlInput1" placeholder="FullName" />
                            </div>
                            <div className="col-md-6  col-12">
                                <label for="mControlInput2" className="formlabel">Email Address</label>
                                <input type="email" className="form-control" id="ControlInput2" placeholder="Email" />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6  col-12"> <label for="ControlInput3" className="formlabel ">Password</label>
                                <input type="password" className="form-control" id="ControlInput3" placeholder="********" />
                            </div>
                            <div className="col-md-6  col-12">
                                <label for="mControlInput4" className="formlabel">Confirm Password</label>
                                <input type="password" className="form-control" id="ControlInput4" placeholder="********" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center"><Link to='../Admin' className='btn civibtn col-lg-6 col-6 my-3'>Register</Link></div>
                        <p className='text-center'>--------Or Signup With--------</p>

                        <div className='d-flex justify-content-center mb-3'>
                            <button className='btn  socialicon col-1  p-0 px-1 py-1'><FaFacebook className='fs-3 fbicon' /></button>
                            <button className='btn  socialicon col-1  p-0 px-1 py-1'><FcGoogle className='fs-3' /></button>
                        </div>
                        <p className='text-center'>Already have an Account?
                        <Link to='../Login'>Login</Link>
                        </p>

                    </TabPanel>
                    {/* Job Seeker Section */}
                    <TabPanel hidden={selectedTab !== "JobSeeker"}>

                    <div className="row my-3">
                            <div className="col-md-6  col-12"> <label for="ControlInput1" className="formlabel ">First Name</label>
                                <input type="text" className="form-control" id="ControlInput1" placeholder="First Name" />
                            </div>
                            <div className="col-md-6  col-12">
                                <label for="ControlInput2" className="formlabel">Last Name</label>
                                <input type="text" className="form-control" id="ControlInput2" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6  col-12"> <label for="ControlInput3" className="formlabel ">Email</label>
                                <input type="email" className="form-control" id="ControlInput3" placeholder="name@mail.com" />
                            </div>
                            <div className="col-md-6  col-12">
                                <label for="mControlInput4" className="formlabel">CNIC No</label>
                                <input type="number" className="form-control" id="ControlInput4" placeholder="12345-3456789-8" />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6  col-12"> <label for="ControlInput3" className="formlabel ">Password</label>
                                <input type="password" className="form-control" id="ControlInput3" placeholder="********" />
                            </div>
                            <div className="col-md-6  col-12">
                                <label for="mControlInput4" className="formlabel">Confirm Password</label>
                                <input type="password" className="form-control" id="ControlInput4" placeholder="********" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center"><Link to='../Usernavbar' className='btn civibtn col-lg-6 col-6 my-3'>Register</Link></div>
                        <p className='text-center'>--------Or Signup With--------</p>

                        <div className='d-flex justify-content-center mb-3'>
                            <button className='btn col-1 socialicon  p-0 px-1 py-1'><FaFacebook className='fs-3 fbicon' /></button>
                            <button className='btn  socialicon col-1  p-0 px-1 py-1'><FcGoogle className='fs-3' /></button>
                        </div>
                        <p className='text-center'>Already have an Account?
                        <Link to='../Login'>Login</Link>
                        </p>

                    </TabPanel>
                </div>


            </div>
            

        </div>
        </div>
    )
}

export default Signup
