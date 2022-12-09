import React, {useState, useEffect} from "react"
import InforHolder from "./InforHolder"
import * as emailjs from "emailjs-com"
import Doctor from "./Doctor"
// import emailjs from '@emailjs/browser';
// import * as emailjs from "emailjs-com";

function Patient(){

    const [user, setUser] = useState(null);

    useEffect(() => {
      // auto-login
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }, []);

    const [doctorName, setDoctorName] = useState([])  

    
    useEffect(()=>{
      fetch('/doctors')
      .then((res)=>res.json())
      .then((data)=>{
        setDoctorName(data)
      })
    }, [])

    console.log(doctorName)

    console.log(typeof(Object.values(doctorName)))
    // let newest = doctorName.map(arrayObj => {
    //   return <InforHolder 
    //           key={arrayObj.id}
    //           arrayObj={arrayObj}
    //          />
    // })
    // console.log(newest)


const initialFormState = {
    name: "",
    number: "",
    email: "",
    doctor: "",
    message: "",
};

const [contactData, setContactData] = useState({ ...initialFormState });

const handleChange = ({ target }) => {
    setContactData({
        ...contactData,
        [target.name]: target.value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            'service_4h5aa24',
            'template_z270uqc',
            e.target,
            'fLl1C2FqeYzosqfTy',
        )
        .then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            },
        );

    //reset the form after submission
    setContactData({ ...initialFormState });

    window.alert(`Message sent to the Admin. You will be contacted shortly`)

};

    if(user){
    return(
        <>
        {/* <section>
          {doctorName.map((arrayObj) => (
            <InforHolder
              key={arrayObj.id}
              arrayObj={arrayObj}
            />
          ))}
        </section> */}

          <h1 id="auth">Welcome, {user.username}!</h1>;
        
       <p> Available Doctors and their Specialization </p>

         <table className='table'>
            <tbody>
               <tr>
                 <th className='hed'>Title</th>
                 <th className='hed'>Name</th>
                 <th className='hed'>Specialization</th>
                 <th className='hed'>Remove</th>
               </tr>
               {doctorName.map((arrayObj) => (
            <InforHolder
              key={arrayObj.id}
              arrayObj={arrayObj}
            />
          ))}
            </tbody>
          </table>

        <form onSubmit={handleSubmit} className="field2">
        <label className="field" id='hed'>Fill in the form below to book an appointment with a doctor</label>
          <label>Name</label>
          <input type="text" name="name" onChange= {handleChange} value={contactData.name} className="field"/>
          <label>Mobile number</label>
          <input type="number" name="number" onChange= {handleChange} value={contactData.number} className="field"/>
          <label>Email</label>
          <input type="email" name="email" onChange= {handleChange} value={contactData.email} className="field"/>
          <label>Doctor's name</label>
          <input type="text" name="doctor" onChange= {handleChange} value={contactData.doctor} className="field"/>
          <label>Message</label>
          <textarea name="message" onChange= {handleChange} value={contactData.message} placeholder="Include the name of the doctor in your message here" className="field"/>
          <input type="submit" value="Send" id='submt'/>
        </form>
        </>
    )

} else {
        
    return <h1 id="auth">login or sign up</h1>;
  }

}
export default Patient;


