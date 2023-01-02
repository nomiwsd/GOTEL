import React from 'react'
import './Login.css'
import loginimg from '../Assets/loginimgd.jpg'
// import { Button } from 'bootstrap'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <div className='row m-0 p-0'>
            <img className='col-6 p-0' src={loginimg} alt="wait for internet" />
            <div className='col-6 px-5'>
                <p className="loginhead h2">Login</p>
                <p className='logintxt text-muted'>Login with the Data you entered during your Registration</p>

                <label for="ControlInput1" className="formlabel ">Email Address</label>
                <input type="email" className="form-control" id="ControlInput1" placeholder="name@example.com" />

                <label for="mControlInput2" className="formlabel">Password</label>
                <input type="password" className="form-control" id="ControlInput2" placeholder="******" />
                <button className='btn btn-primary my-3 w-100'>Login</button>
                <p className='forgetpswd'>Did you Forget your Password?</p>
                <p className='text-center'>--------Or Login With--------</p>
               
                <div className='d-flex justify-content-center mb-3'>
                <button className='btn btn-light socialicon'><FaFacebook className='fs-3 fbicon'/></button>
                <button className='btn btn-light socialicon'><FcGoogle className='fs-3' /></button>
                </div>
                <div className='signup py-3 px-4'>
                <p className="signuphead h5">Signup</p>
                <p className='signuptxt text-muted'>Register your Account First!</p>
                 <Link to='../Signup' className='btn createbtn my-3 w-100'>Create Account</Link> 
                </div>
            
            </div>
        </div>
    )
}

export default Login
