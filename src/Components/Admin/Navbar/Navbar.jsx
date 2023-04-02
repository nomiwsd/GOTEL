import React from 'react'
import "./Navbar.css";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { IoIosPeople } from 'react-icons/io'
import { SiCoursera } from 'react-icons/si'
import { BiMessageDetail } from 'react-icons/bi'
import { TfiWrite } from 'react-icons/tfi'
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import Companydetails from '../CompanyDetails/Companydetails';
import Userdetails from '../UserDetails/Userdetails';
import Managejobs from '../ManageJobs/Managejobs';
import Message from '../MessagesPage/Message';
import Settingspage from '../Settings/Settingspage';

function Navbar() {
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
                      <li>
                      <Link to='/Admin' className='routerlinks'> 
                        <DashboardIcon className="icon fs-4" />
                        <span >Dashboard</span>
                        </Link> </li>
                   
                      <Link to={Companydetails} style={{ textDecoration: "none" }}>
                        <li>
                          <IoIosPeople className="icon fs-4" />
                          <span>Companies Details</span>
                        </li>
                      </Link>
                      <Link to={Userdetails} style={{ textDecoration: "none" }}>
                        <li>
                          <PersonOutlineIcon className="icon fs-4" />
                          <span>Users Details</span>
                        </li>
                      </Link>
                      <Link to={Managejobs} style={{ textDecoration: "none" }}>
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
                      <Link to={Message} style={{ textDecoration: "none" }}>   <li>
                        <BiMessageDetail className="icon fs-4" />
                        <span>Messages</span>
                      </li>
                      </Link>
                      <Link to={Settingspage} style={{ textDecoration: "none" }}> <li>
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
          <p className='topheading m-0 p-0 me-2'>Admin</p>
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

export default Navbar
