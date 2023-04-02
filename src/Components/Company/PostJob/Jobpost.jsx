import './Jobpost.css';
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import MyStatefulEditor from "./rte_test";
import {BsPeopleFill} from 'react-icons/bs'
import {MdWorkOutline,MdPostAdd} from 'react-icons/md'
import {FaUserPlus} from 'react-icons/fa'
import {BiMessageDetail} from 'react-icons/bi'
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import {FiCamera} from 'react-icons/fi'
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

import CompanyNavbar from '../Navbar/CompanyNavbar';
import { firestore } from '../../../firebase';
import { addDoc,collection } from "@firebase/firestore"
const categoryoptions = [
  { value: 'Analytics', label: 'Analytics' },
  { value: 'Design & Creative', label: 'Design & Creative' },
  { value: 'Development & IT', label: 'Development & IT' },
  { value: 'Legal & Finance', label: 'Legal & Finance' },
  { value: 'Marketing & Sales', label: 'Marketing & Sales' },
  { value: 'Writing & Translation', label: 'Writing & Translation' },
];
const typeoptions = [
  { value: 'Full Time', label: 'Full Time' },
  { value: 'Part Time', label: 'Part Time' },
  { value: 'Remote', label: 'Remote' },
  { value: 'Internship', label: 'Internship' },
];
const careerleveloptions = [
  { value: 'Fresher', label: 'Fresher' },
  { value: 'Junior', label: 'Junior' },
  { value: 'Middle', label: 'Middle' },
  { value: 'Senior', label: 'Senior' },
];
const experienceoptions = [
  { value: '1-2 Years', label: '1-2 Years' },
  { value: '3-5 Years', label: '3-5 Years' },
  { value: '6-9 Years', label: '6-9 Years' },
  { value: '10+ Years', label: '10+ Years' },
];

const SkillsOptions = [
  { value: 'BackEND Developer', label: 'BackEnd Developer' },
  { value: 'Software Engineer', label: 'Software Engineer' },
  { value: 'Content Writer', label: 'Content Writer' },
  { value: 'Product Manager', label: 'Product Manager' },
];
const Qualificationoptions = [
  { value: 'Associate', label: 'Associate Degree' },
  { value: 'Bachelor', label: 'Bachelor Degree' },
  { value: 'Certificate', label: 'Certificate' },
  { value: 'Bachelor', label: 'Master"s Degree' },
  { value: 'Associate', label: 'Doctrate Degree' },
  { value: 'Bachelor', label: 'Bachelor Degree' },
];
var compnay = ''

function Jobpost() {
  // const [selectedOption, setSelectedOption] = useState(null);
  // const [val, setVal] = useState("");
  const onChange = (value) => {
    setJobDescription(value);
  };
    useEffect(()=>{
      var company = localStorage.getItem('user')
      company = JSON.parse(company)
      compnay = company
    },[])
    const [jobTitle,setJobTitle] = useState('')
    const [jobCategorie,setJobCategorie] = useState('')
    const [jobType,setJobType] = useState('')
    const [jobSkills,setJobSkills] = useState('')
    const [jobDescription,setJobDescription] = useState('')
    const [jobCareerLevel,setJobCareerLevel] = useState('')
    const [jobExperience,setJobExperience] = useState('')
    const [jobQualification,setJobQualification] = useState('')
    const [jobClosingDays,setJobClosingDays] = useState('')
    const [jobSalaryMax,setJobSalaryMax] = useState('')
    const [jobSalaryRate,setJobSalaryRate] = useState('')
    const [jobApplyType,setJobApplyType] = useState('')
    const [jobTime,setJobTime] = useState('')
    const [loading,setLoading] = useState('')
    const [published,setPublished] = useState('')

    function getCurrentDate(separator='-'){
      let newDate = new Date()
      let date = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();
      
      return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
      }

    const postJob= async () => {
        await addDoc(collection(firestore, "jobs"), {
            by:compnay.uid,
            jobTitle:jobTitle,
            jobCategorie:jobCategorie.value,
            jobType:jobType.value,
            jobSkills:jobSkills,
            jobDescription:jobDescription,
            jobCareerLevel:jobCareerLevel.value,
            jobExperience:jobExperience.value,
            jobQualification:jobQualification.value,
            jobClosingDays:jobClosingDays,
            jobSalaryMax:jobSalaryMax,
            jobSalaryRate:jobSalaryRate.value,
            jobApplyType:jobApplyType.value,
            jobTime:jobTime.value,
            Applicants:0,
            status:'Pending',
            posted:getCurrentDate()
       })
      .then((e)=>{
          setLoading(false)
          setPublished(true)
          console.log('Job Posted')
      }
      )
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
      });        
    }
  return (
   
      <div className='jobpostsection row d-flex m-0 p-0'>
      <div className="d-none d-md-block col-md-3 col-lg-2 p-0 sidebar">
        <div className="sidebar" >
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">GOTEL</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/Company" style={{ textDecoration: "none" }}>
            <li>
              <BsPeopleFill className="icon fs-4" />
              <span>Company Profile</span>
            </li>
          </Link>
          <Link to="/Jobpost" style={{ textDecoration: "none" }}>
            <li>
              <MdWorkOutline className="icon fs-4" />
              <span>Post a Job</span>
            </li>
          </Link>
          <Link to='/PostedJob' style={{ textDecoration: "none" }}>
          <li>
            <MdPostAdd className="icon fs-4" />
            <span>Posted Jobs</span>
          </li></Link>
          <Link  to='/AppliedCandidate'style={{ textDecoration: "none" }}>
          <li>
            <FaUserPlus className="icon fs-4" />
            <span>Applied Candidates</span>
          </li></Link>
          <Link to='/CompanyMessage'style={{ textDecoration: "none" }}>   <li>
            <BiMessageDetail className="icon fs-4" />
            <span>Messages</span>
          </li>
          </Link>
          <Link to='/CompanySettingspage'style={{ textDecoration: "none" }}> <li>
            <SettingsApplicationsIcon className="icon fs-4" />
            <span>Settings</span>
          </li></Link>
          <Link to='/Login'style={{ textDecoration: "none" }}> <li>
            <ExitToAppIcon className="icon fs-4" />
            <span>Logout</span>
          </li></Link>
        </ul>
      </div>
      </div>
        </div>
        <div className="col-12 col-md-9 col-lg-10 h-100 bg-color row m-0 p-0"><CompanyNavbar />
          <div className="bg-color py-2 px-2 rounded-3 col-md-12 col-lg-8 col-12 ">
            <div class="entry-title d-flex justify-content-between my-2  row m-0 p-0">
              <h4 className='col-12 col-lg-6 col-md-12'> Create a Job Post</h4>
              <div className="d-flex col-12 col-md-8 col-lg-6">
                <button className='clearbtn my-1 '>Cancel</button>
                <button className='mx-3 submitbtn' onClick={()=>{
                  postJob()
                }}>
                  Post Job
                </button>
              </div>
            </div>
            <div className="Jobinfo row m-0 p-0 border-1" >
              <div className="col-12 p-2">
                <h4 className='basicheading'>Basic info</h4>
                <div className="d-flex flex-column form-group">
                  <label htmlFor="jobtitle"
                    className='labelheading'>Job title:</label>
                  <input type="text" id="jobs_title" name="jobs_title" placeholder="Name" class="error" aria-invalid="true"  value={jobTitle} onChange={(e)=> {setJobTitle(e.target.value)}}></input></div>
              </div>
              <div className="col-lg-6 my-2">
                <label>Jobs Categories <sup>*</sup></label>
                <Select
                  defaultValue={jobCategorie}
                  onChange={setJobCategorie}
                  options={categoryoptions}
                  classNames='categoryselect'
                />

              </div>
              <div className="col-lg-6 my-2">
                <label>Jobs Type <sup>*</sup></label>
                <Select
                  defaultValue={jobType}
                  onChange={setJobType}
                  options={typeoptions}
                  classNames='categoryselect'
                />
              </div>
              <div className="col-lg-12 my-2">
                <label>Skills <sup>*</sup></label>
                <Select
                  defaultValue={jobSkills}
                  onChange={setJobSkills}
                  isMulti
                  name="Select Skills"
                  options={SkillsOptions}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>
              <div className="col-lg-12 my-3">
                <label>Description <sup>*</sup></label>
                <MyStatefulEditor markup="" onChange={onChange} className='texteditor' />
              </div>
              <div className="col-lg-6 my-2">
                <label>Career Level <sup>*</sup></label>
                <Select
                  defaultValue={jobCareerLevel}
                  onChange={setJobCareerLevel}
                  options={careerleveloptions}
                  classNames='categoryselect'
                />

              </div>
              <div className="col-lg-6 my-2">
                <label>Experience <sup>*</sup></label>
                <Select
                  defaultValue={jobExperience}
                  onChange={setJobExperience}
                  options={experienceoptions}
                  classNames='categoryselect'
                />
              </div>
              <div className="col-lg-6 my-2">
                <label>Qualification<sup>*</sup></label>
                <Select
                  defaultValue={jobQualification}
                  onChange={setJobQualification}
                  options={Qualificationoptions}
                  classNames='categoryselect'
                />

              </div>
              <div className="col-lg-6 my-2">
                <label>Closing Days <sup>*</sup></label>
               <input type="Date" value={jobClosingDays} onChange={(e)=> {setJobClosingDays(e.target.value)}}/>
              </div>

            </div>
            <div className="salaryinfo row m-0 p-0 my-2 border-1 py-2">
              <h4 className='basicheading'>Salary Info</h4>
              <div className="col-lg-6 my-2 " >
                <label>Maximum<sup>*</sup></label>
                <input type="text" name="salary" class="error" aria-invalid="true"  value={jobSalaryMax} onChange={(e)=> {setJobSalaryMax(e.target.value)}} />
              </div>
              <div className="col-lg-6 my-2">
                <label>Rate <sup>*</sup></label>
                <Select
                  defaultValue={jobSalaryRate}
                  onChange={setJobSalaryRate}
                  options={typeoptions}
                  classNames='categoryselect'
                />
              </div>
              <div className="col-lg-6 my-2">
                <h4 className='basicheading'>Job Apply Type</h4>
                <label>Select Type <sup>*</sup></label>
                <Select
                  defaultValue={jobApplyType}
                  onChange={setJobApplyType}
                  options={categoryoptions}
                  classNames='categoryselect'
                />

              </div>
             
            </div>
          </div>
          <div className="col-md-12 col-12 col-lg-4">
                <h3>About This Page</h3>
                <div class="about-jobs-dashboard block-archive-sidebar col-3">
                                <div class="img-company">
                                <FiCamera/>
                                </div>
                                <h4 class="title-about" data-title="Title of job">Title of job</h4>
                                <div class="info-jobs-warpper">
                                    by                                    <span class="name-company mx-2" data-name="Company Name">Company Name</span>
                                      in                                    <span class="cate-about" data-cate="Category">Category</span>
                                    <div class="label-warpper">
                                        <span class="label-type-inner"></span>
                                        <span class="label-location-inner"></span>
                                    </div>
                                    <div class="label label-price" data-text-min="Minimum:" data-text-max="Maximum:" data-text-agree="Negotiable Price"><i class="fas fa-usd-circle"></i><span class="salary-currency">$</span><span class="salary-minimum"></span> - <span class="salary-currency">$</span><span class="salary-maximum"></span> / <span class="salary-rate">hours</span></div>
                                </div>
                            </div>
          </div>
        </div>
      </div>
   

  )
}

export default Jobpost
