import React from 'react'
import icon1 from '../Assets/prototype.png'
import icon2 from '../Assets/coding.png'
import icon3 from '../Assets/sales.png'
import icon4 from '../Assets/real-estate.png'
import icon5 from '../Assets/helmet.png'
import icon6 from '../Assets/accounts.png'
import icon7 from '../Assets/prevention.png'
import icon8 from '../Assets/content-writing.png'
import './Categories.css'
function Categories() {
    return (
        <div className='Categories m-0 p-0'>
            <div className="row m-0 p-0 categoriessect">
                <div className="col-md-3 col-12 d-flex justify-content-center py-3">
                    <div className="sect align-content-center">
                        <div className="d-flex justify-content-center">
                        <img src="https://img.icons8.com/stickers/100/null/parse-from-clipboard.png" alt='wait for loading'/>
                        </div>
                        <p className='imgtext'>Search Thousands of Jobs</p></div>
                </div>
                <div className="col-md-3 col-12 d-flex justify-content-center py-3">
                    <div className="sect align-content-center">
                        <div className="d-flex justify-content-center">
                        <img src="https://img.icons8.com/stickers/100/null/client-company.png" alt='wait for internet'/>
                        </div>
                        <p className='imgtext'>Easy to Manage Jobs</p></div>
                </div>
                <div className="col-md-3 col-12 d-flex justify-content-center py-3">
                    <div className="sect align-content-center">
                        <div className="d-flex justify-content-center">
                        <img src="https://img.icons8.com/fluency/48/null/personal-growth.png" alt='wait for internet'/>
                                </div>
                        <p className='imgtext'>Top Careers</p></div>
                </div>
                <div className="col-md-3 col-12 d-flex justify-content-center py-3">
                    <div className="sect align-content-center">
                        <div className="d-flex justify-content-center">
                        <img src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/null/external-candidates-politics-xnimrodx-blue-xnimrodx.png" alt='wait for internet'/>
                        </div>
                        <p className='imgtext'>Search Expert Candidates</p></div>
                </div>
            </div>
            <div className="CategoriesCards pt-3">
                <h3 className='text-center'>Browse Top Categories</h3>
                <h6 className='text-center'>Explore by Category</h6>
                <div class="our-services row d-flex justify-contnet-center m-0 p-0 px-3">
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 my-2">
                        <div class="single-services text-center mb-30">
                            <div class="services-ion d-flex justify-content-center">
                                <img src={icon1} alt="" />
                            </div>
                            <div class="services-cap">
                                <h5><a href="job_listing.html">Design &amp; Creative</a></h5>
                                <span>(653)</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 my-2">
                        <div class="single-services text-center mb-30">
                            <div class="services-ion d-flex justify-content-center">
                                <img src={icon2} alt="" />
                            </div>
                            <div class="services-cap">
                                <h5><a href="job_listing.html">Design &amp; Development</a></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 my-2">
                        <div class="single-services text-center mb-30">
                            <div class="services-ion d-flex justify-content-center">
                                <img src={icon3} alt="" />
                            </div>
                            <div class="services-cap">
                                <h5><a href="job_listing.html">Sales &amp; Marketing</a></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 my-2">
                        <div class="single-services text-center mb-30">
                            <div class="services-ion d-flex justify-content-center">
                                <img src={icon4} alt="" />
                            </div>
                            <div class="services-cap">
                                <h5><a href="job_listing.html">Real Estate</a></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 my-2">
                        <div class="single-services text-center mb-30">
                            <div class="services-ion d-flex justify-content-center">
                                <img src={icon5} alt="" />
                            </div>
                            <div class="services-cap">
                                <h5><a href="job_listing.html">Construction</a></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 my-2">
                        <div class="single-services text-center mb-30">
                            <div class="services-ion d-flex justify-content-center">
                                <img src={icon6} alt="" />
                            </div>
                            <div class="services-cap">
                                <h5><a href="job_listing.html">Accounting & Finance</a></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 my-2">
                        <div class="single-services text-center mb-30">
                            <div class="services-ion d-flex justify-content-center">
                                <img src={icon7} alt="" />
                            </div>
                            <div class="services-cap">
                                <h5><a href="job_listing.html">Health & Hospital</a></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 my-2">
                        <div class="single-services text-center mb-30">
                            <div class="services-ion d-flex justify-content-center">
                                <img src={icon8} alt="" />
                            </div>
                            <div class="services-cap">
                                <h5><a href="job_listing.html">Content Writing</a></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center py-3 my-3">
                    <button className='btn btn-danger'>Browse All Categories </button>
                </div>
                <div class="online-cv cv-bg section-overly pt-90 pb-120 my-2" >
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-10">
                                <div class="cv-caption text-center">
                                    <h4 class=""> Make a Difference with Your Online Resume!</h4>
                                    <a href="#sd" class="border-btn2 border-btn4">Upload your cv</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
