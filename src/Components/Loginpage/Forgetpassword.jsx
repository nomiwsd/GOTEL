import React ,{ useState } from 'react'
import './Login.css'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { HalfMalf } from 'react-spinner-animated';

import { signInWithEmailAndPassword,sendPasswordResetEmail } from 'firebase/auth';
import { auth, firestore, storage } from "../../firebase";

function Forgetpassword() {

    const [msg,setMsg] = useState('')
    const [email, setEmail] = useState('')

    const sendEmail= ()=>{
        sendPasswordResetEmail(auth,email).then(()=>{
            setMsg('Email Sent Successfully')
        }).catch(()=>{
            setMsg('Email Not Found')
        })
    }

  return (
    <div>
       <div className='row m-0 p-0 forgetpage d-flex justify-content-center align-items-center '>
            <div className='col-md-5 col-10 px-3  my-2 loginbg'>
                <p className="loginhead pt-3">Login</p>
                <p className='logintxt text-muted'>Login with the Data you entered during your Registration</p>

                <label for="ControlInput1" className="formlabel ">Email Address</label>
                <input type="email" className="form-control" id="ControlInput1" placeholder="name@example.com" value={email} onChange={(e) => {
                    setEmail(e.target.value);
                }} />
             <div className="d-flex justify-content-center"><button  className='submitbtn  my-3 col-4' onClick={()=>{sendEmail()}}>Confirm</button></div>
                <HalfMalf text={"Loading..."} bgColor={"#F0A500"} center={false} width={"100px"} height={"100px"} />
                 <div className="d-flex justify-content-center align-items-center">
                    <div className="">
                        <p className='text-success'>{msg}</p>
                        <p className='text-danger'>Please Fill out Your Details First*</p>
                    </div>
                </div>
   
            </div>
        </div>
    </div>
  )
}

export default Forgetpassword
