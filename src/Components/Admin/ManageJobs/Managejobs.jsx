import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import './Managejobs.css'
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
import { BsChevronRight } from 'react-icons/bs'
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';

import { ref, getDownloadURL, uploadBytes } from "firebase/storage"
import { firestore, storage } from '../../../firebase';
import { setDoc, updateDoc, doc, getDoc, collection, onSnapshot } from "@firebase/firestore";

function Managejobs() {
    const [Jobs, setJobs] = useState([])
    const [search, setSearch] = useState('')
    const [selected, setSelected] = useState('Pending')

    useEffect(() => {
        fetchAllData()
    }, [])

    const fetchAllData = () => {
        setJobs([])
        onSnapshot(collection(firestore, 'jobs'), (users) => {
            users.docs.map(async (user, index) => {
                setJobs((Jobs) => [...Jobs, user])
            })
        })
    }
    return (
        <div>
            <div className='jobpostsection row d-flex m-0 p-0'>
                <div className="sidebar d-none d-md-block col-md-3 col-lg-2  m-0 p-0">
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
                                <Link to='/Testpage' style={{ textDecoration: "none" }}><li>
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
                <div className=" col-12 col-md-9 col-lg-10 h-100 p-0 m-0"><Navbar />
                    <div className="bg-color px-3 py-2">
                        <div class="entry-title d-flex my-2">
                            <h4>Manage Jobs</h4>
                        </div>
                        <div className="row d-flex m-0 p-0 ">
                            <select className="firstDropdown col-12 col-lg-3 me-2 p-lg-0" onChange={(e)=>{setSelected(e.target.value)}}>
                                <option value="All">All Jobs</option>
                                <option value="Opened">Opened</option>
                                <option value="Closed">Closed</option>
                                <option value="Pending">Pending</option>

                            </select>
                            <div className=" searchdiv d-flex col-12 col-lg-3 border-1 rounded-1 p-0 my-2 m-lg-0 ">

                                <input type="text" placeholder="Find By Job" className='px-2 w-100 searchinput' value={search} onChange={(e) => { setSearch(e.target.value) }} />
                                <SearchOutlinedIcon className='fs-3 mt-2 searchicon' />
                            </div>

                        </div>
                        <Table className='postedjobtable mt-5' responsive>
                            <thead>
                                <tr>
                                    <th>TITLE</th>
                                    <th>APPLICANTS</th>
                                    <th>STATUS</th>
                                    <th>POSTED</th>
                                    <th>EXPIRED</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Jobs.map((job, index) => {
                                        if (selected == 'All') {
                                            if (job.data().jobTitle.includes(search)) {
                                                return (
                                                    <tr>
                                                        <td>
                                                            <h6 class="title-jobs-dashboard">
                                                                {job.data().jobTitle}
                                                            </h6>
                                                            <p>
                                                                {job.data().jobType}                                                                                                                                / Full Time                                                                                                                   </p>
                                                        </td>
                                                        <td>
                                                            <div class="number-applicant">
                                                                <p class="number me-1">{job.data().applicants}</p>
                                                                <p>  Application</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p class="label label-pending">{job.data().status}</p>
                                                        </td>
                                                        <td>
                                                            <p class="start-time">{job.data().posted}</p>
                                                        </td>
                                                        <td>
                                                            <p class="expires-time">
                                                                2023-04-01                                                                            </p>
                                                        </td>
                                                        <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
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
                                            }
                                        }
                                        else if(job.data().status == selected) {
                                            if (job.data().jobTitle.includes(search)) {
                                                return (
                                                    <tr>
                                                        <td>
                                                            <h6 class="title-jobs-dashboard">
                                                                {job.data().jobTitle}
                                                            </h6>
                                                            <p>
                                                                {job.data().jobType}                                                                                                                                / Full Time                                                                                                                   </p>
                                                        </td>
                                                        <td>
                                                            <div class="number-applicant">
                                                                <p class="number me-1">{job.data().applicants}</p>
                                                                <p>  Application</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p class="label label-pending">{job.data().status}</p>
                                                        </td>
                                                        <td>
                                                            <p class="start-time">{job.data().posted}</p>
                                                        </td>
                                                        <td>
                                                            <p class="expires-time">
                                                                2023-04-01                                                                            </p>
                                                        </td>
                                                        <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
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
                                            }
                                        }
                                    })
                                }
                            </tbody>
                        </Table>
                        <div class="civi-pagination dashboard d-flex justify-content-between" data-type="number">
                            <div class="items-pagination" data-max-number="11">
                                <select class="search-control select-pagination nice-select" name="item_amount" data-value="1">
                                    <option value="10" selected="">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                </select>

                                <label class="text-pagination">
                                    <span class="num-first">1</span> - <span class="num-last">10</span> of <span class="num-total">11</span> items        </label></div>

                            <div class="pagination">


                                <span class="page-numbers current">1</span>

                                <a class="page-numbers" href="#fd">2</a>

                                <a class="next page-numbers" href="#f"><BsChevronRight /></a>

                            </div>


                            <input type="hidden" name="paged" value="1" />
                            <input type="hidden" name="current_term" value="" />
                            <input type="hidden" name="type_term" value="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Managejobs