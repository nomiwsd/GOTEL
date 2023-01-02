import './App.css';
// import Header from './Components/Header/Header';
// import Landing from './Components/Landingpage/Landing';
import Login from './Components/Loginpage/Login';
import Signup from './Components/Signuppage/Signup';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Jobseeker from './Components/Jobseeker/Jobseeker';
function App() {
  return (
    <div className="App">
        <BrowserRouter> 
        <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Signup" element={<Signup/>}/>
        <Route exact path="/Jobseeker" element={<Jobseeker/>}/>
        </Routes> 
      </BrowserRouter>
       {/* <Login/> */}
      {/* <Signup/> */}
    {/* <Header/> */}
    {/* <Landing/> */}
    </div>
  );
}

export default App;
