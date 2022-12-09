import {Routes, Route} from "react-router-dom";
import React, {useState, useEffect} from 'react'
import NavBar from "./Navbar"
import Doctor from "./Doctor"
import Patient from  "./Patient"
import Home from "./Home"
import Login from "./Login"
import SignUp from "./SignUp"
import "./App.css"

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  
    return (
      <>

    <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path='/login' element={<Login user={user}/>}/>
        <Route path='/' element={<Home />}/>
        <Route path='/doctor' element={<Doctor />}/>
        <Route path='/patient' element={<Patient />}/>
        <Route path='/signup' element={<SignUp setUser={setUser}/>}/>
     </Routes>

      </>
    )
  }
  
  export default App;
  