import {NavLink} from 'react-router-dom';
// import { useEffect, useState } from 'react';
import "./Navbar.css"

function NavBar(props) {

 const user=props.user 
 const setUser=props.setUser


    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }    


    let linkStyle = isActive => isActive? 'active' : 'inactive';

    return (
        <div className='navs'>
         
            <>
            {/* <NavLink to='/login' className={({isActive}) => linkStyle(isActive)} >Login</NavLink> */}
            <NavLink to='/' className={({isActive}) => linkStyle(isActive)} >Home</NavLink>
            <NavLink to='/doctor' className={({isActive}) => linkStyle(isActive)}>Doctors' Page</NavLink>
            <NavLink to='/patient' className={({isActive}) => linkStyle(isActive)}>Patient</NavLink>
            {/* <NavLink to='/signup' className={({isActive}) => linkStyle(isActive)}>Signup</NavLink> */}
            </>
             
            <div>
        {user ? (
          <button onClick={handleLogoutClick} className= 'lgout'>Logout</button>
        ) : (
          <div id= 'lgout1'>
            <NavLink to='/signup' className= 'lout' >Signup</NavLink>
            <NavLink to='/login' className= 'lout' >Login</NavLink>
            {/* <button onClick={handleLogoutClick} className= 'lout' id='bt'>Logout</button> */}
          </div>
        )}
           </div>
        
        </div>
    )
}

export default NavBar;