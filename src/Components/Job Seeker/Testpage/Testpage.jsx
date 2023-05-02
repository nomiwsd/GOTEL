import React from 'react'
import Navbar from '../Navbar/JobSeekerNavbar'
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { IoIosPeople } from 'react-icons/io'
import { SiCoursera } from 'react-icons/si'
import { BiMessageDetail } from 'react-icons/bi'
import { TfiWrite } from 'react-icons/tfi'
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import './Testpage.css'
import { firestore, storage } from '../../../firebase';
import { setDoc, updateDoc, doc, getDoc, collection, onSnapshot } from "@firebase/firestore";
import { useEffect } from 'react';
import { useState } from 'react';
import Mcqs from '../../../Data/testQuestions.json'
import { update } from 'firebase/database';
function Testpage() {    
    const [user,setUser] = useState({})
    const [testQuestions,setTestQuestions] = useState(null)
    const [currentMcqs,setCurrentMcqs] = useState(0)
    var selectedOptions = ['','','','','','','','','','','','','','','','','','','','',]
    useEffect(()=>{
         var company = localStorage.getItem('user')
        company = JSON.parse(company)
        setUser(company)
        fetchTestDetails(company.uid)
      },[])

    const fetchTestDetails = async (uid)=>{
        var testQ = new Map([])
        await getDoc(doc(firestore,`users/${uid}`))
        .then((userDetail)=>{
            const questions = userDetail.data().testQuestions
            for (let mcqs = 0; mcqs < questions.length; mcqs++) {
                testQ.set( questions[mcqs],Mcqs[questions[mcqs]])
            }
            setTestQuestions(testQ)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    const findScore = ()=>{
        var score = 0
        for (let mcqs = 0; mcqs < Array.from(testQuestions.keys()).length-1; mcqs++) {
            if(selectedOptions[mcqs] == testQuestions.get(Array.from(testQuestions.keys())[mcqs]).answer){
                score = score + 1
            }
        }
        updateDoc(doc(firestore,`users,${user.uid}`),{
            testQuestions:null,
            testScore:score
        }).then(()=>{
            console.log('testCompleted')
        })
        console.log(score)
    }
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
                                <Link to='/Courses'  style={{ textDecoration: "none" }}>
                                    <li>
                                        <SiCoursera className="icon fs-4" />
                                        <span>Upload Courses</span>
                                    </li></Link>
                                <Link  to='/Testpage' style={{ textDecoration: "none" }}><li>
                                    <TfiWrite className="icon fs-4" />
                                    <span>Conduct Test</span>
                                </li></Link>
                                <Link to='/Message' style={{ textDecoration: "none" }}>   <li>
                                    <BiMessageDetail className="icon fs-4" />
                                    <span>Messages</span>
                                </li>
                                </Link>
                                <Link to='/Settingspage' style={{ textDecoration: "none" }}> <li>
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
                    <div className="col-lg-12">
                        <form class="block-from form-password form-change-password form-dashboard">
                            <h6 className='basicheading'>Test</h6>
                        <select name="" id="" className='courseselect'>
                            <option value="" selected> Select Course Name:</option>
                            <option value="">React Js</option>
                            <option value="">Python</option>
                            <option value="">C++</option>
                            <option value="">Java</option>
                        </select>
                            <div class="container mt-5">
                                <div class="d-flex justify-content-center row">
                                    <div class="col-md-10 col-lg-10">
                                        {
                                            testQuestions != null ? 
                                            <>
                                            <div class="border">
                                            <div class="question bg-white p-3 border-bottom">
                                                <div class="d-flex flex-row justify-content-between align-items-center mcq">
                                                    <h4>MCQ Quiz</h4><span>{`${currentMcqs+1} from ${Array.from(testQuestions.keys()).length}`}</span></div>
                                            </div>
                                            <div class="question bg-white p-3 border-bottom">
                                                <div class="d-flex flex-row align-items-center question-title">
                                                    <h3 class="text-danger">Q.</h3>
                                                    <h5 class="mt-1 ml-2">{testQuestions.get(Array.from(testQuestions.keys())[currentMcqs]).question}</h5>
                                                </div><div class="ans ml-2">
                                                    <label class="radio" onClick={()=>{selectedOptions[currentMcqs] = 'a'}}> <input type="radio" name="brazil" value="brazil"/> <span>{testQuestions.get(Array.from(testQuestions.keys())[currentMcqs]).option1}</span>
                                                    </label>
                                                </div><div class="ans ml-2">
                                                    <label class="radio" onClick={()=>{selectedOptions[currentMcqs] = 'b'}}> <input type="radio" name="Germany" value="Germany"/> <span>{testQuestions.get(Array.from(testQuestions.keys())[currentMcqs]).option2}</span>
                                                    </label>
                                                </div><div class="ans ml-2">
                                                    <label class="radio" onClick={()=>{selectedOptions[currentMcqs] = 'c'}}> <input type="radio" name="Indonesia" value="Indonesia"/> <span>{testQuestions.get(Array.from(testQuestions.keys())[currentMcqs]).option3}</span>
                                                    </label>
                                                </div><div class="ans ml-2">
                                                    <label class="radio" onClick={()=>{selectedOptions[currentMcqs] = 'd'}}> <input type="radio" name="Russia" value="Russia"/> <span>{testQuestions.get(Array.from(testQuestions.keys())[currentMcqs]).option4}</span>
                                                    </label>
                                            </div>
                                            </div>
                                            {
                                                currentMcqs == (Array.from(testQuestions.keys()).length-1)? 
                                                <div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                                                <button class="btn btn-primary d-flex align-items-center btn-danger" type="button" onClick={()=>{
                                                    if(currentMcqs > 0){
                                                        setCurrentMcqs(currentMcqs - 1)
                                                    }
                                                }}>
                                                    <i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous
                                                    </button>
                                                    <button class="btn btn-primary border-success align-items-center btn-success" type="button" onClick={()=>{
                                                        findScore()
                                                    }}>Submit<i class="fa fa-angle-right ml-2"></i></button>
                                                    </div>
                                                     : 
                                                <div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                                                <button class="btn btn-primary d-flex align-items-center btn-danger" type="button" onClick={()=>{
                                                    if(currentMcqs > 0){
                                                        setCurrentMcqs(currentMcqs - 1)
                                                    }
                                                }}>
                                                    <i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;previous
                                                    </button>
                                                    <button class="btn btn-primary border-success align-items-center btn-success" type="button" onClick={()=>{
                                                        if(currentMcqs < Array.from(testQuestions.keys()).length-1){
                                                            setCurrentMcqs(currentMcqs + 1)
                                                        }
                                                    }}>Next<i class="fa fa-angle-right ml-2"></i></button>
                                                    </div>
                                            }
                                        </div>
                                            </> : 
                                            <>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testpage

