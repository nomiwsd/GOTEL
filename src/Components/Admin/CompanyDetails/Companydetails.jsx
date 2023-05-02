import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import './Companydetails.css'
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

import { ref, getDownloadURL, uploadBytes } from "firebase/storage"
import { firestore, storage } from '../../../firebase';
import { setDoc, updateDoc, doc, getDoc, getDocs, collection, onSnapshot } from "@firebase/firestore";
import { useEffect } from 'react';


function Companydetails() {
    const [SearchBar, setSearchBar] = useState(false)
    const [jobCount, setJob] = useState(new Map([]))
    const [jobseekers, setJobseekers] = useState([])
    const [company, setCompany] = useState([])
    useEffect(() => {
        fetchAllJobs()
    }, [])
    const fetchAllJobs = async () => {
        var jobs = new Map([])
        await getDocs(collection(firestore, 'jobs'))
            .then((j) => {
                j.docs.map(async (job, index) => {
                    if (jobs.has(job.data().by)) {
                        jobs.set(job.data().by, jobs.get(job.data().by) + 1)
                    }
                    else {
                        jobs.set(job.data().by, 1)
                    }
                })
                fetchAllData(jobs)
            })
    }
    const fetchAllData = (jobs) => {
        setCompany([])
        onSnapshot(collection(firestore, 'users'), (users) => {
            users.docs.map(async (user, index) => {
                if (user.data().userType == 'Company') {

                    const profileImage = await getDownloadURL(ref(storage, `images/${user.id}/profile`))
                    if (jobs.has(user.id)) {
                        setCompany((company) => [...company, { img: profileImage, companyName: user.data().Name, Status: 'Approved', categorie: user.data().categories, jobs: jobs.get(user.id) }])
                    }
                    else {
                        setCompany((company) => [...company, { img: profileImage, companyName: user.data().Name, Status: 'Approved', categorie: user.data().categories, jobs: 0 }])
                    }
                }
                else {
                    setJobseekers((jobseekers) => [...jobseekers, user])
                }
            })
        })
    }
    return (
        <div className='companysection row d-flex m-0 p-0'>
            <div className=" d-none d-md-block col-md-3 col-lg-2  m-0 p-0">
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
                <div id="main" class="site-main" role="main">
                    <div class="entry-my-page company-dashboard my-5">
                        <div class="entry-title d-flex justify-content-between my-2">
                            <h4>Companies</h4>
                            <div className="search d-none d-md-block border-1 rounded-4 p-1">
                                <input type="text" placeholder="Search..." value={SearchBar} onChange={(e) => {
                                    setSearchBar(e.target.value);
                                }} />
                                <SearchOutlinedIcon />
                            </div>
                        </div>
                        <div class="table-dashboard-wapper">
                            <table class="table-dashboard companytable" id="my-company">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        
                                        <th>Category</th>
                                        <th>Active Jobs</th>
                                        <th>Registered Date</th>
                                        </tr>
                                </thead>
                                <tbody>
                                    {
                                        company != null ?
                                            company.map((C, I) => {
                                                return (
                                                    <tr>
                                                        <td class="info-user">
                                                            <Link >
                                                                <img src={C.img} className=' rounded-full object-cover mr-5' alt={C.companyName} />
                                                            </Link>
                                                            <div class="info-details">
                                                                <h4 className='companyname text-center m-0'><a href="">{C.companyName}</a></h4>
                                                                <p>
                                                                    <span>{C.categorie}</span>
                                                                </p>
                                                            </div>
                                                        </td>
                                                        
                                                        <td>
                                                            <span class="cate">
                                                                <span>{C.categorie}</span>
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span class="active-jobs">{C.jobs }</span>
                                                        </td>
                                                        <td>04-10-2023</td>
                                                        <td class="action-setting company-control">
                                                            <div class="btn-group dropend">
                                                                <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <HiOutlineDotsHorizontal />
                                                                </button>
                                                                <ul class="dropdown-menu dropdownmenu">
                                                                    <li><a class="dropdown-item" href="#sf">Edit</a></li>
                                                                    <li><a class="dropdown-item" href="#sf">Delete</a></li>

                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                            : <></>
                                    }
                                </tbody>
                            </table>
                            <div class="civi-loading-effect"><span class="civi-dual-ring"></span></div>
                        </div>
                    
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Companydetails
