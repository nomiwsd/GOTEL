import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import './Companydetails.css'
function Companydetails() {
    const [SearchBar, setSearchBar] = useState(false)
    return (
        <div className='companysection row d-flex m-0 p-0'>
            <div className=" d-none d-md-block col-md-3 col-lg-2  m-0 p-0"><Sidebar /></div>
            <div className="col-12 col-md-9 col-lg-10 h-100"><Navbar />
                <div id="main" class="site-main" role="main">
                    <div class="entry-my-page company-dashboard">
                        <div class="entry-title d-flex justify-content-between my-2">
                            <h4>Companies</h4>
                            <div className="search d-none d-md-block border-1 rounded-4 p-1">
                                <input type="text" placeholder="Search..." value={SearchBar} onChange={(e) => {
                                    setSearchBar(e.target.value);
                                }} />
                                <SearchOutlinedIcon />
                            </div>
                        </div>
                        <div class="table-dashboard-wapper">
                            <table class="table-dashboard" id="my-company">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Category</th>
                                        <th>Active Jobs</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="info-user">
                                            <a href="https://civi.uxper.co/companies/software/uxper/">
                                                <img src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="Uxper" />
                                            </a>
                                            <div class="info-details">
                                                <h4 className='companyname text-center m-0'><a href="https://civi.uxper.co/companies/software/uxper/">Uxper</a></h4>
                                                <p>
                                                    <span>New York</span>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="label label-open">Opening</span>
                                        </td>
                                        <td>
                                            <span class="cate">
                                                <span>Software</span>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="active-jobs">12</span>
                                        </td>
                                        <td class="action-setting company-control">
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
                                        <td class="info-user">
                                            <a href="https://civi.uxper.co/companies/software/uxper/">
                                                <img src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="Uxper" />
                                            </a>
                                            <div class="info-details">
                                                <h4 className='companyname text-center m-0'><a href="https://civi.uxper.co/companies/software/uxper/">Uxper</a></h4>
                                                <p>
                                                    <span>New York</span>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="label label-open">Opening</span>
                                        </td>
                                        <td>
                                            <span class="cate">
                                                <span>Software</span>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="active-jobs">12</span>
                                        </td>
                                        <td class="action-setting company-control">
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
                                        <td class="info-user">
                                            <a href="https://civi.uxper.co/companies/software/uxper/">
                                                <img src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="Uxper" />
                                            </a>
                                            <div class="info-details">
                                                <h4 className='companyname text-center m-0'><a href="https://civi.uxper.co/companies/software/uxper/">Uxper</a></h4>
                                                <p>
                                                    <span>New York</span>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="label label-open">Opening</span>
                                        </td>
                                        <td>
                                            <span class="cate">
                                                <span>Software</span>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="active-jobs">12</span>
                                        </td>
                                        <td class="action-setting company-control">
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
                                        <td class="info-user">
                                            <a href="https://civi.uxper.co/companies/software/uxper/">
                                                <img src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="Uxper" />
                                            </a>
                                            <div class="info-details">
                                                <h4 className='companyname text-center m-0'><a href="https://civi.uxper.co/companies/software/uxper/">Uxper</a></h4>
                                                <p>
                                                    <span>New York</span>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="label label-open">Opening</span>
                                        </td>
                                        <td>
                                            <span class="cate">
                                                <span>Software</span>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="active-jobs">12</span>
                                        </td>
                                        <td class="action-setting company-control">
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
                                        <td class="info-user">
                                            <a href="https://civi.uxper.co/companies/software/uxper/">
                                                <img src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="Uxper" />
                                            </a>
                                            <div class="info-details">
                                                <h4 className='companyname text-center m-0'><a href="https://civi.uxper.co/companies/software/uxper/">Uxper</a></h4>
                                                <p>
                                                    <span>New York</span>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="label label-open">Opening</span>
                                        </td>
                                        <td>
                                            <span class="cate">
                                                <span>Software</span>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="active-jobs">12</span>
                                        </td>
                                        <td class="action-setting company-control">
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
                                        <td class="info-user">
                                            <a href="https://civi.uxper.co/companies/software/uxper/">
                                                <img src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="Uxper" />
                                            </a>
                                            <div class="info-details">
                                                <h4 className='companyname text-center m-0'><a href="https://civi.uxper.co/companies/software/uxper/">Uxper</a></h4>
                                                <p>
                                                    <span>New York</span>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="label label-open">Opening</span>
                                        </td>
                                        <td>
                                            <span class="cate">
                                                <span>Software</span>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="active-jobs">12</span>
                                        </td>
                                        <td class="action-setting company-control">
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
                                        <td class="info-user">
                                            <a href="https://civi.uxper.co/companies/software/uxper/">
                                                <img src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="Uxper" />
                                            </a>
                                            <div class="info-details">
                                                <h4 className='companyname text-center m-0'><a href="https://civi.uxper.co/companies/software/uxper/">Uxper</a></h4>
                                                <p>
                                                    <span>New York</span>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="label label-open">Opening</span>
                                        </td>
                                        <td>
                                            <span class="cate">
                                                <span>Software</span>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="active-jobs">12</span>
                                        </td>
                                        <td class="action-setting company-control">
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
                                        <td class="info-user">
                                            <a href="https://civi.uxper.co/companies/software/uxper/">
                                                <img src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="Uxper" />
                                            </a>
                                            <div class="info-details">
                                                <h4 className='companyname text-center m-0'><a href="https://civi.uxper.co/companies/software/uxper/">Uxper</a></h4>
                                                <p>
                                                    <span>New York</span>
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="label label-open">Opening</span>
                                        </td>
                                        <td>
                                            <span class="cate">
                                                <span>Software</span>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="active-jobs">12</span>
                                        </td>
                                        <td class="action-setting company-control">
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
                        <a href="https://civi.uxper.co/submit-company/" class="civi-button col-lg-3">
                            Add new company        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Companydetails
