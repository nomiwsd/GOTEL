import React, { useState } from 'react'
import JobSeekerSidebar from './Sidebar/JobSeekerSidebar';
import JobSeekerNavbar from './Navbar/JobSeekerNavbar';
import './JobSeeker.css'
import Select from 'react-select';
import MyStatefulEditor from "../Company/PostJob/rte_test";
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
function JobSeeker() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [, setVal] = useState("");
  const onChange = (value) => {
    console.log(value);
    setVal(value);
  };
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
                            <button type="button" id="civi_select_avatar" style={{ position: 'relative', zIndex: '1' }}>Upload</button>
                          </p>
                        </div>
                        <input type="hidden" class="avatar_url form-control" name="author_avatar_image_url" value="" id="avatar_url" />
                        <input type="hidden" class="avatar_id" name="author_avatar_image_id" value="" id="avatar_id" />
                        <div id="html5_1gqv2udh77nsl4l1jqfecc1u54c_container" class="uploadimagecontainer" >
                          <input className='uploadbtn' type='file' multiple accept="image/jpeg,.jpg,.jpeg,image/png,.png,image/gif,.gif,.webp" /></div></div>
                    </div>
                    <div class="field-note">Maximum file size: 1400kb.</div>
                  </div>
                  <div class="row m-0 p-0 form-dashboard">
                    <div class="col-md-6 col-6 ">
                      <label for="candidate_first_name">First name</label>
                      <input class="point-mark point-active" type="text" name="candidate_first_name" placeholder="First name" value="Candidate" />
                    </div>
                    <div class=" col-md-6 col-6" >
                      <label for="candidate_last_name">Last name</label>
                      <input class="point-mark point-active" type="text" name="candidate_last_name" placeholder="Last name" value="Demo" />
                    </div>
                    <div class="col-md-6">
                      <label for="candidate_email">Email address</label>
                      <input class="point-mark point-active" type="email" id="user_email" name="candidate_email" placeholder="Email" value="candidate@demo.com" />
                    </div>
                    <div class="col-md-6">
                      <label for="candidate_phone">Phone number</label>
                      <input class="point-mark point-active" type="number" id="author_mobile_number" name="candidate_phone" value="123456789" placeholder="Phone" />
                    </div>
                    <div class=" col-md-6">
                      <label for="candidate_current_position">Current Position</label>
                      <input class="point-mark point-active" type="text" id="candidate_current_position" name="candidate_current_position" value="UI/UX Designer" placeholder="Ex: UI/UX Designer" />
                    </div>
                    <div class=" col-md-6">
                      <label for="candidate_categories">Categories</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={categoryoptions}
                        classNames='categoryselect p-1'
                      />

                    </div>
                    <div className="col-12">  <label for="candidate_des">Description</label><MyStatefulEditor markup="" onChange={onChange} className='texteditor' /></div>

                    <div id="wp-candidate_des-wrap  " className="row m-0 p-0">
                      <div class=" col-md-6">
                        <label for="candidate_dob">Date of Birth</label>
                        <input class="point-mark point-active" type="date" id="candidate_dob" name="candidate_dob" placeholder='DoB' />
                      </div>
                      <div class=" col-md-6">
                        <label for="candidate_gender">Gender</label>
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={Genderoptions}
                          classNames='categoryselect'
                        />
                      </div>
                      <div class=" col-md-6">
                        <label for="candidate_languages">Languages</label>
                        <input class="point-mark point-active" type="text" id="author_mobile_number" name="candidate_phone" placeholder="Language" /></div>
                      <div class="col-md-6">
                        <label for="candidate_qualification">Qualification</label>
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={Qualificationoptions}
                          classNames='categoryselect'
                        />
                      </div>
                      <div class=" col-md-6">
                        <label for="candidate_yoe">Years of Experience</label>
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
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
                      <input type="url" name="company_twitter" id="company_twitter" placeholder="twitter.com/com/User" />
                    </div>
                    <div className="col-lg-6 my-2">
                      <label>Instagram<sup>*</sup></label>
                      <input type="url" name="company_instagram" id="company_instagram" placeholder="instagram.com/User" />
                    </div>
                    <div className="col-lg-6 my-2">

                      <label>Facebook <sup>*</sup></label>
                      <input type="url" name="company_facebook" id="company_facebook" placeholder="facebook.com/User" />

                    </div>
                    <div className="col-lg-6 my-2">
                      <label>LinkedIn <sup>*</sup></label>
                      <input type="url" name="company_linkedin" id="company_linkedin" placeholder="linkedin.com/User" />
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
                                <button class="civi-button col-3" type="button" id="civi_select_cv" style={{ position: 'relative', zIndex: 1 }}><i class="la la-upload large"></i> Browse</button>
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
                        <input class="point-mark point-active" type="text" name="candidate_first_name" placeholder="job title" />
                      </div>
                      <div class=" col-md-6 col-6" >
                        <label for="candidate_last_name">Company</label>
                        <input class="point-mark point-active" type="text" name="candidate_last_name" placeholder="company name" />
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
                        <label for="candidate_first_name">Job Title</label>
                        <input class="point-mark point-active" type="text" name="candidate_first_name" placeholder="Job Title" />
                      </div>
                      <div class=" col-md-6 col-6" >
                        <label for="candidate_last_name">Company</label>
                        <input class="point-mark point-active" type="text" name="candidate_last_name" placeholder="company name" />
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
                          defaultValue={[SkillsOptions[0]]}
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
                      <input class="point-mark point-active" type="text" name="candidate_first_name" placeholder="job title" />
                    </div>
                   
                    <div class="form-group col-md-12">
                      <label>Description</label>
                      <textarea name="candidate_education_description[]" cols="30" placeholder="Short description" rows="7" class="point-mark point-active">Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie</textarea>
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
                      <input class="point-mark point-active" type="text" name="candidate_first_name" placeholder="Project Title" />
                    </div>
                    <div class="form-group col-md-12">
                      <label>Description</label>
                      <textarea name="candidate_education_description[]" cols="30" placeholder="Short description" rows="7" class="point-mark point-active">Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie</textarea>
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
                      <input class="point-mark point-active" type="text" name="candidate_first_name" placeholder="Award title" />
                    </div>
                   
                    <div class="form-group col-md-12">
                      <label>Description</label>
                      <textarea name="candidate_education_description[]" cols="30" placeholder="Short description" rows="7" class="point-mark point-active">Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie</textarea>
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
                      <input class="point-mark point-active" type="text" name="candidate_first_name" placeholder="Award Title" />
                    </div>
                    <div class="form-group col-md-12">
                      <label>Description</label>
                      <textarea name="candidate_education_description[]" cols="30" placeholder="Short description" rows="7" class="point-mark point-active">Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie</textarea>
                    </div>
                  </div>
                </div>
              </div>

              </div>


              <div class="button-warpper d-flex justify-content-end">
                <a href="https://civi.uxper.co/dashboard/employers/job/" class="civi-button button-outline">
                  Cancel                        </a>
                <button class="civi-button btn-add-to-message" data-text="This is a &quot;Demo&quot; account, so you can not change it">
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
