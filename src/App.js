import './App.css';
import Login from './Components/Loginpage/Login';
import Signup from './Components/Signuppage/Signup';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Findjob from './Components/Homepage/Jobspage/Findjob';
import Singlejob from './Components/SingleJobpage/Singlejob';
import Admin from './Components/Admin/Admin';
import Companydetails from './Components/Admin/CompanyDetails/Companydetails';
import Userdetails from './Components/Admin/UserDetails/Userdetails';
import Managejobs from './Components/Admin/ManageJobs/Managejobs';
import Settingspage from './Components/Admin/Settings/Settingspage';
import Message from './Components/Admin/MessagesPage/Message';
import Company from './Components/Company/Company';
import CompanyNavbar from './Components/Company/Navbar/CompanyNavbar';
import CompanySettingspage from './Components/Company/Settings/CompanySettingspage';
import Jobpost from './Components/Company/PostJob/Jobpost';
import CompanyMessage from './Components/Company/MessagesPage/CompanyMessage';
import JobSeekerNavbar from './Components/Job Seeker/Navbar/JobSeekerNavbar';
import JobSeeker from './Components/Job Seeker/JobSeeker';
import JobSeekerMessage from './Components/Job Seeker/MessagesPage/JobSeekerMessage';
import JobSeekerSettingspage from './Components/Job Seeker/Settings/JobSeekerSettingspage';
import AppliedCandidate from './Components/Company/AppliedCandidates/AppliedCandidate';
import Postedjob from './Components/Company/Posted Jobs/Postedjob';
import AppliedJobs from './Components/Job Seeker/Applied Jobs/AppliedJobs';
import UserResume from './Components/Job Seeker/UserResume/UserResume';
import UserFindJob from './Components/Job Seeker/FindJobpage/UserFindJob';
import Forgetpassword from './Components/Loginpage/Forgetpassword';
import Courses from './Components/Admin/Coursespage/Courses';
import Testpage from './Components/Job Seeker/Testpage/Testpage';
import Usercoursespage from './Components/Job Seeker/Coursespage/Usercoursespage';
function App() {
  return (
    
    <div className="App">
        <BrowserRouter> 
        <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/Homepage" element={<Homepage/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Forgetpassword" element={<Forgetpassword/>}/>
        <Route exact path='/Admin' element={<Admin/>}/>
        
        <Route exact path='/Companydetails' element={<Companydetails/>}/>
        <Route exact path='/Userdetails' element={<Userdetails/>}/>
        
        <Route exact path='/Courses' element={<Courses/>}/>
        <Route exact path='/Testpage' element={<Testpage/>}/>
        <Route exact path='/Managejobs' element={<Managejobs/>}/>
        <Route exact path='/Settingspage' element={<Settingspage/>}/> 
        <Route exact path='/Company' element={<Company/>}/> 
        <Route exact path='/Jobpost' element={<Jobpost/>}/> 
       
        <Route exact path='/CompanyNavbar' element={<CompanyNavbar/>}/> 
        <Route exact path='/CompanyMessage' element={<CompanyMessage/>}/> 
        <Route exact path='/CompanySettingspage' element={<CompanySettingspage/>}/> 
         
        <Route exact path='/CompanyNavbar' element={<CompanyNavbar/>}/> 
        <Route exact path='/AppliedCandidate' element={<AppliedCandidate/>}/> 
        <Route exact path='/PostedJob' element={<Postedjob/>}/> 
   
        <Route exact path='/JobSeekerNavbar' element={<JobSeekerNavbar/>}/> 
        <Route exact path='/UserFindJob' element={<UserFindJob/>}/> 
        <Route exact path="/Signup" element={<Signup/>}/> 
         
         <Route exact path="/Message" element={<Message/>}/>
         <Route exact path="/JobSeeker" element={<JobSeeker/>}/>
         <Route exact path="/JobSeekerMessage" element={<JobSeekerMessage/>}/>
         <Route exact path='/JobSeekerSettingspage' element={<JobSeekerSettingspage/>}/> 
         <Route exact path='/Usercoursespage' element={<Usercoursespage/>}/> 

         <Route exact path='/AppliedJobs' element={<AppliedJobs/>}/> 
         <Route exact path='/UserResume' element={<UserResume/>}/> 
        <Route exact path="/Findjob" element={<Findjob/>}/>
        {/* <Route exact path="/" element={<Findjob/>}/> */}
        <Route exact path="/Singlejob" element={<Singlejob/>}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
