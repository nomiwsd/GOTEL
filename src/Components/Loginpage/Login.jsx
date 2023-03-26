import React,{useState} from 'react'
import './Login.css'
// import { Button } from 'bootstrap'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { collection, getDoc,doc } from "firebase/firestore";
import { ref,getDownloadURL } from "firebase/storage"

import {  signInWithEmailAndPassword   } from 'firebase/auth';
import {auth,firestore,storage} from "../../firebase";

import { User } from '../../objects/User'

function Login() {
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [errorMsg,setErrorMsg] = useState('')
    const [user,setUser] = useState(new User())
    const [signedIn,setSignedIn] = useState(false)

    const fetchUserDetails = async (userFB) => {
        await getDoc(doc(firestore,'users',userFB.uid))
            .then((querySnapshot)=>{
                if(querySnapshot.exists()){
                    getDownloadURL(ref(storage,`images/${userFB.uid}/profile`))
                        .then((imgurl)=>{
                            
                            console.log('Signed In with profile pic')
                            const users = new User(
                                userFB.uid,                                
                                email,
                                imgurl,
                                querySnapshot.data().Name,
                                querySnapshot.data().userType,
                            )
                            if(users.userType == 'Company'){
                                navigate('/Company',{
                                    state: {
                                      user: users,
                                    }
                                  })
                            }
                            else{
                                navigate('/JobSeeker',{
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
                        .catch((error)=>{
                            console.log('Signed In no profile pic')
                            const users = new User(
                                userFB.uid,                                
                                email,
                                null,
                                querySnapshot.data().Name,
                                querySnapshot.data().userType,
                            )
                            if(users.userType == 'Company'){
                                navigate('/Company',{
                                    state: {
                                      user: users,
                                    }
                                  })
                            }
                            else{
                                navigate('/JobSeeker',{
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
            .catch((e)=>{
                console.log(e)
            })

    }
    const onSubmit = async () => {
        setLoading(true)
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                fetchUserDetails(user)

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                setErrorMsg(error.message)
                setLoading(false)
            });
    }
 
    return (
        <div className='row m-0 p-0 loginpage d-flex justify-content-center align-items-center '>
            <div className='col-md-5 col-10 px-3  my-2 loginbg'>
                <p className="loginhead pt-3">Login</p>
                <p className='logintxt text-muted'>Login with the Data you entered during your Registration</p>

                <label for="ControlInput1" className="formlabel ">Email Address</label>
                <input type="email" className="form-control" id="ControlInput1" placeholder="name@example.com"  value={email} onChange={(e)=> {
                                    setEmail(e.target.value);
                                }}/>

                <label for="mControlInput2" className="formlabel">Password</label>
                <input type="password" className="form-control" id="ControlInput2" placeholder="******"  value={password} onChange={(e)=> {
                                    setPassword(e.target.value);
                                }}/> <div className="d-flex justify-content-center"><Link onClick={()=>{
                                    onSubmit()
                                }}  className='btn civibtn  my-3 col-4'>Login</Link></div>
                
                <p className='forgetpswd'>Did you Forget your Password?</p>
                <p className='text-center'>--------Or Login With--------</p>
               
                <div className='d-flex justify-content-center mb-3'>
                <button className='btn  socialicon  p-0 px-2 py-1 col-1'><FaFacebook className='fs-3 fbicon'/></button>
                <button className='btn  socialicon  p-0 px-2 py-1 col-1'><FcGoogle className='fs-3' /></button>
                </div>
                <div className='signup border-1 border-secondary py-3 px-4 mb-2'>
                <p className="signuphead h5">Signup</p>
                <p className='signuptxt text-muted'>Register your Account First!</p>
                 <Link to='../Signup' className='btn createbtn my-3 w-100'>Create Account</Link> 
                </div>
            
            </div>
        </div>
    )
}

export default Login
