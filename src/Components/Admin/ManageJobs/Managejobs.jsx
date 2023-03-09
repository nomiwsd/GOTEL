import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import './Managejobs.css'
function Managejobs() {
    return (
        <div>
            <div className='jobpostsection row d-flex m-0 p-0'>
                <div className="sidebarborder d-none d-md-block col-md-3 col-lg-2  m-0 p-0 h-100"><Sidebar /></div>
                <div className=" col-12 col-md-9 col-lg-10 h-100 p-0 m-0"><Navbar />
                    <div className="bg-color px-3 py-2">
                        <div class="entry-title d-flex my-2">
                            <h4>Manage Jobs</h4>
                        </div>
                        <div className="row d-flex m-0 p-0">
                            <div class="select-box  m-0 p-0 me-2 col-lg-6">
                                <div class="select-box__current " tabindex="1">
                                    <div class="select-box__value">
                                        <input class="select-box__input" type="radio" id="0" value="1" name="Ben" checked="checked" />
                                        <p class="select-box__input-text ">All Jobs</p>
                                    </div>
                                    <div class="select-box__value">
                                        <input class="select-box__input" type="radio" id="1" value="2" name="Ben" />
                                        <p class="select-box__input-text">Opened</p>
                                    </div>
                                    <div class="select-box__value">
                                        <input class="select-box__input" type="radio" id="2" value="3" name="Ben" />
                                        <p class="select-box__input-text">Closed</p>
                                    </div>

                                    <img class="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true" />
                                </div>
                                <ul class="select-box__list">
                                    <li>
                                        <label class="select-box__option" for="0" aria-hidden="true">All Jobs</label>
                                    </li>
                                    <li>
                                        <label class="select-box__option" for="1" aria-hidden="true">Opened</label>
                                    </li>
                                    <li>
                                        <label class="select-box__option" for="2" aria-hidden="true">Closed</label>
                                    </li>
                                </ul>
                            </div>
                            <div className="searchdiv d-none d-md-flex col-3 border-1 rounded-1 p-0">

                                <input type="text" placeholder="Find By Job" className='px-2 w-100 searchinput' />
                                <SearchOutlinedIcon className='fs-3 mt-2 searchicon' />
                            </div>

                        </div>
                        <div className="table my-5">
                            <div class="table-dashboard-wapper mx-2">
                                <table class="table-dashboard" id="my-jobs">
                                    <thead>
                                        <tr>
                                            <th>TITLE</th>
                                            <th>APPLICANTS</th>
                                            <th>STATUS</th>
                                            <th>POSTED</th>
                                            <th>EXPIRED</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h3 class="title-jobs-dashboard">
                                                    jobs 01
                                                </h3>
                                                <p>
                                                    Customer Service                                                                                                                                / Internship                                                                                                                    </p>
                                            </td>
                                            <td>
                                                <div class="number-applicant">
                                                    <span class="number">0</span>
                                                    <span>Application</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span class="label label-pending">Pending</span>
                                            </td>
                                            <td>
                                                <span class="start-time">2023-03-02</span>
                                            </td>
                                            <td>
                                                <span class="expires-time">
                                                    2023-04-01                                                                            </span>
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
                                        <tr>
                                            <td>
                                                <h3 class="title-jobs-dashboard">
                                                    21321
                                                </h3>
                                                <p>
                                                    Customer Service                                                                                                                                / Internship                                                                                                                    </p>
                                            </td>
                                            <td>
                                                <div class="number-applicant">
                                                    <span class="number">0</span>
                                                    <span>Application</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span class="label label-pending">Pending</span>
                                            </td>
                                            <td>
                                                <span class="start-time">2023-03-02</span>
                                            </td>
                                            <td>
                                                <span class="expires-time">
                                                    2023-04-01                                                                            </span>
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


                                    </tbody>
                                </table>
                                <div class="civi-loading-effect"><span class="civi-dual-ring"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Managejobs