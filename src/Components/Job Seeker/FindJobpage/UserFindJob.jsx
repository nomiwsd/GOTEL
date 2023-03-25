import React from 'react'
import './UserFindJob.css'
import { FiFilter } from 'react-icons/fi'
import CompanyNavbar from '../Navbar/JobSeekerNavbar'
import CompanySidebar from '../Sidebar/JobSeekerSidebar'
import { Link } from 'react-router-dom'
import { TfiSearch } from 'react-icons/tfi'
import { TbFolder } from 'react-icons/tb'
import { SlLocationPin } from 'react-icons/sl'
import { MdOutlineFeaturedPlayList } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
function UserFindJob() {
    return (
        <div>
            <div className="home d-flex w-100 position-relative">
                <div className=" d-none d-md-block col-md-3 col-lg-2 "><CompanySidebar /></div>
                <div className="col-12 col-md-9 col-lg-10 h-100"><CompanyNavbar />
                    <div className="row m-0 p-0 bg-findjob">
                        <div className='py-3 px-3 d-block '>
                            <h2 className="mainheading">Find your Dream Job Here</h2>
                            <div className="row m-0 p-0 smallsearchbar py-2">
                                <div className="col-lg-3 col-12 formgroup">
                                    <TfiSearch className='mx-1  fs-4' />
                                    <input type="text" placeholder='Job title or keywords' />
                                </div>
                                <div className="col-lg-3 col-12 formgroup">
                                    <SlLocationPin className='mx-1 fs-4' />
                                    <select name="jobs-location" className="smalloptionselect" >
                                        <option value="">All Location</option>                            <option value="37">Boston</option>
                                        <option value="40">California</option>
                                        <option value="46">Chicago</option>
                                        <option value="86">New York</option>
                                        <option value="94">San Francisco</option>
                                        <option value="96">Seatle</option>
                                    </select>
                                </div   >
                                <div className="col-lg-3  col-12 formgroup">
                                    <TbFolder className='mx-1 fs-4' />
                                    <select name="jobs-categories" className="smalloptionselect"  >
                                        <option value="">All Categories</option>                            <option value="168">Analytics</option>
                                        <option value="50">Customer Service</option>
                                        <option value="57">Design &amp; Creative</option>
                                        <option value="58">Development &amp; IT</option>
                                        <option value="64">Legal &amp; Finance</option>
                                        <option value="76">Marketing &amp; Sales</option>
                                        <option value="90">Product Management</option>
                                        <option value="162">Writing &amp; Translation</option>
                                    </select>
                                </div>
                                <div className="col-lg-2  col-12 d-flex justify-content-center rightgroup my-1 ">
                                    <button type="reset" className='clearbtn my-1 mx-2 d-none d-lg-block'>Clear</button>
                                    <Link to='../Findjob' className='submitbtn col-md-8 mt-2'>
                                        Search
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <button class="btn civibtn d-flex col-1 mx-2 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><FiFilter className='pt-1 fs-4' />Filter</button>

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

                                    <button className='civibtn offcanvasbtn col-3'>Show Jobs</button> </div>
                            </div>
                        </div>

                        <div class="jobs-item layout-list civi-jobs-featured jobs-4412 m+x-2">
                            <div class="jobs-archive-header d-flex justify-content-between">
                                <div class="jobs-header-left d-flex justify-content-between">
                                    <img width="80px" height="80px" class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                                    <div class="jobs-left-inner mx-3">
                                        <h3 class="jobs-title"><Link to='../Singlejob'>Sr. Backend Go Developer</Link>
                                        </h3>
                                        <div class="info-company">
                                            by <a class="authour civi-link-bottom" href="https://civi.uxper.co/companies/software/uxper/">Uxper</a> in  <div class="categories-warpper">
                                                <div class="cate-warpper">
                                                    <a href="https://civi.uxper.co/jobs-categories/development-it/" class="cate civi-link-bottom">
                                                        Development &amp; IT    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="jobs-header-right d-flex justify-content-between">
                                    <MdOutlineFeaturedPlayList />

                                    <div class="logged-out mx-2">
                                        <AiOutlineHeart />
                                    </div>
                                </div>
                            </div>
                            <div class="jobs-archive-footer">
                                <div class="jobs-footer-left d-flex">
                                    <a class="label label-type" href="https://civi.uxper.co/jobs-type/remote/">
                                        Remote   </a>
                                    <a class="label label-location d-flex" href="https://civi.uxper.co/jobs-location/san-francisco/">
                                        <GrLocation className='mt-1 fs-5' />   San Francisco        </a>
                                    <div class="label label-price">
                                        $100 - $200/month </div>
                                </div>
                                <div class="jobs-footer-right">
                                    <p class="days">
                                        <span> 142 </span>days left to apply  </p>
                                </div>
                            </div>
                        </div>
                        <div class="jobs-item layout-list civi-jobs-featured jobs-4412 mx-2">
                            <div class="jobs-archive-header d-flex justify-content-between">
                                <div class="jobs-header-left d-flex justify-content-between">
                                    <img width="80px" height="80px" class="logo-comnpany" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                                    <div class="jobs-left-inner mx-3">
                                        <h3 class="jobs-title"><Link to='../Singlejob'>Sr. Backend Go Developer</Link>
                                        </h3>
                                        <div class="info-company">
                                            by <a class="authour civi-link-bottom" href="https://civi.uxper.co/companies/software/uxper/">Uxper</a> in  <div class="categories-warpper">
                                                <div class="cate-warpper">
                                                    <a href="https://civi.uxper.co/jobs-categories/development-it/" class="cate civi-link-bottom">
                                                        Development &amp; IT    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="jobs-header-right d-flex justify-content-between">
                                    <MdOutlineFeaturedPlayList />

                                    <div class="logged-out mx-2">
                                        <AiOutlineHeart />
                                    </div>
                                </div>
                            </div>
                            <div class="jobs-archive-footer">
                                <div class="jobs-footer-left d-flex">
                                    <a class="label label-type" href="https://civi.uxper.co/jobs-type/remote/">
                                        Remote   </a>
                                    <a class="label label-location d-flex" href="https://civi.uxper.co/jobs-location/san-francisco/">
                                        <GrLocation className='mt-1 fs-5' />   San Francisco        </a>
                                    <div class="label label-price">
                                        $100 - $200/month </div>
                                </div>
                                <div class="jobs-footer-right">
                                    <p class="days">
                                        <span> 142 </span>days left to apply  </p>
                                </div>
                            </div>
                        </div></div>
                </div>
            </div>
        </div>
    )
}


export default UserFindJob
