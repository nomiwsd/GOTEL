import React,{useState} from 'react'
// import { BsHeartFill } from 'react-icons/bs'
import './Jobs.css'
import ScrollTrigger from 'react-scroll-trigger';
import { AiOutlineHeart } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import { MdOutlineFeaturedPlayList } from 'react-icons/md'
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
function Jobs() {
    const [counterup,setcounterup]=useState(false);
    return (
        <ScrollTrigger onEnter={()=>{
            setcounterup(true)
          }}
          onExit={()=>{
            setcounterup(false)
          }}>
        <div className='p-0 m-0 bg-light'>
        <div class="online-cv cv-bg section-overly pt-90 pb-120 my-2" >
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-10">
                                <div class="cv-caption text-center">
                                    <h4 class=""> Make a Difference with Your Online Resume!</h4>
                                    <a href="#sd" class="border-btn2 border-btn4">Upload your cv</a>
                                    <a href="#sd" class="border-btn2 border-btn4 mx-2">Create Your CV</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <section className="py-4">
                <div className="container">
                    <div className="row justify-content-center mb-3 pb-3">
                        <div className="col-md-7 heading-section text-center ">
                            <h3 className="Browseheading">Recently Added Jobs</h3>
                            <h2 className="mb-2 exploreheading">Recent Jobs</h2>
                        </div>
                    </div>
                    <div className="row m-0 p-0">
                    <div class="jobs-item layout-list jobs-featured col-12">
                        <div class="jobs-header d-flex justify-content-between">
                            <div class="jobs-header-left d-flex justify-content-between">
                                <img  class="logo-company" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
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
                        <div class="jobsfooter row ">
                            <div class="jobs-footer-left col-12 col-md-8 col-lg-10 d-flex justfy-content-between">
                                <a class="label label-type col-5 col-md-3  col-lg-2 text-center mx-2" href="https://civi.uxper.co/jobs-type/remote/">
                                    Remote   </a>
                                <a class="label label-location d-flex col-md-4 col-lg-2 col-6" href="https://civi.uxper.co/jobs-location/san-francisco/">
                                 <GrLocation className='mt-1 fs-5'/>   San Francisco        </a>
                                <div class="label label-price d-none d-md-block col-md-4 col-lg-2">
                                    $100 - $200/month </div>
                            </div>
                            <div class="jobs-footer-right col-12 col-md-4 col-lg-2 mt-1">
                                <p class="days">
                                    <span> 142 </span>days left to apply  </p>
                            </div>
                        </div>
                    </div>
                    <div class="jobs-item layout-list jobs-featured col-12">
                        <div class="jobs-header d-flex justify-content-between">
                            <div class="jobs-header-left d-flex justify-content-between">
                                <img  class="logo-company" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
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
                        <div class="jobsfooter row ">
                            <div class="jobs-footer-left col-12 col-md-8 col-lg-10 d-flex justfy-content-between">
                                <a class="label label-type col-5 col-md-3  col-lg-2 text-center mx-2" href="https://civi.uxper.co/jobs-type/remote/">
                                    Remote   </a>
                                <a class="label label-location d-flex col-md-4 col-lg-2 col-6" href="https://civi.uxper.co/jobs-location/san-francisco/">
                                 <GrLocation className='mt-1 fs-5'/>   San Francisco        </a>
                                <div class="label label-price d-none d-md-block col-md-4 col-lg-2">
                                    $100 - $200/month </div>
                            </div>
                            <div class="jobs-footer-right col-12 col-md-4 col-lg-2 mt-1">
                                <p class="days">
                                    <span> 142 </span>days left to apply  </p>
                            </div>
                        </div>
                    </div>
                    <div class="jobs-item layout-list jobs-featured col-12">
                        <div class="jobs-header d-flex justify-content-between">
                            <div class="jobs-header-left d-flex justify-content-between">
                                <img  class="logo-company" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
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
                        <div class="jobsfooter row ">
                            <div class="jobs-footer-left col-12 col-md-8 col-lg-10 d-flex justfy-content-between">
                                <a class="label label-type col-5 col-md-3  col-lg-2 text-center mx-2" href="https://civi.uxper.co/jobs-type/remote/">
                                    Remote   </a>
                                <a class="label label-location d-flex col-md-4 col-lg-2 col-6" href="https://civi.uxper.co/jobs-location/san-francisco/">
                                 <GrLocation className='mt-1 fs-5'/>   San Francisco        </a>
                                <div class="label label-price d-none d-md-block col-md-4 col-lg-2">
                                    $100 - $200/month </div>
                            </div>
                            <div class="jobs-footer-right col-12 col-md-4 col-lg-2 mt-1">
                                <p class="days">
                                    <span> 142 </span>days left to apply  </p>
                            </div>
                        </div>
                    </div>
                    <div class="jobs-item layout-list jobs-featured col-12">
                        <div class="jobs-header d-flex justify-content-between">
                            <div class="jobs-header-left d-flex justify-content-between">
                                <img  class="logo-company" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
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
                        <div class="jobsfooter row ">
                            <div class="jobs-footer-left col-12 col-md-8 col-lg-10 d-flex justfy-content-between">
                                <a class="label label-type col-5 col-md-3  col-lg-2 text-center mx-2" href="https://civi.uxper.co/jobs-type/remote/">
                                    Remote   </a>
                                <a class="label label-location d-flex col-md-4 col-lg-2 col-6" href="https://civi.uxper.co/jobs-location/san-francisco/">
                                 <GrLocation className='mt-1 fs-5'/>   San Francisco        </a>
                                <div class="label label-price d-none d-md-block col-md-4 col-lg-2">
                                    $100 - $200/month </div>
                            </div>
                            <div class="jobs-footer-right col-12 col-md-4 col-lg-2 mt-1">
                                <p class="days">
                                    <span> 142 </span>days left to apply  </p>
                            </div>
                        </div>
                    </div>
                    <div class="jobs-item layout-list jobs-featured col-12">
                        <div class="jobs-header d-flex justify-content-between">
                            <div class="jobs-header-left d-flex justify-content-between">
                                <img  class="logo-company" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
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
                        <div class="jobsfooter row ">
                            <div class="jobs-footer-left col-12 col-md-8 col-lg-10 d-flex justfy-content-between">
                                <a class="label label-type col-5 col-md-3  col-lg-2 text-center mx-2" href="https://civi.uxper.co/jobs-type/remote/">
                                    Remote   </a>
                                <a class="label label-location d-flex col-md-4 col-lg-2 col-6" href="https://civi.uxper.co/jobs-location/san-francisco/">
                                 <GrLocation className='mt-1 fs-5'/>   San Francisco        </a>
                                <div class="label label-price d-none d-md-block col-md-4 col-lg-2">
                                    $100 - $200/month </div>
                            </div>
                            <div class="jobs-footer-right col-12 col-md-4 col-lg-2 mt-1">
                                <p class="days">
                                    <span> 142 </span>days left to apply  </p>
                            </div>
                        </div>
                    </div>
                    <div class="jobs-item layout-list jobs-featured col-12">
                        <div class="jobs-header d-flex justify-content-between">
                            <div class="jobs-header-left d-flex justify-content-between">
                                <img  class="logo-company" src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
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
                        <div class="jobsfooter row ">
                            <div class="jobs-footer-left col-12 col-md-8 col-lg-10 d-flex justfy-content-between">
                                <a class="label label-type col-5 col-md-3  col-lg-2 text-center mx-2" href="https://civi.uxper.co/jobs-type/remote/">
                                    Remote   </a>
                                <a class="label label-location d-flex col-md-4 col-lg-2 col-6" href="https://civi.uxper.co/jobs-location/san-francisco/">
                                 <GrLocation className='mt-1 fs-5'/>   San Francisco        </a>
                                <div class="label label-price d-none d-md-block col-md-4 col-lg-2">
                                    $100 - $200/month </div>
                            </div>
                            <div class="jobs-footer-right col-12 col-md-4 col-lg-2 mt-1">
                                <p class="days">
                                    <span> 142 </span>days left to apply  </p>
                            </div>
                        </div>
                    </div>
                 
                    <div className="d-flex justify-content-center mt-3">
                        <button className='col-md-4 col-lg-2 col-6 btn civibtn'>Browse All Jobs</button>
                        
                    </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section ftco-counter section-overly img"  >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-3 ">
                                    <div className="text-center d-block">
                                        <div className="text">
                                            <strong className="counternumber" data-number="1350000">
                                            {counterup && <CountUp start={0} end={135000} duration={4} delay={0}/>}
                                            </strong>
                                        </div>
                                        <span className='spantext'>Jobs</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className=" text-center d-block">
                                        <div className="text">
                                            <strong className="counternumber" data-number="40000"> {counterup && <CountUp start={0} end={4000} duration={4} delay={0}/>}</strong>
                                        </div>
                                        <span className='spantext'>Members</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className=" text-center d-block">
                                        <div className="text">
                                            <strong className="counternumber" data-number="30000">{counterup && <CountUp start={0} end={30000} duration={4} delay={0}/>}</strong>
                                            </div>
                                        <span className='spantext'>Resume</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className=" text-center d-block">
                                        <div className="text">
                                            <strong className="counternumber" data-number="10500">{counterup && <CountUp start={0} end={10500} duration={4} delay={0}/>}</strong>
                                        </div>
                                        <span className='spantext'>Company</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </ScrollTrigger>
    )
}

export default Jobs
