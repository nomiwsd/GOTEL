import React, { useState, useEffect } from 'react'
import CompanyNavbar from '../Navbar/CompanyNavbar'
import { FiExternalLink } from 'react-icons/fi'
import { BsChevronRight } from 'react-icons/bs'
import { AiOutlineDownload, AiOutlineMessage } from 'react-icons/ai'
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Select from 'react-select';
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { BsPeopleFill } from 'react-icons/bs'
import { MdWorkOutline, MdPostAdd } from 'react-icons/md'
import { FaUserPlus } from 'react-icons/fa'
import { BiMessageDetail } from 'react-icons/bi'
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";


import { firestore, storage } from '../../../firebase';
import { ref, getDownloadURL, uploadBytes } from "firebase/storage"
import { setDoc, doc as Doc, getDocs, docR, getDoc, collection, deleteDoc,updateDoc } from "@firebase/firestore";


import './AppliedCandidate.css'
const JobCategoryOptions = [
    { value: 'BackEND Developer', label: 'BackEnd Developer' },
    { value: 'Software Engineer', label: 'Software Engineer' },
    { value: 'Content Writer', label: 'Content Writer' },
    { value: 'Product Manager', label: 'Product Manager' },
];


function AppliedCandidate() {
    const [Jobs, setJobs] = useState([])
    useEffect(() => {
        var company = localStorage.getItem('user')
        company = JSON.parse(company)
        setUser(company)
        fetchApplicantsDetails(company.uid)
    }, [])
    var [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const [published, setPublished] = useState(false)
    const fetchApplicantsDetails = async (uid) => {
        setJobs([])
        await getDocs(collection(firestore, `jobs`))
            .then((allJobs) => {
                allJobs.docs
                    .map(async (job) => {
                        if (job.data().by === uid) {
                            await getDocs(collection(firestore, `jobs/${job.id}/Applications`))
                                .then(async (applicants) => {
                                    applicants.docs.map(async (applicant) => {
                                        await getDoc(Doc(firestore, `users/${applicant.id}`))
                                            .then(async (profile) => {
                                                var UserImg = await getDownloadURL(ref(storage, `images/${profile.id}/profile`))
                                                setJobs((Jobs) => [...Jobs, { applicantid:applicant.id,id: job.id, img: UserImg, status: applicant.data(), job: job.data(), profile: profile.data() }])
                                                console.log('UserFetched')
                                            })
                                    })
                                })
                        }
                    });
            })
            .catch((e) => {
                console.log(e)
            })
    }
    const RejectJob = async (jobId,userid, index) => {
        Jobs[index].status.status = 'Rejected'
                setJobs((Jobs)=>[...Jobs])
        await updateDoc(Doc(firestore, `jobs/${jobId}/Applications/${userid}`),{
            status:'Rejected'
        })
        .then(async (e) => {
                
                console.log('Rejected')
            }
            )
        .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    const ApprovedJob = async (jobId,userid, index) => {
        Jobs[index].status.status = 'Approved'
                setJobs((Jobs)=>[...Jobs])
        await updateDoc(Doc(firestore, `jobs/${jobId}/Applications/${userid}`),{
            status:'Approved'
        })
        .then(async (e) => {
                console.log('Approved')
            }
            )
        .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    const [selectedOption, setSelectedOption] = useState(null);
    const [val, setVal] = useState("");
    const onChange = (value) => {
        console.log(value);
        setVal(value);
    };
    return (
        <div>
            <div className="home d-flex w-100 position-relative">
                <div className="d-none d-md-block col-md-3 col-lg-2 ">
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
                <div className="col-12 col-md-9 col-lg-10 h-100"><CompanyNavbar />
                    <div className="bg-color px-3 py-2">
                        <div class="entry-title d-flex my-2">
                            <h4>Manage Jobs</h4>
                        </div>
                        <div className="row d-flex m-0 p-0">
                            <div className="col-4">
                                <Select
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    options={JobCategoryOptions}
                                    classNames='categoryselect'
                                /></div>
                            <div className=" searchdiv d-none d-md-flex col-3 border-1 rounded-1 p-0">

                                <input type="text" placeholder="Find By Job" className='px-2 w-100 searchinput' />
                                <SearchOutlinedIcon className='fs-3 mt-2 searchicon' />
                            </div>

                        </div>
                        <div className="table my-5">
                            <div class="table-dashboard-wapper mx-2">
                                <table class="table-dashboard" id="my-jobs">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Status</th>
                                            <th>Information</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Jobs.map(({ applicantid,id, img, job, profile, status }, index) => {
                                                return (
                                                    <tr>
                                                        <td class="info-user">
                                                            <div class="image-applicants"><img class="image-candidates" src={img} alt="" /></div>
                                                            <div class="info-details mx-1">
                                                                <h3><a href="https://civi.uxper.co/candidates/designer/candidate/">{profile.Name}</a></h3>
                                                                <div class="applied d-flex">Applied:                                        <a href="https://civi.uxper.co/applicants/sr-backend-go-developer-5/">
                                                                    <div className="d-flex mt-1">   <span>{job.jobTitle}</span>
                                                                        <FiExternalLink className='fs-5 text-dark' />
                                                                    </div></a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="status">
                                                            <div class="approved">
                                                                <span class="label label-close">{status.status}</span>                                <span class="applied-time">Applied:{status.data}</span>
                                                            </div>
                                                        </td>
                                                        <td class="info">
                                                            <span class="gmail">{profile.email}</span>
                                                            <span class="phone">{profile.ph}</span>
                                                        </td>
                                                        <td class="applicants-control action-setting">
                                                            <div class="list-action d-flex ">
                                                                <a href="https://civi.uxper.co/wp-content/uploads/2022/12/Cv-Candidate.pdf" class="action icon-video btn-reschedule-meetings mx-2" data-id="7761" data-title="Video"> <AiOutlineDownload className='fs-4 text-dark' /> </a>
                                                                <a href="https://civi.uxper.co/wp-content/uploads/2022/12/Cv-Candidate.pdf" class="action icon-video btn-reschedule-meetings" data-id="7761" data-title="Video"> <AiOutlineMessage className='fs-4 text-dark' /> </a>
                                                                <div class="actiondiv mx-2">
                                                                    <div class="btn-group dropend">
                                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <HiOutlineDotsHorizontal />
                                                                        </button>
                                                                        <ul class="dropdown-menu dropdownmenu">
                                                                            <li><a class="dropdown-item" href="#sf" onClick={()=>{
                                                                                ApprovedJob(id,applicantid,index)
                                                                            }}>Approved</a></li>
                                                                            <li><a class="dropdown-item" href="#sf" onClick={()=>{
                                                                                RejectJob(id,applicantid,index)
                                                                            }}>Rejected</a></li>

                                                                        </ul>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }

                                        {/* <tr>
                                            <td class="info-user">
                                                <div class="image-applicants"><img class="image-candidates" src="https://civi.uxper.co/wp-content/uploads/2022/12/633e0700e8fb630be246f1f9_Untitled-3-p-500.png" alt="" /></div>
                                                <div class="info-details mx-1">
                                                    <h3><a href="https://civi.uxper.co/candidates/designer/candidate/">Candidate</a></h3>
                                                    <div class="applied d-flex">Applied:                                        <a href="https://civi.uxper.co/applicants/sr-backend-go-developer-5/">
                                                        <div className="d-flex mt-1">   <span> Sr. Backend Go Developer</span>
                                                            <FiExternalLink className='fs-5 text-dark' />
                                                        </div></a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="status">
                                                <div class="approved">
                                                    <span class="label label-close">Rejected</span>                                <span class="applied-time">Applied:2023-03-06</span>
                                                </div>
                                            </td>
                                            <td class="info">
                                                <span class="gmail">candidate@demo.com</span>
                                                <span class="phone">123456789</span>
                                            </td>
                                            <td class="applicants-control action-setting">
                                                <div class="list-action d-flex ">
                                                    <a href="https://civi.uxper.co/wp-content/uploads/2022/12/Cv-Candidate.pdf" class="action icon-video btn-reschedule-meetings mx-2" data-id="7761" data-title="Video"> <AiOutlineDownload className='fs-4 text-dark' /> </a>
                                                    <a href="https://civi.uxper.co/wp-content/uploads/2022/12/Cv-Candidate.pdf" class="action icon-video btn-reschedule-meetings" data-id="7761" data-title="Video"> <AiOutlineMessage className='fs-4 text-dark' /> </a>
                                                    <div class="actiondiv mx-2">
                                                        <div class="btn-group dropend">
                                                            <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <HiOutlineDotsHorizontal />
                                                            </button>
                                                            <ul class="dropdown-menu dropdownmenu">
                                                                <li><a class="dropdown-item" href="#sf">Approved</a></li>
                                                                <li><a class="dropdown-item" href="#sf">Rejected</a></li>

                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </td>
                                        </tr>                                         */}
                                    </tbody>
                                </table>
                                <div class="pagination-dashboard">

                                    <div class="civi-pagination dashboard" data-type="number">
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

                                            <a class="page-numbers" href="https://civi.uxper.co/dashboard/employers/applicants/page/2/">2</a>

                                            <a class="next page-numbers" href="https://civi.uxper.co/dashboard/employers/applicants/page/2/"><BsChevronRight /></a>

                                        </div>


                                        <input type="hidden" name="paged" value="1" />
                                        <input type="hidden" name="current_term" value="" />
                                        <input type="hidden" name="type_term" value="" />
                                    </div>        </div>
                                <div class="civi-loading-effect"><span class="civi-dual-ring"></span></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AppliedCandidate
