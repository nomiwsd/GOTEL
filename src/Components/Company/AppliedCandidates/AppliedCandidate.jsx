import React, { useState } from 'react'
import CompanyNavbar from '../Navbar/CompanyNavbar'
import CompanySidebar from '../Sidebar/CompanySidebar'
import { FiExternalLink } from 'react-icons/fi'
import { BsChevronRight } from 'react-icons/bs'
import { AiOutlineDownload, AiOutlineMessage } from 'react-icons/ai'
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Select from 'react-select';
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import './AppliedCandidate.css'
const JobCategoryOptions = [
    { value: 'BackEND Developer', label: 'BackEnd Developer' },
    { value: 'Software Engineer', label: 'Software Engineer' },
    { value: 'Content Writer', label: 'Content Writer' },
    { value: 'Product Manager', label: 'Product Manager' },
];

function AppliedCandidate() {

    const [selectedOption, setSelectedOption] = useState(null);
    const [, setVal] = useState("");
    const onChange = (value) => {
        console.log(value);
        setVal(value);
    };
    return (
        <div>
            <div className="home d-flex w-100 position-relative">
                <div className=" d-none d-md-block col-md-3 col-lg-2 "><CompanySidebar /></div>
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
                                        <tr>
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
                                                    <span class="label label-close">Approved</span>                                <span class="applied-time">Applied:2023-03-06</span>
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
                                        </tr>
                                        <tr>
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
                                        </tr>
                                        <tr>
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
                                                    <span class="label label-close">Approved</span>                                <span class="applied-time">Applied:2023-03-06</span>
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
                                        </tr>
                                        <tr>
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
                                        </tr>
                                        <tr>
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
                                                    <span class="label label-close">Approved</span>                                <span class="applied-time">Applied:2023-03-06</span>
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
                                        </tr>
                                        <tr>
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
                                        </tr>
                                        <tr>
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
                                        </tr>
                                        <tr>
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
                                        </tr>
                                        <tr>
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
                                                    <span class="label label-close">Approved</span>                                <span class="applied-time">Applied:2023-03-06</span>
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
                                        </tr>
                                        <tr>
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
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="pagination-dashboard">
            
<div class="civi-pagination dashboard" data-type="number">
            <div class="items-pagination" data-max-number="11">
            <select class="search-control select-pagination nice-select" name="item_amount"  data-value="1">
                <option value="10" selected="">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
            
            <label class="text-pagination">
                <span class="num-first">1</span> - <span class="num-last">10</span> of <span class="num-total">11</span> items        </label></div>
    
            <div class="pagination">
            
                
                    <span class="page-numbers current">1</span>
                
                    <a class="page-numbers" href="https://civi.uxper.co/dashboard/employers/applicants/page/2/">2</a>
                
                    <a class="next page-numbers" href="https://civi.uxper.co/dashboard/employers/applicants/page/2/"><BsChevronRight/></a>
                
                    </div>
    
    
    <input type="hidden" name="paged" value="1"/>
    <input type="hidden" name="current_term" value=""/>
    <input type="hidden" name="type_term" value=""/>
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
