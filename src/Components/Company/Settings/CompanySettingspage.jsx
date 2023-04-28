import React,{useState} from 'react'
import './Settingspage.css'
import {BsEyeFill} from 'react-icons/bs'
import {BsPeopleFill} from 'react-icons/bs'
import {MdWorkOutline,MdPostAdd} from 'react-icons/md'
import {FaUserPlus} from 'react-icons/fa'
import {BiMessageDetail} from 'react-icons/bi'
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

import CompanyNavbar from '../Navbar/CompanyNavbar'
function CompanySettingspage() {
    const [CurrentPassword, setCurrentPassword] = useState(false)
	const [NewPassword, setNewPassword] = useState(false)
	const [ConfirmPassword, setConfirmPassword] = useState(false)
	return (
		<div>
			<div className="row m-0 p-0">
			<div className="d-none d-md-block col-md-3 col-lg-2 p-0">
        <div className="sidebar" >
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
				<div className="col-lg-9 col-md-8 col-12">
					<CompanyNavbar />
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

export default CompanySettingspage
