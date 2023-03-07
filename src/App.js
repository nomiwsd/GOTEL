import './App.css';
import Login from './Components/Loginpage/Login';
import Signup from './Components/Signuppage/Signup';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Jobseeker from './Components/MainJobSeeker/Jobseeker/Jobseeker';
import Homepage from './Components/Homepage/Homepage';
// import Messages from './Components/MainJobSeeker/Messagespage/Messages';
import Findjob from './Components/Homepage/Jobspage/Findjob';
import Singlejob from './Components/SingleJobpage/Singlejob';
import Admin from './Components/Admin/Admin';
import Companydetails from './Components/Admin/CompanyDetails/Companydetails';
import Userdetails from './Components/Admin/UserDetails/Userdetails';
import Jobpost from './Components/Admin/PostJob/Jobpost';
import Managejobs from './Components/Admin/ManageJobs/Managejobs';
import Settingspage from './Components/Admin/Settings/Settingspage';
import Message from './Components/Admin/MessagesPage/Message';
// import Usernavbar from './Components/Usernavbar/Usernavbar';
function App() {
  return (
    
    <div className="App">
        <BrowserRouter> 
        <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/Homepage" element={<Homepage/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        {/* <Route exact path="/" element={<Login/>}/> */}
         <Route exact path='/Admin' element={<Admin/>}/>
        <Route exact path='/Companydetails' element={<Companydetails/>}/>
        <Route exact path='/Userdetails' element={<Userdetails/>}/>
        <Route exact path='/Jobpost' element={<Jobpost/>}/>
        <Route exact path='/Managejobs' element={<Managejobs/>}/>
        <Route exact path='/Settingspage' element={<Settingspage/>}/> 

        <Route exact path="/Signup" element={<Signup/>}/> 
        {/* <Route exact path="/Usernavbar" element={<Usernavbar/>}/> */}
         <Route exact path="/Message" element={<Message/>}/>
        <Route exact path="/Jobseeker" element={<Jobseeker/>}/>
        <Route exact path="/Findjob" element={<Findjob/>}/>
        <Route exact path="/" element={<Findjob/>}/>

        <Route exact path="/Singlejob" element={<Singlejob/>}/>
        </Routes> 
      </BrowserRouter>
       {/* <Login/> */}
      {/* <Signup/> */}
    
    </div>
  );
}

export default App;
