import React, { useState,useEffect } from 'react'
import JobSeekerSidebar from './Sidebar/JobSeekerSidebar';
import JobSeekerNavbar from './Navbar/JobSeekerNavbar';
import './JobSeeker.css'
import Select from 'react-select';
import MyStatefulEditor from "../Company/PostJob/rte_test";

import { ref,getDownloadURL,uploadBytes } from "firebase/storage"
import { useLocation } from "react-router-dom";
import { firestore,storage } from '../../firebase';
import { setDoc,doc,getDoc, collection } from "@firebase/firestore"
import { async } from '@firebase/util';

const categoryoptions = [
  { value: 'Analytics', label: 'Analytics' },
  { value: 'Design & Creative', label: 'Design & Creative' },
  { value: 'Development & IT', label: 'Development & IT' },
  { value: 'Legal & Finance', label: 'Legal & Finance' },
  { value: 'Marketing & Sales', label: 'Marketing & Sales' },
  { value: 'Writing & Translation', label: 'Writing & Translation' },
];
const Genderoptions = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
];
const Experienceoptions = [
  { value: '1-2', label: '1-2 Years' },
  { value: '2-4', label: '3-4 Years' },
];
const Qualificationoptions = [
  { value: 'Associate', label: 'Associate Degree' },
  { value: 'Bachelor', label: 'Bachelor Degree' },
  { value: 'Certificate', label: 'Certificate' },
  { value: 'Bachelor', label: 'Master"s Degree' },
  { value: 'Associate', label: 'Doctrate Degree' },
  { value: 'Bachelor', label: 'Bachelor Degree' },
];

const SkillsOptions = [
  { value: 'BackEND Developer', label: 'BackEnd Developer' },
  { value: 'Software Engineer', label: 'Software Engineer' },
  { value: 'Content Writer', label: 'Content Writer' },
  { value: 'Product Manager', label: 'Product Manager' },
];
var fileByteArray = [];
function JobSeeker() {
  useEffect(()=>{
    var company = localStorage.getItem('user')
    company = JSON.parse(company)
    setUser(company)
    fetchAllDetails(company.uid)
  },[])
  var [user,setUser] = useState({})

  const [val, setVal] = useState("");
  const onChange = (value) => {
    console.log(value);
    setDescription(value);
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState(user.Name);
  const [position, setPosition] = useState(null);
  const [categories, setCategories] = useState(null);
  const [phoneNo, setPhoneNo] = useState(null);
  const [email, setEmail] = useState(user.email);
  const [TwitterLink, setTwitterLink] = useState(null);
  const [InstagramLink, setInstagramLink] = useState(null);
  const [FacebookLink, setFacebookLink] = useState(null);
  const [LinkedInLink, setLinkedInLink] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [discription,setDescription] = useState(null);
  const [dob,setDob] = useState(null)
  const [gender,setGender] = useState(null)
  const [language,setLanguage] = useState(null)
  const [qualification,setQualification] = useState(null)
  const [experience,setExperiance] = useState(null)
  const [loading,setLoading] = useState(false)
  const [published,setPublished] = useState(false)
  
  const [expJobTitle,setExpJobTitle] = useState(null)
  const [expCompanyName,setExpCompanyName] = useState(null)
  const [expFrom,setExpFrom] = useState(null)
  const [expTo,setExpTo] = useState(null)
  const [expDescription,setExpDescription] = useState(null)
  
  const [exp2JobTitle,setExp2JobTitle] = useState(null)
  const [exp2CompanyName,setExp2CompanyName] = useState(null)
  const [exp2From,setExp2From] = useState(null)
  const [exp2To,setExp2To] = useState(null)
  const [exp2Description,setExp2Description] = useState(null)

  const [projectJobTitle,setProjectJobTitle] = useState(null)
  const [projectDescription,setProjectDescription] = useState(null)
  const [project2JobTitle,setProject2JobTitle] = useState(null)
  const [project2Description,setProject2Description] = useState(null)

  const [awardJobTitle,setAwardJobTitle] = useState(null)
  const [awardDescription,setAwardDescription] = useState(null)
  const [award2JobTitle,setAward2JobTitle] = useState(null)
  const [award2Description,setAward2Description] = useState(null)

  const [skills,setSkills] = useState(null)

  const writeAllDetails = async ()=>{
    writeUserDetails()
    writeUserExperiance()
    writeSkills()
    writeUserAwards()
    writeUserProjects()
  }
  const fetchAllDetails = async (uid)=>{
    fetchUserDetails(uid)
    fetchExperianceDetails(uid)
    fetchSkills(uid)
    fetchProjectDetails(uid)
    fetchAwardDetails(uid)
  }
  const writeUserDetails = async () => {
    await setDoc(doc(firestore, "users",user.uid), {
      Name:name,
      position:position,
      categories:categories.value,
      discription:discription,
      dob:dob,
      phoneNo:phoneNo,
      gender:gender.value,
      twitterLink:TwitterLink,
      instagramLink:InstagramLink,
      facebookLink:FacebookLink,
      linkedInLink:LinkedInLink,
      language:language,
      qualification:qualification.value,
      experience:experience.value,
   })
  .then((e)=>{
      setLoading(false)
      setPublished(true)
      console.log('UserDetails Updated',e)
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
        await getDoc(doc(firestore,'users',uid))
            .then((querySnapshot)=>{
                if(querySnapshot.exists()){
                    setName(querySnapshot.data().Name)
                    setPosition(querySnapshot.data().position)
                    setCategories(querySnapshot.data().categories)
                    setDob(querySnapshot.data().dob)
                    setPhoneNo(querySnapshot.data().phoneNo)
                    setTwitterLink(querySnapshot.data().twitterLink)
                    setInstagramLink(querySnapshot.data().instagramLink)
                    setFacebookLink(querySnapshot.data().facebookLink)
                    setLinkedInLink(querySnapshot.data().linkedInLink)
                    setGender(querySnapshot.data().gender)
                    setLanguage(querySnapshot.data().language)
                    setQualification({label:querySnapshot.data().qualification,value:querySnapshot.data().qualification})
                    setEmail(querySnapshot.data().email)
                }
                console.log('User Data fetched')
            })
            .catch((e)=>{
                console.log(e)
            })
    }
  const writeUserExperiance = async () => {
      await setDoc(doc(firestore, `users/${user.uid}/Experiance/${user.uid}`), {
        first : {
          jobTitle:expJobTitle,
          company:expCompanyName,
          from:expFrom,
          to:expTo,
          description:expDescription
        },
        second : {
          jobTitle:exp2JobTitle,
          company:exp2CompanyName,
          from:exp2From,
          to:exp2To,
          description:exp2Description
        },
     })
    .then((e)=>{
        setLoading(false)
        setPublished(true)
        console.log('User Experiance Updated',e)
    }
    )
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
      
  }
  const fetchExperianceDetails = async (uid) => {
    await getDoc(doc(firestore,`users/${uid}/Experiance`,uid))
        .then((querySnapshot)=>{
            if(querySnapshot.exists()){
                setExpJobTitle(querySnapshot.data().first.jobTitle)
                setExpCompanyName(querySnapshot.data().first.company)
                setExpFrom(querySnapshot.data().first.from)
                setExpTo(querySnapshot.data().first.to)
                setExpDescription(querySnapshot.data().first.description)
                setExp2JobTitle(querySnapshot.data().second.jobTitle)
                setExp2CompanyName(querySnapshot.data().second.company)
                setExp2From(querySnapshot.data().second.from)
                setExp2To(querySnapshot.data().second.to)
                setExp2Description(querySnapshot.data().second.description)
            }
            console.log('User Experiance fetched')
        })
        .catch((e)=>{
            console.log(e)
        })
}
const writeSkills = async () => {
  await setDoc(doc(firestore, `users/${user.uid}/Skills/${user.uid}`), {
    skills : skills
 })
.then((e)=>{
    setLoading(false)
    setPublished(true)
    console.log('User Experiance Updated',e)
}
)
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
});
  
}
const fetchSkills = async (uid) => {
await getDoc(doc(firestore,`users/${uid}/Skills/${uid}`))
    .then((querySnapshot)=>{
        if(querySnapshot.exists()){
            setSkills(querySnapshot.data().skills)            
        }
        console.log('User Experiance fetched')
    })
    .catch((e)=>{
        console.log(e)
    })
}
const writeUserProjects = async () => {
  await setDoc(doc(firestore, `users/${user.uid}/Projects/${user.uid}`), {
    first : {
      projectTitle:projectJobTitle,
      description:projectDescription
    },
    second : {
      projectTitle:project2JobTitle,
      description:project2Description
    },
 })
.then((e)=>{
    setLoading(false)
    setPublished(true)
    console.log('User Project Updated',e)
}
)
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
});
  
}
const fetchProjectDetails = async (uid) => {
await getDoc(doc(firestore,`users/${uid}/Projects`,uid))
    .then((querySnapshot)=>{
        if(querySnapshot.exists()){
            setProjectJobTitle(querySnapshot.data().first.projectTitle)
            setProjectDescription(querySnapshot.data().first.description)
            setProject2JobTitle(querySnapshot.data().second.projectTitle)
            setProject2Description(querySnapshot.data().second.description)
        }
        console.log('User Experiance fetched')
    })
    .catch((e)=>{
        console.log(e)
    })
}
const writeUserAwards = async () => {
  await setDoc(doc(firestore, `users/${user.uid}/Awards/${user.uid}`), {
    first : {
      awardTitle:awardJobTitle,
      description:awardDescription
    },
    second : {
      awardTitle:award2JobTitle,
      description:award2Description
    },
 })
.then((e)=>{
    setLoading(false)
    setPublished(true)
    console.log('User Project Updated',e)
}
)
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
});
  
}
const fetchAwardDetails = async (uid) => {
await getDoc(doc(firestore,`users/${uid}/Awards`,uid))
    .then((querySnapshot)=>{
        if(querySnapshot.exists()){
            setAwardJobTitle(querySnapshot.data().first.awardTitle)
            setAwardDescription(querySnapshot.data().first.description)
            setAward2JobTitle(querySnapshot.data().second.awardTitle)
            setAward2Description(querySnapshot.data().second.description)
        }
        console.log('User Experiance fetched')
    })
    .catch((e)=>{
        console.log(e)
    })
}
  const uploadImage = async (image)=>{
    const buffer = await image.arrayBuffer();
    const result = await uploadBytes(ref(storage,`images/${user.uid}/profile`),buffer)
    setSelectedImage(await getDownloadURL(ref(storage,`images/${user.uid}/profile`)))
  }  
  const uploadCv = async (image)=>{
    const buffer = await image.arrayBuffer();
    const result = await uploadBytes(ref(storage,`images/${user.uid}/cv`),buffer)
    // setSelectedImage(await getDownloadURL(ref(storage,`images/${user.uid}/cv`)))
  } 
  return (
    <div className="home d-flex w-100 position-relative">
      <div className=" d-none d-md-block col-md-3 col-lg-2 "><JobSeekerSidebar /></div>
      <div className="col-12 col-md-9 col-lg-10 h-100"><JobSeekerNavbar />
        <div className="row m-0 p-0 mb-5">
          <div class="entry-title">
            <h4>Profile Settings</h4>
          </div>
          <div className="col-lg-7 ">
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Basic Info</button>
                <button class="nav-link" id="nav-Eduaction-tab" data-bs-toggle="tab" data-bs-target="#nav-Eduaction" type="button" role="tab" aria-controls="nav-Eduaction" aria-selected="false">Education</button>
                <button class="nav-link" id="nav-Experience-tab" data-bs-toggle="tab" data-bs-target="#nav-Experience" type="button" role="tab" aria-controls="nav-Experience" aria-selected="false">Experience</button>
                <button class="nav-link" id="nav-Skills-tab" data-bs-toggle="tab" data-bs-target="#nav-Skills" type="button" role="tab" aria-controls="nav-Skills" aria-selected="false">Skills</button>
                <button class="nav-link" id="nav-Projects-tab" data-bs-toggle="tab" data-bs-target="#nav-Projects" type="button" role="tab" aria-controls="nav-Projects" aria-selected="false">Projects</button>
                <button class="nav-link" id="nav-Award-tab" data-bs-toggle="tab" data-bs-target="#nav-Award" type="button" role="tab" aria-controls="nav-Award" aria-selected="false">Award</button>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className="border-1 rounded-3 p-2">
                  <div class="candidate-fields-avatar civi-fields-avatar form-dashboard">
                    <label>Your photo</label>
                    <div class="form-field">
                      <div id="civi_avatar_errors" class="errors-log"></div>
                      <div id="civi_avatar_container" class="file-upload-block preview">
                        <div id="civi_avatar_view" data-image-id="66" data-image-url="https://civi.uxper.co/wp-content/uploads/2022/12/633e0700e8fb630be246f1f9_Untitled-3-p-500.png" style={{ position: 'relative' }}></div>
                        <div id="civi_add_avatar" >
                          <i class="la la-upload large"></i>
                          <p id="civi_drop_avatar" style={{ display: 'block' }}>
                          <label for="files" id="civi_select_avatar" style={{ position: 'relative', zIndex: '1' }}>Upload</label>
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
                            {/* <button type="file" id="civi_select_avatar" style={{ position: 'relative', zIndex: '1' }}>Upload</button> */}
                          </p>
                        </div>
                        <input type="hidden" class="avatar_url form-control" name="author_avatar_image_url" value="" id="avatar_url" />
                        <input type="hidden" class="avatar_id" name="author_avatar_image_id" value="" id="avatar_id" />
                        <div id="html5_1gqv2udh77nsl4l1jqfecc1u54c_container" class="uploadimagecontainer" >
                          <input className='uploadbtn' type='file' multiple accept="image/jpeg,.jpg,.jpeg,image/png,.png,image/gif,.gif,.webp" /></div></div>
                    </div>
                    {/* {
                      selectedImage != null ? <img src={selectedImage} /> : <></>
                    } */}
                    <div class="field-note">Maximum file size: 1400kb.</div>
                  </div>
                  <div class="row m-0 p-0 form-dashboard">
                    <div class="col-md-6 col-6 ">
                      <label for="candidate_first_name">Username</label>
                      <input class="point-mark point-active" type="text" name="candidate_first_name" placeholder="Username"  value={name}  onChange={(e)=> {setName(e.target.value)}}/>
                    </div>
                    <div class=" col-md-6 col-6" >
                      {/* <label for="candidate_last_name">Last name</label>
                      <input class="point-mark point-active" type="text" name="candidate_last_name" placeholder="Last name" value="Demo" /> */}
                    </div>
                    <div class="col-md-6">
                      <label for="candidate_email">Email address</label>
                      <input class="point-mark point-active" type="email" id="user_email" name="candidate_email" placeholder="Email"  value={email}  onChange={(e)=> {setEmail(e.target.value)}} />
                    </div>
                    <div class="col-md-6">
                      <label for="candidate_phone">Phone number</label>
                      <input class="point-mark point-active" type="number" id="author_mobile_number" name="candidate_phone" value={phoneNo}  onChange={(e)=> {setPhoneNo(e.target.value)}} placeholder="Phone" />
                    </div>
                    <div class=" col-md-6">
                      <label for="candidate_current_position">Current Position</label>
                      <input class="point-mark point-active" type="text" id="candidate_current_position" name="candidate_current_position" value={position}  onChange={(e)=> {setPosition(e.target.value)}} placeholder="Ex: UI/UX Designer" />
                    </div>
                    <div class=" col-md-6">
                      <label for="candidate_categories">Categories</label>
                      <Select
                        defaultValue={categories}
                        onChange={setCategories}
                        options={categoryoptions}
                        classNames='categoryselect p-1'
                      />

                    </div>
                    <div className="col-12">  <label for="candidate_des">Description</label><MyStatefulEditor markup="" onChange={onChange} className='texteditor' /></div>

                    <div id="wp-candidate_des-wrap  " className="row m-0 p-0">
                      <div class=" col-md-6">
                        <label for="candidate_dob">Date of Birth</label>
                        <input class="point-mark point-active" type="date" id="candidate_dob" name="candidate_dob" placeholder='DoB' value={dob}  onChange={(e)=> {setDob(e.target.value)}} />
                      </div>
                      <div class=" col-md-6">
                        <label for="candidate_gender">Gender</label>
                        <Select
                          defaultValue={gender}
                          onChange={setGender}
                          options={Genderoptions}
                          classNames='categoryselect'
                        />
                      </div>
                      <div class=" col-md-6">
                        <label for="candidate_languages">Languages</label>
                        <input class="point-mark point-active" type="text" id="author_mobile_number" name="candidate_phone" placeholder="Language" value={language}  onChange={(e)=> {setLanguage(e.target.value)}} /></div>
                      <div class="col-md-6">
                        <label for="candidate_qualification">Qualification</label>
                        <Select
                          defaultValue={qualification}
                          onChange={setQualification}
                          options={Qualificationoptions}
                          classNames='categoryselect'
                        />
                      </div>
                      <div class=" col-md-6">
                        <label for="candidate_yoe">Years of Experience</label>
                        <Select
                          defaultValue={experience}
                          onChange={setExperiance}
                          options={Experienceoptions}
                          classNames='categoryselect'
                        />
                      </div>



                    </div>
                  </div>
                  <div className="salaryinfo row m-0 p-0 my-2 border-1 py-2">
                    <h4 className='basicheading'>Social Media</h4>
                    <div className="col-lg-6 my-2 " >
                      <label>Twitter<sup>*</sup></label>
                      <input type="url" name="company_twitter" id="company_twitter" placeholder="twitter.com/com/User" value={TwitterLink}  onChange={(e)=> {setTwitterLink(e.target.value)}} />
                    </div>
                    <div className="col-lg-6 my-2">
                      <label>Instagram<sup>*</sup></label>
                      <input type="url" name="company_instagram" id="company_instagram" placeholder="instagram.com/User" value={InstagramLink}  onChange={(e)=> {setInstagramLink(e.target.value)}} />
                    </div>
                    <div className="col-lg-6 my-2">

                      <label>Facebook <sup>*</sup></label>
                      <input type="url" name="company_facebook" id="company_facebook" placeholder="facebook.com/User" value={FacebookLink}  onChange={(e)=> {setFacebookLink(e.target.value)}} />

                    </div>
                    <div className="col-lg-6 my-2">
                      <label>LinkedIn <sup>*</sup></label>
                      <input type="url" name="company_linkedin" id="company_linkedin" placeholder="linkedin.com/User" value={LinkedInLink}  onChange={(e)=> {setLinkedInLink(e.target.value)}} />
                    </div>
                  </div>
                  <div class="resume block-from">
                    <h6>Resume</h6>
                    <div class="candidate-resume">
                      <div class="form-group col-md-12 civi-upload-cv">
                        <label>CV Attachment</label>
                        <div class="form-field">
                          <div id="cv_errors_log" class="errors-log"></div>
                          <div id="civi_cv_plupload_container" class="file-upload-block preview" style={{ position: 'relative' }}>
                            <div class="civi_cv_file civi_add-cv">
                              <p id="civi_drop_cv" data-attachment-id="">
                                {/* <button class="civi-button col-3" type="button" id="civi_select_cv" style={{ position: 'relative', zIndex: 1 }}><i class="la la-upload large"></i> Browse</button> */}
                                <label for="filescv" class="civi-button col-3" style={{ position: 'relative', zIndex: '1' }}><i class="la la-upload large"></i>Browse</label>
                                <input
                                    type="file"
                                    id='filescv'
                                    placeholder='Upload'
                                    onChange={(event) => {
                                      uploadCv(event.target.files[0])
                                    }}
                                    style={{ visibility: 'hidden'}}
                                  />
                              </p>
                            </div>
                            <span class="file-type">Upload file: doc,docx,pdf</span>
                            <div id="html5_1gqv2udhadag15s51uj3f81d5df_container" class="uploadimagecontainer" >
                              <input id="html5_1gqv2udhadag15s51uj3f81d5df" className='uploadbtn' type="file" multiple accept="application/msword,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx,application/pdf,.pdf" /></div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></div>

              <div class="tab-pane fade" id="nav-Education" role="tabpanel" aria-labelledby="nav-Education-tab">
                <div id="tab-education" class="tab-info block-from">

                  <h5 class="education">Education</h5>

                  <div class="sub-head">We recommend at least one education entry.</div>

                  <div class="civi-candidate-warpper">
                    <div class="row m-0 p-0 form-dashboard">
                      <div class="group-title col-md-12 up">
                        <h6 class="education">
                          Education 1
                        </h6>

                      </div>
                      <div class="col-md-6 col-6 ">
                        <label for="candidate_first_name">Title</label>
                        <input class="point-mark point-active" type="text" name="candidate_first_name" placeholder="Instituite Name" />
                      </div>
                      <div class=" col-md-6 col-6" >
                        <label for="candidate_last_name">Level of Education</label>
                        <input class="point-mark point-active" type="text" name="candidate_last_name" placeholder="Degree" />
                      </div>

                      <div class="col-md-6">
                        <label>From</label>
                        <input type="date" name="candidate_education_from[]" value="2020-06-01" class="point-mark point-active" />
                      </div>
                      <div class="col-md-6">
                        <label>To</label>
                        <input type="date" name="candidate_education_to[]" value="2022-01-01" class="point-mark point-active" />
                      </div>

                      <div class="form-group col-md-12">
                        <label>Description</label>
                        <textarea name="candidate_education_description[]" cols="30" placeholder="Short description" rows="7" class="point-mark point-active">Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie</textarea>
                      </div>
                    </div>
                    <div class="row m-0 p-0 form-dashboard">
                      <div class="group-title col-md-12 up">
                        <h6 class="education">
                          Education 2
                        </h6>

                      </div>
                      <div class="col-md-6 col-6 ">
                        <label for="candidate_first_name">Title</label>
                        <input class="point-mark point-active" type="text" name="candidate_first_name" placeholder="Instituite Name" />
                      </div>
                      <div class=" col-md-6 col-6" >
                        <label for="candidate_last_name">Level of Education</label>
                        <input class="point-mark point-active" type="text" name="candidate_last_name" placeholder="Degree" />
                      </div>

                      <div class="col-md-6">
                        <label>From</label>
                        <input type="date" name="candidate_education_from[]" value="2020-06-01" class="point-mark point-active" />
                      </div>
                      <div class="col-md-6">
                        <label>To</label>
                        <input type="date" name="candidate_education_to[]" value="2022-01-01" class="point-mark point-active" />
                      </div>

                      <div class="form-group col-md-12">
                        <label>Description</label>
                        <textarea name="candidate_education_description[]" cols="30" placeholder="Short description" rows="7" class="point-mark point-active">Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie</textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="nav-Experience" role="tabpanel" aria-labelledby="nav-Experience-tab">
                <div id="tab-education" class="tab-info block-from">

                  <h5 class="education">Experience</h5>

                  <div class="sub-head">We recommend at least one Experience entry.</div>

                  <div class="civi-candidate-warpper">
                    <div class="row m-0 p-0 form-dashboard">
                      <div class="group-title col-md-12 up">
                        <h6 class="education">
                          Experience 1
                        </h6>

                      </div>
                      <div class="col-md-6 col-6 ">
                        <label for="candidate_first_name">Job Title</label>
                        <input class="point-mark point-active" type="text" name="candidate_first_name" placeholder="job title"  value={expJobTitle}  onChange={(e)=> {setExpJobTitle(e.target.value)}} />
                      </div>
                      <div class=" col-md-6 col-6" >
                        <label for="candidate_last_name">Company</label>
                        <input class="point-mark point-active" type="text" name="candidate_last_name" placeholder="company name"  value={expCompanyName}  onChange={(e)=> {setExpCompanyName(e.target.value)}} />
                      </div>

                      <div class="col-md-6">
                        <label>From</label>
                        <input type="date" name="candidate_education_from[]"  value={expFrom}  onChange={(e)=> {setExpFrom(e.target.value)}} class="point-mark point-active" />
                      </div>
                      <div class="col-md-6">
                        <label>To</label>
                        <input type="date" name="candidate_education_to[]"  value={expTo}  onChange={(e)=> {setExpTo(e.target.value)}} class="point-mark point-active" />
                      </div>

                      <div class="form-group col-md-12">
                        <label>Description</label>
                        <textarea name="candidate_education_description[]" cols="30" placeholder="Short description" rows="7" class="point-mark point-active"  value={expDescription}  onChange={(e)=> {setExpDescription(e.target.value)}}>Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie</textarea>
                      </div>
                    </div>
                    <div class="row m-0 p-0 form-dashboard">
                      <div class="group-title col-md-12 up">
                        <h6 class="education">
                          Education 2
                        </h6>

                      </div>
                      <div class="col-md-6 col-6 ">
                        <label for="candidate_first_name">Job Title</label>
                        <input class="point-mark point-active" type="text" name="candidate_first_name" placeholder="Job Title"  value={exp2JobTitle}  onChange={(e)=> {setExp2JobTitle(e.target.value)}} />
                      </div>
                      <div class=" col-md-6 col-6" >
                        <label for="candidate_last_name">Company</label>
                        <input class="point-mark point-active" type="text" name="candidate_last_name" placeholder="company name"  value={exp2CompanyName}  onChange={(e)=> {setExp2CompanyName(e.target.value)}} />
                      </div>

                      <div class="col-md-6">
                        <label>From</label>
                        <input type="date" name="candidate_education_from[]"  value={exp2From}  onChange={(e)=> {setExp2From(e.target.value)}} class="point-mark point-active" />
                      </div>
                      <div class="col-md-6">
                        <label>To</label>
                        <input type="date" name="candidate_education_to[]"  value={exp2To}  onChange={(e)=> {setExp2To(e.target.value)}} class="point-mark point-active" />
                      </div>

                      <div class="form-group col-md-12">
                        <label>Description</label>
                        <textarea name="candidate_education_description[]" cols="30" placeholder="Short description" rows="7"  value={exp2Description}  onChange={(e)=> {setExp2Description(e.target.value)}} class="point-mark point-active">Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie</textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="nav-Skills" role="tabpanel" aria-labelledby="nav-Skills-tab">
                <div id="tab-education" class="tab-info block-from">

                  <h5 class="education">Skills</h5>

                  <div class="sub-head">We recommend at least one Skills entry.</div>

                  <div class="civi-candidate-warpper">
                    <div class="row m-0 p-0 form-dashboard">
                      <div class="group-title col-md-12 up">
                        <h6 class="education">
                          Skills
                        </h6>

                      </div>
                      <div className="col-lg-12 my-2">
                        <label>Skills <sup>*</sup></label>
                        <Select
                          defaultValue={skills}                          
                          onChange={setSkills}
                          isMulti
                          name="Select Skills"
                          options={SkillsOptions}
                          className="basic-multi-select"
                          classNamePrefix="select"
                        />
                      </div>
                    </div>
                  </div>
                </div>


              </div>
              <div class="tab-pane fade" id="nav-Projects" role="tabpanel" aria-labelledby="nav-Projects-tab">
              <div id="tab-Projects" class="tab-info block-from">
                <h5 class="education">Projects</h5>

                <div class="sub-head">We recommend at least one Project entry.</div>

                <div class="civi-candidate-warpper">
                  <div class="row m-0 p-0 form-dashboard">
                    <div class="group-title col-md-12 up">
                      <h6 class="education">
                        Project 1
                      </h6>

                    </div>
                    <div class="col-md-12 col-12 ">
                      <label for="candidate_first_name">Title</label>
                      <input class="point-mark point-active" type="text" name="candidate_first_name" placeholder="job title"  value={projectJobTitle}  onChange={(e)=> {setProjectJobTitle(e.target.value)}} />
                    </div>
                   
                    <div class="form-group col-md-12">
                      <label>Description</label>
                      <textarea name="candidate_education_description[]" cols="30" placeholder="Short description" rows="7" class="point-mark point-active"  value={projectDescription}  onChange={(e)=> {setProjectDescription(e.target.value)}} >Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie</textarea>
                    </div>
                  </div>
                  <div class="row m-0 p-0 form-dashboard">
                    <div class="group-title col-md-12 up">
                      <h6 class="education">
                        Project 2
                      </h6>
                    </div>
                    <div class="col-md-12 col-12">
                      <label for="candidate_first_name">Project Title</label>
                      <input class="point-mark point-active" type="text" name="candidate_first_name" placeholder="Project Title"  value={project2JobTitle}  onChange={(e)=> {setProject2JobTitle(e.target.value)}} />
                    </div>
                    <div class="form-group col-md-12">
                      <label>Description</label>
                      <textarea name="candidate_education_description[]" cols="30" placeholder="Short description" rows="7" class="point-mark point-active"  value={project2Description}  onChange={(e)=> {setProject2Description(e.target.value)}}>Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie</textarea>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div class="tab-pane fade" id="nav-Award" role="tabpanel" aria-labelledby="nav-Award-tab">
              <div id="tab-Projects" class="tab-info block-from">
                <h5 class="education">Awards</h5>

                <div class="sub-head">We recommend at least one Award entry.</div>

                <div class="civi-candidate-warpper">
                  <div class="row m-0 p-0 form-dashboard">
                    <div class="group-title col-md-12 up">
                      <h6 class="education">
                        Award 1
                      </h6>

                    </div>
                    <div class="col-md-12 col-12 ">
                      <label for="candidate_first_name">Title</label>
                      <input class="point-mark point-active" type="text" name="candidate_first_name" placeholder="Award title"  value={awardJobTitle}  onChange={(e)=> {setAwardJobTitle(e.target.value)}} />
                    </div>
                   
                    <div class="form-group col-md-12">
                      <label>Description</label>
                      <textarea name="candidate_education_description[]" cols="30" placeholder="Short description" rows="7" class="point-mark point-active"  value={awardDescription}  onChange={(e)=> {setAwardDescription(e.target.value)}}>Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie</textarea>
                    </div>
                  </div>
                  <div class="row m-0 p-0 form-dashboard">
                    <div class="group-title col-md-12 up">
                      <h6 class="education">
                        Award 2
                      </h6>
                    </div>
                    <div class="col-md-12 col-12">
                      <label for="candidate_first_name"> Title</label>
                      <input class="point-mark point-active" type="text" name="candidate_first_name" placeholder="Award Title"  value={award2JobTitle}  onChange={(e)=> {setAward2JobTitle(e.target.value)}} />
                    </div>
                    <div class="form-group col-md-12">
                      <label>Description</label>
                      <textarea name="candidate_education_description[]" cols="30" placeholder="Short description" rows="7" class="point-mark point-active"  value={award2Description}  onChange={(e)=> {setAward2Description(e.target.value)}}>Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie</textarea>
                    </div>
                  </div>
                </div>
              </div>

              </div>
              <div class="button-warpper d-flex justify-content-end">
                <a href="https://civi.uxper.co/dashboard/employers/job/" class="civi-button button-outline">
                  Cancel                        </a>
                <button class="civi-button btn-add-to-message" data-text="This is a &quot;Demo&quot; account, so you can not change it" 
                  onClick={()=>{writeAllDetails()}}>
                  Publish
                </button>
              </div> </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default JobSeeker
