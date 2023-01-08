import './App.css';
import Login from './Components/Loginpage/Login';
import Signup from './Components/Signuppage/Signup';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Jobseeker from './Components/Jobseeker/Jobseeker';
import Homepage from './Components/Homepage';
function App() {
  return (
    <div className="App">
        <BrowserRouter> 
        <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Signup" element={<Signup/>}/>
        <Route exact path="/Jobseeker" element={<Jobseeker/>}/>
        </Routes> 
      </BrowserRouter>
       {/* <Login/> */}
      {/* <Signup/> */}
    
    </div>
  );
}

export default App;
