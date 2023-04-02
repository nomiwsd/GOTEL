import React from 'react'
import Navbar from '../Navbar/Navbar'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
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
  { id: 'ID', label: 'ID', minWidth: 100 },

  {
    id: 'Name',
    label:
      'Name',
    minWidth: 100
  },
  {
    id: 'Email',
    label: 'Email',
    minWidth: 130,
    align: 'left',
  },
  {
    id: 'Gender',
    label: 'Gender',
    minWidth: 100,
    align: 'left',
  },
  {
    id: 'ActiveStatus',
    label: 'Active Status',
    minWidth: 170,
    align: 'left',
  },
];

function createData(ID, Name, Email, Gender, ActiveStatus) {
  return { ID, Name, Email, Gender, ActiveStatus };
}

const rows = [
  createData(1, 'Jon', 'example@gmail.com', 'Male', 'Online'),
  createData(2, 'Jon', 'example@gmail.com', 'Male', 'Online'),
  createData(3, 'Sarah', 'example@gmail.com', 'Female', 'Offline'),
  createData(4, 'Jon', 'example@gmail.com', 'Male', 'Online'),
  createData(5, 'Jon', 'example@gmail.com', 'Male', 'Offline'),
  createData(6, 'Jon', 'example@gmail.com', 'Male', 'Online'),
  createData(7, 'Sarah', 'example@gmail.com', 'Female', 'Offline'),
  createData(8, 'Jon', 'example@gmail.com', 'Male', 'Online'),
  createData(9, 'Sarah', 'example@gmail.com', 'Female', 'Offline'),
  createData(10, 'Jon', 'example@gmail.com', 'Male', 'Online'),
  createData(11, 'Sarah', 'example@gmail.com', 'Female', 'Offline'),
  createData(12, 'Jon', 'example@gmail.com', 'Male', 'Online'),

];

function Userdetails() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (

    <div>
      <div className='Usersection row d-flex m-0 p-0'>
        <div className=" d-none d-md-block col-md-3 col-lg-2 sidebar m-0 p-0">
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
          <Link style={{ textDecoration: "none" }}>
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
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </div>
    </div>
  )
}

export default Userdetails