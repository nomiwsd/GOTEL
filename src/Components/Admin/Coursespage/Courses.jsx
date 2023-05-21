import React from 'react'

import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar'
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { IoIosPeople } from 'react-icons/io'
import { SiCoursera } from 'react-icons/si'
import { BiMessageDetail } from 'react-icons/bi'
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { ref, getDownloadURL, uploadBytes } from "firebase/storage"
import { firestore, storage } from '../../../firebase';
import { setDoc, updateDoc, doc, getDocs, collection, onSnapshot, addDoc } from "@firebase/firestore";

import './Courses.css'
import { useState } from 'react';
import { useEffect } from 'react';
function Courses() {

    const [heading, setHeading] = useState('')
    const [detail, setDetail] = useState('')
    const [level, setLevel] = useState('')
    const [time, setTime] = useState('')
    const [linkR, setLinkR] = useState('')
    var [cources, setCources] = useState([])
    const [image, setImage] = useState('')

    useEffect(() => {
        fetchAllCourses()
    }, [])

    const uploadCourse = async () => {
        await addDoc(collection(firestore, 'cources'), {
            heading: heading,
            detail: detail,
            level: level,
            time: time,
            link: linkR
        })
            .then(async (document) => {
                console.log(document.id)
                const buffer = await image.arrayBuffer();
                const result = await uploadBytes(ref(storage, `images/cources/${document.id}`), buffer)
                // setSelectedImage(await getDownloadURL(ref(storage, `images/${user.uid}/profile`)))
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const fetchAllCourses = async () => {
        setCources([])
        await getDocs(collection(firestore, 'cources'))
            .then((allCources) => {
                allCources.docs.map(async (cource, index) => {
                    const imageP = await getDownloadURL(ref(storage, `images/cources/${cource.id}`))
                    setCources((cources) = [...cources, { data: cource.data(), imageP: imageP }])
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
                        <div class="entry-title d-flex justify-content-between mt-3">
                            <h4>Manage Courses</h4>
                            <div className='d-flex justify-content-between gap-2'>
                                <button className='cancelbtn'>Cancel</button>
                                <button className='savebtn' onClick={() => {
                                    uploadCourse()
                                }}>Save </button>
                            </div>
                        </div>

                        <div className=" m-0 p-0 row ">
                            <h4 className='courseheading'>Course All Details</h4>
                            <div className="col-12">
                                <label for="files" id="civi_select_avatar" className='courseuploadbtn'>Upload Cover image</label>
                                <input
                                    type="file"
                                    id='files'
                                    placeholder='Upload'
                                    onChange={(event) => {
                                        setImage(event.target.files[0])
                                    }}
                                    style={{ visibility: 'hidden' }}
                                />
                            </div>

                            <div className="col-6">
                                <div className=" coursesdetails">
                                    <h6 className='courseheading'>Course Heading:</h6>
                                    <input type="text" value={heading} onChange={(e) => { setHeading(e.target.value) }} />
                                </div>

                                <div className=" coursesdetails">
                                    <h6 className='courseheading'>Course level:</h6>
                                    <input type="text" value={level} onChange={(e) => { setLevel(e.target.value) }} />
                                </div>
                                <div className=" coursesdetails">
                                    <h6 className='courseheading'>Time to Complete</h6>
                                    <input type="text" value={time} onChange={(e) => { setTime(e.target.value) }} />
                                </div>
                                <div className=" coursesdetails">
                                    <h6 className='courseheading'>Click The Link Below:</h6>
                                    <input type="text" value={linkR} onChange={(e) => { setLinkR(e.target.value) }} />
                                </div></div>

                            <div className="col-6 coursesdetails">
                                <h6 className='courseheading'>Course Details:</h6>
                                <textarea name="coursedetails" id="" cols="30" rows="10" value={detail} onChange={(e) => { setDetail(e.target.value) }}></textarea>
                            </div>
                        </div>
                        <div class="row m-0 p-0 g-4">
                            <div class="col-md-4 col-12 ">
                                {
                                    cources.map((cource, index) => {
                                        return (
                                            <div class="card col-12 p-0 m-0 coursecard" style={{ padding: '22px' }}>
                                                <img class="card-img" alt="" src={cource.imageP} />
                                                <div class="card-body m-0">
                                                    <h6 className='courseheading'>Course Title:</h6>
                                                    <h3 class="card-title courseheading">{cource.data.heading}</h3>
                                                    <h6 className='courseheading'>Course Details:</h6>
                                                    <p class="card-text">{cource.data.detail}</p>
                                                    <h3 class="card-Subtitle courseheading">Level : {cource.data.level}</h3>
                                                    <p class="lostcard-Subtext courseheading'">Estimated Time: {cource.data.time}</p>
                                                    <div class="d-flex justify-content-end seeDetails">
                                                        <a className='courseheading' onClick={()=>{
                                                            window.open(cource.data.link,'_blank')
                                                        }}>link</a>
                                                    </div>
                                                </div>
                                                <div class="secondcarddiv"></div>
                                            </div>
                                        )
                                    })
                                }
                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Courses
