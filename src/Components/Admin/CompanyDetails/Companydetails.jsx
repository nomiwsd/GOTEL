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
    
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState('All')
  
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

                        </div>
                        <div className="row d-flex m-4 p-0 ">
                            <select className="firstDropdown col-12 col-lg-3 me-2 p-lg-0" onChange={(e) => { setSelected(e.target.value) }}>
                            <option selected value="All">All Categories</option>
                                                    <option value="Analytics">Analytics</option>
                                                    <option value="Customer & Service">Customer Service</option>
                                                    <option value="Design & Creative">Design Creative</option>
                                                    <option value="Development & IT">Development IT</option>
                                                    <option value="Legal & Finance">Legal Finance</option>
                                                    <option value="Marketing & Sales">Marketing Sales</option>
                                                    <option value="Product & Management">Product Management</option>
                                                    <option value="Writing & Translation">Writing Translation</option>
                            </select>
                            <div className=" searchdiv d-flex col-12 col-lg-3 border-1 rounded-1 p-0 my-2 m-lg-0 ">
                                <input type="text" placeholder="Find By Company" className='px-2 w-100 searchinput' value={search} onChange={(e) => { setSearch(e.target.value) }} />
                                <SearchOutlinedIcon className='fs-3 mt-2 searchicon' />
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
                                                if(C.companyName.includes(search)){
                                                    if(selected == 'All'){
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
                                                                    <span class="active-jobs">{C.jobs}</span>
                                                                </td>
                                                                <td>04-10-2023</td>
                                                                {/* <td class="action-setting company-control">
                                                                    <div class="btn-group dropend">
                                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <HiOutlineDotsHorizontal />
                                                                        </button>
                                                                        <ul class="dropdown-menu dropdownmenu">
                                                                            <li><a class="dropdown-item" href="#sf">Edit</a></li>
                                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
        
                                                                        </ul>
                                                                    </div>
                                                                </td> */}
                                                            </tr>
                                                        )
                                                    }
                                                    else if(C.categorie == selected)
                                                    {
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
                                                                    <span class="active-jobs">{C.jobs}</span>
                                                                </td>
                                                                <td>04-10-2023</td>
                                                                {/* <td class="action-setting company-control">
                                                                    <div class="btn-group dropend">
                                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <HiOutlineDotsHorizontal />
                                                                        </button>
                                                                        <ul class="dropdown-menu dropdownmenu">
                                                                            <li><a class="dropdown-item" href="#sf">Edit</a></li>
                                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
        
                                                                        </ul>
                                                                    </div>
                                                                </td> */}
                                                            </tr>
                                                        )
                                                    }
                                                }
                                               
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
