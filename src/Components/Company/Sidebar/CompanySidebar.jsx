import React from 'react'
import "./CompanySidebar.css";
import {BsPeopleFill} from 'react-icons/bs'
import {MdWorkOutline,MdPostAdd} from 'react-icons/md'
import {FaUserPlus} from 'react-icons/fa'
import {BiMessageDetail} from 'react-icons/bi'
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

function CompanySidebar( ) {
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
          <Link to="/Company" style={{ textDecoration: "none" }}>
            <li>
              <BsPeopleFill className="icon fs-4" />
              <span>Company Profile</span>
            </li>
          </Link>
          <Link to="/Jobpost" style={{ textDecoration: "none" }}>
            <li>
              <MdWorkOutline className="icon fs-4" />
              <span>Post a Job</span>
            </li>
          </Link>
          <Link to='/PostedJob' style={{ textDecoration: "none" }}>
          <li>
            <MdPostAdd className="icon fs-4" />
            <span>Posted Jobs</span>
          </li></Link>
          <Link  to='/AppliedCandidate'style={{ textDecoration: "none" }}>
          <li>
            <FaUserPlus className="icon fs-4" />
            <span>Applied Candidates</span>
          </li></Link>
          <Link to='/CompanyMessage'style={{ textDecoration: "none" }}>   <li>
            <BiMessageDetail className="icon fs-4" />
            <span>Messages</span>
          </li>
          </Link>
          <Link to='/CompanySettingspage'style={{ textDecoration: "none" }}> <li>
            <SettingsApplicationsIcon className="icon fs-4" />
            <span>Settings</span>
          </li></Link>
          <Link to='/Login'style={{ textDecoration: "none" }}> <li>
            <ExitToAppIcon className="icon fs-4" />
            <span>Logout</span>
          </li></Link>
        </ul>
      </div>
      </div>
    
    </div>
  )
}

export default CompanySidebar
