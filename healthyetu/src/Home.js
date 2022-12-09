import React from "react";

import {useEffect, useState} from "react"

function Home(  ){

    const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


    if (user) {
    return(
        <>

        <h1 id="auth">Welcome, {user.username}!</h1>;

        <div className="textbox">
        <div className="welcome">People's Hospital</div>
        <p className="txt">Welcome to the people's hospital</p>
        <p className="txt">People's hospital is an app that links patients to doctors across the globe</p>
        <p className="txt">We ensure that you can access quality medical care at the comfort of your home.<br/> You can consult a doctor or get medical advice  on a 
           disease, condition, or disorder that does not require lab tests. <br/>We want to save you the time you would need to queue at a medical facility's triage.<br/>
           Our motto is connecting people to their personal doctor's wherever they are
        </p>
        </div>

        <div >
            <table className="services">
                <tbody>
                    <tr>
                        <th className='hed'>S/N</th>
                        <th className='hed'>Services</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nutrition</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Family planning</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Mental Health</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Reproduction Health</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Sex Education</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Weight Management</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Smoking Ceasation</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Drinking Ceasation</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Behavioral Disease Management</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Cancer Management through Diet</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Doctors pharmaceutical advice on mild symptoms</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        {/* <div className="tab"><NavLink to='/patient' className="tx">Get a doctor's advice</NavLink></div> */}

        </>
    )

      } else {
        
        return <h1 id="auth">login or sign up</h1>;
      }

}

export default Home;


