// import React , { Fragment, useState,useEffect } from "react";
// import {Row,Col,Modal,Form, Container} from "react-bootstrap";
// import { MdEdit, MdClose,MdAddCircleOutline,MdDelete,MdOutlineCancel  } from "react-icons/md";
// import {
//   HiLocationMarker,
//   HiOfficeBuilding,
//   HiOutlineMail,
//   HiPhone,
// } from "react-icons/hi";
// import { GiGraduateCap } from 'react-icons/gi';
// import { ImCheckmark, ImCross } from 'react-icons/im'
// import { BsGithub, BsLinkedin, BsGlobe } from "react-icons/bs";
// import Years from '../UserResume/smallComponents/Years';
// import Months from '../UserResume/smallComponents/Months';
// // import { useSelector } from "react-redux";
// // import { bindActionCreators } from "redux";
// // import { actionCreators } from "../UserResume/state/index"

// import JobSeekerNavbar from '../Navbar/JobSeekerNavbar'

// import './UserResume.css'
// import {ImUser} from 'react-icons/im'
// import {SiCoursera} from 'react-icons/si'
// import {BiMessageDetail} from 'react-icons/bi'
// import {BsBookmarkCheckFill} from 'react-icons/bs'
// import {AiOutlineFileSearch} from 'react-icons/ai'
// import {MdOutlineDocumentScanner} from 'react-icons/md'
// import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import { Link } from "react-router-dom";

// function UserResume() {
   
//     const [file, setFile] = useState("");
//      function handleFile(e) {
//           setFile(URL.createObjectURL(e.target.files[0]));
//      }
//     const [profile,setProfile] = useState({
//         name: "Your Name",
//         location: "City, Name",
//         github: "",
//         linkedin: "",
//         website: "",
//         position: "Your Position",
//         tagline: "Describe yourself in one line"
//     })
//     const handleProfile = (e) => {
//         setProfile((old)=>{
//             return {
//                 ...old,
//                 [e.target.name]:e.target.value
//             }
//         })
//     }
//   const [show1, setShow1] = useState(false);
//   const [alert1, setAlert1] = useState(false);
//   const [profileName1, setProfileName1] = useState("");
//   const [profileURL1, setProfileURL1] = useState("");

//     const handleClose1 = () => setShow1(false);
//     const handleShow1 = () => setShow1(true);
//     const handleAlertHide1 = () => {
//         setProfileName1("");
//         setProfileURL1("");
//         setAlert1(false)
//     };
//     const handleAlertShow1 = (Profile,Link) => {
//         setProfileName1(Profile);
//         setProfileURL1(Link);
//         setAlert1(true)
//     };
  
// // About Page
// const [about2, setAbout2] = useState();
// const [isEdit2, setIsEdit2] = useState(false);
// const [validated2, setValidated2] = useState(false);

// const handleAbout2 = (e) => {
//     const valid = e.currentTarget;
//     if (!valid.checkValidity()) {
//         setValidated2(true);
//         setIsEdit2(false)
//     }
//     else {
//         setIsEdit2(true)
//     }
    
//      setAbout2(e.target.value)

// }
// const [show2, setShow2] = useState(false);

// const handleClose2 = () => {
//     setShow2(false);
//     setValidated2(false);
// }
// const handleShow2 = () => setShow2(true);

// //Eduaction Page

// const [show3, setShow3] = useState(false);
// const [Alert3, setAlert3] = useState(false);
// const [deleteId3, setDeleteId3] = useState(null);

// const handleClose3 = () => {
//   setValidated3(false);
//   setShow3(false);
//   setForm3({
//     id: "",
//     institute: "",
//     degree: "",
//     grade: "",
//     fieldOfStudy: "",
//     startYear: "",
//     endYear: "",
//     isEdit: false
//   })
// }
// const handleShow3 = () => setShow3(true);
// const handleAlertClose3 = () => setAlert3(false);
// const handleAlert3 = (id) => {
//   setDeleteId3(id)
//   setAlert3(true);
// }


//  const [list3, setList3] = useState([]);
// const [form3, setForm3] = useState({
//   id: "",
//   institute: "",
//   degree: "",
//   grade: "",
//   fieldOfStudy: "",
//   startYear: "",
//   endYear: "",
//   isEdit: false
// });
// const handleForm3 = (e) => {
//   setForm3((old) => {
//     return {
//       ...old,
//       [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
//     }
//   })
// }


// const [validated3, setValidated3] = useState(false);

// const handleSubmit3 = (event) => {
//   event.preventDefault();
//   const x = event.currentTarget;
//   if (!x.checkValidity()) {
//     setValidated3(true);
//   }
//   else {
//     if (form3.isEdit3) {
    
//        list3[form3.id] = form3;
//        setList3(list3);
//     }
//     else {
     
//        const newList3 = list3.concat({ ...form3 });
//        setList3(newList3);
//     }
//     setShow3(false);
//     setForm3({
//       id: "",
//       institute: "",
//       degree: "",
//       grade: "",
//       fieldOfStudy: "",
//       startYear: "",
//       endYear: "",
//       isEdit: false
//     })
//   }

// }

// const handleEdit3 = (id) => {
// //   const form = educationList[id];
//   form3.isEdit3 = true;
//   form3.id = id
//   setForm3(form3)
//   setShow3(true);
// }

// const handleDelete3 = (id) => {
// //   removeEducation(id);
//    list3.splice(id, 1);
//    setList3(list3);
//   setAlert3(false);
// }

// //Experience Page
// const [show4, setShow4] = useState(false);
// const [Alert4, setAlert4] = useState(false);
// const [deleteId4, setDeleteId4] = useState(null);

// const handleClose4 = () => {
//   setValidated4(false);
//   setShow4(false);
//   setForm4({
//     id:"",
//     title: "",
//     company: "",
//     isWorking: false,
//     startMonth: "",
//     startYear: "",
//     endMonth: "",
//     endYear: "",
//     location: "",
//     description: "",
//     isEdit: false
//   })
// }
// const handleShow4 = () => setShow4(true);
// const handleAlertClose4 = () => setAlert4(false);
// const handleAlert4 = (id) => {
//   setDeleteId4(id)
//   setAlert4(true);
// }


//  const [list4, setList4] = useState([]);
// const [form4, setForm4] = useState({
//   id:"",
//   title: "",
//   company: "",
//   isWorking: false,
//   startMonth: "",
//   startYear: "",
//   endMonth: "",
//   endYear: "",
//   location: "",
//   description: "",
//   isEdit:false
// });
// const handleForm4 = (e) => {
//   setForm4((old) => {
//     return {
//       ...old,
//       [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
//     }
//   })
// }


// const [validated4, setValidated4] = useState(false);

// const handleSubmit4 = (event) => {
//   event.preventDefault();
//   const valid = event.currentTarget;
//   if(!valid.checkValidity()){
//     setValidated4(true);
//   }
//   else{
//     if(form4.isEdit){
//       // editExperience(form);
//        list4[form4.id] = form4;
//        setList4(list4);
//     }
//     else{
//       // addExperience(form)
//        const newList4 = list4.concat({ ...form4 });
//        setList4(newList4);
//     }
//     setShow4(false);
//     setForm4({
//       id:"",
//       title: "",
//       company: "",
//       isWorking: false,
//       startMonth: "",
//       startYear: "",
//       endMonth: "",
//       endYear: "",
//       location: "",
//       description: "",
//       isEdit: false
//     })
//   }
  
// }

// const handleEdit4 = (id) => {
//   // const form = experienceList[id];
//   form4.isEdit = true;
//   form4.id = id
//   setForm4(form4)
//   setShow4(true);
// }

// const handleDelete4 = (id) => {
//   // removeExperience(id);
//   list4.splice(id, 1);
//    setList4(list4);
//   setAlert4(false);
// }
// //Skills Page

// const [skills, setSkills] = useState([]);
// const [show5, setShow5] = useState(false);
// const [Alert5, setAlert5] = useState(false);
// const [deleteId5, setDeleteId5] = useState(null);

// const handleClose5 = () => {
//   setShow5(false);
//   setValidated5(false);
// }
// const handleShow5 = () => setShow5(true);
// const [isEdit5, setIsEdit5] = useState(false);
// const [validated5, setValidated5] = useState(false);

// const [input5, setInput5] = useState("")
// const handleInput5 = (e) => {
//   setInput5(e.target.value)
// }

// const handleSkills = (e) => {
//   e.preventDefault();
//   const valid = e.currentTarget;
//   if (!valid.checkValidity()) {
//     setValidated5(true);
//   }
//   else {
//     setIsEdit5(true);
//     // addSkill5(input5)
//      setSkills([...skills, input5]);
//     setInput5("");
//   }
// }

// const handleAlertClose5 = () => setAlert5(false);
// const handleAlert5 = (id) => {
//   setDeleteId5(id)
//   setAlert5(true);
// }
// const handleDelete = (id) => {
//   // removeSkill(id)
//   skills.splice(id, 1);
//    setSkills(skills);
//   setAlert5(false);
//    if (skills.length === 0) {
//      setIsEdit5(false);
//    }
// }
// useEffect(()=>{
//   if (skills.length === 0) {
//     setIsEdit5(false);
//   }
// },[skills])

//   return (
//     <div>
//       <div className="row m-0 p-0">
//       <div className=" d-none d-md-block sidebar col-md-3 col-lg-2 ">
//       <div className="sidebar  p-0" >
//       <div className="top">
//         <Link to="/" style={{ textDecoration: "none" }}>
//           <span className="logo">GOTEL</span>
//         </Link>
//       </div>
//       <hr />
//       <div className="center">
//         <ul>
//           <Link to="/JobSeeker" style={{ textDecoration: "none" }}>
//             <li>
//               <ImUser className="icon fs-4" />
//               <span>User Profile</span>
//             </li>
//           </Link>
//           <Link to='/UserFindJob'style={{ textDecoration: "none" }}>
//             <li>
//               <AiOutlineFileSearch className="icon fs-4" />
//               <span>Find Jobs</span>
//             </li>
//           </Link>
//           <Link to='/AppliedJobs' style={{ textDecoration: "none" }}>
//           <li>
//             <BsBookmarkCheckFill className="icon fs-4" />
//             <span>Jobs Applied</span>
//           </li></Link>
//           <Link to='/UserResume' style={{ textDecoration: "none" }}>
//           <li>
//             <MdOutlineDocumentScanner className="icon fs-4" />
//             <span>Create Your Resume</span>
//           </li></Link>
//           <Link style={{ textDecoration: "none" }}>
//           <li>
//             <SiCoursera className="icon fs-4" />
//             <span>Applied Courses</span>
//           </li></Link>
        
//           <Link to='/JobSeekerMessage'style={{ textDecoration: "none" }}>   <li>
//             <BiMessageDetail className="icon fs-4" />
//             <span>Messages</span>
//           </li>
//           </Link>
//           <Link to='/JobSeekerSettingspage'style={{ textDecoration: "none" }}> <li>
//             <SettingsApplicationsIcon className="icon fs-4" />
//             <span>Settings</span>
//           </li></Link>
//           <Link style={{ textDecoration: "none" }}> <li>
//             <ExitToAppIcon className="icon fs-4" />
//             <span>Logout</span>
//           </li></Link>
//         </ul>
//       </div>
//       </div>
//       </div>
//                 <div className="col-lg-10 col-md-9">
//                     <JobSeekerNavbar />
//                     <div className="row m-0 p-0 py-5 resumebg rounded-3">
//                         <h3 className='text-center'>Create Your Resume Here</h3>
//                         <div className="col-lg-12">
//                        <Container>
//                         <Fragment>
//       <Row className="justify-content-center">
//         <Col
//           md={8}
//           sm={12}
//           className="d-flex justify-content-between img-column mb-5"
//         >
//           <img src={file} className="profile-image" alt="..."></img>

//           <MdEdit size={30} className="rounded edit" onClick={handleShow1} />
//         </Col>
//       </Row>
//       <Row className="justify-content-center mt-5">
//         <Col md={4} sm={6}>
//           <Col>
//             <h4>{profile.name}</h4>
//           </Col>
//           <Col className="d-flex justify-content-start">
//             <HiLocationMarker size={30} className="p-1" />
//             <p className="p-1 m-0">{profile.location}</p>
//             <HiOfficeBuilding size={30} className="p-1" />
//             <p className="p-1 m-0">{profile.position}</p>
//           </Col>
//           <Col>
//             <p className="px-2">{profile.tagline}</p>
//           </Col>
//         </Col>
//         <Col md={4} sm={6} className="d-flex flex-wrap">
//           <p
//             className="p-1 m-0"
//             onClick={() =>
//               handleAlertShow1("LinkedIn Profile", profile.linkedin)
//             }
//           >
//             <BsLinkedin size={30} className="p-1" />
//             LinkedIn
//           </p>
//           <p
//             className="p-1 m-0"
//             onClick={() => handleAlertShow1("GitHub Profile", profile.github)}
//           >
//             <BsGithub size={30} className="p-1" />
//             GitHub
//           </p>
//           <p
//             className="p-1 m-0"
//             onClick={() => handleAlertShow1("Portfolio", profile.website)}
//           >
//             <BsGlobe size={30} className="p-1" />
//             Portfolio
//           </p>
//           <p
//             className="p-1 m-0"
//             onClick={() => handleAlertShow1("Email Address", profile.email)}
//           >
//             <HiOutlineMail size={30} className="p-1" />
//             Email
//           </p>
//           <p
//             className="p-1 m-0"
//             onClick={() => handleAlertShow1("Contact Number", profile.contact)}
//           >
//             <HiPhone size={30} className="p-1" />
//             Contact Number
//           </p>
//         </Col>
//       </Row>
//       <Modal show={show1} onHide={handleClose1} centered backdrop="static">
//         <Modal.Header>
//           <Modal.Title>Profile Details</Modal.Title>
//           <MdClose size={30} className="rounded edit" onClick={handleClose1} />
//         </Modal.Header>

//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="text"
//                 name="name"
//                 size="sm"
//                 placeholder="Your Name"
//                 value={profile.name}
//                 onChange={handleProfile}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="text"
//                 name="location"
//                 size="sm"
//                 placeholder="City, Country"
//                 value={profile.location}
//                 onChange={handleProfile}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="text"
//                 name="position"
//                 size="sm"
//                 placeholder="Your Position"
//                 value={profile.position}
//                 onChange={handleProfile}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="text"
//                 name="tagline"
//                 size="sm"
//                 placeholder="Describe yourself in one line"
//                 value={profile.tagline}
//                 onChange={handleProfile}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="email"
//                 name="email"
//                 size="sm"
//                 placeholder="Email Address"
//                 value={profile.email}
//                 onChange={handleProfile}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="number"
//                 name="contact"
//                 size="sm"
//                 placeholder="Contact Number"
//                 value={profile.contact}
//                 onChange={handleProfile}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="text"
//                 name="github"
//                 size="sm"
//                 placeholder="GitHub Profile"
//                 value={profile.github}
//                 onChange={handleProfile}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="text"
//                 name="linkedin"
//                 size="sm"
//                 placeholder="LinkedIn Profile"
//                 value={profile.linkedin}
//                 onChange={handleProfile}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="text"
//                 name="website"
//                 size="sm"
//                 placeholder="Your Portfolio Website"
//                 value={profile.website}
//                 onChange={handleProfile}
//               />
//             </Form.Group>
//             <Form.Group controlId="formFileSm" className="mb-3">
//               <Form.Label>Profile Picture</Form.Label>
//               <Form.Control type="file" size="sm" onChange={handleFile} />
//             </Form.Group>
//           </Form>
//         </Modal.Body>

//         <Modal.Footer>
//           <button
//             type="submit"
//             className="rounded edit px-2"
//             onClick={handleClose1}
//           >
//             Save Changes
//           </button>
//         </Modal.Footer>
//       </Modal>
//       <Modal show={alert1} onHide={handleAlertHide1}>
//         <Modal.Header>
//           <Modal.Title>{profileName1}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>{profileURL1}</Modal.Body>
//       </Modal>
//     </Fragment></Container>
//                         </div>
//                         <div className="col-lg-12">
//                         <Row className="justify-content-center mt-2">
//             <Col md={8} sm={12} className="d-flex justify-content-between align-items-center bg-light rounded">
//                 <h5 className="m-0">About</h5>
//                 {!isEdit2 && <MdAddCircleOutline size={30} className="rounded edit" onClick={handleShow2} />}
//                 {isEdit2 && <MdEdit size={30} className="rounded edit" onClick={handleShow2} />}
//             </Col>
//             <Col md={8} sm={12}>
//                 {
//                     about2 &&
//                     <p className="py-2 text-break">
//                         {about2}
//                     </p>
//                 }
//             </Col>
//             <Modal show={show2} onHide={handleClose2} centered backdrop="static">
//                 <Modal.Header>
//                     <Modal.Title>About</Modal.Title>
//                     <MdClose size={30} className="rounded edit" onClick={handleClose2} />
//                 </Modal.Header>

//                 <Modal.Body>
//                     <Form noValidate validated={validated2}>
//                         <Form.Group className="mb-3">
//                             <Form.Control required as="textarea" rows={6} placeholder="Write about yourself" value={about2} onChange={handleAbout2} />
//                         </Form.Group>
//                     </Form>
//                 </Modal.Body>

//                 <Modal.Footer>
//                     <button type="submit" className="rounded edit px-2" onClick={handleClose2}>
//                         Save Changes
//                     </button>
//                 </Modal.Footer>
//             </Modal>
//         </Row>
//                         </div>
//                         <div className="col-lg-12">
//                         <Row className="justify-content-center mt-2">
//       <Col md={8} sm={12} className="d-flex justify-content-between align-items-center bg-light rounded">
//         <h5 className="m-0">Education</h5>
//         <MdAddCircleOutline size={30} className="rounded edit" onClick={handleShow3} />
//       </Col>
//       <Col md={8} sm={12}>
//         {
//           list3.map((item, id) => {
//             return (
//               <Row className="border-bottom pt-3" key={id}>

//                 <Col md={10} className="d-flex justify-content-start">
//                   <GiGraduateCap size={50} className="rounded color-blue bg-grey p-1 shadow-sm" />
//                   <div className="px-3">
//                     <h5 className="m-0">{item.institute}</h5>
//                     <p className="text-muted m-0">{item.degree} • {item.fieldOfStudy}</p>
//                     <p className="text-muted">{item.startYear} - {item.endYear} • Grade: {item.grade}</p>
//                   </div>

//                 </Col>
//                 <Col md={2}>
//                   <div className="d-flex flex-wrap justify-content-end">
//                       <MdEdit size={30} className="rounded edit" onClick={() => {handleEdit3(id)}}/>
//                       <MdDelete size={30} className="rounded edit" onClick={() => {handleAlert3(id)}}/>

//                   </div>
//                 </Col>

//               </Row>
//             )
//           })
//         }

//       </Col>
//       <Modal show={show3} onHide={handleClose3} centered scrollable={true} backdrop="static">
//         <Modal.Header>
//           <Modal.Title>Education</Modal.Title>
//           <MdClose size={30} className="rounded edit" onClick={handleClose3} />
//         </Modal.Header>

//         <Modal.Body>
//           <Form noValidate validated={validated3} onSubmit={handleSubmit3}>
//             <Form.Group className="mb-3">
//               <Form.Label>School / College</Form.Label>
//               <Form.Control required type="text" name="institute" size="sm" placeholder="Ex: Government Engineering College" value={form3.institute} onChange={handleForm3} />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Degree</Form.Label>
//               <Form.Control required type="text" name="degree" size="sm" placeholder="Ex: Bachelor of Engineering" value={form3.degree} onChange={handleForm3} />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Field of study</Form.Label>
//               <Form.Control required type="text" name="fieldOfStudy" size="sm" placeholder="Ex: Computer Engineering" value={form3.fieldOfStudy} onChange={handleForm3} />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Row>
//                 <Col>
//                   <Row>
//                     <Form.Label>Start - Year</Form.Label>
//                   </Row>
//                   <Row>
//                     <Col>
//                       <select title={form3.startYear} name="startYear" value={form3.startYear} onChange={handleForm3} className="form-select">
//                         <Years />
//                       </select>
//                     </Col>
//                   </Row>
//                 </Col>
//                 <Col>
//                   <Row>

//                     <Col>
//                       <Row>
//                         <Form.Label>End - Year</Form.Label>
//                       </Row>
//                       <Row>
//                         <Col>
//                           <select title={form3.endYear} name="endYear" value={form3.endYear} onChange={handleForm3} disabled={form3.isWorking} className="form-select">
//                             <Years />
//                           </select>
//                         </Col>
//                       </Row>

//                     </Col>

//                   </Row>




//                 </Col>
//               </Row>

//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Grade</Form.Label>
//               <Form.Control required type="text" name="grade" size="sm" placeholder="Ex: 8.5/10 CGPA" value={form3.grade} onChange={handleForm3} />
//             </Form.Group>
//             <button type="submit" className="rounded edit px-2">
//               Save Changes
//             </button>

//           </Form>
//         </Modal.Body>
//       </Modal>
//       <Modal show={Alert3} onHide={handleAlertClose3} className="text-center" size="sm" centered>
//         <Modal.Body>
//           <h4>Are you sure ?</h4>
//           <ImCheckmark size={30} className="rounded edit" onClick={() => { handleDelete3(deleteId3) }} />
//           <ImCross size={25} className="rounded edit" onClick={handleAlertClose3} />
//         </Modal.Body>
//       </Modal>
//     </Row>
//                         </div>
//                         <div className="col-lg-12">
                            
//     <Row className="justify-content-center mt-2">
//       <Col md={8} sm={12} className="d-flex justify-content-between align-items-center bg-light rounded">
//         <h5 className="m-0">Experience</h5>
//         <MdAddCircleOutline size={30} className="rounded edit" onClick={handleShow4} />
//       </Col>
//       <Col md={8} sm={12}>
//         { 
//           list4.map((item,id) => {
//               return (
//                 <Row className="border-bottom pt-3" key={id}>
//                   <Col md={10} className="d-flex justify-content-start">
//                     <HiOfficeBuilding size={50} className="rounded color-blue bg-grey shadow-sm p-1" />
//                     <div className="px-3">
//                       <h5 className="m-0">{item.title}</h5>
//                       <p className="text-muted m-0">{item.company} • {item.startMonth} {item.startYear} {`${item.isWorking ? " - Present" : " - "+item.endMonth+" "+item.endYear }`}</p>
//                       <p className="text-muted m-0">{item.location}</p>
//                       <p>{item.description}</p>
//                     </div>

//                   </Col>
//                   <Col md={2}>
//                     <div className="d-flex flex-wrap justify-content-end">
//                       <MdEdit size={30} className="rounded edit" onClick={() => {handleEdit4(id)}}/>
//                       <MdDelete size={30} className="rounded edit" onClick={() => {handleAlert4(id)}}/>
//                     </div>
//                   </Col>
//                 </Row>
//               )
//             })
//         }

//       </Col>
//       <Modal show={show4} onHide={handleClose4} centered scrollable={true} backdrop="static">
//         <Modal.Header>
//           <Modal.Title>Experience</Modal.Title>
//           <MdClose size={30} className="rounded edit" onClick={handleClose4} />
//         </Modal.Header>

//         <Modal.Body>
//           <Form noValidate validated={validated4} onSubmit={handleSubmit4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Title</Form.Label>
//               <Form.Control required type="text" size="sm" placeholder="Ex: React Developer" name="title" value={form4.title} onChange={handleForm4} />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Company Name</Form.Label>
//               <Form.Control required type="text" size="sm" placeholder="Ex: Amazon" name="company" value={form4.company} onChange={handleForm4} />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicCheckbox">
//               <Form.Check type="checkbox" label="I am currently working in this role" name="isWorking" checked={form4.isWorking} onChange={handleForm4} />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Row>
//                 <Col>
//                   <Row>
//                     <Form.Label>Start Month - Year</Form.Label>
//                   </Row>
//                   <Row>
//                     <Col>
//                       <select title={form4.startMonth} name="startMonth"  value={form4.startMonth} onChange={handleForm4} className="form-select">
//                         <Months/>
//                       </select>
//                     </Col>
//                     <Col>
//                       <select title={form4.startYear} name="startYear" value={form4.startYear} onChange={handleForm4} className="form-select">
//                         <Years/>
//                       </select>
//                     </Col>
//                   </Row>
//                 </Col>
//                 <Col>
//                   <Row>

//                     <Col>
//                       <Row>
//                         <Form.Label>End Month - Year</Form.Label>
//                       </Row>
//                       <Row>
//                         <Col>
//                           <select title={form4.endMonth} name="endMonth" value={form4.endMonth} onChange={handleForm4} disabled={form4.isWorking} className="form-select">
//                             <Months />
//                           </select>
//                         </Col>
//                         <Col>
//                           <select title={form4.endYear} name="endYear" value={form4.endYear} onChange={handleForm4} disabled={form4.isWorking} className="form-select">
//                             <Years/>
//                           </select>
//                         </Col>
//                       </Row>

//                     </Col>

//                   </Row>




//                 </Col>
//               </Row>

//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Location</Form.Label>
//               <Form.Control required type="text" size="sm" placeholder="Ex: Pune, India" name="location" value={form4.location} onChange={handleForm4} />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Description</Form.Label>
//               <Form.Control required type="text" size="sm" placeholder="Ex: Worked as a Front-End Developer" name="description" value={form4.description} onChange={handleForm4} />
//             </Form.Group>
//             <button type="submit" className="rounded edit px-2">
//               Save Changes
//             </button>

//           </Form>
//         </Modal.Body>

//       </Modal>
//       <Modal show={Alert4} onHide={handleAlertClose4} className="text-center" size="sm" centered>
//         <Modal.Body>
//           <h4>Are you sure ?</h4>
//           <ImCheckmark size={30} className="rounded edit" onClick={() => {handleDelete4(deleteId4)}}/>
//           <ImCross size={25} className="rounded edit" onClick={handleAlertClose4} />
//         </Modal.Body>
//       </Modal>
//     </Row>
//                         </div>
//                         <div className="col-lg-12">
//                         <Row className="justify-content-center mt-2">
//       <Col md={8} sm={12} className="d-flex justify-content-between align-items-center bg-light rounded">
//         <h5 className="m-0">Skills</h5>
//         {!isEdit5 && <MdAddCircleOutline size={30} className="rounded edit" onClick={handleShow5} />}
//         {isEdit5 && <MdEdit size={30} className="rounded edit" onClick={handleShow5} />}
//       </Col>
//       <Col md={8} sm={12}>
//         <Row className="border-bottom pt-3">
//           <Col md={12} className="d-flex flex-wrap">
//             {
//               skills.map((items, id) => {
//                 return (
//                   <p className="technology rounded" key={id}>{items}</p>
//                 )
//               })
//             }


//           </Col>
//         </Row>

//       </Col>
//       <Modal show={show5} onHide={handleClose5} centered backdrop="static">
//         <Modal.Header>
//           <Modal.Title>Skills</Modal.Title>
//           <MdClose size={30} className="rounded edit" onClick={handleClose5} />
//         </Modal.Header>

//         <Modal.Body>
//           <Form noValidate validated={validated5} className="d-flex align-item-start mb-2" onSubmit={handleSkills}>
//             <Form.Group className="">
//               <Form.Control required type="text" size="sm" placeholder="Enter Skill" value={input5} onChange={handleInput5} />
//             </Form.Group>
//             <button type="submit" className="rounded edit m-0 mx-2">
//               Add Skill
//             </button>
//           </Form>
//           <hr></hr>
//           <div className="d-flex flex-wrap">
//             {
//               skills.map((items, id) => {
//                 return (
//                   <p key={id} className="technology rounded ">{items} &nbsp; <MdOutlineCancel className="delete rounded" onClick={() => { handleAlert5(id) }} /></p>
//                 )
//               })
//             }
//           </div>
//         </Modal.Body>

//       </Modal>
//       <Modal show={Alert5} onHide={handleAlertClose5} className="text-center" size="sm" centered>
//         <Modal.Body>
//           <h4>Are you sure ?</h4>
//           <ImCheckmark size={30} className="rounded edit" onClick={() => { handleDelete(deleteId5) }} />
//           <ImCross size={25} className="rounded edit" onClick={handleAlertClose5} />
//         </Modal.Body>
//       </Modal>
//     </Row>
//                         </div>
//                     </div> 
//                 </div>
//             </div>
//     </div>
//   )
// }

// export default UserResume
