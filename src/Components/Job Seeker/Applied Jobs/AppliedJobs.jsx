import React from 'react'
import JobSeekerSidebar from '../Sidebar/JobSeekerSidebar';
import JobSeekerNavbar from '../Navbar/JobSeekerNavbar';
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { BsChevronRight } from 'react-icons/bs'
import './AppliedJobs.css'
function AppliedJobs() {
    return (
        <div>
            <div className="home d-flex w-100 position-relative">
                <div className=" d-none d-md-block col-md-3 col-lg-2 "><JobSeekerSidebar /></div>
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
                                    <table class="table-dashboard" id="my-apply" >
                                        <thead>
                                            <tr>
                                                <th>Job Title</th>
                                                <th>Status</th>
                                                <th>Date Applied</th>
                                            </tr>
                                        </thead>
                                        <tbody >                    <tr>
                                            <td>
                                                <div class="company-header">
                                                    <div class="img-comnpany">
                                                        <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/nightfall-logo.webp" alt="" />
                                                    </div>
                                                    <div class="info-jobs">
                                                        <h3 class="title-jobs-dashboard">
                                                            <a href="https://civi.uxper.co/jobs/design-creative/ux-ui-designer/">
                                                                UX/UI Designer                                        </a>
                                                        </h3>
                                                        <p>
                                                            Design &amp; Creative                                                                                                                                    / Remote                                                                                                                                    / California                                                                                </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="status">
                                                    <span class="label label-close">Rejected</span>                        </td>
                                            <td class="table-time">
                                                <span class="start-time">2023-03-07</span>
                                            </td>
                                            <td class="action-setting jobs-control" style={{ zIndex: '2' }}>
                                                <div class="btn-group dropend">
                                                    <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <HiOutlineDotsHorizontal />
                                                    </button>
                                                    <ul class="dropdown-menu dropdownmenu">
                                                        <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/development-it/sr-backend-go-developer-crypto-industry/">
                                                                    Sr. Backend Go Developer                                        </a>
                                                            </h3>
                                                            <p>
                                                                Development &amp; IT                                                                                                                                                                            / San Francisco                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="status">
                                                    <span class="label label-close">Rejected</span>                        </td>
                                                <td class="table-time">
                                                    <span class="start-time">2023-03-06</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/legal-finance/head-of-analytics-engineering-2/">
                                                                    Head of Analytics Engineering                                        </a>
                                                            </h3>
                                                            <p>
                                                                Legal &amp; Finance                                             / Full Time                                                 / Chicago                          </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="status">
                                                    <span class="label label-pending">Pending</span>                        </td>
                                                <td class="table-time">
                                                    <span class="start-time">2023-03-06</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/10up-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/product-management/product-manager/">
                                                                    Product Manager                                        </a>
                                                            </h3>
                                                            <p>
                                                                Product Management                                               / Full Time                                                   / Chicago                       </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="status">
                                                    <span class="label label-pending">Pending</span>                        </td>
                                                <td class="table-time">
                                                    <span class="start-time">2023-03-05</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <div class="logo-comnpany"><i class="far fa-camera"></i></div>
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/applicants/product-manager/">
                                                                    Product Manager                                        </a>
                                                            </h3>
                                                            <p>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="status">
                                                    <span class="label label-pending">Pending</span>                        </td>
                                                <td class="table-time">
                                                    <span class="start-time">2023-03-05</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/10up-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/development-it/integration-engineer/">
                                                                    Integration Engineer                                        </a>
                                                            </h3>
                                                            <p>
                                                                Development &amp; IT                                                                                                                                    / Remote                                                                                                                                    / California                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="status">
                                                    <span class="label label-pending">Pending</span>                        </td>
                                                <td class="table-time">
                                                    <span class="start-time">2023-03-05</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/descript-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/product-management/vp-of-product/">
                                                                    VP of Product                                        </a>
                                                            </h3>
                                                            <p>
                                                                Product Management                                                                                                                                    / Full Time                                                                                                                                    / Seatle                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="status">
                                                    <span class="label label-pending">Pending</span>                        </td>
                                                <td class="table-time">
                                                    <span class="start-time">2023-03-04</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/descript-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/development-it/senior-frontend-engineer/">
                                                                    Senior Frontend Engineer                                        </a>
                                                            </h3>
                                                            <p>
                                                                Development &amp; IT                                                                                                                                    / Full Time                                                                                                                                    / Chicago                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="status">
                                                    <span class="label label-pending">Pending</span>                        </td>
                                                <td class="table-time">
                                                    <span class="start-time">2023-03-04</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/superside-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/development-it/sourcing-manager/">
                                                                    Sourcing Manager                                        </a>
                                                            </h3>
                                                            <p>
                                                                Development &amp; IT                                                                                                                                    / Remote                                                                                                                                    / Seatle                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="status">
                                                    <span class="label label-pending">Pending</span>                        </td>
                                                <td class="table-time">
                                                    <span class="start-time">2023-03-03</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/descript-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/marketing-sales/senior-product-marketing-manager/">
                                                                    Senior Product Marketing Manager                                        </a>
                                                            </h3>
                                                            <p>
                                                                Marketing &amp; Sales                                                                                                                                    / Full Time                                                                                                                                    / Chicago                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="status">
                                                    <span class="label label-pending">Pending</span>                        </td>
                                                <td class="table-time">
                                                    <span class="start-time">2023-03-03</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/nightfall-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/design-creative/ux-ui-designer/">
                                                                    UX/UI Designer                                        </a>
                                                            </h3>
                                                            <p>
                                                                Design &amp; Creative                                                                                                                                    / Remote                                                                                                                                    / California                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="status">
                                                    <span class="label label-pending">Pending</span>                        </td>
                                                <td class="table-time">
                                                    <span class="start-time">2023-03-01</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/development-it/sr-backend-go-developer-crypto-industry/">
                                                                    Sr. Backend Go Developer                                        </a>
                                                            </h3>
                                                            <p>
                                                                Development &amp; IT                                                                                                                                                                            / San Francisco                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="status">
                                                    <span class="label label-open">Approved</span>                        </td>
                                                <td class="table-time">
                                                    <span class="start-time">2023-02-25</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/?post_type=jobs&amp;p=2264">
                                                                    Blockchain Engineer                                        </a>
                                                            </h3>
                                                            <p>
                                                                Development &amp; IT                                                                                                                                    / Full Time                                                                                                                                    / New York                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="status">
                                                    <span class="label label-close">Rejected</span>                        </td>
                                                <td class="table-time">
                                                    <span class="start-time">2023-02-24</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/legal-finance/head-of-analytics-engineering-2/">
                                                                    Head of Analytics Engineering                                        </a>
                                                            </h3>
                                                            <p>
                                                                Legal &amp; Finance                                                                                                                                    / Full Time                                                                                                                                    / Chicago                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="status">
                                                    <span class="label label-open">Approved</span>                        </td>
                                                <td class="table-time">
                                                    <span class="start-time">2023-02-24</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/?post_type=jobs&amp;p=2264">
                                                                    Blockchain Engineer                                        </a>
                                                            </h3>
                                                            <p>
                                                                Development &amp; IT                                                                                                                                    / Full Time                                                                                                                                    / New York                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="status">
                                                    <span class="label label-open">Approved</span>                        </td>
                                                <td class="table-time">
                                                    <span class="start-time">2023-02-24</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/descript-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/marketing-sales/senior-product-marketing-manager/">
                                                                    Senior Product Marketing Manager                                        </a>
                                                            </h3>
                                                            <p>
                                                                Marketing &amp; Sales                                                                                                                                    / Full Time                                                                                                                                    / Chicago                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="status">
                                                    <span class="label label-pending">Pending</span>                        </td>
                                                <td class="table-time">
                                                    <span class="start-time">2023-02-23</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/superside-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/development-it/backend-engineer-devops/">
                                                                    Backend Engineer, DevOps                                        </a>
                                                            </h3>
                                                            <p>
                                                                Development &amp; IT                                                                                                                                    / Full Time                                                                                                                                    / Seatle                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="status">
                                                    <span class="label label-pending">Pending</span>                        </td>
                                                <td class="table-time">
                                                    <span class="start-time">2023-02-20</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/cleo-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/legal-finance/field-marketing-manager/">
                                                                    Field Marketing Manager                                        </a>
                                                            </h3>
                                                            <p>
                                                                Legal &amp; Finance                                                                                                                                    / Remote                                                                                                                                    / Seatle                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="status">
                                                    <span class="label label-pending">Pending</span>                        </td>
                                                <td class="table-time">
                                                    <span class="start-time">2023-02-20</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/mercury-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/design-creative/senior-website-product-manager/">
                                                                    Senior Website Product Manager                                        </a>
                                                            </h3>
                                                            <p>
                                                                Design &amp; Creative                                                                                                                                    / Remote                                                                                                                                    / San Francisco                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="status">
                                                    <span class="label label-pending">Pending</span>                        </td>
                                                <td class="table-time">
                                                    <span class="start-time">2023-02-20</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/development-it/sr-backend-go-developer-crypto-industry/">
                                                                    Sr. Backend Go Developer                                        </a>
                                                            </h3>
                                                            <p>
                                                                Development &amp; IT                                                               / San Francisco             </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="status">
                                                    <span class="label label-close">Rejected</span>                        </td>
                                                <td class="table-time">
                                                    <span class="start-time">2023-02-18</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="tab-pane fade show active" id="nav-Wishlist" role="tabpanel" aria-labelledby="nav-Wishlist-tab">
                                <table class="table-dashboard" id="my-apply" >
                                        <thead>
                                            <tr>
                                                <th>Job Title</th>
                                                <th>Posted Date</th>
                                            </tr>
                                        </thead>
                                        <tbody >                
                                            <tr>
                                            <td>
                                                <div class="company-header">
                                                    <div class="img-comnpany">
                                                        <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/nightfall-logo.webp" alt="" />
                                                    </div>
                                                    <div class="info-jobs">
                                                        <h3 class="title-jobs-dashboard">
                                                            <a href="https://civi.uxper.co/jobs/design-creative/ux-ui-designer/">
                                                                UX/UI Designer                                        </a>
                                                        </h3>
                                                        <p>
                                                            Design &amp; Creative                                                                                                                                    / Remote                                                                                                                                    / California                                                                                </p>
                                                    </div>
                                                </div>
                                            </td>
                                           
                                            <td class="table-time">
                                                <span class="start-time">2023-03-07</span>
                                            </td>
                                            <td class="action-setting jobs-control" style={{ zIndex: '2' }}>
                                                <div class="btn-group dropend">
                                                    <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <HiOutlineDotsHorizontal />
                                                    </button>
                                                    <ul class="dropdown-menu dropdownmenu">
                                                        <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/development-it/sr-backend-go-developer-crypto-industry/">
                                                                    Sr. Backend Go Developer    </a>
                                                            </h3>
                                                            <p>
                                                                Development &amp; IT             / San Francisco            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                        
                                                <td class="table-time">
                                                    <span class="start-time">2023-03-06</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/legal-finance/head-of-analytics-engineering-2/">
                                                                    Head of Analytics Engineering                                        </a>
                                                            </h3>
                                                            <p>
                                                                Legal &amp; Finance                                             / Full Time                                                 / Chicago                          </p>
                                                        </div>
                                                    </div>
                                                </td>
                                              
                                                <td class="table-time">
                                                    <span class="start-time">2023-03-06</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/10up-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/product-management/product-manager/">
                                                                    Product Manager                                        </a>
                                                            </h3>
                                                            <p>
                                                                Product Management                                               / Full Time                                                   / Chicago                       </p>
                                                        </div>
                                                    </div>
                                                </td>
                                               
                                                <td class="table-time">
                                                    <span class="start-time">2023-03-05</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <div class="logo-comnpany"><i class="far fa-camera"></i></div>
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/applicants/product-manager/">
                                                                    Product Manager    </a>
                                                            </h3>
                                                            <p>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                               
                                                <td class="table-time">
                                                    <span class="start-time">2023-03-05</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/10up-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/development-it/integration-engineer/">
                                                                    Integration Engineer                                        </a>
                                                            </h3>
                                                            <p>
                                                                Development &amp; IT                / Remote              / California         </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="table-time">
                                                    <span class="start-time">2023-03-05</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/descript-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/product-management/vp-of-product/">
                                                                    VP of Product                                        </a>
                                                            </h3>
                                                            <p>
                                                                Product Management                                                                                                                                    / Full Time                                                                                                                                    / Seatle                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                          
                                                <td class="table-time">
                                                    <span class="start-time">2023-03-04</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/descript-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/development-it/senior-frontend-engineer/">
                                                                    Senior Frontend Engineer                                        </a>
                                                            </h3>
                                                            <p>
                                                                Development &amp; IT                                                                                                                                    / Full Time                                                                                                                                    / Chicago                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                
                                                <td class="table-time">
                                                    <span class="start-time">2023-03-04</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/superside-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/development-it/sourcing-manager/">
                                                                    Sourcing Manager                                        </a>
                                                            </h3>
                                                            <p>
                                                                Development &amp; IT                                                                                                                                    / Remote                                                                                                                                    / Seatle                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                
                                                <td class="table-time">
                                                    <span class="start-time">2023-03-03</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/descript-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/marketing-sales/senior-product-marketing-manager/">
                                                                    Senior Product Marketing Manager                                        </a>
                                                            </h3>
                                                            <p>
                                                                Marketing &amp; Sales                                                                                                                                    / Full Time                                                                                                                                    / Chicago                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                              
                                                <td class="table-time">
                                                    <span class="start-time">2023-03-03</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/nightfall-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/design-creative/ux-ui-designer/">
                                                                    UX/UI Designer                                        </a>
                                                            </h3>
                                                            <p>
                                                                Design &amp; Creative                                                                                                                                    / Remote                                                                                                                                    / California                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                
                                                <td class="table-time">
                                                    <span class="start-time">2023-03-01</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/development-it/sr-backend-go-developer-crypto-industry/">
                                                                    Sr. Backend Go Developer                                        </a>
                                                            </h3>
                                                            <p>
                                                                Development &amp; IT                                                                                                                                                                            / San Francisco                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                              
                                                <td class="table-time">
                                                    <span class="start-time">2023-02-25</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/?post_type=jobs&amp;p=2264">
                                                                    Blockchain Engineer                                        </a>
                                                            </h3>
                                                            <p>
                                                                Development &amp; IT                                                                                                                                    / Full Time                                                                                                                                    / New York                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                               
                                                <td class="table-time">
                                                    <span class="start-time">2023-02-24</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/legal-finance/head-of-analytics-engineering-2/">
                                                                    Head of Analytics Engineering                                        </a>
                                                            </h3>
                                                            <p>
                                                                Legal &amp; Finance                                                                                                                                    / Full Time                                                                                                                                    / Chicago                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                               
                                                <td class="table-time">
                                                    <span class="start-time">2023-02-24</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/?post_type=jobs&amp;p=2264">
                                                                    Blockchain Engineer                                        </a>
                                                            </h3>
                                                            <p>
                                                                Development &amp; IT                                                                                                                                    / Full Time                                                                                                                                    / New York                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                              
                                                <td class="table-time">
                                                    <span class="start-time">2023-02-24</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/descript-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/marketing-sales/senior-product-marketing-manager/">
                                                                    Senior Product Marketing Manager                                        </a>
                                                            </h3>
                                                            <p>
                                                                Marketing &amp; Sales                                                                                                                                    / Full Time                                                                                                                                    / Chicago                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            
                                                <td class="table-time">
                                                    <span class="start-time">2023-02-23</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/superside-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/development-it/backend-engineer-devops/">
                                                                    Backend Engineer, DevOps                                        </a>
                                                            </h3>
                                                            <p>
                                                                Development &amp; IT                                                                                                                                    / Full Time                                                                                                                                    / Seatle                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                               
                                                <td class="table-time">
                                                    <span class="start-time">2023-02-20</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/cleo-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/legal-finance/field-marketing-manager/">
                                                                    Field Marketing Manager                                        </a>
                                                            </h3>
                                                            <p>
                                                                Legal &amp; Finance                                                                                                                                    / Remote                                                                                                                                    / Seatle                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                               
                                                <td class="table-time">
                                                    <span class="start-time">2023-02-20</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/10/mercury-logo.webp" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/design-creative/senior-website-product-manager/">
                                                                    Senior Website Product Manager                                        </a>
                                                            </h3>
                                                            <p>
                                                                Design &amp; Creative                                                                                                                                    / Remote                                                                                                                                    / San Francisco                                                                                </p>
                                                        </div>
                                                    </div>
                                                </td>
                                               
                                                <td class="table-time">
                                                    <span class="start-time">2023-02-20</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="company-header">
                                                        <div class="img-comnpany">
                                                            <img class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                                                        </div>
                                                        <div class="info-jobs">
                                                            <h3 class="title-jobs-dashboard">
                                                                <a href="https://civi.uxper.co/jobs/development-it/sr-backend-go-developer-crypto-industry/">
                                                                    Sr. Backend Go Developer                                        </a>
                                                            </h3>
                                                            <p>
                                                                Development &amp; IT                                                               / San Francisco             </p>
                                                        </div>
                                                    </div>
                                                </td>
                                              
                                                <td class="table-time">
                                                    <span class="start-time">2023-02-18</span>
                                                </td>
                                                <td class="action-setting jobs-control" style={{ zIndex: '1' }}>
                                                    <div class="btn-group dropend">
                                                        <button type="button" className="editdelete" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <HiOutlineDotsHorizontal />
                                                        </button>
                                                        <ul class="dropdown-menu dropdownmenu">
                                                            <li><a class="dropdown-item" href="#sf">Delete</a></li>
                                                        </ul></div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div></div>
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

                                        <a class="page-numbers" href="https://civi.uxper.co/dashboard/employers/applicants/page/2/">2</a>

                                        <a class="next page-numbers" href="https://civi.uxper.co/dashboard/employers/applicants/page/2/"><BsChevronRight /></a>

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
