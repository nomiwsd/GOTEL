import React from 'react'
import './Landing.css'
function Landing() {
  return (
    <div className='Landingpage'>
      <div class="Shapedivider">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
<div className=" h-100 w-100 px-3 position-relative m-0">
  <div className=" Landingbox position-absolute px-3 m-0">
<div className="Landingtext">
<h1>Find your dream job.</h1>
<p>The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes. Placeholder text commonly used.</p>
</div>
<div className="Jobsearchbar row m-0 p-0">
  <input type="text" className='jobtitle col-12 col-md-6 col-lg-3 my-2 my-md-2 m-lg-0 p-0' placeholder='Job Title or Keyword'/>

<select className='col-12 col-md-6 col-lg-3 mb-2 mb-md-0 mt-md-2 m-lg-0 jobcategory py-1'>
	<option value="Job Category" selected>Job Category</option>
	<option value="Job Category" >Graphic Designing</option>
	<option value="Job Category" >Web Developing</option>
	<option value="Job Category">Data Science</option>
	<option value="Job Category" >Digital Marketing</option>
</select>
  <input type="text" className='joblocation col-12  col-md-6 col-lg-3  mb-2 mb-md-2 m-lg-0' placeholder='Job Location'/>
  <select className='col-12 col-md-6 col-lg-3  mb-2 mb-md-2 m-lg-0 jobtype py-1'>
	<option value="Job Type" selected>Job Type</option>
	<option value="OnSite" >OnSite</option>
	<option value="Remote" >Remote</option>
</select>
  
</div>
<div className="d-flex justify-content-center"> 
<button className='searchbtn p-0 
col-md-4 col-8 py-2 col-lg-2'>Search</button>
</div>

</div></div>
    </div>
  )
}

export default Landing
