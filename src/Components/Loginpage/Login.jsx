import React, { useState } from 'react'
import './Login.css'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { collection, getDoc, doc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage"
import { HalfMalf } from 'react-spinner-animated';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore, storage } from "../../firebase";

import { User } from '../../objects/User'

function Login() {
    const navigate = useNavigate()
    const [loogedInAsAdmin, setloogedInAsAdmin] = useState(false)
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [user, setUser] = useState(new User())
    const [signedIn, setSignedIn] = useState(false)

    const fetchUserDetails = async (userFB) => {
        console.log(userFB.uid);
        await getDoc(doc(firestore, 'users', userFB.uid))
            .then(async (querySnapshot) => {
                if (querySnapshot.exists()) {
                    await getDownloadURL(ref(storage, `images/${userFB.uid}/profile`))
                        .then((imgurl) => {

                            console.log('Signed In with profile pic')
                            const users = new User(
                                userFB.uid,
                                email,
                                imgurl,
                                querySnapshot.data().Name,
                                querySnapshot.data().userType,
                            )
                            if (users.userType == 'Company') {
                                navigate('/Company', {
                                    state: {
                                        user: users,
                                    }
                                })
                            }
                            else {
                                navigate('/JobSeeker', {
                                    state: {
                                        user: users,
                                    }
                                })
                            }
                            setUser(users)
                            localStorage.setItem('user', JSON.stringify(users));
                            setLoading(false)
                            setSignedIn(true)
                        })
                        .catch((error) => {
                            console.log('Signed In no profile pic')
                            const users = new User(
                                userFB.uid,
                                email,
                                null,
                                querySnapshot.data().Name,
                                querySnapshot.data().userType,
                            )
                            if (users.userType == 'Company') {
                                navigate('/Company', {
                                    state: {
                                        user: users,
                                    }
                                })
                            }
                            else {
                                navigate('/JobSeeker', {
                                    state: {
                                        user: users,
                                    }
                                })
                            }

                            setUser(users)
                            localStorage.setItem('user', JSON.stringify(users));
                            setLoading(false)
                            setSignedIn(true)
                            console.log(error.message)
                        })
                }
            })
            .catch((e) => {
                console.log(e)
            })

    }
    const onSubmit = async () => {
        if (email == 'nomimalik8051@gmail.com' && password == '123456') {
            console.log('Looged In as Admin')
            setloogedInAsAdmin(true)
        }
        else {
            setLoading(true)
            await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    fetchUserDetails(user);



                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    setErrorMsg(error.message)
                    setLoading(false)
                });
        }

    }

    if (loogedInAsAdmin) {
        return (
            <Navigate to={'/Admin'} />
        )
    }
    else {
        return (
            <div className=' relative row m-0 p-0 loginpage d-flex justify-content-center align-items-center '>
                <div className='col-md-5 col-10 px-3  my-2 loginbg'>
                    <p className="loginhead pt-3">Login</p>
                    <p className='logintxt text-muted'>Login with the Data you entered during your Registration</p>

                    <label for="ControlInput1" className="formlabel ">Email Address</label>
                    <input type="email" className="form-control" id="ControlInput1" placeholder="name@example.com" value={email} onChange={(e) => {
                        setEmail(e.target.value);
                    }} />

                    <label for="mControlInput2" className="formlabel">Password</label>
                    <input type="password" className="form-control" id="ControlInput2" placeholder="******" value={password} onChange={(e) => {
                        setPassword(e.target.value);
                    }} /> <div className="d-flex justify-content-center"><Link onClick={() => {
                        onSubmit()
                    }} className='submitbtn  my-3 col-4'>Login</Link></div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="">
                            <p className='text-success'>Account Created Successfully</p>
                            <p className='text-danger'>Please Fill out Your Details First*</p>
                        </div>
                    </div>
                    <Link to='../Forgetpassword'>
                        <p className='forgetpswd text-danger'>
                            Did you Forget your Password?</p>
                    </Link>
                    <p className='text-center'>--------Or Login With--------</p>

                    <div className='d-flex justify-content-center mb-3'>
                        <button className='btn  socialicon  p-0 px-2 py-1 col-1'><FaFacebook className='fs-3 fbicon' /></button>
                        <button className='btn  socialicon  p-0 px-2 py-1 col-1'><FcGoogle className='fs-3' /></button>
                    </div>
                    <div className='signup border-1 border-secondary py-3 px-4 mb-2'>
                        <p className="signuphead h5">Signup</p>
                        <p className='signuptxt text-muted'>Register your Account First!</p>
                        <Link to='../Signup' className='btn createbtn my-3 w-100'>Create Account</Link>
                    </div>

                </div>
                {
                    loading ?
                        <div className=' absolute w-full h-full left-0 top-0 bg-black bg-opacity-25 flex justify-center items-center'>
                            <HalfMalf text={"Loading..."} bgColor={"#F0A500"} center={false} width={"100px"} height={"100px"} />
                        </div> : <></>
                }
            </div>
        )
    }
}

export default Login
