import React from 'react'
import icon1 from '../Images/prototype.png'
import icon2 from '../Images/coding.png'
import icon3 from '../Images/sales.png'
import icon4 from '../Images/real-estate.png'
import icon5 from '../Images/helmet.png'
import icon6 from '../Images/accounts.png'
import icon7 from '../Images/prevention.png'
import icon8 from '../Images/content-writing.png'
import './Categories.css'
function Categories() {
    return (
        <div className='Categories m-0 p-0'>
            <div className="CategoriesCards pt-3 py-5 px-1">
                <h3 className='Browseheading text-center'>Browse Top Categories</h3>
                <h6 className='exploreheading text-center'>Explore by Category</h6>
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
                    <button className='btn civibtn'>Browse All Categories </button>
                </div>
                
            </div>
            
        </div>
    )
}

export default Categories
