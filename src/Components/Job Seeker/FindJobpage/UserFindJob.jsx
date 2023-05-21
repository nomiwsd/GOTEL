import React, { useEffect, useState } from 'react'
import './UserFindJob.css'
import { FiFilter } from 'react-icons/fi'
import CompanyNavbar from '../Navbar/JobSeekerNavbar'

import { Link, useNavigate } from 'react-router-dom'
import { TfiSearch } from 'react-icons/tfi'
import { TbFolder } from 'react-icons/tb'
import { SlLocationPin } from 'react-icons/sl'
import { AiOutlineHeart } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import { ImUser } from 'react-icons/im'
import { SiCoursera } from 'react-icons/si'
import { BiMessageDetail } from 'react-icons/bi'
import { BsBookmarkCheckFill, BsHeart, BsHeartFill } from 'react-icons/bs'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { MdOutlineDocumentScanner } from 'react-icons/md'
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { firestore, storage } from '../../../firebase';
import { setDoc, doc as Doc, getDocs, docR, getDoc, collection, deleteDoc } from "@firebase/firestore";
import { LinkedCameraRounded } from '@material-ui/icons'
import { ref, getDownloadURL, uploadBytes } from "firebase/storage"
import { TfiWrite } from 'react-icons/tfi';
function UserFindJob() {
    const [Jobs, setJobs] = useState([])
    useEffect(() => {
        var company = localStorage.getItem('user')
        company = JSON.parse(company)
        setUser(company)
        fetchJobDetails(company.uid)
    }, [])
    var [user, setUser] = useState({})

    const [search, setSearch] = useState('')
    const [selectedCategorie, setSelectedCategorie] = useState('All')
    const [selectedLocation, setSelectedLocation] = useState('All')

    const [loading, setLoading] = useState(false)
    const [published, setPublished] = useState(false)

    const [navigateState, setNavigateState] = useState(null)

    const navigate = useNavigate()
    const fetchJobDetails = async (uid) => {
        setJobs([])
        await getDocs(collection(firestore, 'jobs'))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map(async (doc) => {
                        await getDoc(Doc(firestore, `users/${doc.data().by}`))
                            .then(async (posterOfJob) => {
                                await getDoc(Doc(firestore, `jobs/${doc.id}/LikedBy/${uid}`))
                                    .then(async (likedDoc) => {
                                        var UserImg = await getDownloadURL(ref(storage, `images/${doc.data().by}/profile`))
                                        setJobs((Jobs) => [...Jobs, { by: posterOfJob.data().Name, img: UserImg, id: doc.id, liked: likedDoc.exists(), job: doc.data() }])
                                    })
                            })

                    });
            })
            .catch((e) => {
                console.log(e)
            })
    }
    const fetchJobs = async () => {
        setJobs([])
        await getDocs(collection(firestore, 'jobs'))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map(async (doc) => {
                        await getDoc(Doc(firestore, `users/${doc.data().by}`))
                            .then(async (posterOfJob) => {
                                var UserImg = await getDownloadURL(ref(storage, `images/${doc.data().by}/profile`))
                                setJobs((Jobs) => [...Jobs, { by: posterOfJob.data().Name, img: UserImg, id: doc.id, liked: false, job: doc.data() }])

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
    const applyForJob = async (jobId) => {
        await setDoc(Doc(firestore, `jobs/${jobId}/Applications/${user.uid}`), {
            data: getCurrentDate(),
            status: 'pending'
        })
            .then(async (e) => {
                await setDoc(Doc(firestore, `users/${user.uid}/JobsApplied/${jobId}`), {
                    data: getCurrentDate()
                })
                    .then((e) => {
                        setLoading(false)
                        setPublished(true)
                        console.log('Applyed For Job ' + jobId, e)
                    }
                    )
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage);
                    });
            }
            )
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });

    }
    const LikeJob = async (jobId, index) => {
        Jobs[index].liked = true
        setJobs((Jobs) => [...Jobs])
        await setDoc(Doc(firestore, `jobs/${jobId}/LikedBy/${user.uid}`), {
            liked: true,
        })
            .then(async (e) => {
                await setDoc(Doc(firestore, `users/${user.uid}/WishList/${jobId}`), {
                    liked: true,
                })
                    .then((e) => {
                        setLoading(false)
                        setPublished(true)
                        console.log('Liked Job ' + jobId)
                    }
                    )
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage);
                    });
            }
            )
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });

    }
    const DisLikeJob = async (jobId, index) => {
        Jobs[index].liked = false
        setJobs((Jobs) => [...Jobs])
        await deleteDoc(Doc(firestore, `jobs/${jobId}/LikedBy/${user.uid}`))
            .then(async (e) => {
                await deleteDoc(Doc(firestore, `users/${user.uid}/WishList/${jobId}`), null)
                    .then((e) => {
                        setLoading(false)
                        setPublished(true)
                        console.log('DisLiked Job ' + jobId)
                    }
                    )
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage);
                    });
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
                <div className=" h-100"><CompanyNavbar />
                    <div className="">
                        <div className="row m-0 p-0  bgfindjob">
                            <div className="d-block d-lg-none">
                                <div className="smallcontent">
                                    <div className='py-3 px-3 d-flex flex-column justify-content-center align-items-center'>
                                        <h2 className="mainheading text-white">Find your Dream Job Here</h2>
                                        <div className="row m-0 p-0 smallsearchbar py-2">
                                            <div className="col-12 d-flex formgroup p-0">
                                                <TfiSearch className='mx-3 mt-2 fs-3' />
                                                <input type="text" placeholder='Job title or keywords' value={search} onChange={(e) => { setSearch(e.target.value) }} />
                                            </div>
                                            <div className="col-12 d-flex formgroup my-2 p-0">
                                                <SlLocationPin className='mx-3 mt-2 fs-4' />
                                                <select class="selectpicker form-control" onChange={(e) => { setSelectedLocation(e.target.value) }}>
                                                    <option selected value="All">All Location</option>
                                                    <option value="Boston">Boston</option>
                                                    <option value="California">California</option>
                                                    <option value="Chicago">Chicago</option>
                                                    <option value="New York">New York</option>
                                                    <option value="Pakistan">Pakistan</option>
                                                    <option value="Seatle">Seatle</option>
                                                </select>
                                            </div>
                                            <div className="col-12 d-flex formgroup  p-0">
                                                <TbFolder className='mx-3 mt-2 fs-4' />
                                                <select class="selectpicker form-control" onChange={(e) => { setSelectedCategorie(e.target.value) }}>
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
                                            </div>
                                            <div className="col-12 d-flex justify-content-center rightgroup mt-2">
                                                <button type="reset" className='clearbtn my-1 mx-2 d-none d-lg-block'>Clear</button>
                                                <Link to='../Findjob' className='mainbtn col-md-4 col-6 py-2 px-3'>
                                                    Search
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="userfindjob d-none d-lg-block">
                                <div className='container py-3 mb-5 '>
                                    <h2 className="mainheading text-center text-white">Find your Dream Job Here</h2>
                                    <div className="row m-0 p-0 searchbar ">
                                        <div className="col-lg-3 col-md-6 formgroup searchinput my-1">
                                            <TfiSearch className='mt-2 mx-1 fs-4' />
                                            <input type="text" placeholder='Job title or keywords' value={search} onChange={(e) => { setSearch(e.target.value) }} />
                                        </div>
                                        <div className="col-lg-3 col-md-6  formgroup my-1">
                                            <SlLocationPin className='mt-1 mx-1 fs-4' />
                                            <select name="jobs-location" className="optionselect" onChange={(e) => { setSelectedLocation(e.target.value) }}>
                                                <option selected value="All">All Location</option>
                                                <option value="Boston">Boston</option>
                                                <option value="California">California</option>
                                                <option value="Chicago">Chicago</option>
                                                <option value="New York">New York</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Seatle">Seatle</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-3 col-md-6  formgroup my-1">
                                            <TbFolder className='my-1 fs-4' />
                                            <select name="jobs-categories" className="optionselect" onChange={(e) => { setSelectedCategorie(e.target.value) }}>
                                                <option value="All" selected>All Categories</option>
                                                <option value="Analytics">Analytics</option>
                                                <option value="Customer & Service">Customer Service</option>
                                                <option value="Design & Creative">Design Creative</option>
                                                <option value="Development & IT">Development IT</option>
                                                <option value="Legal & Finance">Legal Finance</option>
                                                <option value="Marketing & Sales">Marketing Sales</option>
                                                <option value="Product & Management">Product Management</option>
                                                <option value="Writing & Translation">Writing Translation</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-3 col-md-6  rightgroup my-1 ">
                                            <button type="reset" className='clearbtn my-1 mx-2'>Clear</button>
                                            <Link to='../Findjob' type='submit' className='submitbtn '>
                                                Search
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <button class="btn civibtn d-flex col-lg-1 col-3 mx-2 my-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><FiFilter className='pt-1 fs-4' />Filter</button>

                            <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Filter</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <div className="menu-filter ">
                                        <div className="filter-jobs-type ">
                                            <div className="flex-column d-flex offcanvasfilter ">
                                                <h4>Jobs Type</h4>
                                                <ul className="filter-control custom-scrollbar jobs-type">
                                                    <li><input type="checkbox" className="custom-checkbox input-control" name="jobs-type_id[]" value="68" id="civi_68" />
                                                        <label for="civi_68">Full Time</label>
                                                    </li>
                                                    <li><input type="checkbox" className="custom-checkbox input-control" name="jobs-type_id[]" value="73" id="civi_73" />
                                                        <label for="civi_73">Internship</label></li>
                                                    <li><input type="checkbox" className="custom-checkbox input-control" name="jobs-type_id[]" value="88" id="civi_88" />
                                                        <label for="civi_88">Part Time</label>
                                                    </li>
                                                    <li><input type="checkbox" className="custom-checkbox input-control" name="jobs-type_id[]" value="92" id="civi_92" />
                                                        <label for="civi_92">Remote</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="filter-jobs-career">
                                            <div class="flex-column d-flex offcanvasfilter">
                                                <h4>Jobs Career</h4>
                                                <ul class="filter-control custom-scrollbar jobs-career">
                                                    <li><input type="checkbox" class="custom-checkbox input-control" name="jobs-career_id[]" value="67" id="civi_67" />
                                                        <label for="civi_67">Fresher</label>
                                                    </li>
                                                    <li><input type="checkbox" class="custom-checkbox input-control" name="jobs-career_id[]" value="74" id="civi_74" /><label for="civi_74">Junior</label></li>
                                                    <li><input type="checkbox" class="custom-checkbox input-control" name="jobs-career_id[]" value="82" id="civi_82" />
                                                        <label for="civi_82">Middle</label>
                                                    </li>
                                                    <li><input type="checkbox" class="custom-checkbox input-control" name="jobs-career_id[]" value="98" id="civi_98" />
                                                        <label for="civi_98">Senior</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="filter-jobs-experience mb-5">
                                            <div class="flex-column d-flex offcanvasfilter">
                                                <h4>Jobs Experience</h4>
                                                <ul class="filter-control custom-scrollbar jobs-experience">
                                                    <li><input type="checkbox" class="custom-checkbox input-control" name="jobs-experience_id[]" value="7" id="civi_7" />
                                                        <label for="civi_7">1 - 2 Years</label>
                                                    </li>
                                                    <li><input type="checkbox" class="custom-checkbox input-control" name="jobs-experience_id[]" value="9" id="civi_9" />
                                                        <label for="civi_9">10+ Years</label>
                                                    </li>
                                                    <li><input type="checkbox" class="custom-checkbox input-control" name="jobs-experience_id[]" value="16" id="civi_16" />
                                                        <label for="civi_16">3 - 5 Years</label>
                                                    </li>
                                                    <li><input type="checkbox" class="custom-checkbox input-control" name="jobs-experience_id[]" value="26" id="civi_26" /><label for="civi_26">6 - 9 Years</label></li></ul>
                                            </div>
                                        </div>

                                        <button className='civibtn offcanvasbtn col-lg-2 col-4 '>Show Jobs</button> </div>
                                </div>
                            </div>
                            <div className="row m-0 p-0 d-flex justify-content-center gy-4">
                                    {
                                        Jobs.map(({ by, img, id, job, liked }, index) => {
                                            if (selectedCategorie == 'All') {
                                                if (job.jobTitle.includes(search)) {
                                                    return (
                                                        <div class="jobs-item layout-list jobs-featured col-lg-8 col-12 ">
                                                            <div class="jobs-header d-flex justify-content-between p-0">
                                                                <div class="jobs-header-left d-flex justify-content-between p-0">
                                                                    <img class="logo-company rounded-full object-cover" src={img} alt="" />
                                                                    <div class="jobs-left-inner mx-3">
                                                                        <h3 class="jobs-title"><a onClick={() => {
                                                                            // setNavigateState({
                                                                            //     id: id,
                                                                            //     img: img,
                                                                            //     job: job,
                                                                            //     liked: liked
                                                                            // })
                                                                            navigate('../SingleJob', {
                                                                                state: {
                                                                                    by: by,
                                                                                    id: id,
                                                                                    img: img,
                                                                                    job: job,
                                                                                    liked: liked
                                                                                }
                                                                            })
                                                                        }}>{job.jobTitle}</a>
                                                                        </h3>
                                                                        <div class="info-company d-flex ">
                                                                            <p >by <a class="authour civi-link-bottom mx-2" href="https://civi.uxper.co/companies/software/uxper/">{by}</a> in
                                                                                <Link to='' class="cate civi-link-bottom mx-2">
                                                                                    {job.jobCategorie}   </Link> </p>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="jobs-header-right d-flex justify-content-between">
                                                                    <div class="logged-out mx-2">
                                                                        {
                                                                            liked ?
                                                                                <BsHeartFill className=' text-xl mt-2' onClick={() => {
                                                                                    DisLikeJob(id, index)
                                                                                }} />
                                                                                :
                                                                                <BsHeart className=' text-xl mt-2' onClick={() => {
                                                                                    LikeJob(id, index)
                                                                                }} />
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="jobsfooter row  p-0 d-flex justify-content-center ">
                                                                <div class="jobs-footer-left col-12  col-lg-12 row ">
                                                                    <div className="jobtype d-flex justify-content-center align-items-center col-6 col-md-2  col-lg-3  mx-md-2 mx-lg-2 my-2">
                                                                        <Link to='' class="label" >
                                                                            {job.jobType} </Link></div>
                                                                    <div className="jobtype d-flex justify-content-center align-items-center col-6 col-md-2  col-lg-3  mx-md-2 mx-lg-2 my-2">
                                                                        <Link to='' class="label" >

                                                                            <GrLocation className='fs-5' />Pakistan</Link></div>

                                                                    <div className="jobtype d-flex justify-content-center align-items-center col-6 col-md-2  col-lg-3  mx-md-2 mx-lg-2 my-2">
                                                                        <Link to='' class="label" >
                                                                            ${job.jobSalaryMax}/month
                                                                        </Link></div>
                                                                    <p class="days col-lg-5 col-12 col-md-4  d-flex justify-content-center align-items-center ">
                                                                        <span className='mx-2'> {job.posted} </span> last date to apply  </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            }
                                            else if (job.jobCategorie.includes(selectedCategorie)) {
                                                if (job.jobTitle.includes(search)) {
                                                    return (
                                                        <div class="jobs-item layout-list jobs-featured col-lg-8 col-12 ">
                                                            <div class="jobs-header d-flex justify-content-between p-0">
                                                                <div class="jobs-header-left d-flex justify-content-between p-0">
                                                                    <img class="logo-company rounded-full" src={img} alt="" />
                                                                    <div class="jobs-left-inner mx-3">
                                                                        <h3 class="jobs-title"><a onClick={() => {
                                                                            // setNavigateState({
                                                                            //     id: id,
                                                                            //     img: img,
                                                                            //     job: job,
                                                                            //     liked: liked
                                                                            // })
                                                                            navigate('../SingleJob', {
                                                                                state: {
                                                                                    by: by,
                                                                                    id: id,
                                                                                    img: img,
                                                                                    job: job,
                                                                                    liked: liked
                                                                                }
                                                                            })
                                                                        }}>{job.jobTitle}</a>
                                                                        </h3>
                                                                        <div class="info-company d-flex ">
                                                                            <p >by <a class="authour civi-link-bottom mx-2" href="https://civi.uxper.co/companies/software/uxper/">{by}</a> in
                                                                                <Link to='' class="cate civi-link-bottom mx-2">
                                                                                    {job.jobCategorie}   </Link> </p>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="jobs-header-right d-flex justify-content-between">
                                                                    <div class="logged-out mx-2">
                                                                        {
                                                                            liked ?
                                                                                <BsHeartFill className=' text-xl mt-2' onClick={() => {
                                                                                    DisLikeJob(id, index)
                                                                                }} />
                                                                                :
                                                                                <BsHeart className=' text-xl mt-2' onClick={() => {
                                                                                    LikeJob(id, index)
                                                                                }} />
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="jobsfooter row  p-0 d-flex justify-content-center ">
                                                                <div class="jobs-footer-left col-12  col-lg-12 row ">
                                                                    <div className="jobtype d-flex justify-content-center align-items-center col-6 col-md-2  col-lg-3  mx-md-2 mx-lg-2 my-2">
                                                                        <Link to='' class="label" >
                                                                            {job.jobType} </Link></div>
                                                                    <div className="jobtype d-flex justify-content-center align-items-center col-6 col-md-2  col-lg-3  mx-md-2 mx-lg-2 my-2">
                                                                        <Link to='' class="label" >

                                                                            <GrLocation className='fs-5' />Pakistan</Link></div>

                                                                    <div className="jobtype d-flex justify-content-center align-items-center col-6 col-md-2  col-lg-3  mx-md-2 mx-lg-2 my-2">
                                                                        <Link to='' class="label" >
                                                                            ${job.jobSalaryMax}/month
                                                                        </Link></div>
                                                                    <p class="days col-lg-5 col-12 col-md-4  d-flex justify-content-center align-items-center ">
                                                                        <span className='mx-2'> {job.posted} </span> last date to apply  </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            }

                                        })
                                    }
                                    <div className="d-flex justify-content-center mt-3">
                                        <Link to='/Findjob' className='col-md-4 col-lg-2 col-6 btn browsebtn'>Browse All Jobs</Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UserFindJob
