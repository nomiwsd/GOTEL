import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import './Jobpost.css';
import React, { useState } from "react";
import Select from 'react-select';
import MyStatefulEditor from "./rte_test";
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
  { value: 'Full Time', label: 'Full Time' },
  { value: 'Part Time', label: 'Part Time' },
  { value: 'Remote', label: 'Remote' },
  { value: 'Internship', label: 'Internship' },
];
function Jobpost() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [val, setVal] = useState("");
  const onChange = (value) => {
    console.log(value);
    setVal(value);
  };
  return (
    <div>
      <div className='jobpostsection row d-flex m-0 p-0'>
        <div className=" d-none d-md-block col-md-3 col-lg-2  m-0 p-0"><Sidebar /></div>
        <div className="col-12 col-md-9 col-lg-10 h-100"><Navbar />
          <div className="bg-color py-2 px-3">
            <div class="entry-title d-flex justify-content-between my-2 col-6">
              <h4>Create a Job Post</h4>
              <div className="d-flex">
                <button className='clearbtn my-1 '>Cancel</button>
                <button className='mx-3 submitbtn'>
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
                  <input type="text" id="jobs_title" name="jobs_title" placeholder="Name" value="" class="error" aria-invalid="true"></input></div>
              </div>
              <div className="col-lg-6 my-2">
                <label>Jobs Categories <sup>*</sup></label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={categoryoptions}
                  classNames='categoryselect'
                />

              </div>
              <div className="col-lg-6 my-2">
                <label>Jobs Type <sup>*</sup></label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={typeoptions}
                  classNames='categoryselect'
                />
              </div>
              <div className="col-lg-12 my-2">
                <label>Skills <sup>*</sup></label>
                <Select
                  defaultValue={[SkillsOptions[0]]}
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
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={categoryoptions}
                  classNames='categoryselect'
                />

              </div>
              <div className="col-lg-6 my-2">
                <label>Experience <sup>*</sup></label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={typeoptions}
                  classNames='categoryselect'
                />
              </div>
              <div className="col-lg-6 my-2">
                <label>Qualification<sup>*</sup></label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={categoryoptions}
                  classNames='categoryselect'
                />

              </div>
              <div className="col-lg-6 my-2">
                <label>Closing Days <sup>*</sup></label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={typeoptions}
                  classNames='categoryselect'
                />
              </div>

            </div>
            <div className="salaryinfo row m-0 p-0 my-2 border-1 py-2">
              <h4 className='basicheading'>Salary Info</h4>
              <div className="col-lg-6 my-2 " >
                <label>Maximum<sup>*</sup></label>
                <input type="text" name="salary" value="" class="error" aria-invalid="true" />
              </div>
              <div className="col-lg-6 my-2">
                <label>Rate <sup>*</sup></label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={typeoptions}
                  classNames='categoryselect'
                />
              </div>
              <div className="col-lg-6 my-2">
                <h4 className='basicheading'>Job Apply Type</h4>
                <label>Select Type <sup>*</sup></label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={categoryoptions}
                  classNames='categoryselect'
                />

              </div>
              <div className="col-lg-6 my-2">
                <h4 className='basicheading'>Company</h4>
                <label>Select Company <sup>*</sup></label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
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
