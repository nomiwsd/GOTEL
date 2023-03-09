import React, { useState } from 'react'
import CompanyNavbar from './Navbar/CompanyNavbar'
import CompanySidebar from './Sidebar/CompanySidebar'
import Select from 'react-select';
import MyStatefulEditor from "../Company/PostJob/rte_test";
import './Company.css'
const categoryoptions = [
  { value: 'Analytics', label: 'Analytics' },
  { value: 'Design & Creative', label: 'Design & Creative' },
  { value: 'Development & IT', label: 'Development & IT' },
  { value: 'Legal & Finance', label: 'Legal & Finance' },
  { value: 'Marketing & Sales', label: 'Marketing & Sales' },
  { value: 'Writing & Translation', label: 'Writing & Translation' },
];
const CompanySize = [
  { value: '10-20', label: '10-20' },
  { value: '20-30', label: '20-30' },
  { value: '30-50', label: '30-50' },
  { value: '50-100', label: '50-100' },
];

function Company() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [val, setVal] = useState("");
  const onChange = (value) => {
    console.log(value);
    setVal(value);
  };
  return (
    <div>
      <div className="home d-flex w-100 position-relative">
        <div className=" d-none d-md-block col-md-3 col-lg-2 "><CompanySidebar /></div>
        <div className="col-12 col-md-9 col-lg-10 h-100"><CompanyNavbar />
          <div className="row m-0 p-0 form-dasboard">
            <div className="col-lg-8 col-md-7">
              <div class="submit-company-header civi-submit-header d-flex justify-content-between">
                <div class="entry-title">
                  <h4>Submit company</h4>
                </div>
                <div class="button-warpper d-flex justify-content-center">
                  <a href="https://civi.uxper.co/dashboard/employers/company-employer/" class="civi-button button-outline">
                    Cancel							</a>
                  <button type="submit" class="btn-submit-company civi-button" name="submit_company">
                    Publish
                  
                  </button>
                </div>
              </div>
              <div className="Jobinfo row m-0 p-0 border-1 my-2" >
                <h4 className='basicheading my-2'>Basic info</h4>
                <div className="col-lg-6 p-2">
                  <label htmlFor="jobtitle"
                    className='labelheading'>Company Name:</label>
                  <input type="text" id="jobs_title" name="jobs_title" placeholder="Name" value="" class="error" aria-invalid="true"></input>
                </div>
                <div className="col-lg-6  p-2">
                  <label>Categories <sup>*</sup></label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={categoryoptions}
                    classNames='categoryselect'
                  />

                </div>
                <div className="col-lg-12 my-2">
                  <label>Company URL <sup>*</sup></label>
                  <input type="text" id="jobs_title" name="jobs_title" placeholder="Company URL" value="" class="error" aria-invalid="true"></input>
                </div>
                <div className="col-lg-12 my-3">
                  <label>About Company <sup>*</sup></label>
                  <MyStatefulEditor markup="" onChange={onChange} className='texteditor' />
                </div>
                <div className="col-lg-6 my-2">
                  <label>Website <sup>*</sup></label>
                  <input type="text" id="jobs_title" name="jobs_title" placeholder="www.domain.com" value="" class="error" aria-invalid="true"></input>
                </div>
                <div className="col-lg-6 my-2">
                  <label>Phone No<sup>*</sup></label>
                  <input type='tel' id="jobs_title" name="jobs_title" placeholder="Phone No" value="" class="error" aria-invalid="true"></input>

                </div>
                <div className="col-lg-6 my-2">
                  <label>Email<sup>*</sup></label>
                  <input type='Email' id="jobs_title" name="jobs_title" placeholder="Email" value="" class="error" aria-invalid="true"></input>

                </div>
                <div className="col-lg-6 my-2">
                  <label>Company Size<sup>*</sup></label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={CompanySize}
                    classNames='categoryselect'
                  />

                </div>

              </div>
          
                <div className="salaryinfo row m-0 p-0 my-2 border-1 py-2">
              <h4 className='basicheading'>Social Media</h4>
              <div className="col-lg-6 my-2 " >
                <label>Twitter<sup>*</sup></label>
                <input type="url" name="company_twitter" id="company_twitter" placeholder="twitter.com/company" />
              </div>
              <div className="col-lg-6 my-2">
                <label>Instagram<sup>*</sup></label>
                <input type="url" name="company_instagram" id="company_instagram" placeholder="instagram.com/company" />
              </div>
              <div className="col-lg-6 my-2">
             
                <label>Facebook <sup>*</sup></label>
                <input type="url" name="company_facebook" id="company_facebook" placeholder="facebook.com/company" />

              </div>
              <div className="col-lg-6 my-2">
                <label>LinkedIn <sup>*</sup></label>
                <input type="url" name="company_linkedin" id="company_linkedin" placeholder="linkedin.com/company" />
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
}

      export default Company
