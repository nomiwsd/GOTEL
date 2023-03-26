import './Jobpost.css';
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import MyStatefulEditor from "./rte_test";
import CompanySidebar from '../Sidebar/CompanySidebar';
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

const SkillsOptions = [
  { value: 'BackEND Developer', label: 'BackEnd Developer' },
  { value: 'Software Engineer', label: 'Software Engineer' },
  { value: 'Content Writer', label: 'Content Writer' },
  { value: 'Product Manager', label: 'Product Manager' },
];

var compnay = ''

function Jobpost() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [val, setVal] = useState("");
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
            jobClosingDays:jobClosingDays.value,
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
    <div>
      <div className='jobpostsection row d-flex m-0 p-0'>
        <div className=" d-none d-md-block col-md-3 col-lg-2  m-0 p-0"><CompanySidebar /></div>
        <div className="col-12 col-md-9 col-lg-10 h-100"><CompanyNavbar />
          <div className="bg-color py-2 px-3 rounded-3">
            <div class="entry-title d-flex justify-content-between my-2 col-md-12 col-12 row">
              <h4 className='col-12 col-md-6'> Create a Job Post</h4>
              <div className="d-flex col-12 col-md-6">
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
                  options={categoryoptions}
                  classNames='categoryselect'
                />

              </div>
              <div className="col-lg-6 my-2">
                <label>Experience <sup>*</sup></label>
                <Select
                  defaultValue={jobExperience}
                  onChange={setJobExperience}
                  options={typeoptions}
                  classNames='categoryselect'
                />
              </div>
              <div className="col-lg-6 my-2">
                <label>Qualification<sup>*</sup></label>
                <Select
                  defaultValue={jobQualification}
                  onChange={setJobQualification}
                  options={categoryoptions}
                  classNames='categoryselect'
                />

              </div>
              <div className="col-lg-6 my-2">
                <label>Closing Days <sup>*</sup></label>
                <Select
                  defaultValue={jobClosingDays}
                  onChange={setJobClosingDays}
                  options={typeoptions}
                  classNames='categoryselect'
                />
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
              <div className="col-lg-6 my-2">
                <h4 className='basicheading'>Company</h4>
                <label>Select Company <sup>*</sup></label>
                <Select
                  defaultValue={jobTime}
                  onChange={setJobTime}
                  options={typeoptions}
                  classNames='categoryselect'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Jobpost
