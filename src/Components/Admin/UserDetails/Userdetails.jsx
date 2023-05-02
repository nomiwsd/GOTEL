import React from 'react'
import Navbar from '../Navbar/Navbar'
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
import './Userdetails.css'

import { ref, getDownloadURL, uploadBytes } from "firebase/storage"
import { firestore, storage } from '../../../firebase';
import { setDoc, updateDoc, doc, getDoc, collection, onSnapshot } from "@firebase/firestore";
import { useEffect } from 'react';
import { useState } from 'react';
import Mcqs from '../../../Data/testQuestions.json'

function Userdetails() {
  const [jobseekers, setJobseekers] = useState([])
  const [company, setCompany] = useState([])
  useEffect(() => {
    fetchAllData()
  }, [])

  const fetchAllData = () => {
    setJobseekers([])
    onSnapshot(collection(firestore, 'users'), (users) => {
      users.docs.map((user, index) => {
        if (user.data().userType == 'Company') {
          setCompany((company) => [...company, { id: index, companyName: user.data().Name, Status: 'Approved', URL: user.data().websiteUrl, RegisteredDate: new Date(user.data().date).toDateString() }])
        }
        else {
          setJobseekers((jobseekers) => [...jobseekers,user])
        }
      })
    })
  }
  const takeTest = async (uid)=>{
      var selectedMcqs = new Map([])
      var McqsKeys = []
      for (let x = 0; x < 20; x++) {
        var y = (Math.random()*100).toFixed()
        while(selectedMcqs.has(y)){
          y = (Math.random()*100).toFixed()
        }
        selectedMcqs.set(y,Mcqs[y]) 
        McqsKeys.push(y)
      }
      console.log(McqsKeys)

      await updateDoc(doc(firestore,`users/${uid}`),{
        testQuestions: McqsKeys,
        testscore:'Pending'
      }).then(()=>{
        fetchAllData()
      })
  }
  return (
    <div>
      <div className='Usersection row d-flex m-0 p-0'>
        <div className=" d-none d-md-block col-md-3 col-lg-2 sidebar m-0 p-0">
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
                <Link to='/Courses' style={{ textDecoration: "none" }}>
                  <li>
                    <SiCoursera className="icon fs-4" />
                    <span>Upload Courses</span>
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
        <div className="col-12 col-md-9 col-lg-10 h-100"><Navbar />
          <div className='usertable my-5'>
            <h5>User Details</h5>
            <table className='userdetailtable'>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Active Status</th>
                <th>Test Status</th>
                <th>Test Type</th>
                <th>Action</th>
              </tr>
              {
                jobseekers.length > 0 ?
                  jobseekers.map((jobseeker) => {
                    return (
                      <tr>
                        <td>{jobseeker.data().Name}</td>
                        <td>{jobseeker.data().email}</td>
                        <td>{jobseeker.data().gender}</td>
                        <td>Online</td>
                        <td>{jobseeker.data().testScore}</td>
                        <td><select>
                          <option value="">Select an option</option>
                          <option value="option1">React JS</option>
                          <option value="option2">Graphic Designer</option>
                          <option value="option3">Data Entry Operator</option>
                        </select></td>
                        <td>
                          <button className='testbtn' onClick={()=>{
                            takeTest(jobseeker.id)
                          }}>Take Test</button>
                        </td>
                      </tr>
                    )
                  }) :
                  <></>

              }
            </table>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Userdetails



