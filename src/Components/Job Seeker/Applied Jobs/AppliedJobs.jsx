import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import JobSeekerNavbar from '../Navbar/JobSeekerNavbar';
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { BsChevronRight } from 'react-icons/bs'
import './AppliedJobs.css'
import { ImUser } from 'react-icons/im'
import { SiCoursera } from 'react-icons/si'
import { BiMessageDetail } from 'react-icons/bi'
import { BsBookmarkCheckFill } from 'react-icons/bs'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { MdOutlineDocumentScanner } from 'react-icons/md'
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { TfiWrite } from 'react-icons/tfi';
import { firestore,storage } from '../../../firebase';
import { ref,getDownloadURL,uploadBytes } from "firebase/storage"
import { setDoc, doc as Doc, getDocs, docR, getDoc, collection, deleteDoc } from "@firebase/firestore";

import { Link } from "react-router-dom";

function AppliedJobs() {
    
    const [Jobs, setJobs] = useState([])
    const [wish, setWish] = useState([])
    useEffect(() => {
        var company = localStorage.getItem('user')
        company = JSON.parse(company)
        setUser(company)
        fetchJobDetails(company.uid)
        fetchLikedJobDetails(company.uid)
    }, [])
    var [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const [published, setPublished] = useState(false)

    const fetchJobDetails = async (uid) => {
        setJobs([])
        await getDocs(collection(firestore, `users/${uid}/JobsApplied`))
            .then((appliedJobs) => {
                const newData = appliedJobs.docs
                    .map(async (doc) => {
                        await getDoc(Doc(firestore, `jobs/${doc.id}`))
                            .then(async (job) => {
                                await getDoc(Doc(firestore, `jobs/${doc.id}/Applications/${uid}`))
                                    .then(async (jobStatus) => {
                                        var CompanyImg = await getDownloadURL(ref(storage, `images/${job.data().by}/profile`))
                                        setJobs((Jobs) => [...Jobs, { id: doc.id, img: CompanyImg, status: jobStatus.data(), job: job.data() }])
                                        console.log('JobsFetched')
                                    })
                            })
                    });
            })
            .catch((e) => {
                console.log(e)
            })
    }
    const fetchLikedJobDetails = async (uid) => {
        setWish([])
        await getDocs(collection(firestore, `users/${uid}/WishList`))
            .then((appliedJobs) => {
                const newData = appliedJobs.docs
                    .map(async (doc) => {
                        await getDoc(Doc(firestore, `jobs/${doc.id}`))
                            .then(async (job) => {
                                await getDoc(Doc(firestore, `jobs/${doc.id}/Applications/${uid}`))
                                    .then(async (jobStatus) => {
                                        var CompanyImg = await getDownloadURL(ref(storage, `images/${job.data().by}/profile`))
                                        setWish((wish) => [...wish, { id: doc.id, img: CompanyImg, status: jobStatus.data(), job: job.data() }])
                                        console.log({ id: doc.id, img: CompanyImg, status: jobStatus.data(), job: job.data() })
                                    })
                            })
                    });
            })
            .catch((e) => {
                console.log(e)
            })
    }
    function getCurrentDate(separator = '-') {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
    }
    const deleteJob = async (jobId, index) => {
        await deleteDoc(Doc(firestore, `jobs/${jobId}/Applications/${user.uid}`))
            .then(async (e) => {
                await deleteDoc(Doc(firestore, `users/${user.uid}/JobsApplied/${jobId}`))
                    .then((e) => {
                        console.log('Deleted Job ' + jobId, e)
                        fetchJobDetails(user.uid)
                    }
                    )
            }
            )
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    return (
        <div>
            <div className="home d-flex w-100 position-relative">
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
                                <Link to='/UserFindJob' style={{ textDecoration: "none" }}>
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

                                <Link to='/JobSeekerMessage' style={{ textDecoration: "none" }}>   <li>
                                    <BiMessageDetail className="icon fs-4" />
                                    <span>Messages</span>
                                </li>
                                </Link>
                                <Link to='/JobSeekerSettingspage' style={{ textDecoration: "none" }}> <li>
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
                <div className="col-12 col-md-9 col-lg-10 h-100"><JobSeekerNavbar />
                    <div className="row m-0 p-0 mb-5">
                        <div class="entry-title">
                            <h4>My Jobs Applied</h4>
                        </div>
                        <div className="col-lg-12">
                            <div className="col-lg-4">
                                <nav>
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button class="nav-link active" id="nav-Applied-tab" data-bs-toggle="tab" data-bs-target="#nav-Applied" type="button" role="tab" aria-controls="nav-Applied" aria-selected="true">Applied</button>
                                        <button class="nav-link" id="nav-Wishlist-tab" data-bs-toggle="tab" data-bs-target="#nav-Wishlist" type="button" role="tab" aria-controls="nav-Wishlist" aria-selected="false">Wishlist</button>
                                    </div>
                                </nav>
                            </div>
                            <div className=" searchdiv d-none d-md-flex col-4 border-1 rounded-1 p-0 my-2">
                                <input type="text" placeholder="Find By Job" className='px-2 w-100 searchinput' />
                                <SearchOutlinedIcon className='fs-3 mt-2 searchicon' />
                            </div>

                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-Applied" role="tabpanel" aria-labelledby="nav-Applied-tab">
                                    <Table className='postedjobtable table-dashboard ' responsive>
                                        <thead>
                                            <tr>
                                                <th>Job Title</th>
                                                <th>Status</th>
                                                <th>Date Applied</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            {
                                                Jobs.map(({ id, job, status, img }, index) => {
                                                    return(
                                                        <tr>
                                                        <td>
                                                            <div class="company-header">
                                                                <div class="img-comnpany">
                                                                    <img class="logo-comnpany" src={img} alt="" />
                                                                </div>
                                                                <div class="info-jobs">
                                                                    <h3 class="title-jobs-dashboard">
                                                                        <a href="https://civi.uxper.co/jobs/design-creative/ux-ui-designer/">
                                                                            {job.jobTitle}                                        </a>
                                                                    </h3>
                                                                    <p>
                                                                      {`${job.jobCategorie}/${job.jobApplyType}/${job.jobCareerLevel}/${job.jobType}`}                                                                                                                                   / Remote                                                                                                                                    / California                                                                                </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        {
                                                            status.status === "pending" ?                                                            
                                                            <td class="status">
                                                                <span class="label label-pending">Pending</span>                        
                                                            </td> :
                                                            <td class="status">
                                                                <span class="label label-close">{status.status}</span>                        
                                                            </td>
                                                        }
                                                        <td class="table-time">
                                                            <span class="start-time">{status.data}</span>
                                                        </td>
                                                        <td class="action-setting jobs-control" style={{ zIndex: '2' }}>
                                                            <div class="btn-group dropend">
                                                                <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <HiOutlineDotsHorizontal />
                                                                </button>
                                                                <ul class="dropdown-menu dropdownmenu" onClick={()=>{
                                                                    deleteJob(id,index)
                                                                }}>
                                                                    <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                               <div class="tab-pane fade show " id="nav-Wishlist" role="tabpanel" aria-labelledby="nav-Wishlist-tab">
                                    <Table className='postedjobtable table-dashboard mt-5' responsive>
                                    <thead>
                                            <tr>
                                                <th>Job Title</th>
                                                <th>Date Poted</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            {
                                                wish.map(({ id, job, status, img }, index) => {
                                                    return(
                                                        <tr>
                                                        <td>
                                                            <div class="company-header">
                                                                <div class="img-comnpany">
                                                                    <img class="logo-comnpany" src={img} alt="" />
                                                                </div>
                                                                <div class="info-jobs">
                                                                    <h3 class="title-jobs-dashboard">
                                                                        <a href="https://civi.uxper.co/jobs/design-creative/ux-ui-designer/">
                                                                            {job.jobTitle}                                        </a>
                                                                    </h3>
                                                                    <p>
                                                                      {`${job.jobCategorie}/${job.jobApplyType}/${job.jobCareerLevel}/${job.jobType}`}                                                                                                                                   / Remote                                                                                                                                    / California                                                                                </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="table-time">
                                                            <span class="start-time">{status.data}</span>
                                                        </td>
                                                        <td class="action-setting jobs-control" style={{ zIndex: '2' }}>
                                                            <div class="btn-group dropend">
                                                                <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <HiOutlineDotsHorizontal />
                                                                </button>
                                                                <ul class="dropdown-menu dropdownmenu" onClick={()=>{
                                                                    deleteJob(id,index)
                                                                }}>
                                                                    <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>

                                </div> 
                                </div>
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

                                    <Link class="page-numbers">2</Link>

                                    <Link to=''class="next page-numbers"><BsChevronRight /></Link>

                                </div>


                                <input type="hidden" name="paged" value="1" />
                                <input type="hidden" name="current_term" value="" />
                                <input type="hidden" name="type_term" value="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppliedJobs
