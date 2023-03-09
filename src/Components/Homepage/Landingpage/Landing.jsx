import React from 'react'
import './Landing.css'
import videobg from '../Images/videobg.mp4'
import { TbFolder } from 'react-icons/tb'
import { SlLocationPin } from 'react-icons/sl'
import { TfiSearch } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <div className='Landingpage position-relative'>
            <div className="colorsection d-block d-lg-none">
            <div className="smallcontent">
                <div className='py-3 px-3 landingpage'>
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
                        </div>
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
                            <Link to='../Findjob'  className='submitbtn col-md-4'>
                                Search
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row m-0 p-0 smallcategorysect mb-5">
                <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center py-2">
                    <div className="sect align-content-center">
                        <div className="d-flex justify-content-center">
                            <img src="https://img.icons8.com/stickers/100/null/parse-from-clipboard.png" alt='wait for loading' />
                        </div>
                        <p className='imgtext'>Search Thousands of Jobs</p></div>
                </div>
                <div className="col-lg-2 col-md-6 col-12 d-flex justify-content-center py-2">
                    <div className="sect align-content-center">
                        <div className="d-flex justify-content-center">
                            <img src="https://img.icons8.com/stickers/100/null/client-company.png" alt='wait for internet' />
                        </div>
                        <p className='imgtext'>Easy to Manage Jobs</p></div>
                </div>
                <div className="col-lg-2 col-md-6 col-12 d-flex justify-content-center py-2">
                    <div className="sect align-content-center">
                        <div className="d-flex justify-content-center">
                            <img src="https://img.icons8.com/fluency/48/null/personal-growth.png" alt='wait for internet' />
                        </div>
                        <p className='imgtext'>Top Careers</p></div>
                </div>
                <div className="col-lg-2 col-md-6 col-12 d-flex justify-content-center py-2">
                    <div className="sect align-content-center">
                        <div className="d-flex justify-content-center">
                            <img src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/null/external-candidates-politics-xnimrodx-blue-xnimrodx.png" alt='wait for internet' />
                        </div>
                        <p className='imgtext'>Search Expert Candidates</p></div>
                </div>
            </div>
            </div>
            <div class="elementor-background-overlay d-none d-lg-block"></div>
            <video src={videobg} autoPlay loop muted  className='d-none d-lg-block'/>
            <div className="content d-none d-lg-block">
                <div className=' container py-5 px-3 landingpage'>
                    <h2 className="mainheading">Find your Dream Job Here</h2>
                    <div className="row m-0 p-0 searchbar ">
                        <div className="col-lg-3 col-md-6 col-12 formgroup my-1">
                            <TfiSearch className='mt-2 mx-1 fs-4' />
                            <input type="text" placeholder='Job title or keywords' />
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 formgroup my-1">
                            <SlLocationPin className='mt-1 mx-1 fs-4' />
                            <select name="jobs-location" className="optionselect" >
                                <option value="">All Location</option>                            <option value="37">Boston</option>
                                <option value="40">California</option>
                                <option value="46">Chicago</option>
                                <option value="86">New York</option>
                                <option value="94">San Francisco</option>
                                <option value="96">Seatle</option>
                            </select>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 formgroup my-1">
                            <TbFolder className='my-1 fs-4' />
                            <select name="jobs-categories" className="optionselect"  >
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
                        <div className="col-lg-3 col-md-6 col-12  rightgroup my-1 ">
                            <button type="reset" className='clearbtn my-1 mx-2'>Clear</button>
                            <Link to='../Findjob' type='submit'  className='submitbtn '>
                                Search
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            
            <div className="row m-0 p-0 categorysect d-none d-lg-flex px-5 ">
                <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center py-3">
                    <div className="sect align-content-center">
                        <div className="d-flex justify-content-center">
                            <img src="https://img.icons8.com/stickers/100/null/parse-from-clipboard.png" alt='wait for loading' />
                        </div>
                        <p className='imgtext'>Search Thousands of Jobs</p></div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center py-3">
                    <div className="sect align-content-center">
                        <div className="d-flex justify-content-center">
                            <img src="https://img.icons8.com/stickers/100/null/client-company.png" alt='wait for internet' />
                        </div>
                        <p className='imgtext'>Easy to Manage Jobs</p></div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center py-3">
                    <div className="sect align-content-center">
                        <div className="d-flex justify-content-center">
                            <img src="https://img.icons8.com/fluency/48/null/personal-growth.png" alt='wait for internet' />
                        </div>
                        <p className='imgtext'>Top Careers</p></div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center py-3 p-0">
                    <div className="sect align-content-center p-0">
                        <div className="d-flex justify-content-center">
                            <img src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/null/external-candidates-politics-xnimrodx-blue-xnimrodx.png" alt='wait for internet' />
                        </div>
                        <p className='imgtext'>Search Expert Candidates</p></div>
                </div>
            </div>
        </div>
    )
}

export default Landing
