import React,{useState} from 'react'
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from './TabSelector';
import './Signup.css'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link} from 'react-router-dom';
import { Email } from '@material-ui/icons';
import { HalfMalf } 
from 'react-spinner-animated';

import {  createUserWithEmailAndPassword } from 'firebase/auth';
import { auth,firestore } from '../../firebase';
import { setDoc,doc } from "@firebase/firestore"
 
// import Signupimg from '../Assets/Signupimg.jpg'
function Signup() {
    const [accountCreated,setAccountCreated] = useState(false)
    const [loading,setLoading] = useState(false)
    const [selectedTab, setSelectedTab] = useTabs([
        "Company",
        "JobSeeker"
    ]);
    const [CompanyName, setCompanyName] = useState('')
    const [UserName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMSg,setErrorMsg] = useState('')
 
    const writeUserDetails = async (user) => {
        if(selectedTab == 'Company'){
            await setDoc(doc(firestore, "users",user.uid), {
                Name:CompanyName,
                email:email,
                ph:'',
                userType:selectedTab,
                date:Date().now
             })
            .then((e)=>{
                setAccountCreated(true)
                setLoading(false)
                console.log('Company Created',e)
                user.sendEmailVerification()
            }
            )
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(error.message)
                console.log(errorCode, errorMessage);
            });
          }
          else{   
            await setDoc(doc(firestore, "users",user.uid), {
                Name:UserName,
                userType:selectedTab,
                date:Date().now
             })
            .then((e)=>{
                setAccountCreated(true)
                setLoading(false)
                console.log('User Created',e)
                user.sendEmailVerification()
            }
            )
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(error.message)
                console.log(errorCode, errorMessage);
            });  
          }
        
    }
    const onSubmit = async () => {
        setLoading(true)
        if(password == confirmPassword)
        {
            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                writeUserDetails(user)  
            })
            .catch((error) => {
                setLoading(false)
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(error.message)
                console.log(errorCode, errorMessage);
            });
        }
        else{
            setLoading(false)
            console.log("Passowrd Not Matched")
            setErrorMsg("Passowrd Not Matched")
        }
        
      }
    return (
        <div className='signupimg ' >
        <div className='d-flex justify-content-center align-items-center pb-5' >
            <div className="col-md-8  col-11 col-lg-6 loginbg align-items-center my-5 bg-light px-md-3 pt-2 ">
                <p className="loginhead my-3">Register</p>
                <p className='logintxt text-muted'>Enter your details to get Registered</p>
                <nav className="d-flex navtab justify-content-center px-3">
                    <TabSelector
                        isActive={selectedTab === "Company"}
                        onClick={() => setSelectedTab("Company")}
                    >
                        Company
                    </TabSelector>
                    <TabSelector
                        isActive={selectedTab === "JobSeeker"}
                        onClick={() => setSelectedTab("JobSeeker")}
                    >
                        Job Seeker
                    </TabSelector>
                </nav>
                <div className="col-12 col-lg-12 d-grid justify-content-center m-0 px-lg-0 px-2">
                    
                    <TabPanel hidden={selectedTab !== "Company"}>
                    <div className="row my-3">
                            <div className="col-md-6  col-12"> <label for="ControlInput1" className="formlabel ">Company Name</label>
                                <input type="text" className="form-control comname" id="ControlInput1" placeholder="Company Name" value={CompanyName}  onChange={(e)=> {
                                    setCompanyName(e.target.value);
                                }} />
                            </div>
                            <div className="col-md-6  col-12">
                                <label for="mControlInput2" className="formlabel">Email Address</label>
                                <input type="email" value={email} onChange={(e)=> {
                                    setEmail(e.target.value);
                                }} className="form-control" id="ControlInput2" placeholder="companyname@gmail.com" />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6  col-12"> <label for="ControlInput3" className="formlabel ">Password</label>
                                <input type="password" value={password} onChange={(e)=> {
                                    setPassword(e.target.value);
                                }}  className="form-control" id="ControlInput3" placeholder="********" />
                            </div>
                            <div className="col-md-6  col-12">
                                <label for="mControlInput4" className="formlabel">Confirm Password</label>
                                <input type="password"  className="form-control" id="ControlInput4" placeholder="********" value={confirmPassword} onChange={(e)=> {
                                    setConfirmPassword(e.target.value);
                                }}   />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center"><Link to='../Company' className=' submitbtn col-lg-6 col-6 my-3' onClick={()=>{
                            onSubmit();
                        }}>Register</Link></div>
                          <HalfMalf text={"Loading..."} bgColor={"#F0A500"} center={false} width={"100px"} height={"100px"}/>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="">
                                <p className='text-success'>Account Created Successfully</p>
                                <p className='text-danger'>Please Fill out Your Details First*</p>
                            </div>
                        </div>
                        <p className='text-center'>--------Or Signup With--------</p>

                        <div className='d-flex justify-content-center mb-3'>
                            <button className='btn  socialicon col-1  p-0 px-1 py-1'><FaFacebook className='fs-3 fbicon' /></button>
                            <button className='btn  socialicon col-1  p-0 px-1 py-1'><FcGoogle className='fs-3' /></button>
                        </div>
                        <p className='text-center'>Already have an Account?
                        <Link to='../Login'>Login</Link>
                        </p>

                    </TabPanel>
                    {/* Job Seeker Section */}
                    <TabPanel hidden={selectedTab !== "JobSeeker"}>

                    <div className="row my-3">
                            <div className="col-md-6  col-12"> <label for="ControlInput1" className="formlabel ">User Name</label>
                                <input type="text" className="form-control comname" id="ControlInput1" placeholder="User Name" value={UserName} onChange={(e)=> {
                                    setUserName(e.target.value);
                                }}   />
                            </div>
                            <div className="col-md-6  col-12"> <label for="ControlInput3" className="formlabel ">Email</label>
                                <input type="email" className="form-control" id="ControlInput44" placeholder="name@mail.com" value={email} onChange={(e)=> {
                                    setEmail(e.target.value);
                                }}  />
                            </div>
                        </div>
                        
                        <div className="row ">
                            <div className="col-md-6  col-12"> <label for="ControlInput3" className="formlabel ">Password</label>
                                <input type="password" className="form-control" id="ControlInput3" placeholder="********" value={password} onChange={(e)=> {
                                    setPassword(e.target.value);
                                }}  />
                            </div>
                            <div className="col-md-6  col-12">
                                <label for="mControlInput4" className="formlabel">Confirm Password</label>
                                <input type="password" className="form-control" id="ControlInput4" placeholder="********" value={confirmPassword} onChange={(e)=> {
                                    setConfirmPassword(e.target.value);
                                }}  />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center"><Link to='../JobSeeker' className='submitbtn col-lg-6 col-6 my-3' onClick={()=>{onSubmit()}}>Register</Link></div>
                        <HalfMalf text={"Loading..."} bgColor={"#F0A500"} center={false} width={"100px"} height={"100px"}/>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="">
                                <p className='text-success'>Account Created Successfully</p>
                                <p className='text-danger'>Please Fill out Your Details First*</p>
                            </div>
                        </div>
                        <p className='text-center'>--------Or Signup With--------</p>

                        <div className='d-flex justify-content-center mb-3'>
                            <button className='btn col-1 socialicon  p-0 px-1 py-1'><FaFacebook className='fs-3 fbicon' /></button>
                            <button className='btn  socialicon col-1  p-0 px-1 py-1'><FcGoogle className='fs-3' /></button>
                        </div>
                        <p className='text-center'>Already have an Account?
                        <Link to='../Login'>Login</Link>
                        </p>
                    </TabPanel>
                </div>


            </div>
            

        </div>
        </div>
    )
}

export default Signup
