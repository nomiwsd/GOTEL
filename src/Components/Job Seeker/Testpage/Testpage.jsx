import React from 'react'
import Navbar from '../Navbar/JobSeekerNavbar'

import { SiCoursera } from 'react-icons/si'
import { BiMessageDetail } from 'react-icons/bi'
import { TfiWrite } from 'react-icons/tfi'
import {ImUser} from 'react-icons/im'
import {BsBookmarkCheckFill} from 'react-icons/bs'
import {AiOutlineFileSearch} from 'react-icons/ai'
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
import JobSeekerNavbar from '../Navbar/JobSeekerNavbar';
function Testpage() {    
    const [sel,setsel] = useState('')
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
        
        console.log(score)
        updateDoc(doc(firestore,`users/${user.uid}`),{
            testQuestions:null,
            testScore:score
        }).then(()=>{
            console.log('testCompleted')
        })
    }
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
          {/* <Link to='/UserResume' style={{ textDecoration: "none" }}>
          <li>
            <MdOutlineDocumentScanner className="icon fs-4" />
            <span>Create Your Resume</span>
          </li></Link> */}
          <Link to='/Testpage' style={{ textDecoration: "none" }}><li>
                <TfiWrite className="icon fs-4" />
                <span>Conduct Test</span>
              </li></Link>
          <Link to='/Usercoursespage' style={{ textDecoration: "none" }}>
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
          <Link style={{ textDecoration: "none" }}> <li>
            <ExitToAppIcon className="icon fs-4" />
            <span>Logout</span>
          </li></Link>
        </ul>
      </div>
      </div>
      </div>
                <div className="col-lg-10">
                    <JobSeekerNavbar />
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
                                                    <label class={`radio ${sel == 'a' ? ' bg-green-500 text-white' : ' text-red-600 bg-transparent'}`} onClick={()=>{
                                                        setsel('a')
                                                        selectedOptions[currentMcqs] = 'a'}}> <input type="radio" name="brazil" value="brazil"/> <span>{testQuestions.get(Array.from(testQuestions.keys())[currentMcqs]).option1}</span>
                                                    </label>
                                                </div><div class="ans ml-2">
                                                    <label class={`radio ${sel == 'b' ? ' bg-green-500 text-white' : ' text-red-600 bg-transparent'}`} onClick={()=>{
                                                        setsel('b')
                                                        selectedOptions[currentMcqs] = 'b'}}> <input type="radio" name="Germany" value="Germany"/> <span>{testQuestions.get(Array.from(testQuestions.keys())[currentMcqs]).option2}</span>
                                                    </label>
                                                </div><div class="ans ml-2">
                                                    <label class={`radio ${sel == 'c' ? ' bg-green-500 text-white' : ' text-red-600 bg-transparent'}`} onClick={()=>{
                                                        setsel('c')
                                                        selectedOptions[currentMcqs] = 'c'}}> <input type="radio" name="Indonesia" value="Indonesia"/> <span>{testQuestions.get(Array.from(testQuestions.keys())[currentMcqs]).option3}</span>
                                                    </label>
                                                </div><div class={`ans ml-2`}>
                                                    <label class={`radio ${sel == 'd' ? ' bg-green-500 text-white' : ' text-red-600 bg-transparent'}`} onClick={()=>{
                                                        setsel('d')
                                                        selectedOptions[currentMcqs] = 'd'}}> <input type="radio" name="Russia" value="Russia"/> <span>{testQuestions.get(Array.from(testQuestions.keys())[currentMcqs]).option4}</span>
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

