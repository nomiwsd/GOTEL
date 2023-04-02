import React from 'react'
import "./Navbar.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import {ImUser} from 'react-icons/im'
import { SiCoursera } from 'react-icons/si'
import { BiMessageDetail } from 'react-icons/bi'
import {BsBookmarkCheckFill} from 'react-icons/bs'
import {AiOutlineFileSearch} from 'react-icons/ai'
import {MdOutlineDocumentScanner} from 'react-icons/md'
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
function JobSeekerNavbar() {
  return (
    <div className="navbar p-2">
      <div className="wrapper p-2">
        <div className="moduleName d-flex justfy-content-center">
          <div className="">
            <ListOutlinedIcon className="icon d-block d-md-none" data-bs-toggle="offcanvas" data-bs-target="#smalloffcanvas" aria-controls="smalloffcanvas" />

            <div class="offcanvas offcanvas-start smoffcannvas" tabindex="-1" id="smalloffcanvas" aria-labelledby="offcanvasLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasLabel">GOTEL</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <div className="sidebar smallsidebar border-0" >
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
          <Link to='/UserResume' style={{ textDecoration: "none" }}>
          <li>
            <MdOutlineDocumentScanner className="icon fs-4" />
            <span>Create Your Resume</span>
          </li></Link>
          <Link style={{ textDecoration: "none" }}>
          <li>
            <SiCoursera className="icon fs-4" />
            <span>Applied Courses</span>
          </li></Link>
          <Link to='/Jobseekerpage' style={{ textDecoration: "none" }}>
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
            </div>
          </div>
          <p className='topheading m-0 p-0 me-2'>JobSeeker</p>
        </div>
        <div className="items">

          <div className="item d-none d-md-flex">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item d-none d-md-flex">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>

          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobSeekerNavbar
