import React, { useEffect, useState } from 'react'
import CompanyNavbar from '../Navbar/CompanyNavbar'
import './Message.css'
import { BsPeopleFill } from 'react-icons/bs'
import { MdWorkOutline, MdPostAdd } from 'react-icons/md'
import { FaUserPlus } from 'react-icons/fa'
import { BiMessageDetail } from 'react-icons/bi'
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";



import { firestore, storage } from '../../../firebase';
import { ref, getDownloadURL, uploadBytes } from "firebase/storage"
import { setDoc, doc as Doc, getDocs, docR, getDoc, collection, deleteDoc, updateDoc,query,orderBy, addDoc } from "@firebase/firestore";


function CompanyMessage() {

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
        setChatUserList([])
        await getDocs(collection(firestore, `users/${uid}/chat`))
            .then((chats) => {
                chats.docs.map(async (eachDoc, index) => {
                    var newChatUser = {
                        uid: eachDoc.id,
                        name: '',
                        img: ''
                    }
                    await getDownloadURL(ref(storage, `images/${eachDoc.id}/profile`))
                        .then((img) => {
                            newChatUser.img = img
                        })
                        .catch((error) => {
                            console.log('No Profile Pic')
                        })
                    await getDoc(Doc(firestore, `users/${eachDoc.id}`))
                        .then((userDetail) => {
                            newChatUser.name = userDetail.data().Name
                            console.log(userDetail.data().Name)
                        })
                    setChatUserList(chatUserList => [...chatUserList, newChatUser])
                    if (index == 0) {
                        setMessages([])
                        getDocs(query(collection(firestore, `users/${uid}/chat/${eachDoc.id}/messages`),orderBy('dateTime')))
                            .then((msgs) => {
                                msgs.docs.map((message, index) => {
                                    setMessages(messages => [...messages, message.data()])
                                })
                            })
                        await updateDoc(Doc(firestore,`users/${uid}/chat/${eachDoc.id}`),{
                                unreadcompany:0
                            })
                    }
                })
            })
            .catch((e) => {
                console.log(e)
            })

    }
    const fetchMessages = async () => {
        setMessages([])
        await getDocs(query(collection(firestore, `users/${user.uid}/chat/${chatUserList[selectedUser].uid}/messages`),orderBy('dateTime')))
            .then((msgs) => {
                msgs.docs.map((message, index) => {
                    setMessages(messages => [...messages, message.data()])
                })
            })
            await updateDoc(Doc(firestore,`users/${user.uid}/chat/${chatUserList[selectedUser].uid}`),{
                unreadcompany:0
            })
    }

    useEffect(() => {
        fetchMessages()
    }, [selectedUser])

    const sendMessage = async () => {
        addDoc(collection(firestore, `users/${user.uid}/chat/${chatUserList[selectedUser].uid}/messages`), {
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
                var unreadCompanyMsgs = await getDoc(Doc(firestore,`users/${user.uid}/chat/${chatUserList[selectedUser].uid}`))
                unreadCompanyMsgs = unreadCompanyMsgs.data()
                await updateDoc(Doc(firestore,`users/${user.uid}/chat/${chatUserList[selectedUser].uid}`),{
                    unreaduser:unreadCompanyMsgs.unreaduser + 1
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
                <div className="d-none d-md-block col-md-3 col-lg-2 p-0 ">
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
                <div className=" col-12 col-md-9 col-lg-10 h-100 p-0 m-0"><CompanyNavbar />
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

export default CompanyMessage
