// import React from 'react';

// const Topbar = () => {
//     return (
//         <div>
//             <h1 style={{height:70, backgroundColor: 'red', marginLeft:-20}}>Navbar</h1>
//             {/* <h1>hlo</h1> */}
//         </div>
//     );
// };

// export default Topbar;
import React,  { useState } from 'react'
import './topbar.css'
import { useNavigate } from 'react-router-dom'

// import {useNavigate}
//import Logo from '../img/logo.png'
import Flag from '../img/usa.jpg'
import Modal from 'react-modal';
import Sidebar from './Sidebar'
import Profile from './Profile'
import DrapdownProfile from './DrapdownProfile'

function Topbar(props) {
  const [showParagraph, setShowParagraph] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showcalender, setShowcalender] = useState(false)
    const [isChecked, setIsChecked] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const [showchat, setShowchat] = useState(false)
    const [taskhandle, setTaskHandle] = useState(false)

    const toggleVisibility = () => {
      setIsHidden(!isHidden);
    };
    const history = useNavigate();
   
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
    const handleTask = () =>{
      history('/tasks');
    }
    const handleCalender = () =>{
      history('/calender')
    }
    const handleChatApp = () =>{
      history('/chat')
    }
    const handleProfile = () =>{
      setShowParagraph(!showParagraph);
    }
    const customStyles = {
        content: {
          width: '50%',
          height: '50%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#fff',
        },
      };
      const cardStyle = {
        width: '200px',
        height: '27vh',
        border: '1px solid black',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: '87rem',
        boxShadow: "2px 2px 3px 2px gray"
        
      };
      
      const imageStyle = {
        width: '100px',
        height: '100px',
       
        marginBottom: '10px',
        marginLeft: "-93px"
      };
      
    
    const [isModalOpen, setIsModalOpen] = useState(false);
   
    const handleOpenModal = () => {
        setIsModalOpen(true);
      };
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };
      
     
      
      
  return (
    <>
    <header className='top-container'>
         {/* <img src={Logo} alt='logo' className='logo'/>
         <i className="fa fa-bars" style={{fontSize:24,color:'#fff', padding: 20}}></i> */}
        {/* <span className='title'>Mount Carmel School</span> */}
        
         <div class="hover-container">
        {/* <select >
            <option> <img src={Flag} alt='usaflag'style={{width: 30, height: 30}} /> English</option>
            <option>EUR (€)</option>
            <option>INR (₹)</option>
            <option>RUB (RUB)</option>
        </select> */} 
        <img src={Flag} alt='usaflag'style={{width: 30, height: 23, marginLeft:"70rem"}} />
         
        <span class="show-text">English</span>
        </div>
        <div className='hover-container2'>
        <select className='dropdown'>
            <option>USD</option>
            <option>EUR (€)</option>
            <option>INR (₹)</option>
            <option>RUB (RUB)</option>
        </select>
        <span className='show-text2'>Currency</span>
        </div>
        <div className='hover-container3'>
        <span onClick={handleOpenModal} className='btn' style={{fontSize: 32, marginLeft: 30}}>&#8644;</span>
        <span className='show-text2'>SwithClass</span>
        </div>
        <div>
      
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} contentClassName="custom-modal-content"style={customStyles}>
      <i class="fa fa-close" style={{fontSize:24, color:'black',marginLeft: 700}} onClick={handleCloseModal}></i>
        <h2>Switch Class</h2>
        <label className='checkbox'>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}    
        />
       Class 3 (A)
      </label>
      <button onClick={handleCloseModal}>Update</button>
      </Modal>
    </div >
    <div className='hover-container2'>
    <i class="fa fa-calendar" style={{marginTop: 18,fontSize:36}} onClick={handleCalender}></i>
    <span className='show-text2' >Calender</span>
    </div>

    <div className='hover-container3' style={{margin: 14}}>
    <span onClick={toggleVisibility} style={{fontSize: 29, margin: 21}} > &#9989;</span>
    <span className='show-text2'  style={{width: 40}}>Task</span>
    {/* { !isHidden && <p style={{width: 300}} className='task'> Today You Have 0 Pending Task. <a onClick = {handleTask}style={{cursor: 'pointer', color: 'gray'}}>View All</a></p>} */}
    {/* {taskhandle && <TodoList/>} */}
    </div>
    <div className='watsupicon'>
    <i class="fa fa-whatsapp" style={{fontSize:36}} onClick={handleChatApp}></i>
    <span className='show-text2'>chat</span>
    </div>
    <div className="item" onClick={handleProfile}>
                    <img
                    src="https://demo.smart-school.in/uploads/student_images/1679478951-1009523138641ad0a7462fe!1.jpg?1686739357?1686739357"
                    alt=""
                    className="avatar"
                    />
      </div>
      
    </header>
    {showParagraph && <DrapdownProfile/>}
  { !isHidden && <span className="tasktext" > Today You Have 0 Pending Task. <a onClick = {handleTask}style={{cursor: 'pointer', color: 'gray'}}>View All</a></span>} 
    {/* {showText && <span> </span>} */}
    {/* { !isHidden && <span style={{width: 300, marginLeft: "81rem"}} className='task'> Today You Have 0 Pending Task. <a onClick = {handleTask}style={{cursor: 'pointer', color: 'gray'}}>View All</a></span>} */}
    {/* {showParagraph &&  <span style={cardStyle}>
      <img src="https://st.depositphotos.com/1224365/2408/i/600/depositphotos_24084839-stock-photo-portrait-of-a-normal-boy.jpg" alt="Profile" style={imageStyle} />
      <h3 className='head'>John Doe</h3>
      <span>student</span>
      <span>Change password</span>
      <span>Logout</span>
    </span>} */}
    {/* {showParagraph && <span style={{background: "white", boxShadow: "5px 3px 5px 2px gray", marginLeft:"82rem"}}><img src="https://demo.smart-school.in/uploads/student_images/1679478951-1009523138641ad0a7462fe!1.jpg?1686739357?1686739357"/><span>Edwards Thomas student</span></span>} */}
    {/* <Sidebar/> */}
    </>
  )
}

export default Topbar;