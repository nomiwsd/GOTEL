import React from 'react'
import JobSeekerNavbar from '../Navbar/JobSeekerNavbar'
import {ImUser} from 'react-icons/im'
import {SiCoursera} from 'react-icons/si'
import {BiMessageDetail} from 'react-icons/bi'
import {BsBookmarkCheckFill} from 'react-icons/bs'
import {AiOutlineSearch,AiOutlineFileSearch} from 'react-icons/ai'
import {MdOutlineDocumentScanner} from 'react-icons/md'
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom"
import { TfiWrite } from 'react-icons/tfi';
import img1 from '../../../Images/React js.jpg'
function Usercoursespage() {
    return (
        <div>
            <div className='Messagesection row d-flex m-0 p-0'>
            <div className=" d-none d-md-block sidebar col-md-3 col-lg-2 ">
      <div className="sidebar  p-0" >
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">GOTEL</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/JobSeeker" style={{ textDecoration: "none" }}>
            <li>
              <ImUser className="icon fs-4" />
              <span>User Profile</span>
            </li>
          </Link>
          <Link to='/UserFindJob'style={{ textDecoration: "none" }}>
            <li>
              <AiOutlineFileSearch className="icon fs-4" />
              <span>Find Jobs</span>
            </li>
          </Link>
          <Link to='/AppliedJobs' style={{ textDecoration: "none" }}>
          <li>
            <BsBookmarkCheckFill className="icon fs-4" />
            <span>Jobs Applied</span>
          </li></Link>
          {/* <Link to='/UserResume' style={{ textDecoration: "none" }}>
          <li>
            <MdOutlineDocumentScanner className="icon fs-4" />
            <span>Create Your Resume</span>
          </li></Link> */}
           <Link to='/Testpage' style={{ textDecoration: "none" }}><li>
                <TfiWrite className="icon fs-4" />
                <span>Conduct Test</span>
              </li></Link>
          <Link to='/Usercoursespage' style={{ textDecoration: "none" }}>
          <li>
            <SiCoursera className="icon fs-4" />
            <span>Applied Courses</span>
          </li></Link>
        
          <Link to='/JobSeekerMessage'style={{ textDecoration: "none" }}>   <li>
            <BiMessageDetail className="icon fs-4" />
            <span>Messages</span>
          </li>
          </Link>
          <Link to='/JobSeekerSettingspage'style={{ textDecoration: "none" }}> <li>
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
                <div className=" col-12 col-md-9 col-lg-10 h-100 p-0 m-0"><JobSeekerNavbar />
                <div class="row m-0 p-0 gy-4">
                    <div className='col-12'>
                        <div className="coursesearchbar col-4">
                          <input type="text" name='searchbar' />
                          <AiOutlineSearch className='fs-3'/>  
                        </div>
                    </div>
            <div class="col-md-4 col-12">
          <div class="card col-12 p-0 m-0" style={{padding:'22px'}}>
                 <img class="card-img"  src={img1} alt=""/>
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
                    </div>
            </div>

        </div>
    )
}

export default Usercoursespage

