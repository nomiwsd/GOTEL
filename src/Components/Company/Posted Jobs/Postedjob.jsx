import React, { useEffect, useState } from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { BsPeopleFill } from 'react-icons/bs'
import { MdWorkOutline, MdPostAdd } from 'react-icons/md'
import { FaUserPlus } from 'react-icons/fa'
import { BiMessageDetail } from 'react-icons/bi'
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import CompanyNavbar from '../Navbar/CompanyNavbar';
import { BsChevronRight } from 'react-icons/bs'
import { firestore } from '../../../firebase';
import { collection, getDocs,deleteDoc,doc as Doc } from "@firebase/firestore"

function Postedjob() {
    const [Jobs, setJobs] = useState([])
    const [search, setSearch] = useState('')
    const [selected, setSelected] = useState('Pending')
    
    var [user, setUser] = useState({})
    useEffect(() => {
        var company = localStorage.getItem('user')
        company = JSON.parse(company)
        setUser(company)
        fetchJobDetails(company.uid)
    }, [])

    const fetchJobDetails = async (uid) => {
        setJobs([])
        await getDocs(collection(firestore, 'jobs'))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map(async (doc) => {
                        if(doc.data().by == uid){
                            var alp = 0
                            await getDocs(collection(firestore, `jobs/${doc.id}/Applications`))
                                .then(async (applicants) => {
                                    alp = applicants.docs.length
                                })
                            const newDocData = {
                                id: doc.id,
                                title: doc.data().jobTitle,
                                type: doc.data().type,
                                applicants: alp,
                                posted: doc.data().posted,
                                status: doc.data().status,
                            }
                            setJobs((Jobs) => [...Jobs, newDocData])
                        }
                    });
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const deletejob = async (jobid)=>{
        await deleteDoc(Doc(firestore,`jobs/${jobid}`))
        .then(()=>{
            console.log('Job Delted')
            fetchJobDetails(user.uid)
        })
    }
    return (
        <div>
            <div className='jobpostsection row d-flex m-0 p-0'>
                <div className="d-none d-md-block col-md-3 col-lg-2 p-0">
                    <div className="sidebar" >
                        <div className="top">
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <span className="logo">GOTEL</span>
                            </Link>
                        </div>
                        <hr />
                        <div className="center">
                            <ul>
                                <Link to="/Company" style={{ textDecoration: "none" }}>
                                    <li>
                                        <BsPeopleFill className="icon fs-4" />
                                        <span>Company Profile</span>
                                    </li>
                                </Link>
                                <Link to="/Jobpost" style={{ textDecoration: "none" }}>
                                    <li>
                                        <MdWorkOutline className="icon fs-4" />
                                        <span>Post a Job</span>
                                    </li>
                                </Link>
                                <Link to='/PostedJob' style={{ textDecoration: "none" }}>
                                    <li>
                                        <MdPostAdd className="icon fs-4" />
                                        <span>Posted Jobs</span>
                                    </li></Link>
                                <Link to='/AppliedCandidate' style={{ textDecoration: "none" }}>
                                    <li>
                                        <FaUserPlus className="icon fs-4" />
                                        <span>Applied Candidates</span>
                                    </li></Link>
                                <Link to='/CompanyMessage' style={{ textDecoration: "none" }}>   <li>
                                    <BiMessageDetail className="icon fs-4" />
                                    <span>Messages</span>
                                </li>
                                </Link>
                                <Link to='/CompanySettingspage' style={{ textDecoration: "none" }}> <li>
                                    <SettingsApplicationsIcon className="icon fs-4" />
                                    <span>Settings</span>
                                </li></Link>
                                <Link to='/Login' style={{ textDecoration: "none" }}> <li>
                                    <ExitToAppIcon className="icon fs-4" />
                                    <span>Logout</span>
                                </li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-9 col-lg-10 h-100 p-0 m-0"><CompanyNavbar />
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
                                            if (job.title.includes(search)) {
                                                return (
                                            <tr>
                                                <td>
                                                    <h6 class="title-jobs-dashboard">
                                                        {job.title}
                                                    </h6>
                                                    <p>
                                                        {job.type}                                                                                                                                / Full Time                                                                                                                   </p>
                                                </td>
                                                <td>
                                                    <div class="number-applicant">
                                                        <p class="number me-1">{job.applicants}</p>
                                                        <p>  Application</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p class="label label-pending">{job.status}</p>
                                                </td>
                                                <td>
                                                    <p class="start-time">{job.posted}</p>
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
                                        else if(job.status == selected) {
                                            if (job.title.includes(search)) {
                                                return (
                                                    <tr>
                                                        <td>
                                                            <h6 class="title-jobs-dashboard">
                                                                {job.title}
                                                            </h6>
                                                            <p>
                                                                {job.type}                                                                                                                                / Full Time                                                                                                                   </p>
                                                        </td>
                                                        <td>
                                                            <div class="number-applicant">
                                                                <p class="number me-1">{job.applicants}</p>
                                                                <p>  Application</p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p class="label label-pending">{job.status}</p>
                                                        </td>
                                                        <td>
                                                            <p class="start-time">{job.posted}</p>
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
                                                                    <li><a class="dropdown-item" onClick={()=>{deletejob(job.id)}}>Delete</a></li>
            
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

export default Postedjob
