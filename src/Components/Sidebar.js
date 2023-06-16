// import "./sidebar.scss";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import StoreIcon from "@mui/icons-material/Store";
// import InsertChartIcon from "@mui/icons-material/InsertChart";
// import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
// import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import { Link } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

// const Sidebar = () => {
//   const { dispatch } = useContext(DarkModeContext);
//   return (
//     <div className="sidebar">
//       <div className="top">
//         <Link to="/" style={{ textDecoration: "none" }}>
//           <span className="logo">lamadmin</span>
//         </Link>
//       </div>
//       <hr />
//       <div className="center">
//         <ul>
//           <p className="title">MAIN</p>
//           <li>
//             <DashboardIcon className="icon" />
//             <span>Dashboard</span>
//           </li>
//           <p className="title">LISTS</p>
//           <Link to="/users" style={{ textDecoration: "none" }}>
//             <li>
//               <PersonOutlineIcon className="icon" />
//               <span>Users</span>
//             </li>
//           </Link>
//           <Link to="/products" style={{ textDecoration: "none" }}>
//             <li>
//               <StoreIcon className="icon" />
//               <span>Products</span>
//             </li>
//           </Link>
//           <li>
//             <CreditCardIcon className="icon" />
//             <span>Orders</span>
//           </li>
//           <li>
//             <LocalShippingIcon className="icon" />
//             <span>Delivery</span>
//           </li>
//           <p className="title">USEFUL</p>
//           <li>
//             <InsertChartIcon className="icon" />
//             <span>Stats</span>
//           </li>
//           <li>
//             <NotificationsNoneIcon className="icon" />
//             <span>Notifications</span>
//           </li>
//           <p className="title">SERVICE</p>
//           <li>
//             <SettingsSystemDaydreamOutlinedIcon className="icon" />
//             <span>System Health</span>
//           </li>
//           <li>
//             <PsychologyOutlinedIcon className="icon" />
//             <span>Logs</span>
//           </li>
//           <li>
//             <SettingsApplicationsIcon className="icon" />
//             <span>Settings</span>
//           </li>
//           <p className="title">USER</p>
//           <li>
//             <AccountCircleOutlinedIcon className="icon" />
//             <span>Profile</span>
//           </li>
//           <li>
//             <ExitToAppIcon className="icon" />
//             <span>Logout</span>
//           </li>
//         </ul>
//       </div>
//       <div className="bottom">
//         <div
//           className="colorOption"
//           onClick={() => dispatch({ type: "LIGHT" })}
//         ></div>
//         <div
//           className="colorOption"
//           onClick={() => dispatch({ type: "DARK" })}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
// import React from 'react'
// import './sidebar.css'

// function Sidebar() {
//   return (
//     <aside className='side-conatiner'>
//        <span >Current Session: 2022-23</span>
//        <ul >
//         <li className='list-items'><i className="material-icons" style={{fontSize:24}}>dashboard</i><span>Dashboard</span></li>
//        <li className='list-items'><i class='fa fa-user' style={{fontSize:24}}></i><span>My Profile</span></li>
//         <li className='list-items'><i class="fa fa-money ftlayer"></i>Fees</li>
//         <li className='list-items'><i class="fa fa-file-video-o ftlayer"></i>Online Course</li>
//         <li className='list-items'><i class="fa fa-video-camera ftlayer"></i>Zoom Live Classes</li>
//        <li className='list-items'><i class="fa fa-video-camera ftlayer"></i>Gmeet Live Classes</li>
//        <li className='list-items'><i class="fa fa-calendar-plus-o ftlayer"></i>Class Timetable</li> 
//         <li className='list-items'><i class="fa fa fa-list-alt ftlayer"></i>Lesson Plan</li>
//          <li className='list-items'><i class="fa fa-list-ol ftlayer"></i>Syllabus Status</li>
//           <li className='list-items'><i class="fa fa-flask ftlayer"></i>HomeWork</li> 
//          <li className='list-items'><i class="fa fa-rss ftlayer"></i> Online Exam</li>
//           <li className='list-items'><i class="fa fa-check-square ftlayer"></i>Apply Leave</li>
//            <li className='list-items'><i class="fa fa-check-square ftlayer"></i>VisitorBook</li>
//            <li className='list-items'><i class="fa fa-download ftlayer"></i> DownLoad Center <i class="fa fa-angle-left pull-right"></i> </li>
//           <li className='list-items'><i class="fa fa-calendar-check-o ftlayer"></i>Attendence</li>
//         <li className='list-items'><i class="fa fa-map-o ftlayer"></i>Examinations <i class="fa fa-angle-left pull-right"></i></li>
//         <li className='list-items'><i class="fa fa-envelope ftlayer"></i>Notice Board</li>
//         <li className='list-items'><i class="fa fa-user-secret ftlayer"></i>Teachers Reviews</li>
//         <li className='list-items'><i class="fa fa-book ftlayer"></i>Library <i class="fa fa-angle-left pull-right"></i></li>
//         <li className='list-items'><i class="fa fa-bus ftlayer"></i> Transport Routes</li>
//         <li className='list-items'><i class="fa fa-building-o ftlayer"></i> Hostel rooms </li>
      
       
        
       
       
    
//          </ul> 
//      </aside> 
//   )
// }

// export default Sidebar
// 



import Logo from '../img/logo.png'
import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList/>
        }
    ]
    return (
        <div >
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo"></h1> */}
                   <img src={Logo} style={{width: "194px", marginRight: "30px"}}/>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                       {/* <FaBars/> */}
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;

























