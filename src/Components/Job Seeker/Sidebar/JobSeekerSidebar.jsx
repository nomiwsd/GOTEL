import React from 'react'
import "./Sidebar.css";
import {ImUser} from 'react-icons/im'
import {SiCoursera} from 'react-icons/si'
import {BiMessageDetail} from 'react-icons/bi'
import {BsBookmarkCheckFill} from 'react-icons/bs'
import {AiOutlineFileSearch} from 'react-icons/ai'
import {MdOutlineDocumentScanner} from 'react-icons/md'
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

function JobSeekerSidebar( ) {
    return (
    <div>
        <div className="sidebar col-lg-2 p-0" >
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
  )
}

export default JobSeekerSidebar
