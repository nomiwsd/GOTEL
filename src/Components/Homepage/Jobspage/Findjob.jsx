import React from 'react'
import './Findjob.css'
import { TbFolder, TbList } from 'react-icons/tb'
import { SlLocationPin } from 'react-icons/sl'
import { IoSync } from 'react-icons/io5'
import { FaBorderAll } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import { TfiSearch } from 'react-icons/tfi'
import { FiFilter } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Header from '../Header'


function Findjob() {
    return (
        <div className='findjob'>
           <Header/> 
            <div className="d-block d-lg-none">
                    <div className="smallcontent">
                        <div className='py-3 px-3 d-flex flex-column justify-content-center align-items-center'>
                            <h2 className="mainheading text-white">Find your Dream Job Here</h2>
                            <div className="row m-0 p-0 smallsearchbar py-2">
                                <div className="col-12 d-flex formgroup p-0">
                                    <TfiSearch className='mx-3 mt-2 fs-3' />
                                    <input type="text" placeholder='Job title or keywords' />
                                </div>
                                <div className="col-12 d-flex formgroup my-2 p-0">
                                    <SlLocationPin className='mx-3 mt-2 fs-4' />
                                    <select class="selectpicker form-control">
                                        <option selected>All Location</option>
                                        <option value="1">Boston</option>
                                        <option value="2">California</option>
                                        <option value="3">Chicago</option>
                                        <option value="4">New York</option>
                                        <option value="5">Pakistan</option>
                                        <option value="6">Seatle</option>
                                    </select>
                                </div>
                                <div className="col-12 d-flex formgroup  p-0">
                                    <TbFolder className='mx-3 mt-2 fs-4' />
                                    <select class="selectpicker form-control">
                                        <option selected>All Categories</option>
                                        <option value="1">Analytics</option>
                                        <option value="2">Customer Service</option>
                                        <option value="3">Design &amp; Creative</option>
                                        <option value="4">Development &amp; IT</option>
                                        <option value="5">Legal &amp; Finance</option>
                                        <option value="6">Marketing &amp; Sales</option>
                                        <option value="7">Product Management</option>
                                        <option value="8">Writing &amp; Translation</option>
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
                    
                </div>
            <div className="findjob d-none d-lg-block">
                    <div className='container py-3 mb-5 '>
                        <h2 className="mainheading text-center">Find your Dream Job Here</h2>
                        <div className="row m-0 p-0 searchbar ">
                            <div className="col-lg-3 col-md-6 formgroup searchinput my-1">
                                <TfiSearch className='mt-2 mx-1 fs-4' />
                                <input type="text" placeholder='Job title or keywords' />
                            </div>
                            <div className="col-lg-3 col-md-6  formgroup my-1">
                                <SlLocationPin className='mt-1 mx-1 fs-4' />
                                <select name="jobs-location" className="optionselect" >
                                    <option value="">All Location</option>                          
                                    <option value="37">Boston</option>
                                    <option value="40">California</option>
                                    <option value="46">Chicago</option>
                                    <option value="86">New York</option>
                                    <option value="94">Pakistan</option>
                                    <option value="96">Seatle</option>
                                </select>
                            </div>
                            <div className="col-lg-3 col-md-6  formgroup my-1">
                                <TbFolder className='my-1 fs-4' />
                                <select name="jobs-categories" className="optionselect"  >
                                    <option value="">All Categories</option>
                                    <option value="168">Analytics</option>
                                    <option value="50">Customer Service</option>
                                    <option value="57">Design &amp; Creative</option>
                                    <option value="58">Development &amp; IT</option>
                                    <option value="64">Legal &amp; Finance</option>
                                    <option value="76">Marketing &amp; Sales</option>
                                    <option value="90">Product Management</option>
                                    <option value="162">Writing &amp; Translation</option>
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
             <div className="row m-0 p-0 d-flex justify-content-between my-5 my-lg-0">
                <div className="d-md-none d-lg-block col-lg-3 px-4">
                    <div class="inner-filter custom-scrollbar d-none d-md-block">
                        <div class="nav-filter ">
                            <div class="filter-toggle">
                                <span>Filter</span>
                            </div>
                            <div class="clear-filter" style={{ display: 'flex' }}>
                                <IoSync className='my-1' />  <span>Clear All</span>
                            </div>
                        </div>
                        <div className="menu-filter">
                            <div className="filter-jobs-type">
                                <div className="entry-filter">
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
                                <div class="entry-filter">
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


                            <div class="filter-jobs-experience">
                                <div class="entry-filter">
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

                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-12 ">
                    <div class="filter-warpper">
                        <div class="entry-left">
                            <div class="btn-canvas-filter hidden-lg-up">
                          <button class="btn civibtn d-flex d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><FiFilter className='pt-1 fs-4' />Filter</button>
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

                                            <button className=' offcanvasbtn'>Show Jobs</button> </div>
                                    </div>
                                </div>


                            </div>
                            <span class="result-count">
                                <span>71</span> Jobs </span>
                        </div>
                        <div class="entry-right d-none d-md-flex">
                            <div class="entry-filter">
                                <div class="civi-clear-filter hidden-lg-up" style={{ display: 'block' }}>
                                    <i class="fal fa-sync"></i>
                                    <span>Clear All</span>
                                </div>
                                <div class="jobs-layout d-none d-lg-flex justify-content-between">
                                    <a class="" href="#fsd" data-layout="layout-grid">
                                        <FaBorderAll className='bordericon' />
                                    </a>
                                    <a class="active" href="#fsd" data-layout="layout-list">
                                        <TbList className='listicon' /></a>
                                </div>
                                <span class="text-sort-by">Sort by</span>
                                <select name="sort_by" class="sort-by filter-control  border-1" >
                                    <option value="newest">Newest</option>
                                    <option value="oldest">Oldest</option>
                                    <option value="featured">Featured</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0 p-0 d-flex  gy-4">
                                <div class="jobs-item layout-list jobs-featured col-lg-10 col-12 ">
                                    <div class="jobs-header d-flex justify-content-between p-0">
                                        <div class="jobs-header-left d-flex justify-content-between p-0">
                                            <img class="logo-company" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                                            <div class="jobs-left-inner mx-3">
                                                <h3 class="jobs-title"><Link to='../Singlejob'>Sr. Backend Go Developer</Link>
                                                </h3>
                                                <div class="info-company d-flex ">
                                                    <p >by <a class="authour civi-link-bottom mx-2" href="https://civi.uxper.co/companies/software/uxper/">Uxper</a> in
                                                        <a href="https://civi.uxper.co/jobs-categories/development-it/" class="cate civi-link-bottom mx-2">
                                                            Development &amp; IT    </a> </p>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="jobs-header-right d-flex justify-content-between">

                                            <div class="logged-out mx-2">
                                                <AiOutlineHeart className='fs-1 mt-2' />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="jobsfooter row  p-0 d-flex justify-content-center ">
                                        <div class="jobs-footer-left col-12  col-lg-12 row ">
                                            <div className="jobtype d-flex justify-content-center align-items-center col-6 col-md-2  col-lg-2 text-center mx-md-4 mx-lg-2 my-2">
                                                <a class="label" href="https://civi.uxper.co/jobs-type/remote/">
                                                    Remote  </a></div>
                                            <div className="label-location d-flex justify-content-center align-items-center col-6 jobs-location col-lg-2 col-md-3">
                                                <GrLocation className='fs-4' />
                                                <a class="  d-flex " href="https://civi.uxper.co/jobs-location/san-francisco/">
                                                    Pakistan</a>
                                            </div>
                                            <div class=" label-price text-dark d-flex justify-content-center align-items-center col-6 col-lg-2 col-md-3 mx-2">
                                                $200/month </div>


                                            <p class="days col-lg-5 col-8 col-md-4  d-flex justify-content-center align-items-center ">
                                                <span className='mx-2'> 142 </span> days left to apply  </p>
                                        </div>
                                    </div>
                                </div>
                             
                                <div class="jobs-item layout-list jobs-featured col-lg-10 col-12 ">
                                    <div class="jobs-header d-flex justify-content-between p-0">
                                        <div class="jobs-header-left d-flex justify-content-between p-0">
                                            <img class="logo-company" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                                            <div class="jobs-left-inner mx-3">
                                                <h3 class="jobs-title"><Link to='../Singlejob'>Sr. Backend Go Developer</Link>
                                                </h3>
                                                <div class="info-company d-flex ">
                                                    <p >by <a class="authour civi-link-bottom mx-2" href="https://civi.uxper.co/companies/software/uxper/">Uxper</a> in
                                                        <a href="https://civi.uxper.co/jobs-categories/development-it/" class="cate civi-link-bottom mx-2">
                                                            Development &amp; IT    </a> </p>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="jobs-header-right d-flex justify-content-between">

                                            <div class="logged-out mx-2">
                                                <AiOutlineHeart className='fs-1 mt-2' />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="jobsfooter row  p-0 d-flex justify-content-center ">
                                        <div class="jobs-footer-left col-12  col-lg-12 row ">
                                            <div className="jobtype d-flex justify-content-center align-items-center col-6 col-md-2  col-lg-2 text-center mx-md-4 mx-lg-2 my-2">
                                                <a class="label" href="https://civi.uxper.co/jobs-type/remote/">
                                                    Remote  </a></div>
                                            <div className="label-location d-flex justify-content-center align-items-center col-6 jobs-location col-lg-2 col-md-3">
                                                <GrLocation className='fs-4' />
                                                <a class="  d-flex " href="https://civi.uxper.co/jobs-location/san-francisco/">
                                                    Pakistan</a>
                                            </div>
                                            <div class=" label-price text-dark d-flex justify-content-center align-items-center col-6 col-lg-2 col-md-3 mx-2">
                                                $200/month </div>


                                            <p class="days col-lg-5 col-8 col-md-4  d-flex justify-content-center align-items-center ">
                                                <span className='mx-2'> 142 </span> days left to apply  </p>
                                        </div>
                                    </div>
                                </div>
                             
                                <div class="jobs-item layout-list jobs-featured col-lg-10 col-12 ">
                                    <div class="jobs-header d-flex justify-content-between p-0">
                                        <div class="jobs-header-left d-flex justify-content-between p-0">
                                            <img class="logo-company" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                                            <div class="jobs-left-inner mx-3">
                                                <h3 class="jobs-title"><Link to='../Singlejob'>Sr. Backend Go Developer</Link>
                                                </h3>
                                                <div class="info-company d-flex ">
                                                    <p >by <a class="authour civi-link-bottom mx-2" href="https://civi.uxper.co/companies/software/uxper/">Uxper</a> in
                                                        <a href="https://civi.uxper.co/jobs-categories/development-it/" class="cate civi-link-bottom mx-2">
                                                            Development &amp; IT    </a> </p>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="jobs-header-right d-flex justify-content-between">

                                            <div class="logged-out mx-2">
                                                <AiOutlineHeart className='fs-1 mt-2' />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="jobsfooter row  p-0 d-flex justify-content-center ">
                                        <div class="jobs-footer-left col-12  col-lg-12 row ">
                                            <div className="jobtype d-flex justify-content-center align-items-center col-6 col-md-2  col-lg-2 text-center mx-md-4 mx-lg-2 my-2">
                                                <a class="label" href="https://civi.uxper.co/jobs-type/remote/">
                                                    Remote  </a></div>
                                            <div className="label-location d-flex justify-content-center align-items-center col-6 jobs-location col-lg-2 col-md-3">
                                                <GrLocation className='fs-4' />
                                                <a class="  d-flex " href="https://civi.uxper.co/jobs-location/san-francisco/">
                                                    Pakistan</a>
                                            </div>
                                            <div class=" label-price text-dark d-flex justify-content-center align-items-center col-6 col-lg-2 col-md-3 mx-2">
                                                $200/month </div>


                                            <p class="days col-lg-5 col-8 col-md-4  d-flex justify-content-center align-items-center ">
                                                <span className='mx-2'> 142 </span> days left to apply  </p>
                                        </div>
                                    </div>
                                </div>
                             
                                <div class="jobs-item layout-list jobs-featured col-lg-10 col-12 ">
                                    <div class="jobs-header d-flex justify-content-between p-0">
                                        <div class="jobs-header-left d-flex justify-content-between p-0">
                                            <img class="logo-company" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                                            <div class="jobs-left-inner mx-3">
                                                <h3 class="jobs-title"><Link to='../Singlejob'>Sr. Backend Go Developer</Link>
                                                </h3>
                                                <div class="info-company d-flex ">
                                                    <p >by <a class="authour civi-link-bottom mx-2" href="https://civi.uxper.co/companies/software/uxper/">Uxper</a> in
                                                        <a href="https://civi.uxper.co/jobs-categories/development-it/" class="cate civi-link-bottom mx-2">
                                                            Development &amp; IT    </a> </p>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="jobs-header-right d-flex justify-content-between">

                                            <div class="logged-out mx-2">
                                                <AiOutlineHeart className='fs-1 mt-2' />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="jobsfooter row  p-0 d-flex justify-content-center ">
                                        <div class="jobs-footer-left col-12  col-lg-12 row ">
                                            <div className="jobtype d-flex justify-content-center align-items-center col-6 col-md-2  col-lg-2 text-center mx-md-4 mx-lg-2 my-2">
                                                <a class="label" href="https://civi.uxper.co/jobs-type/remote/">
                                                    Remote  </a></div>
                                            <div className="label-location d-flex justify-content-center align-items-center col-6 jobs-location col-lg-2 col-md-3">
                                                <GrLocation className='fs-4' />
                                                <a class="  d-flex " href="https://civi.uxper.co/jobs-location/san-francisco/">
                                                    Pakistan</a>
                                            </div>
                                            <div class=" label-price text-dark d-flex justify-content-center align-items-center col-6 col-lg-2 col-md-3 mx-2">
                                                $200/month </div>


                                            <p class="days col-lg-5 col-8 col-md-4  d-flex justify-content-center align-items-center ">
                                                <span className='mx-2'> 142 </span> days left to apply  </p>
                                        </div>
                                    </div>
                                </div>
                             
                                <div class="jobs-item layout-list jobs-featured col-lg-10 col-12 ">
                                    <div class="jobs-header d-flex justify-content-between p-0">
                                        <div class="jobs-header-left d-flex justify-content-between p-0">
                                            <img class="logo-company" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                                            <div class="jobs-left-inner mx-3">
                                                <h3 class="jobs-title"><Link to='../Singlejob'>Sr. Backend Go Developer</Link>
                                                </h3>
                                                <div class="info-company d-flex ">
                                                    <p >by <a class="authour civi-link-bottom mx-2" href="https://civi.uxper.co/companies/software/uxper/">Uxper</a> in
                                                        <a href="https://civi.uxper.co/jobs-categories/development-it/" class="cate civi-link-bottom mx-2">
                                                            Development &amp; IT    </a> </p>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="jobs-header-right d-flex justify-content-between">

                                            <div class="logged-out mx-2">
                                                <AiOutlineHeart className='fs-1 mt-2' />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="jobsfooter row  p-0 d-flex justify-content-center ">
                                        <div class="jobs-footer-left col-12  col-lg-12 row ">
                                            <div className="jobtype d-flex justify-content-center align-items-center col-6 col-md-2  col-lg-2 text-center mx-md-4 mx-lg-2 my-2">
                                                <a class="label" href="https://civi.uxper.co/jobs-type/remote/">
                                                    Remote  </a></div>
                                            <div className="label-location d-flex justify-content-center align-items-center col-6 jobs-location col-lg-2 col-md-3">
                                                <GrLocation className='fs-4' />
                                                <a class="  d-flex " href="https://civi.uxper.co/jobs-location/san-francisco/">
                                                    Pakistan</a>
                                            </div>
                                            <div class=" label-price text-dark d-flex justify-content-center align-items-center col-6 col-lg-2 col-md-3 mx-2">
                                                $200/month </div>


                                            <p class="days col-lg-5 col-8 col-md-4  d-flex justify-content-center align-items-center ">
                                                <span className='mx-2'> 142 </span> days left to apply  </p>
                                        </div>
                                    </div>
                                </div>
                             
                              
                            </div>
                </div>
            </div> 
        </div>
    )
}

export default Findjob