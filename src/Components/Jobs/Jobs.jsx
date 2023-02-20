import React,{useState} from 'react'
import { BsHeartFill } from 'react-icons/bs'
import './Jobs.css'
import ScrollTrigger from 'react-scroll-trigger';
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
            <section className="py-4">
                <div className="container">
                    <div className="row justify-content-center mb-3 pb-3">
                        <div className="col-md-7 heading-section text-center ">
                            <span className="subheading">Recently Added Jobs</span>
                            <h2 className="mb-2"><span>Recent</span> Jobs</h2>
                        </div>
                    </div>
                    <div className="row p-0 m-0">
                        <div className="col-md-12 job-post-item">
                            <div className="p-4 d-block d-md-flex align-items-center">
                                <div className="mb-4 mb-md-0 mr-5">
                                    <div className="job-post-item-header d-flex align-items-center">
                                        <h2 className="mr-3 h3">Frontend Development</h2>
                                        <div className="badge-wrap">
                                            <span className="bg-primary text-white badge py-2 px-3">Partime</span>
                                        </div>
                                    </div>
                                    <div className="job-post-item-body d-block d-md-flex">
                                        <div className="mr-3"><span className="icon-layers"></span> <a href="#fzd">Facebook, Inc.</a></div>
                                        <div><span className="icon-my_location"></span> <span>Western City, UK</span></div>
                                    </div>
                                </div>
                                <div className="ml-auto d-flex">
                                    <a href="#dfj" className="btn btn-primary py-2 mr-1">Apply Job</a>
                                    <a href="#fsd" className="btn btn-secondary rounded-circle  d-flex align-items-center icon">
                                        <BsHeartFill />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 job-post-item">
                            <div className="p-4 d-block d-md-flex align-items-center">
                                <div className="mb-4 mb-md-0 mr-5">
                                    <div className="job-post-item-header d-flex align-items-center">
                                        <h2 className="mr-3 h4">Full Stack Developer</h2>
                                        <div className="badge-wrap">
                                            <span className="bg-warning text-white badge py-2 px-3">Full Time</span>
                                        </div>
                                    </div>
                                    <div className="job-post-item-body d-block d-md-flex">
                                        <div className="mr-3"><span className="icon-layers"></span> <a href="#sdf">Google, Inc.</a></div>
                                        <div><span className="icon-my_location"></span> <span>Western City, UK</span></div>
                                    </div>
                                </div>
                                <div className="ml-auto d-flex">
                                    <a href="#dfj" className="btn btn-primary py-2 mr-1">Apply Job</a>
                                    <a href="#fda" className="btn btn-danger rounded-circle  d-flex align-items-center">
                                        <BsHeartFill />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 job-post-item">
                            <div className=" p-4 d-block d-md-flex align-items-center">
                                <div className="mb-4 mb-md-0 mr-5">
                                    <div className="job-post-item-header d-flex align-items-center">
                                        <h2 className="mr-3 h4">Open Source Interactive Developer</h2>
                                        <div className="badge-wrap">
                                            <span className="bg-info text-white badge py-2 px-3">Freelance</span>
                                        </div>
                                    </div>
                                    <div className="job-post-item-body d-block d-md-flex">
                                        <div className="mr-3"><span className="icon-layers"></span> <a href="#zxcf">New York Times</a></div>
                                        <div><span className="icon-my_location"></span> <span>Western City, UK</span></div>
                                    </div>
                                </div>
                                <div className="ml-auto d-flex">
                                    <a href="#dfj" className="btn btn-primary py-2 mr-1">Apply Job</a>
                                    <a href="#fds" className="btn btn-secondary rounded-circle  d-flex align-items-center icon">
                                        <BsHeartFill />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 job-post-item">
                            <div className=" p-4 d-block d-md-flex align-items-center">
                                <div className="mb-4 mb-md-0 mr-5">
                                    <div className="job-post-item-header d-flex align-items-center">
                                        <h2 className="mr-3  h4">Frontend Development</h2>
                                        <div className="badge-wrap">
                                            <span className="bg-secondary text-white badge py-2 px-3">Internship</span>
                                        </div>
                                    </div>
                                    <div className="job-post-item-body d-block d-md-flex">
                                        <div className="mr-3"><span className="icon-layers"></span> <a href="#dsf">Facebook, Inc.</a></div>
                                        <div><span className="icon-my_location"></span> <span>Western City, UK</span></div>
                                    </div>
                                </div>
                                <div className="ml-auto d-flex">
                                    <a href="#dfj" className="btn btn-primary py-2 mr-1">Apply Job</a>
                                    <a href="#sdf" className="btn btn-secondary rounded-circle  d-flex align-items-center icon">
                                        <BsHeartFill />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 job-post-item">
                            <div className="p-4 d-block d-md-flex align-items-center">
                                <div className="mb-4 mb-md-0 mr-5">
                                    <div className="job-post-item-header d-flex align-items-center">
                                        <h2 className="mr-3 h4">Open Source Interactive Developer</h2>
                                        <div className="badge-wrap">
                                            <span className="bg-danger text-white badge py-2 px-3">Temporary</span>
                                        </div>
                                    </div>
                                    <div className="job-post-item-body d-block d-md-flex">
                                        <div className="mr-3"><span className="icon-layers"></span> <a href="#dfs">New York Times</a></div>
                                        <div><span className="icon-my_location"></span> <span>Western City, UK</span></div>
                                    </div>
                                </div>
                                <div className="ml-auto d-flex">
                                    <a href="#dfj" className="btn btn-primary py-2 mr-1">Apply Job</a>
                                    <a href="#fds" className="btn btn-secondary rounded-circle  d-flex align-items-center icon">
                                        <BsHeartFill />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 job-post-item">
                            <div className="p-4 d-block d-md-flex align-items-center">
                                <div className="mb-4 mb-md-0 mr-5">
                                    <div className="job-post-item-header d-flex align-items-center">
                                        <h2 className="mr-3 h3">Frontend Development</h2>
                                        <div className="badge-wrap">
                                            <span className="bg-primary text-white badge py-2 px-3">Partime</span>
                                        </div>
                                    </div>
                                    <div className="job-post-item-body d-block d-md-flex">
                                        <div className="mr-3"><span className="icon-layers"></span> <a href="#vxfd">Facebook, Inc.</a></div>
                                        <div><span className="icon-map-marker"></span> <span>Western City, UK</span></div>
                                    </div>
                                </div>
                                <div className="ml-auto d-flex">
                                    <a href="#dfj" className="btn btn-primary py-2 mr-1">Apply Job</a>
                                    <a href="#sdf" className="btn btn-secondary rounded-circle  d-flex align-items-center icon">
                                        <BsHeartFill />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 job-post-item">
                            <div className="p-4 d-block d-md-flex align-items-center">
                                <div className="mb-4 mb-md-0 mr-5">
                                    <div className="job-post-item-header d-flex align-items-center">
                                        <h2 className="mr-3  h4">Full Stack Developer</h2>
                                        <div className="badge-wrap">
                                            <span className="bg-warning text-white badge py-2 px-3">Full Time</span>
                                        </div>
                                    </div>
                                    <div className="job-post-item-body d-block d-md-flex">
                                        <div className="mr-3"><span className="icon-layers"></span> <a href="#sdf">Google, Inc.</a></div>
                                        <div><span className="icon-my_location"></span> <span>Western City, UK</span></div>
                                    </div>
                                </div>
                                <div className="ml-auto d-flex">
                                    <a href="#dfj" className="btn btn-primary py-2 mr-1">Apply Job</a>
                                    <a href="#sdf" className="btn btn-secondary rounded-circle  d-flex align-items-center icon">
                                        <BsHeartFill />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 job-post-item">
                            <div className=" p-4 d-block d-md-flex align-items-center">
                                <div className="mb-4 mb-md-0 mr-5">
                                    <div className="job-post-item-header d-flex align-items-center">
                                        <h2 className="mr-3 h4">Open Source Interactive Developer</h2>
                                        <div className="badge-wrap">
                                            <span className="bg-info text-white badge py-2 px-3">Freelance</span>
                                        </div>
                                    </div>
                                    <div className="job-post-item-body d-block d-md-flex">
                                        <div className="mr-3"><span className="icon-layers"></span> <a href="#sfd">New York Times</a></div>
                                        <div><span className="icon-my_location"></span> <span>Western City, UK</span></div>
                                    </div>
                                </div>
                                <div className="ml-auto d-flex">
                                    <a href="#dfj" className="btn btn-primary py-2 mr-1">Apply Job</a>
                                    <a href="#sg" className="btn btn-secondary rounded-circle  d-flex align-items-center icon">
                                        <BsHeartFill />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 job-post-item">
                            <div className="p-4 d-block d-md-flex align-items-center">
                                <div className="mb-4 mb-md-0 mr-5">
                                    <div className="job-post-item-header d-flex align-items-center">
                                        <h2 className="mr-3 h4">Frontend Development</h2>
                                        <div className="badge-wrap">
                                            <span className="bg-secondary text-white badge py-2 px-3">Internship</span>
                                        </div>
                                    </div>
                                    <div className="job-post-item-body d-block d-md-flex">
                                        <div className="mr-3"><span className="icon-layers"></span> <a href="#sfd">Facebook, Inc.</a></div>
                                        <div><span className="icon-my_location"></span> <span>Western City, UK</span></div>
                                    </div>
                                </div>
                                <div className="ml-auto d-flex">
                                    <a href="#dfj" className="btn btn-primary py-2 mr-1">Apply Job</a>
                                    <a href="#df" className="btn btn-secondary rounded-circle  d-flex align-items-center icon">
                                        <BsHeartFill />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 job-post-item">
                            <div className="p-4 d-block d-md-flex align-items-center">
                                <div className="mb-4 mb-md-0 mr-5">
                                    <div className="job-post-item-header d-flex align-items-center">
                                        <h2 className="mr-3 h4">Open Source Interactive Developer</h2>
                                        <div className="badge-wrap">
                                            <span className="bg-danger text-white badge py-2 px-3">Temporary</span>
                                        </div>
                                    </div>
                                    <div className="job-post-item-body d-block d-md-flex">
                                        <div className="mr-3"><span className="icon-layers"></span> <a href="#fds">New York Times</a></div>
                                        <div><span className="icon-my_location"></span> <span>Western City, UK</span></div>
                                    </div>
                                </div>
                                <div className="ml-auto d-flex">
                                    <a href="#dfj" className="btn btn-primary py-2 mr-1">Apply Job</a>
                                    <a href="#dfs" className="btn btn-secondary rounded-circle  d-flex align-items-center icon">
                                        <BsHeartFill />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button className='col-md-3 col-6 btn btn-danger'>Browse All Jobs</button>
                        
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
