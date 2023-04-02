import React from 'react'
import logo from '../../Assets/GOTEL.png'
import {Link} from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { IoIosPeople } from 'react-icons/io'
import { SiCoursera } from 'react-icons/si'
import { BiMessageDetail } from 'react-icons/bi'
import { TfiWrite } from 'react-icons/tfi'
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
function Courses() {
   
  return (
    <div>
       <div className='jobpostsection row d-flex m-0 p-0'>
                <div className="sidebar d-none d-md-block col-md-3 col-lg-2  m-0 p-0">
                    <div className="sidebar  p-0" >
                        <div className="top">
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <span className="logo">GOTEL</span>
                            </Link>
                        </div>
                        <hr />
                        <div className="center">
                            <ul>
                                <p className="title">MAIN</p>
                                <Link to='/Admin' className='routerlinks'> <li>
                                    <DashboardIcon className="icon fs-4" />
                                    <span className='d-none d-md-block'>Dashboard</span>
                                </li></Link>
                                <p className="title">LISTS</p>
                                <Link to="/Companydetails" style={{ textDecoration: "none" }}>
                                    <li>
                                        <IoIosPeople className="icon fs-4" />
                                        <span>Companies Details</span>
                                    </li>
                                </Link>
                                <Link to="/Userdetails" style={{ textDecoration: "none" }}>
                                    <li>
                                        <PersonOutlineIcon className="icon fs-4" />
                                        <span>Users Details</span>
                                    </li>
                                </Link>
                                <Link to='/Managejobs' style={{ textDecoration: "none" }}>
                                    <li>
                                        <WorkOutlineOutlinedIcon className="icon fs-4" />
                                        <span>Manage Jobs</span>
                                    </li></Link>
                                <Link style={{ textDecoration: "none" }}>
                                    <li>
                                        <SiCoursera className="icon fs-4" />
                                        <span>Upload Courses</span>
                                    </li></Link>
                                <Link style={{ textDecoration: "none" }}><li>
                                    <TfiWrite className="icon fs-4" />
                                    <span>Conduct Test</span>
                                </li></Link>
                                <Link to='/Message' style={{ textDecoration: "none" }}>   <li>
                                    <BiMessageDetail className="icon fs-4" />
                                    <span>Messages</span>
                                </li>
                                </Link>
                                <Link to='/Settingspage' style={{ textDecoration: "none" }}> <li>
                                    <SettingsApplicationsIcon className="icon fs-4" />
                                    <span>Settings</span>
                                </li></Link>
                                <Link style={{ textDecoration: "none" }}> <li>
                                    <ExitToAppIcon className="icon fs-4" />
                                    <span>Logout</span>
                                </li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" col-12 col-md-9 col-lg-10 h-100 p-0 m-0"><Navbar />
                <div className="bg-color px-3 py-2">
                        <div class="entry-title d-flex justify-content-between my-2">
                            <h4>Manage Courses</h4>
                            <button className='addnewbtn'>Add New</button>
                        </div>
                        <div class="row m-0 p-0 gy-4">
            <div class="col-md-4 col-12">
          <div class="card col-12 p-0 m-0" style={{padding:'22px'}}>
                 <img class="card-img" style={{padding: '22px'}} src="./Images/FoundPet(1).png" alt=""/>
                 <div class="card-body m-0">
                  <h3 class="card-title">React Crash Course</h3>
                  <p class="card-text">Cursus malesuada maecenas magna et eget. Lobortis tellus aliquet posuere amet dignissim nulla ultrices. Aliquam commodo ultricies aliquam sit egestas justo pulvinar lacus.</p>
                  <h3 class="card-Subtitle">Level : Beginner</h3>
                  <p class="lostcard-Subtext ">Estimated Time: </p>
                  <div class="d-flex justify-content-end seeDetails">
                      <a href="#fd">Course Link</a>
                    </div>
                  </div>
                  <div class="secondcarddiv"></div>
              </div>
            </div>
          
           
          
        </div>
        <div className=" m-0 p-0 col-6">
           <h4>Course All Details</h4>
                <img src={logo} alt="" className="col-8" />
            <div className="col-6">
                <h6>Course Heading:</h6>
                <input type="text" />
            </div>
            <div className="col-6">
                <h6>Course Details:</h6>
                <textarea name="coursedetails" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="col-6">
                <h6>Course level:</h6>
           <input type="text" />
            </div>
            <div className="col-6">
                <h6>Time to Complete</h6>
           <input type="text" />
            </div>
            <div className="col-6">
                <h6>Click The Link Below:</h6>
          <a href="youtube.com"> React Link</a>
            </div>
        </div>
        
                    </div>
                </div>
            </div>
    </div>
  )
}


export default Courses
