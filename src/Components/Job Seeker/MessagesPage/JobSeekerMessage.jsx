import React from 'react'
import JobSeekerNavbar from '../Navbar/JobSeekerNavbar'

import './Message.css'
import { ImUser } from 'react-icons/im'
import { SiCoursera } from 'react-icons/si'
import { BiMessageDetail } from 'react-icons/bi'
import { BsBookmarkCheckFill } from 'react-icons/bs'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { MdOutlineDocumentScanner } from 'react-icons/md'
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

import { firestore, storage } from '../../../firebase';
import { ref, getDownloadURL, uploadBytes } from "firebase/storage"
import { setDoc, doc as Doc, addDoc, getDocs,updateDoc, docR, getDoc, collection, deleteDoc,orderBy,query } from "@firebase/firestore";
import { useState } from 'react'
import { useEffect } from 'react'
function JobSeekerMessage() {
    var chatUsers = new Map([])
    var [user, setUser] = useState({})
    var [messages, setMessages] = useState([])
    const [msg, setMsg] = useState([])
    const [selectedUser, setSelectedUser] = useState(0)
    const [chatUserList, setChatUserList] = useState([])
    useEffect(() => {
        var company = localStorage.getItem('user')
        company = JSON.parse(company)
        setUser(company)
        fetchUsersDetails(company.uid)
    }, [])
    const fetchUsersDetails = async (uid) => {
        const appliedJobs = await getDocs(collection(firestore, `users/${uid}/JobsApplied`))
        appliedJobs.docs.map(async (doc) => {
            const job = await getDoc(Doc(firestore, `jobs/${doc.id}`))
            if (!chatUsers.has(job.data().by)) {
                chatUsers.set(job.data().by, '')
                var newChatUser = {
                    uid: job.data().by,
                    name: '',
                    img: ''
                }
                const msgs = await getDoc(Doc(firestore, `users/${job.data().by}/chat/${uid}`))
                if (msgs.exists()) {
                    const userDetail = await getDoc(Doc(firestore, `users/${job.data().by}`))
                    newChatUser.name = userDetail.data().Name
                    newChatUser.img = await getDownloadURL(ref(storage, `images/${job.data().by}/profile`))
                    setChatUserList((chatUserList) => [...chatUserList, newChatUser])
                    if (messages.length == 0) {
                        setMessages([])
                        const msgs = await getDocs(query(collection(firestore, `users/${job.data().by}/chat/${uid}/messages`),orderBy("dateTime")))
                        msgs.docs.map((message, index) => {
                            setMessages(messages => [...messages, message.data()])
                        })
                    }
                }
            }

        });
    }
    const fetchMessages = async () => {
        setMessages([])
        await getDocs(query(collection(firestore, `users/${chatUserList[selectedUser].uid}/chat/${user.uid}/messages`),orderBy("dateTime")))
            .then((msgs) => {
                msgs.docs.map((message, index) => {
                    setMessages(messages => [...messages, message.data()])
                })
            })
            await updateDoc(Doc(firestore,`users/${chatUserList[selectedUser].uid}/chat/${user.uid}`),{
                unreaduser:0
            })
    }

    useEffect(() => {
        if (user.uid != undefined) {
            fetchMessages()
        }
    }, [selectedUser])

    const sendMessage = async () => {
        addDoc(collection(firestore, `users/${chatUserList[selectedUser].uid}/chat/${user.uid}/messages`), {
            msg: msg,
            sender: user.uid,
            dateTime: Date.now()
        })
            .then(async () => {
                setMessages(messages => [...messages, {
                    msg: msg,
                    sender: user.uid,
                    dateTime: Date.now()
                }])
                var unreadCompanyMsgs = await getDoc(Doc(firestore,`users/${chatUserList[selectedUser].uid}/chat/${user.uid}`))
                unreadCompanyMsgs = unreadCompanyMsgs.data()
                await updateDoc(Doc(firestore,`users/${chatUserList[selectedUser].uid}/chat/${user.uid}`),{
                    unreadcompany:unreadCompanyMsgs.unreadcompany + 1
                })
                setMsg('')
            })
            .catch((e) => {
                console.log(e)
            })
    }
    return (
        <div>
            <div className='Messagesection row d-flex m-0 p-0'>
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
                                <Link to='/UserResume' style={{ textDecoration: "none" }}>
                                    <li>
                                        <MdOutlineDocumentScanner className="icon fs-4" />
                                        <span>Create Your Resume</span>
                                    </li></Link>
                                <Link style={{ textDecoration: "none" }}>
                                    <li>
                                        <SiCoursera className="icon fs-4" />
                                        <span>Applied Courses</span>
                                    </li></Link>
                                <Link to='/Jobseekerpage' style={{ textDecoration: "none" }}>
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
                <div className=" col-12 col-md-9 col-lg-10 h-100 p-0 m-0"><JobSeekerNavbar />
                    <div id="main" class="site-main" role="main">
                        <div class="entry-my-page messages-dashboard px-3 mb-5">
                            <div class="entry-title">
                                <h4>Messages</h4>
                            </div>
                            <div class="table-dashboard-wapper uxper-messages">
                                <div class="bg-overlay"></div>
                                <div class="mess-list">

                                    <a href="#d" class="icon-nav-mess">
                                        <i class="far fa-comments"></i>
                                    </a>
                                    <div class="tab-mess">
                                        <div class="mess-tab-head">
                                            <ul class="tab-list-mess">
                                                <li class="tab-item tab-all active"><a href="#tab-all">All</a></li>
                                                <li class="tab-item tab-unread"><a href="#tab-unread">Unread<span>(0)</span></a>
                                                </li>
                                            </ul>
                                            <span class="mess-refresh">
                                                <i class="fal fa-sync"></i>
                                                <span>Refresh</span>
                                            </span>
                                        </div>
                                        <div class="tab-content custom-scrollbar">
                                            <div class="tab-info" id="tab-all" >
                                                <ul>
                                                    {
                                                        chatUserList.map((user, index) => {
                                                            return (
                                                                <li onClick={() => {
                                                                    setSelectedUser(index)
                                                                }} class={`list-user ${selectedUser == index ? 'active' : ''}`} data-mess-id="7453" key={index}>
                                                                    <div class="thumb">
                                                                        <img src={user.img} alt="" />
                                                                    </div>
                                                                    <div class="detail">
                                                                        <div class="name">
                                                                            <span class="uname">{user.name}</span>
                                                                            <span class="date">4 days ago</span>
                                                                        </div>
                                                                        <div class="desc">
                                                                            test                </div>
                                                                    </div>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                            <div class="tab-info" id="tab-unread" style={{ display: ' none' }}>
                                                <ul>
                                                </ul>        </div>
                                        </div>
                                    </div>

                                </div>
                                {
                                    chatUserList.length > 0 ?
                                        <>
                                            <div class="mess-content">
                                                <div class="mess-content__head">
                                                    <div class="left">
                                                        <div class="thumb">
                                                            <img src={chatUserList[selectedUser].img} alt="" />
                                                        </div>
                                                        <div class="detail">
                                                            <div class="name">
                                                                <span class="uname w-full">{chatUserList[selectedUser].name}</span>
                                                            </div>
                                                            <div class="info">test</div>
                                                        </div>
                                                    </div>
                                                    <div class="right">
                                                        <div class="action action-setting">
                                                            <a href="#df" class="icon-setting"><i class="fal fa-ellipsis-v"></i></a>
                                                            <ul class="action-dropdown">
                                                                <li><a class="btn-add-to-message" data-text="This is a &quot;Demo&quot; account so you not cant delete it" href="#d">Delete</a></li>
                                                            </ul>
                                                        </div>
                                                    </div></div>
                                                <div class="mess-content__body custom-scrollbar">
                                                    {
                                                        messages.map((msg, index) => {
                                                            return (
                                                                msg.sender == user.uid ?
                                                                    <div class="card-mess card-send">
                                                                        <div class="thumb">
                                                                            <div class="thumb">
                                                                                <img src={user.profileImgUrl} alt="" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="detail">
                                                                            <div class="name">
                                                                                <span class="uname">You</span>
                                                                                <span class="date">{`${new Date(msg.dateTime).toDateString()}, ${new Date(msg.dateTime).getHours()}:${new Date(msg.dateTime).getMinutes()}`}</span>
                                                                            </div>
                                                                            <div class="desc">{msg.msg}</div>
                                                                        </div>
                                                                    </div> :
                                                                    <div class="card-mess card-recived">
                                                                        <div class="thumb">
                                                                            <div class="thumb">
                                                                                <img src={chatUserList[selectedUser].img} alt="" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="detail">
                                                                            <div class="name">
                                                                                <span class="uname">{chatUserList[selectedUser].name}</span>
                                                                                <span class="date">{`${new Date(msg.dateTime).toDateString()}, ${new Date(msg.dateTime).getHours()}:${new Date(msg.dateTime).getMinutes()}`}</span>
                                                                            </div>
                                                                            <div class="desc">{msg.msg}</div>
                                                                        </div>
                                                                    </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div class="flex justify-center items-center flex-row relative mt-2">
                                                    <input placeholder="Write your message" name="uxper_send_mess" className='mx-2  w-full px-2 py-3 rounded-xl border-2 border-black' value={msg} onChange={(e) => { setMsg(e.target.value) }} />
                                                    <button className='rounded-xl absolute right-4 top-auto bottom-auto bg-green-600 p-2 text-white' onClick={() => {
                                                        sendMessage()
                                                    }}>
                                                        Send
                                                    </button>
                                                </div>
                                            </div>
                                        </> :
                                        <></>
                                }
                                <div class="civi-loading-effect"><span class="civi-dual-ring"></span></div>
                            </div>
                        </div>
                    </div></div>
            </div>

        </div>
    )
}

export default JobSeekerMessage
