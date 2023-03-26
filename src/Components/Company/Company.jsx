import React, { useEffect, useState } from 'react'
import CompanyNavbar from './Navbar/CompanyNavbar'
import CompanySidebar from './Sidebar/CompanySidebar'
import Select from 'react-select';
import { useLocation } from "react-router-dom";
import { firestore } from '../../firebase';
import { setDoc,doc,getDoc } from "@firebase/firestore"

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
  const location = useLocation();
  const [CompanyName, setCompanyName] = useState(location.state.user.Name);
  const [CompanyUrl, setCompanyUrl] = useState(null);
  const [WebsiteName, setWebsiteName] = useState(null);
  const [PhoneNo, setPhoneNo] = useState(null);
  const [CompanyEmail, setCompanyEmail] = useState(null);
  const [TwitterLink, setTwitterLink] = useState(null);
  const [InstagramLink, setInstagramLink] = useState(null);
  const [FacebookLink, setFacebookLink] = useState(null);
  const [LinkedInLink, setLinkedInLink] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [companySize,setCompanySize] = useState(null);
  const [CompanyAbout,setCompanyAbout] = useState(null)
  const [loading,setLoading] = useState(false)
  const [published,setPublished] = useState(false)
  
  const writeUserDetails = async () => {
    await setDoc(doc(firestore, "users",location.state.user.uid), {
      Name:CompanyName,
      companyUrl:CompanyUrl,
      email:CompanyEmail,
      about:CompanyAbout,
      websiteUrl:WebsiteName,
      phoneNo:PhoneNo,
      companySize:companySize.value,
      twitterLink:TwitterLink,
      instagramLink:InstagramLink,
      facebookLink:FacebookLink,
      linkedInLink:LinkedInLink,
      categories:selectedOption.value,
   })
  .then((e)=>{
      setLoading(false)
      setPublished(true)
      console.log('Company Created',e)
  }
  )
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
  });
    
  }
  const fetchUserDetails = async () => {
    
        await getDoc(doc(firestore,'users',location.state.user.uid))
            .then((querySnapshot)=>{
                if(querySnapshot.exists()){
                    setCompanyName(querySnapshot.data().Name)
                    setCompanyUrl(querySnapshot.data().companyUrl)
                    setWebsiteName(querySnapshot.data().websiteUrl)
                    setCompanyAbout(querySnapshot.data().about)
                    setPhoneNo(querySnapshot.data().phoneNo)
                    setTwitterLink(querySnapshot.data().twitterLink)
                    setInstagramLink(querySnapshot.data().instagramLink)
                    setFacebookLink(querySnapshot.data().facebookLink)
                    setLinkedInLink(querySnapshot.data().linkedInLink)
                    setSelectedOption(querySnapshot.data().categories)
                    setCompanySize({label:querySnapshot.data().companySize,value:querySnapshot.data().companySize})
                    setCompanyEmail(querySnapshot.data().email)
                }
                console.log('Company Data fetched')
            })
            .catch((e)=>{
                console.log(e)
            })
    }
    useEffect(()=>{
      fetchUserDetails()
    },[])

  
 
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
                  <a href="https://civi.uxper.co/dashboard/employers/company-employer/" class="civi-button button-outline" onClick={()=>{
                    fetchUserDetails()
                  }}>
                    Cancel							</a>
                  <button onClick={()=>{
                    writeUserDetails()
                  }} type="submit" class="btn-submit-company civi-button" name="submit_company">
                    Publish
                  
                  </button>
                </div>
              </div>
              <div className="Jobinfo row m-0 p-0 border-1 my-2" >
                <h4 className='basicheading my-2'>Basic info</h4>
                <div className="col-lg-6 p-2">
                  <label htmlFor="jobtitle"
                    className='labelheading'>Company Name:</label>
                  <input type="text" id="jobs_title" name="jobs_title" placeholder="Name"  class="error" aria-invalid="true" value={CompanyName}  onChange={(e)=> {setCompanyName(e.target.value)}}/>
                </div>
                <div className="col-lg-6  p-2">
                  <label>Categories <sup>*</sup></label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={categoryoptions}
                    classNames='categoryselect allselect'
                  />

                </div>
                <div className="col-lg-12 my-2">
                  <label>Company URL <sup>*</sup></label>
                  <input type="text" id="jobs_title" name="jobs_title" placeholder="Company URL" class="error" aria-invalid="true"  value={CompanyUrl}  onChange={(e)=> {
                                    setCompanyUrl(e.target.value);
                                }}/>
                </div>
                <div className="col-lg-12 my-3">
                  <label>About Company <sup>*</sup></label>
                  <textarea name="about comapny" id="" cols="30" rows="10" value={CompanyAbout} onChange={(e)=> {
                                    setCompanyAbout(e.target.value);
                                }}></textarea>
                </div>
                <div className="col-lg-6 my-2">
                  <label>Website <sup>*</sup></label>
                  <input type="text" id="jobs_title" name="jobs_title" placeholder="www.domain.com" class="error" aria-invalid="true"  value={WebsiteName}  onChange={(e)=> {
                                    setWebsiteName(e.target.value);
                                }}/>
                </div>
                <div className="col-lg-6 my-2">
                  <label>Phone No<sup>*</sup></label>
                  <input type='tel' id="jobs_title" name="jobs_title" placeholder="Phone No"  class="error" aria-invalid="true"  value={PhoneNo}  onChange={(e)=> {
                                    setPhoneNo(e.target.value);
                                }}/>

                </div>
                <div className="col-lg-6 my-2">
                  <label>Email<sup>*</sup></label>
                  <input type='Email' id="jobs_title" name="jobs_title" placeholder="Email"  class="error" aria-invalid="true"  value={CompanyEmail}  onChange={(e)=> {
                                    setCompanyEmail(e.target.value);
                                }}/>

                </div>
                <div className="col-lg-6 my-2">
                  <label>Company Size<sup>*</sup></label>
                  <Select
                    defaultValue={companySize}
                    onChange={setCompanySize}
                    options={CompanySize}
                    classNames='categoryselect allselect'
                  />

                </div>

              </div>
          
                <div className="salaryinfo row m-0 p-0 my-2 border-1 py-2">
              <h4 className='basicheading'>Social Media</h4>
              <div className="col-lg-6 my-2 " >
                <label>Twitter<sup>*</sup></label>
                <input type="url" name="company_twitter" id="company_twitter" placeholder="twitter.com/company"  value={TwitterLink}  onChange={(e)=> {
                                    setTwitterLink(e.target.value);
                                }}/>
              </div>
              <div className="col-lg-6 my-2">
                <label>Instagram<sup>*</sup></label>
                <input type="url" name="company_instagram" id="company_instagram" placeholder="instagram.com/company"  value={InstagramLink}  onChange={(e)=> {
                                    setInstagramLink(e.target.value);
                                }}/>
              </div>
              <div className="col-lg-6 my-2">
             
                <label>Facebook <sup>*</sup></label>
                <input type="url" name="company_facebook" id="company_facebook" placeholder="facebook.com/company"  value={FacebookLink}  onChange={(e)=> {
                                    setFacebookLink(e.target.value);
                                }} />

              </div>
              <div className="col-lg-6 my-2">
                <label>LinkedIn <sup>*</sup></label>
                <input type="url" name="company_linkedin" id="company_linkedin" placeholder="linkedin.com/company"   value={LinkedInLink}  onChange={(e)=> {
                                    setLinkedInLink(e.target.value);
                                }}/>
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
