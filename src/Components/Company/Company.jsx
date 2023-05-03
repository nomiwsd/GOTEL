import React, { useEffect, useState } from 'react'
import CompanyNavbar from './Navbar/CompanyNavbar'
import Select from 'react-select';
import { useLocation } from "react-router-dom";
import { firestore,storage } from '../../firebase';
import { setDoc,doc,getDoc } from "@firebase/firestore"
import {BsPeopleFill} from 'react-icons/bs'
import {MdWorkOutline,MdPostAdd} from 'react-icons/md'
import {FaUserPlus} from 'react-icons/fa'
import {FiCamera} from 'react-icons/fi'
import {BiMessageDetail} from 'react-icons/bi'
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import { ref,getDownloadURL,uploadBytes } from "firebase/storage"

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
  const [user,setUser] = useState({name:''})
  useEffect(()=>{
    var company = localStorage.getItem('user')
    company = JSON.parse(company)
    setUser(company)
    setCompanyName(company.Name)
    fetchUserDetails(company.uid)
  },[])
  const [CompanyName, setCompanyName] = useState(user.Name);
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
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCover, setSelectedCover] = useState(null);

  const uploadImage = async (image)=>{
    const buffer = await image.arrayBuffer();
    const result = await uploadBytes(ref(storage,`images/${user.uid}/profile`),buffer)
    setSelectedImage(await getDownloadURL(ref(storage,`images/${user.uid}/profile`)))
  }
  const uploadCover = async (image)=>{
    const buffer = await image.arrayBuffer();
    const result = await uploadBytes(ref(storage,`images/${user.uid}/cover`),buffer)
    setSelectedCover(await getDownloadURL(ref(storage,`images/${user.uid}/cover`)))
  }
  const writeUserDetails = async () => {
    await setDoc(doc(firestore, "users",location.state.user.uid), {
      Name:CompanyName,
      userType:'Company',
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
  const fetchUserDetails = async (uid) => {
    
      setSelectedImage(await getDownloadURL(ref(storage,`images/${uid}/profile`)))
      setSelectedCover(await getDownloadURL(ref(storage,`images/${uid}/cover`)))
        await getDoc(doc(firestore,'users',uid))
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
  return (
    <div>
      <div className="home d-flex w-100 position-relative">
        <div className="d-none d-md-block col-md-3 col-lg-2 sidebar">
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
        <div className="col-12 col-md-9 col-lg-10 h-100"><CompanyNavbar userProfileImg={selectedImage} />
          <div className="row m-0 p-0 form-dasboard d-flex flex-column flex-md-row">
            <div className="col-lg-8 col-md-7 col-12">
              <div class="submit-company-header civi-submit-header d-flex flex-lg-row flex-column justify-content-between sticky">
                <div class="entry-title">
                  <h4>Submit company</h4>
                </div>
                <div class="button-warpper d-flex justify-content-center">
                  <Link  class="civi-button button-outline" onClick={()=>{
                    fetchUserDetails()
                  }}>
                    Cancel							</Link>
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
            <div className="imageupload border-1 rounded-2 d-flex flex-lg-row flex-column justify-content-center mb-5 p-2 gap-2">
                            <div className="col-6 col-lg-4  rounded-2 d-flex flex-column justify-content-center coverimgdiv align-items-center p-4 p-lg-2">
                            <p>Profile Image</p>
                            <button type="file" name='Upload' className='uploadimgbtn mb-2'>Upload</button>
                            <img src="" className='profileimg' alt="" />
                            </div>
                            <div className="col-12 col-lg-7 coverimgdiv rounded-2 d-flex flex-column justify-content-center align-items-center p-4 p-lg-2">
                            <p>Cover Image</p>
                            {/* <button type="file" name='Upload'className='uploadimgbtn mb-2'>Upload</button> */}
                            <label for="cover" id="civi_select_avatar" className='uploadimgbtn mb-2'>Upload</label>
                          <input
                              type="file"
                              id='cover'
                              placeholder='Upload'
                              onChange={(event) => {
                                uploadCover(event.target.files[0])
                              }}
                              style={{ visibility: 'hidden'}}
                            />
                            <img src="" className='cover' alt="" />
                            </div>
                        </div>
              </div>
              <div class="about-company-dashboard block-archive-sidebar col-lg-3 col-md-3 col-11 mx-2 relative">
							<h3 class="title-company-about">
								Preview</h3>
							<div class="info-company">
								{selectedImage == null ? 
                <>
                <label for="files" id="civi_select_avatar" class="img-company p-4" style={{ position: 'relative', zIndex: '1', }}><FiCamera/></label>
                          <input
                              type="file"
                              id='files'
                              placeholder='Upload'
                              onChange={(event) => {
                                uploadImage(event.target.files[0])
                                console.log(event.target.files[0]);
                              }}
                              style={{ visibility: 'hidden'}}
                            />
                </>
                :
                <img src={selectedImage} class="rounded-circle aspect-auto" style={{ width: "70px",height: "70px",overflow: 'hidden' }}
                                    alt="Avatar" />}
								<div class="company-right">
									<div class="title-wapper">
										<h4 class="title-about" data-title="Company name">{CompanyName == null ? user.Name : CompanyName}</h4>																				
																				</div>
                    <p className=' m-0'>{CompanyEmail}</p>
                    <p className=' m-0'>{WebsiteName}</p>
                    <p className=' m-0'>{PhoneNo}</p>
							
								</div>
							</div>
							<div class="des-about"></div>
						{
              selectedCover != null ? <img src={selectedCover} className=' w-full h-full object-cover -z-10 absolute left-0 top-0 blur-[1px]' /> : <></>
            }
            </div>
            </div>
          </div>
        </div>
      </div>
      )
}

      export default Company
