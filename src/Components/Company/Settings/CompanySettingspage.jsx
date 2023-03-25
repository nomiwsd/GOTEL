import React,{useState} from 'react'
import './Settingspage.css'
import {BsEyeFill} from 'react-icons/bs'
import CompanySidebar from '../Sidebar/CompanySidebar'
import CompanyNavbar from '../Navbar/CompanyNavbar'
function CompanySettingspage() {
    const [CurrentPassword, setCurrentPassword] = useState(false)
	const [NewPassword, setNewPassword] = useState(false)
	const [ConfirmPassword, setConfirmPassword] = useState(false)
	return (
		<div>
			<div className="row m-0 p-0">
				<div className="col-lg-2 p-0 d-none d-md-block">
					<CompanySidebar />
				</div>
				<div className="col-lg-10">
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
