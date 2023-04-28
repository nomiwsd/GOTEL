import React,{useState} from 'react'
import './Settingspage.css'
import {BsEyeFill} from 'react-icons/bs'

import JobSeekerNavbar from '../Navbar/JobSeekerNavbar'
import {ImUser} from 'react-icons/im'
import {SiCoursera} from 'react-icons/si'
import {BiMessageDetail} from 'react-icons/bi'
import {BsBookmarkCheckFill} from 'react-icons/bs'
import {AiOutlineFileSearch} from 'react-icons/ai'
import {MdOutlineDocumentScanner} from 'react-icons/md'
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

function JobSeekerSettingspage() {
	const [CurrentPassword, setCurrentPassword] = useState(false)
	const [NewPassword, setNewPassword] = useState(false)
	const [ConfirmPassword, setConfirmPassword] = useState(false)
	return (
		<div>
			<div className="row m-0 p-0">
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
          <Link to='/Login'style={{ textDecoration: "none" }}> <li>
            <ExitToAppIcon className="icon fs-4" />
            <span>Logout</span>
          </li></Link>
        </ul>
      </div>
      </div>
      </div>
				<div className="col-lg-10">
					<JobSeekerNavbar />
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

export default JobSeekerSettingspage
