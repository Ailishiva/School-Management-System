
// import React from 'react';
// 

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import React from 'react'
// import './App.css';
// import Topbar from './Components/Topbar'
// import Sidebar from './Components/Sidebar';
// import ReactBigCalendar from './Components/Calender';
// import TodoList from "./Components/TodoList";

// import About from './Components/pages/About';
// import Comment from './Components/pages/Comment';
// import Product from './Components/pages/Product';
// import ProductList from './Components/pages/ProductList';
// import Analytics from './Components/pages/Analytics';
// import Calender from "./Components/Calender";
// import Chat from "./Components/Chat";
// import DashBoard from './Components/DashBoard';
// function App() {
//   return (
//       <BrowserRouter>
//       <Topbar>
//       <Sidebar>

//         <Routes>
//           {/* <Route path="/" element={<Topbar/> } /> */}
//           <Route path="/Tasks" element={<TodoList />} />
//           <Route path="/calender" element= {<ReactBigCalendar/>}/>
//           <Route path="/chat" element={<Chat/>}/>
//           <Route path='/' element={<DashBoard/>}/>
//           <Route path="/about" element={<About />} />
//           <Route path="/comment" element={<Comment />} />
//           <Route path="/analytics" element={<Analytics />} />
//           <Route path="/product" element={<Product />} />
//           <Route path="/productList" element={<ProductList />} />
//         </Routes>
//       </Sidebar>
//       </Topbar>
//       </BrowserRouter>
     
//   )
// }

// export default App


import "./App.css";

import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from "./Components/Sidebar";
import About from "./Components/pages/About";
import Dashboard from "./Components/pages/Dashboard";
import Analytics from "./Components/pages/Analytics";
import Comment from "./Components/pages/Comment";
import Product from "./Components/pages/Product";
import ReactBigCalendar from "./Components/Calender";
import ProductList from "./Components/pages/ProductList";
const App = () => {
  return (
    <BrowserRouter>
   
      <Sidebar>     
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/Calender" element={<ReactBigCalendar/>}/>
        </Routes>
        
      </Sidebar>
    
    </BrowserRouter>
  );
};

export default App;