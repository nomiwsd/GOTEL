import React, { useEffect, useState } from 'react'
import './Homepage.css'
import Header from './Header'
import videobg from '../../Images/videobg.mp4'
import { TbFolder } from 'react-icons/tb'
import { SlLocationPin } from 'react-icons/sl'
import { TfiSearch } from 'react-icons/tfi'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import icon1 from '../../Images/prototype.png'
import icon2 from '../../Images/coding.png'
import icon3 from '../../Images/sales.png'
import icon4 from '../../Images/real-estate.png'
import icon5 from '../../Images/helmet.png'
import icon6 from '../../Images/accounts.png'
import icon7 from '../../Images/prevention.png'
import icon8 from '../../Images/content-writing.png'
import ScrollTrigger from 'react-scroll-trigger';
import { GrLocation } from 'react-icons/gr'
import { ImUserCheck } from 'react-icons/im'
import { FaSearch } from 'react-icons/fa'
import { AiOutlineFileSearch } from 'react-icons/ai'
import CountUp from 'react-countup';
import { BiCurrentLocation, BiPhoneCall } from 'react-icons/bi'
import { MdOutlineMail } from 'react-icons/md'
import { firestore, storage } from '../../firebase';
import { setDoc, doc as Doc, getDocs, docR, getDoc, collection, deleteDoc } from "@firebase/firestore";
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { ref, getDownloadURL, uploadBytes } from "firebase/storage"
function Homepage() {

    const [search, setSearch] = useState('')
    const [selectedCategorie, setSelectedCategorie] = useState('All')
    const [selectedLocation, setSelectedLocation] = useState('All')

    const navigate = useNavigate()
    const [counterup, setcounterup] = useState(false);
    const [Jobs, setJobs] = useState([])
    useEffect(() => {
        var company = localStorage.getItem('user')
        company = JSON.parse(company)
        setUser(company)
        if (company) {
            fetchJobDetails(company.uid)
        }
        else {
            fetchJobs()
        }
    }, [])
    var [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const [published, setPublished] = useState(false)
    const [navigateState, setNavigateState] = useState(null)

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

    if (navigateState != null) {
        <Navigate to={'../SingleJob'} state={navigateState} />
    }
    else {
        return (
            <div className='m-0 p-0'>
                <Header />
                <div className='Landingpage position-relative'>
                    <div className="colorsection d-block d-lg-none">
                        <div className="smallcontent">
                            <div className='py-3 px-3 d-flex flex-column justify-content-center align-items-center'>
                                <h2 className="mainheading text-white mb-3">Find your Dream Job Here</h2>
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
                        <div className="row m-0 p-0 smallcategorysect mb-5">
                            <div className="col-12 col-md-6 d-flex justify-content-center py-2">
                                <div className="sect align-content-center">
                                    <div className="d-flex justify-content-center">
                                        <img src="https://img.icons8.com/stickers/100/null/parse-from-clipboard.png" alt='wait for loading' />
                                    </div>
                                    <p className='imgtext'>Search Thousands of Jobs</p></div>
                            </div>
                            <div className="col-12 col-md-6 d-flex justify-content-center py-2">
                                <div className="sect align-content-center">
                                    <div className="d-flex justify-content-center">
                                        <img src="https://img.icons8.com/stickers/100/null/client-company.png" alt='wait for internet' />
                                    </div>
                                    <p className='imgtext'>Easy to Manage Jobs</p></div>
                            </div>
                            <div className="col-12 col-md-6 d-flex justify-content-center py-2">
                                <div className="sect align-content-center">
                                    <div className="d-flex justify-content-center">
                                        <img src="https://img.icons8.com/fluency/48/null/personal-growth.png" alt='wait for internet' />
                                    </div>
                                    <p className='imgtext'>Top Careers</p></div>
                            </div>
                            <div className="col-12 col-md-6 d-flex justify-content-center py-2">
                                <div className="sect align-content-center">
                                    <div className="d-flex justify-content-center">
                                        <img src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/null/external-candidates-politics-xnimrodx-blue-xnimrodx.png" alt='wait for internet' />
                                    </div>
                                    <p className='imgtext'>Search Expert Candidates</p></div>
                            </div>
                        </div>
                    </div>
                    <div class="background-overlay d-none d-lg-block"></div>
                    <video src={videobg} autoPlay loop muted className='d-none d-lg-block' />
                    <div className="content d-none d-lg-block">
                        <div className=' container py-5 px-3 landingpage'>
                            <h2 className="mainheading mb-5">Find your Dream Job Here</h2>
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

                    <div className="row m-0 p-0 categorysect d-none d-lg-flex px-5 ">
                        <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center py-3">
                            <div className="sect align-content-center">
                                <div className="d-flex justify-content-center">
                                    <img src="https://img.icons8.com/stickers/100/null/parse-from-clipboard.png" alt='wait for loading' />
                                </div>
                                <p className='imgtext'>Search Thousands of Jobs</p></div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center py-3">
                            <div className="sect align-content-center">
                                <div className="d-flex justify-content-center">
                                    <img src="https://img.icons8.com/stickers/100/null/client-company.png" alt='wait for internet' />
                                </div>
                                <p className='imgtext'>Easy to Manage Jobs</p></div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center py-3">
                            <div className="sect align-content-center">
                                <div className="d-flex justify-content-center">
                                    <img src="https://img.icons8.com/fluency/48/null/personal-growth.png" alt='wait for internet' />
                                </div>
                                <p className='imgtext'>Top Careers</p></div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center py-3 p-0">
                            <div className="sect align-content-center p-0">
                                <div className="d-flex justify-content-center">
                                    <img src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/null/external-candidates-politics-xnimrodx-blue-xnimrodx.png" alt='wait for internet' />
                                </div>
                                <p className='imgtext'>Search Expert Candidates</p></div>
                        </div>
                    </div>
                </div>
                {/* Categories Section */}
                <div className='Categories m-0 p-0'>
                    <div className="CategoriesCards pt-3 py-5 px-1">
                        <h3 className='Browseheading text-center'>Browse Top Categories</h3>
                        <h6 className='exploreheading text-center'>Explore by Category</h6>
                        <div class="our-services row d-flex justify-contnet-center m-0 p-0 px-3">
                            <div class="col-xl-3 col-lg-3 col-md-4 col-12 my-2">
                                <div class="single-services text-center mb-30">
                                    <div class="services-ion d-flex justify-content-center">
                                        <img src={icon1} alt="" />
                                    </div>
                                    <div class="services-cap">
                                        <h5><a href="job_listing.html">Design &amp; Creative</a></h5>
                                        <span>(653)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-4 col-12 my-2">
                                <div class="single-services text-center mb-30">
                                    <div class="services-ion d-flex justify-content-center">
                                        <img src={icon2} alt="" />
                                    </div>
                                    <div class="services-cap">
                                        <h5><a href="job_listing.html">Design &amp; Development</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-4 col-12 my-2">
                                <div class="single-services text-center mb-30">
                                    <div class="services-ion d-flex justify-content-center">
                                        <img src={icon3} alt="" />
                                    </div>
                                    <div class="services-cap">
                                        <h5><a href="job_listing.html">Sales &amp; Marketing</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-4 col-12 my-2">
                                <div class="single-services text-center mb-30">
                                    <div class="services-ion d-flex justify-content-center">
                                        <img src={icon4} alt="" />
                                    </div>
                                    <div class="services-cap">
                                        <h5><a href="job_listing.html">Real Estate</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-4 col-12 my-2">
                                <div class="single-services text-center mb-30">
                                    <div class="services-ion d-flex justify-content-center">
                                        <img src={icon5} alt="" />
                                    </div>
                                    <div class="services-cap">
                                        <h5><a href="job_listing.html">Construction</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-4 col-12 my-2">
                                <div class="single-services text-center mb-30">
                                    <div class="services-ion d-flex justify-content-center">
                                        <img src={icon6} alt="" />
                                    </div>
                                    <div class="services-cap">
                                        <h5><a href="job_listing.html">Accounting & Finance</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-4 col-12 my-2">
                                <div class="single-services text-center mb-30">
                                    <div class="services-ion d-flex justify-content-center">
                                        <img src={icon7} alt="" />
                                    </div>
                                    <div class="services-cap">
                                        <h5><a href="job_listing.html">Health & Hospital</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-4 col-12 my-2">
                                <div class="single-services text-center mb-30">
                                    <div class="services-ion d-flex justify-content-center">
                                        <img src={icon8} alt="" />
                                    </div>
                                    <div class="services-cap">
                                        <h5><a href="job_listing.html">Content Writing</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center py-3 my-3">
                            <button className='btn browsebtn'>Browse All Categories </button>
                        </div>

                    </div>

                </div>
                {/* Jobs Section */}
                <ScrollTrigger onEnter={() => {
                    setcounterup(true)
                }}
                    onExit={() => {
                        setcounterup(false)
                    }}>
                    <div className='p-0 m-0 bg-light'>
                        {/* <div class="online-cv cv-bg section-overly pt-90 pb-120 my-2" >
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-10">
                                    <div class="cv-caption text-center">
                                        <h4 class=""> Make a Difference with Your Online Resume!</h4>
                                        <a href="#sd" class="border-btn2 border-btn4">Upload your cv</a>
                                        <a href="#sd" class="border-btn2 border-btn4 mx-2">Create Your CV</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                        <section className="py-4">
                            <div className="container">
                                <div className="row justify-content-center mb-3 pb-3">
                                    <div className="col-md-7 heading-section text-center ">
                                        <h3 className="Browseheading">Recently Added Jobs</h3>
                                        <h2 className="mb-2 exploreheading">Recent Jobs</h2>
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
                                            else if (job.jobCategorie.includes(selectedCategorie)) {
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

                                        })
                                    }
                                    <div className="d-flex justify-content-center mt-3">
                                        <Link to='/Findjob' className='col-md-4 col-lg-2 col-6 btn browsebtn'>Browse All Jobs</Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="ftco-section ftco-counter section-overly img"  >
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-10">
                                        <div className="row">
                                            <div className="col-md-3 ">
                                                <div className="text-center d-block">
                                                    <div className="text">
                                                        <strong className="counternumber" data-number="1350000">
                                                            {counterup && <CountUp start={0} end={135000} duration={4} delay={0} />}
                                                        </strong>
                                                    </div>
                                                    <span className='spantext'>Jobs</span>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className=" text-center d-block">
                                                    <div className="text">
                                                        <strong className="counternumber" data-number="40000"> {counterup && <CountUp start={0} end={4000} duration={4} delay={0} />}</strong>
                                                    </div>
                                                    <span className='spantext'>Members</span>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className=" text-center d-block">
                                                    <div className="text">
                                                        <strong className="counternumber" data-number="30000">{counterup && <CountUp start={0} end={30000} duration={4} delay={0} />}</strong>
                                                    </div>
                                                    <span className='spantext'>Resume</span>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className=" text-center d-block">
                                                    <div className="text">
                                                        <strong className="counternumber" data-number="10500">{counterup && <CountUp start={0} end={10500} duration={4} delay={0} />}</strong>
                                                    </div>
                                                    <span className='spantext'>Company</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </ScrollTrigger>
                {/* Candidates Section */}
                <div>
                    <section class="ftco-candidates py-5">
                        <div class="container">
                            <div class="row justify-content-center pb-3">
                                <div class="col-md-10 heading-section text-center mt-3">
                                    <h3 class="Browseheading">Top Candidates</h3>
                                    <h2 class="mb-4 exploreheading">Latest Candidates</h2>
                                </div>
                            </div>
                        </div>
                        <div class="carddetails px-lg-5 px-3">
                            <div class="d-flex flex-row cardoverflow gap-2">
                                <div class="card col-lg-3 col-md-6 col-12 p-0">
                                    <div class="card-container ">
                                        <span class="pro">PRO</span>
                                        <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                                        <h3 className='cardhead'>Ricky Park</h3>
                                        <h6 className='cardhead2'>New York</h6>
                                        <p className='cardtext'>User interface designer and <br /> front-end developer</p>
                                        <div class="buttons d-flex justify-content-between gap-2">
                                            <button class="primary">
                                                Message
                                            </button>
                                            <button class="primary ghost">
                                                Hire
                                            </button>
                                        </div>
                                        <ul className='Skills d-flex flex-column p-0 w-100 mt-2'>
                                            <h6 className='fs-3 mx-2'>Skills</h6>
                                            <li>UI / UX</li>
                                            <li>Front End Development</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                        </ul>

                                    </div>
                                </div>

                                <div class="card col-lg-3 col-md-6 col-12 p-0">
                                    <div class="card-container ">
                                        <span class="pro">PRO</span>
                                        <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                                        <h3 className='cardhead'>Ricky Park</h3>
                                        <h6 className='cardhead2'>New York</h6>
                                        <p className='cardtext'>User interface designer and <br /> front-end developer</p>
                                        <div class="buttons d-flex justify-content-between gap-2">
                                            <button class="primary">
                                                Message
                                            </button>
                                            <button class="primary ghost">
                                                Hire
                                            </button>
                                        </div>
                                        <ul className='Skills d-flex flex-column p-0 w-100 mt-2'>
                                            <h6 className='fs-3 mx-2'>Skills</h6>
                                            <li>UI / UX</li>
                                            <li>Front End Development</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                        </ul>

                                    </div>
                                </div>

                                <div class="card col-lg-3 col-md-6 col-12 p-0">
                                    <div class="card-container ">
                                        <span class="pro">PRO</span>
                                        <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                                        <h3 className='cardhead'>Ricky Park</h3>
                                        <h6 className='cardhead2'>New York</h6>
                                        <p className='cardtext'>User interface designer and <br /> front-end developer</p>
                                        <div class="buttons d-flex justify-content-between gap-2">
                                            <button class="primary">
                                                Message
                                            </button>
                                            <button class="primary ghost">
                                                Hire
                                            </button>
                                        </div>
                                        <ul className='Skills d-flex flex-column p-0 w-100 mt-2'>
                                            <h6 className='fs-3 mx-2'>Skills</h6>
                                            <li>UI / UX</li>
                                            <li>Front End Development</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                        </ul>

                                    </div>
                                </div>

                                <div class="card col-lg-3 col-md-6 col-12 p-0">
                                    <div class="card-container ">
                                        <span class="pro">PRO</span>
                                        <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                                        <h3 className='cardhead'>Ricky Park</h3>
                                        <h6 className='cardhead2'>New York</h6>
                                        <p className='cardtext'>User interface designer and <br /> front-end developer</p>
                                        <div class="buttons d-flex justify-content-between gap-2">
                                            <button class="primary">
                                                Message
                                            </button>
                                            <button class="primary ghost">
                                                Hire
                                            </button>
                                        </div>
                                        <ul className='Skills d-flex flex-column p-0 w-100 mt-2'>
                                            <h6 className='fs-3 mx-2'>Skills</h6>
                                            <li>UI / UX</li>
                                            <li>Front End Development</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                        </ul>

                                    </div>
                                </div>

                                <div class="card col-lg-3 col-md-6 col-12 p-0">
                                    <div class="card-container ">
                                        <span class="pro">PRO</span>
                                        <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                                        <h3 className='cardhead'>Ricky Park</h3>
                                        <h6 className='cardhead2'>New York</h6>
                                        <p className='cardtext'>User interface designer and <br /> front-end developer</p>
                                        <div class="buttons d-flex justify-content-between gap-2">
                                            <button class="primary">
                                                Message
                                            </button>
                                            <button class="primary ghost">
                                                Hire
                                            </button>
                                        </div>
                                        <ul className='Skills d-flex flex-column p-0 w-100 mt-2'>
                                            <h6 className='fs-3 mx-2'>Skills</h6>
                                            <li>UI / UX</li>
                                            <li>Front End Development</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                        </ul>

                                    </div>
                                </div>

                                <div class="card col-lg-3 col-md-6 col-12 p-0">
                                    <div class="card-container ">
                                        <span class="pro">PRO</span>
                                        <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                                        <h3 className='cardhead'>Ricky Park</h3>
                                        <h6 className='cardhead2'>New York</h6>
                                        <p className='cardtext'>User interface designer and <br /> front-end developer</p>
                                        <div class="buttons d-flex justify-content-between gap-2">
                                            <button class="primary">
                                                Message
                                            </button>
                                            <button class="primary ghost">
                                                Hire
                                            </button>
                                        </div>
                                        <ul className='Skills d-flex flex-column p-0 w-100 mt-2'>
                                            <h6 className='fs-3 mx-2'>Skills</h6>
                                            <li>UI / UX</li>
                                            <li>Front End Development</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                        </ul>

                                    </div>
                                </div>



                            </div>
                        </div>
                    </section>
                    <div class="apply-process-area apply-bg pt-150 pb-150">
                        <div class="container">
                            <div class="row m-0 p-0">
                                <div class="col-lg-12">
                                    <div class="section-tittle text-white text-center">
                                        <h3 className='Browseheading'>Apply process</h3>
                                        <h2 className='exploreheading'> How it works</h2>
                                    </div>
                                </div>
                            </div>

                            <div class="row p-0 m-0 py-3">
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-process text-center mb-30">
                                        <div class="process-ion d-flex justify-content-center my-2">
                                            <FaSearch className='fs-4' />
                                        </div>
                                        <div class="process-cap">
                                            <h5>1. Search a job</h5>
                                            <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-process text-center mb-30">
                                        <div class="process-ion d-flex justify-content-center">
                                            <AiOutlineFileSearch className='fs-2' />
                                        </div>
                                        <div class="process-cap">
                                            <h5>2. Apply for job</h5>
                                            <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-process text-center mb-30">
                                        <div class="process-ion d-flex justify-content-center">
                                            <ImUserCheck className='fs-3' />
                                        </div>
                                        <div class="process-cap">
                                            <h5>3. Get your job</h5>
                                            <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer section */}
                <footer class="footer footer-bg-dark p-2 p-lg-3">
                    <div class="container">
                        <div class="row mb-5 p-0 m-0">
                            <div class="col-md-3 col-12">
                                <div class="footer-widget mb-4">
                                    <h2 class="footer-heading text-left">GOTEL</h2>
                                    <p className='footertext'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                                </div>
                            </div>
                            <div class="col-md-2 col-12">
                                <div class="footer-widget mb-4">
                                    <h2 class="footer-heading text-left">Employers</h2>
                                    <ul class="list-unstyled">
                                        <li><Link to='/Login' class="pb-1 d-block">Browse Candidates</Link></li>
                                        <li><Link to='/Signup' class="pb-1 d-block">Post a Job</Link></li>
                                        <li><Link to='/Login' class="pb-1 d-block">Dashboard</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12 col-md-2">
                                <div class="footer-widget mb-4 ml-md-4">
                                    <h2 class="footer-heading text-left">Candidate</h2>
                                    <ul class="list-unstyled">
                                        <li><Link to='/Findjob' class="pb-1 d-block">Browse Jobs</Link></li>
                                        <li><Link to='/Login' class="pb-1 d-block">Dashboard</Link></li>
                                        <li><Link to='/Findjob' class="pb-1 d-block">Browse Categories</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-2 col-12">
                                <div class="footer-widget mb-4 ml-md-4">
                                    <h2 class="footer-heading text-left">Account</h2>
                                    <ul class="list-unstyled">
                                        <li><Link to='/Login' class="pb-1 d-block">My Account</Link></li>
                                        <li><Link to='/Login' class="pb-1 d-block">Sign In</Link></li>
                                        <li><Link to='/Signup' class="pb-1 d-block">Create Account</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3 col-12">
                                <div class="footer-widget mb-4">
                                    <h2 class="footer-heading text-start">Have a Questions?</h2>
                                    <div class="block-23 mb-3">
                                        <ul className='p-0'>
                                            <li className='d-flex'><BiCurrentLocation className='fs-3 mx-2' /><p class="text">Islamabad, Pakistan</p></li>
                                            <li className='d-flex'><BiPhoneCall className='fs-4 mx-2' /><p class="text">+92 300 123456789</p></li>
                                            <li className='d-flex'>
                                                <MdOutlineMail className='fs-4 mx-2' />
                                                <p class="text">info@yourdomain.com</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row m-0 p-0">
                            <div class="col-md-12 text-center">
                                <p>Copyright © 2023 All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Homepage
