import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Message.css'
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import {IoIosPeople} from 'react-icons/io'
import {SiCoursera} from 'react-icons/si'
import {BiMessageDetail} from 'react-icons/bi'
import {TfiWrite} from 'react-icons/tfi'
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";


function Message() {
    return (
        <div>
            <div className='Messagesection row d-flex m-0 p-0'>
                <div className="sidebar d-none d-md-block col-md-3 col-lg-2  m-0 p-0 "><div className="sidebar  p-0" >
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
          <Link to='/Courses'  style={{ textDecoration: "none" }}>
          <li>
            <SiCoursera className="icon fs-4" />
            <span>Upload Courses</span>
          </li></Link>
          <Link to='/Testpage'  style={{ textDecoration: "none" }}><li>
            <TfiWrite className="icon fs-4" />
            <span>Conduct Test</span>
          </li></Link>
          <Link to='/Message'style={{ textDecoration: "none" }}>   <li>
            <BiMessageDetail className="icon fs-4" />
            <span>Messages</span>
          </li>
          </Link>
          <Link to='/Settingspage'style={{ textDecoration: "none" }}> <li>
            <SettingsApplicationsIcon className="icon fs-4" />
            <span>Settings</span>
          </li></Link>
          <Link style={{ textDecoration: "none" }}> <li>
            <ExitToAppIcon className="icon fs-4" />
            <span>Logout</span>
          </li></Link>
        </ul>
      </div>
      </div></div>
                <div className=" col-12 col-md-9 col-lg-10 h-100 p-0 m-0"><Navbar />
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
                                                    <li class="list-user active" data-mess-id="7453">
                                                        <div class="thumb">
                                                            <img src="https://civi.uxper.co/wp-content/uploads/2022/10/Messi-1.webp" alt="" />
                                                        </div>
                                                        <div class="detail">
                                                            <div class="name">
                                                                <span class="uname">Messi</span>
                                                                <span class="date">4 days ago</span>
                                                            </div>
                                                            <div class="desc">
                                                                test                </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-user " data-mess-id="7241">
                                                        <div class="thumb">
                                                            <img src="https://civi.uxper.co/wp-content/uploads/2022/10/Messi-1.webp" alt="" />
                                                        </div>
                                                        <div class="detail">
                                                            <div class="name">
                                                                <span class="uname">Messi</span>
                                                                <span class="date">7 days ago</span>
                                                            </div>
                                                            <div class="desc">
                                                                hay                </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-user " data-mess-id="6842">
                                                        <div class="thumb">
                                                            <img src="https://civi.uxper.co/wp-content/uploads/2022/10/denis-do-1.webp" alt="" />
                                                        </div>
                                                        <div class="detail">
                                                            <div class="name">
                                                                <span class="uname">Denis Do</span>
                                                                <span class="date">2 weeks ago</span>
                                                            </div>
                                                            <div class="desc">
                                                                Hello                </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-user " data-mess-id="6829">
                                                        <div class="thumb">
                                                            <img src="https://civi.uxper.co/wp-content/uploads/2022/10/denis-do-1.webp" alt="" />
                                                        </div>
                                                        <div class="detail">
                                                            <div class="name">
                                                                <span class="uname">Denis Do</span>
                                                                <span class="date">2 weeks ago</span>
                                                            </div>
                                                            <div class="desc">
                                                                Hello                </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-user " data-mess-id="6567">
                                                        <div class="thumb">
                                                            <img src="https://civi.uxper.co/wp-content/uploads/2022/10/Messi-1.webp" alt="" />
                                                        </div>
                                                        <div class="detail">
                                                            <div class="name">
                                                                <span class="uname">Messi</span>
                                                                <span class="date">2 weeks ago</span>
                                                            </div>
                                                            <div class="desc">
                                                                geloo                </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-user " data-mess-id="6560">
                                                        <div class="thumb">
                                                            <img src="" alt="" />
                                                        </div>
                                                        <div class="detail">
                                                            <div class="name">
                                                                <span class="uname">Aniket Jha</span>
                                                                <span class="date">2 weeks ago</span>
                                                            </div>
                                                            <div class="desc">
                                                                Hii how are you                </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-user " data-mess-id="6530">
                                                        <div class="thumb">
                                                            <img src="https://civi.uxper.co/wp-content/uploads/2022/10/peter-parker-1.webp" alt="" />
                                                        </div>
                                                        <div class="detail">
                                                            <div class="name">
                                                                <span class="uname">Peter Packer</span>
                                                                <span class="date">2 weeks ago</span>
                                                            </div>
                                                            <div class="desc">
                                                                teste                </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-user " data-mess-id="6522">
                                                        <div class="thumb">
                                                            <img src="https://civi.uxper.co/wp-content/uploads/2022/12/633e0700e8fb630be246f1f9_Untitled-3-p-500.png" alt="" />
                                                        </div>
                                                        <div class="detail">
                                                            <div class="name">
                                                                <span class="uname">Candidate</span>
                                                                <span class="date">2 weeks ago</span>
                                                            </div>
                                                            <div class="desc">
                                                                gy                </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-user " data-mess-id="6225">
                                                        <div class="thumb">
                                                            <img src="https://civi.uxper.co/wp-content/uploads/2022/12/633e0700e8fb630be246f1f9_Untitled-3-p-500.png" alt="" />
                                                        </div>
                                                        <div class="detail">
                                                            <div class="name">
                                                                <span class="uname">Candidate</span>
                                                                <span class="date">4 weeks ago</span>
                                                            </div>
                                                            <div class="desc">
                                                                dđ                </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-user " data-mess-id="6222">
                                                        <div class="thumb">
                                                            <img src="https://civi.uxper.co/wp-content/uploads/2022/12/633e0700e8fb630be246f1f9_Untitled-3-p-500.png" alt="" />
                                                        </div>
                                                        <div class="detail">
                                                            <div class="name">
                                                                <span class="uname">Candidate</span>
                                                                <span class="date">4 weeks ago</span>
                                                            </div>
                                                            <div class="desc">
                                                                www                </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-user " data-mess-id="6212">
                                                        <div class="thumb">
                                                            <img src="https://civi.uxper.co/wp-content/uploads/2022/12/633e0700e8fb630be246f1f9_Untitled-3-p-500.png" alt="" />
                                                        </div>
                                                        <div class="detail">
                                                            <div class="name">
                                                                <span class="uname">Candidate</span>
                                                                <span class="date">4 weeks ago</span>
                                                            </div>
                                                            <div class="desc">
                                                                22                </div>
                                                        </div>
                                                    </li>
                                                </ul>        </div>
                                            <div class="tab-info" id="tab-unread" style={{ display: ' none' }}>
                                                <ul>
                                                </ul>        </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="mess-content">
                                    <div class="mess-content__head">
                                        <div class="left">
                                            <div class="thumb">
                                                <img src="https://civi.uxper.co/wp-content/uploads/2022/10/Messi-1.webp" alt="" />
                                            </div>
                                            <div class="detail">
                                                <div class="name">
                                                    <span class="uname">Messi</span>
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
                                        <div class="card-mess card-send">
                                            <div class="thumb">
                                                <img src="https://civi.uxper.co/wp-content/uploads/2023/02/man-156584__340.webp" alt="" />
                                            </div>
                                            <div class="detail">
                                                <div class="name">
                                                    <span class="uname">You</span>
                                                    <span class="date">March 5, 2023, 8:59 pm</span>
                                                </div>
                                                <div class="desc">
                                                    test        </div>
                                            </div>
                                        </div>
                                        <div class="card-mess card-send">
                                            <div class="thumb">
                                                <div class="thumb">
                                                    <img src="https://civi.uxper.co/wp-content/uploads/2023/02/man-156584__340.webp" alt="" />
                                                </div>
                                            </div>
                                            <div class="detail">
                                                <div class="name">
                                                    <span class="uname">You</span>
                                                    <span class="date">March 5, 2023, 8:59 pm</span>
                                                </div>
                                                <div class="desc">
                                                    dsdfdf                </div>
                                            </div>
                                        </div>
                                        <div class="card-mess card-send">
                                            <div class="thumb">
                                                <div class="thumb">
                                                    <img src="https://civi.uxper.co/wp-content/uploads/2023/02/man-156584__340.webp" alt="" />
                                                </div>
                                            </div>
                                            <div class="detail">
                                                <div class="name">
                                                    <span class="uname">You</span>
                                                    <span class="date">March 5, 2023, 8:59 pm</span>
                                                </div>
                                                <div class="desc">
                                                    fghshtsdrfhtdfh                </div>
                                            </div>
                                        </div>
                                        <div class="card-mess card-send">
                                            <div class="thumb">
                                                <div class="thumb">
                                                    <img src="https://civi.uxper.co/wp-content/uploads/2023/02/man-156584__340.webp" alt="" />
                                                </div>
                                            </div>
                                            <div class="detail">
                                                <div class="name">
                                                    <span class="uname">You</span>
                                                    <span class="date">March 5, 2023, 8:59 pm</span>
                                                </div>
                                                <div class="desc">
                                                    bgh                </div>
                                            </div>
                                        </div>
                                        <div class="card-mess card-send">
                                            <div class="thumb">
                                                <div class="thumb">
                                                    <img src="https://civi.uxper.co/wp-content/uploads/2023/02/man-156584__340.webp" alt="" />
                                                </div>
                                            </div>
                                            <div class="detail">
                                                <div class="name">
                                                    <span class="uname">You</span>
                                                    <span class="date">March 5, 2023, 8:59 pm</span>
                                                </div>
                                                <div class="desc">
                                                    test                </div>
                                            </div>
                                        </div>
                                        <div class="card-mess card-send">
                                            <div class="thumb">
                                                <div class="thumb">
                                                    <img src="https://civi.uxper.co/wp-content/uploads/2023/02/man-156584__340.webp" alt="" />
                                                </div>
                                            </div>
                                            <div class="detail">
                                                <div class="name">
                                                    <span class="uname">You</span>
                                                    <span class="date">March 5, 2023, 8:59 pm</span>
                                                </div>
                                                <div class="desc">
                                                    fdfsdf                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mess-content__action">
                                        <textarea placeholder="Write your message" name="uxper_send_mess"></textarea>
                                        <button id="btn-write-message">
                                            Send    <span class="btn-loading"><i class="la la-circle-notch la-spin large"></i></span>
                                        </button>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div></div>
            </div>

        </div>
    )
}

export default Message
