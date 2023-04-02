import React from 'react'
import Navbar from './Navbar/Navbar'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import './Admin.css'
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import {IoIosPeople} from 'react-icons/io'
import {SiCoursera} from 'react-icons/si'
import {BiMessageDetail} from 'react-icons/bi'
import {TfiWrite} from 'react-icons/tfi'
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";


const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'companyName',
      headerName: 'Company name',
      width: 150,
      editable: true,
      Image:''
    },
    {
      field: 'Status',
      headerName: 'Status',
      width: 150,
      editable: true,
    },
    {
      field: 'URL',
      headerName: 'URL',
      width: 160,
      editable: true,
    },
    {
      field: 'RegisteredDate',
      headerName: 'Registered Date',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
  ];
  
  const rows = [
    { id: 1, companyName: 'Snow', Status: 'Approved', URL: 'www.google.com'    ,RegisteredDate: '05-03-2023'     },
    { id: 2, companyName: 'Lannister', Status: 'Pending', URL: 'www.google.com'  ,RegisteredDate: '05-03-2023'     },
    { id: 3, companyName: 'Lannister', Status: 'Pending', URL: 'www.google.com' ,RegisteredDate: '05-03-2023'     },
    { id: 4, companyName: 'Stark', Status: 'Approved', URL: 'www.google.com'  ,RegisteredDate: '05-03-2023'     },
    { id: 5, companyName: 'Targaryen', Status: 'Approved', URL: 'www.google.com'  ,RegisteredDate: '05-03-2023'     },
    { id: 6, companyName: 'Melisandre', Status: 'Pending', URL: 'www.google.com'  ,RegisteredDate: '05-03-2023'     },
    { id: 7, companyName: 'Clifford', Status: 'Pending', URL: 'www.google.com'  ,RegisteredDate: '05-03-2023'     },
    
  ];
  
  const columns1 = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'UserName',
      headerName: 'User Name',
      width: 150,
      editable: true,
      Image:''
    },
    {
      field: 'Email',
      headerName: 'Email',
      width: 150,
      editable: true,
    },
    {
      field: 'Gender',
      headerName: 'Gender',
      width: 160,
      editable: true,
    },
    {
      field: 'Status',
      headerName: 'Status',
      sortable: false,
      width: 160,
    },
    {
      field: 'DateJoined',
      headerName: 'Joining Date',
      sortable: false,
      width: 160,
    },
  ];
   
  const rows1 = [
    { id: 1, UserName: 'Snow', Status: 'Approved', Email: 'www.google@gmail.com'    ,DateJoined: '05-03-2023' ,Gender:'Male'    },
    { id: 2, UserName: 'Lannister', Status: 'Pending', Email: 'www.google@gmail.com'  ,DateJoined: '05-03-2023',Gender:'Male'     },
    { id: 3, UserName: 'Lannister', Status: 'Pending', Email: 'www.google@gmail.com' ,DateJoined: '05-03-2023',Gender:'Male'     },
    { id: 4, UserName: 'Stark', Status: 'Approved', Email: 'www.google@gmail.com'  ,DateJoined: '05-03-2023',Gender:'Male'     },
    { id: 5, UserName: 'Targaryen', Status: 'Approved', Email: 'www.google@gmail.com'  ,DateJoined: '05-03-2023',Gender:'Male'     },
    { id: 6, UserName: 'Melisandre', Status: 'Pending', Email: 'www.google@gmail.com'  ,DateJoined: '05-03-2023',Gender:'Male'     },
    { id: 7, UserName: 'Clifford', Status: 'Pending', Email: 'www.google@gmail.com'  ,DateJoined: '05-03-2023',Gender:'Male'     },
    
  ];
  
function Admin() {
  return (
      <div className="home d-flex w-100 position-relative">
    <div className=" d-none d-md-block sidebar col-md-3 col-lg-2 ">
    <div className="sidebar  p-0" >
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">GOTEL</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to='/Admin' className='routerlinks'> <li>
            <DashboardIcon className="icon fs-4" />
            <span className='d-none d-md-block'>Dashboard</span>
            </li></Link>
          <p className="title">LISTS</p>
          <Link to="/Companydetails" style={{ textDecoration: "none" }}>
            <li>
              <IoIosPeople className="icon fs-4" />
              <span>Companies Details</span>
            </li>
          </Link>
          <Link to="/Userdetails" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon fs-4" />
              <span>Users Details</span>
            </li>
          </Link>
          <Link to='/Managejobs' style={{ textDecoration: "none" }}>
          <li>
            <WorkOutlineOutlinedIcon className="icon fs-4" />
            <span>Manage Jobs</span>
          </li></Link>
          <Link to='/Courses' style={{ textDecoration: "none" }}>
          <li>
            <SiCoursera className="icon fs-4" />
            <span>Upload Courses</span>
          </li></Link>
          <Link style={{ textDecoration: "none" }}><li>
            <TfiWrite className="icon fs-4" />
            <span>Conduct Test</span>
          </li></Link>
          <Link to='/Message'style={{ textDecoration: "none" }}>   <li>
            <BiMessageDetail className="icon fs-4" />
            <span>Messages</span>
          </li>
          </Link>
          <Link to='/Settingspage'style={{ textDecoration: "none" }}> <li>
            <SettingsApplicationsIcon className="icon fs-4" />
            <span>Settings</span>
          </li></Link>
          <Link style={{ textDecoration: "none" }}> <li>
            <ExitToAppIcon className="icon fs-4" />
            <span>Logout</span>
          </li></Link>
        </ul>
      </div>
      </div>
      </div>  
<div className="col-12 col-md-9 col-lg-10 h-100"><Navbar />
<h2 class="entry-title mx-3 my-2">Welcome back! Admin</h2>
<div class="total-action">
            <ul class="action-wrapper row m-0 p-0 d-flex flex-wrap">
                <li class="col-md-6 col-lg-3 col-12 my-2">
                    <div class="jobs">
                        <div class="entry-detai ">
                            <h3 class="entry-title">Jobs Posted</h3>
                            <span class="entry-number">20</span>
                        </div>
                        <div class="icon-total">
                            <img src="https://civi.uxper.co/wp-content/plugins/civi-framework/assets/images/icon-dashboard-04.svg" alt="jobs" />
                        </div>
                    </div>
                </li>
                <li class="col-md-6 col-lg-3 col-12 my-2">
                    <div class="applications ">
                        <div class="entry-detai ">
                            <h3 class="entry-title">Register Companies</h3>
                            <span class="entry-number">9</span>
                        </div>
                        <div class="icon-total">
                            <img  src="https://civi.uxper.co/wp-content/plugins/civi-framework/assets/images/icon-dashboard-06.svg" alt="applications" />
                        </div>
                    </div>
                </li>
                <li class="col-md-6 col-lg-3 col-12 my-2">
                    <div class="interviews">
                        <div class="entry-detai ">
                            <h3 class="entry-title">Register Users</h3>
                            <span class="entry-number">2</span>
                        </div>
                        <div class="icon-total">
                            <img  src="https://civi.uxper.co/wp-content/plugins/civi-framework/assets/images/icon-dashboard-03.svg" alt="interviews" />
                        </div>
                    </div>
                </li>
                <li class="col-md-6 col-lg-3 col-12 my-2">
                    <div class="candidates">
                        <div class="entry-detai">
                            <h3 class="entry-title">Test Conducts</h3>
                            <span class="entry-number">1</span>
                        </div>
                        <div class="icon-total">
                            <img  src="https://civi.uxper.co/wp-content/plugins/civi-framework/assets/images/icon-dashboard-02.svg" alt="candidates" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div className="row m-0 p-0 px-3">
            <div className="col-md-12 col-12 entry-detai companysect ">
                <h3 className='entry-title my-2'>Recent Companies</h3>
                <Box sx={{ height: 400, width: '100%' ,padding:'10px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
            </div>
            <div className="col-md-12 col-12 entry-detai userssect my-2">
            <h3 className='entry-title my-2'>Recent Candidates</h3>
            <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows1}
        columns={columns1}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
            </div>
        </div>
</div>
        
        
    </div>
    

  )
}

export default Admin
