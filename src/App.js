import React from 'react';
import './App.css';
//import Home from './components/Home';
import logo from './logom.png';
import Newsfeed from './components/Newsfeed';
import AllRoutes from "./components/AllRoutes";
import Contacts from "./components/Contacts";
import Home from './components/Home';
import Boards from './components/Boards';
import Organizations from './components/Organizations';
import Followers from './components/Followers';
import PersonalProgress from './components/PersonalProgress';
import Tasks from './components/Tasks';
import  Albums from './components/Albums';
import Projects from './components/Projects';
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';

function App() {
  return (
    <div className="container">

     <div className='App'> 
     <img src= {logo} alt='Logo' style={{width:'50px', height: 'auto',marginLeft:'20px',backgroundColor:"aliceblue"}}/>
      <span style={{marginLeft:"20px",marginTop:"15px"}}> Home</span>
     </div>

     <div className='inbu'>
     <input  type='text' placeholder=' Yoe! User Share some progress' style={{width:"90%",marginLeft:"20px",borderRadius:'9px',border:"solid 1px grey",height:"30px"}}/>
     <button style={{marginLeft:"20px",width:"70px",backgroundColor:"red",color:"white", border :"none",height:"30px"}}>Post</button>
     </div>  

<Router>
<div className="column-container">
       <Newsfeed/>
      
      <AllRoutes/>

      <div className="content">
        <Routes >        
        <Route path="/" element={<Home/>} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Organizations" element={<Organizations />} />
        <Route path="/Followers" element={<Followers />} />
        <Route path="/Boards" element={<Boards />} />
        <Route path="/PersonalProgress" element={<PersonalProgress />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/projects" element={<Projects />} />
        </Routes>
        </div>
      </div>
</Router>
    
    
    </div>
  );
}

export default App;
