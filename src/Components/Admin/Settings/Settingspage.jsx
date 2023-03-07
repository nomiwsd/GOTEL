import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import './Settingspage.css'
import {BsEyeFill} from 'react-icons/bs'
function Settingspage() {
  return (
    <div>
        <div className="row m-0 p-0">
            <div className="col-lg-2 p-0 d-none d-md-block">
                <Sidebar/>
            </div>
            <div className="col-lg-10">
                <Navbar/>
                <div className="col-lg-8">
                <form class="block-from form-password form-change-password form-dashboard">
			<h6 className='basicheading'>Change password</h6>
			<div class="row ">
				<div class="formgroup col-md-12 position-relative d-flex flex-column">
					<label for="oldpass">Current password</label>
					<input class="form-control" type="password" id="oldpass" name="oldpass" value="" placeholder="Enter current password"/>
					<BsEyeFill className='civi-toggle-password'/>
				</div>
				<div class="formgroup col-md-12 position-relative d-flex flex-column my-3">
					<label for="newpass">New password</label>
					<input class="form-control" type="password" id="newpass" name="nnewpass" value="" placeholder="Enter new password"/>
					<BsEyeFill className='civi-toggle-password'/>
				</div>
				<div class="formgroup col-md-12 position-relative d-flex flex-column my-2">
					<label for="confirmpass">Confirm new password</label>
					<input class="form-control" type="password" id="confirmpass" name="confirmpass" value="" placeholder="Enter confirm password"/>
                    <BsEyeFill className='civi-toggle-password'/>
				</div>
			</div>
			<input type="hidden" id="civi_security_change_password" name="civi_security_change_password" value="57a14a50e9"/>
                <input type="hidden" name="_wp_http_referer" value="/dashboard/employers/settings/"/>			<div class="message"></div>
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
