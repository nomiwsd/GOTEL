import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Settingspage.css'
import { BsEyeFill } from 'react-icons/bs'
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import {IoIosPeople} from 'react-icons/io'
import {SiCoursera} from 'react-icons/si'
import {BiMessageDetail} from 'react-icons/bi'
import {TfiWrite} from 'react-icons/tfi'
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";


function Settingspage() {
	const [CurrentPassword, setCurrentPassword] = useState(false)
	const [NewPassword, setNewPassword] = useState(false)
	const [ConfirmPassword, setConfirmPassword] = useState(false)
	return (
		<div>
			<div className="row m-0 p-0">
				<div className="col-lg-2 sidebar p-0 d-none d-md-block">
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
          <Link to='/Message'style={{ textDecoration: "none" }}>   <li>
            <BiMessageDetail className="icon fs-4" />
            <span>Messages</span>
          </li>
          </Link>
          <Link to='/Settingspage'style={{ textDecoration: "none" }}> <li>
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
				<div className="col-lg-10">
					<Navbar />
					<div className="col-lg-8">
						<form class="block-from form-password form-change-password form-dashboard">
							<h6 className='basicheading'>Change password</h6>
							<div class="row ">
								<div class="formgroup col-md-12 position-relative d-flex flex-column">
									<label for="oldpass">Current password</label>
									<input class="form-control" type="password" id="oldpass" name="oldpass" placeholder="Enter current password" value={CurrentPassword} onChange={(e) => {
										setCurrentPassword(e.target.value);
									}} />
									<BsEyeFill className='civi-toggle-password' />
								</div>
								<div class="formgroup col-md-12 position-relative d-flex flex-column my-3">
									<label for="newpass">New password</label>
									<input class="form-control" type="password" id="newpass" name="nnewpass" placeholder="Enter new password" value={NewPassword} onChange={(e) => {
										setNewPassword(e.target.value);
									}} />
									<BsEyeFill className='civi-toggle-password' />
								</div>
								<div class="formgroup col-md-12 position-relative d-flex flex-column my-2">
									<label for="confirmpass">Confirm new password</label>
									<input class="form-control" type="password" id="confirmpass" name="confirmpass" placeholder="Enter confirm password" value={ConfirmPassword} onChange={(e) => {
										setConfirmPassword(e.target.value);
									}} />
									<BsEyeFill className='civi-toggle-password' />
								</div>
							</div>
							<div class="message"></div>
							<button class="civi-button btn-add-to-message my-3 col-lg-3 col-8" data-text="This is a &quot;Demo&quot; account, so you can not change it">
								Save changes				</button>
						</form>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Settingspage
