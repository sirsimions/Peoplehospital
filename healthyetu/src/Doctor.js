import React, {useState, useEffect} from 'react'
import AddDoctor from "./AddDoctor"
// import Patient from '../Patient'
// import InforHolder from './InforHolder'
// import Home from './Home'

function Doctor(props){

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  const doctorName = props.doctorName
  const setDoctorName = props.setDoctorName

  if (user) {
    return (
      <>
      <h1 id="auth">Welcome, {user.username}!</h1>;
      <div className="App">

        < AddDoctor doctorName =  {doctorName} setDoctorName = {setDoctorName}/>
        
         <p className='fll'>Fill in the form above to enter your details in our database</p>
         
      </div>
      </>
    );

  } else {
        
    return <h1 id='auth'>login or sign up</h1>;
  }


  }

  export default Doctor;


