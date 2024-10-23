import React from 'react';
import { NavLink } from 'react-router-dom';


function AllRoutes() {
  return (
   
        <div style={{  border: '1px solid black', backgroundColor:"orange",marginRight:'40px',height:'fit-content' }}>
          
            <nav style={{backgroundColor:"aquamarine"}}>
            <h4>Links to different pages</h4> 
            <ol>
          <li><NavLink exact to="/"> Home </NavLink></li>
          <li><NavLink to="/Contacts"> Contacts</NavLink></li>
          <li><NavLink to="/Organizations">Organizations</NavLink></li>
          <li><NavLink to="/Followers">Followers</NavLink></li>
          <li><NavLink to="/Boards">Boards</NavLink></li>
          <li><NavLink to="/PersonalProgress">Personal Progress</NavLink></li>
          <li><NavLink to="/Tasks">Tasks</NavLink></li>
          <li><NavLink to="/Albums">Albums</NavLink></li>
          <li><NavLink to="/Projects">Projects</NavLink></li>
            </ol>
            </nav>

                </div>
        
    
  )
}

export default AllRoutes