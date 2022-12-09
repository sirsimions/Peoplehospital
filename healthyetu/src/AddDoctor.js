import React, {useState, useEffect} from 'react'

function AddDoctor(props){

    // const doctorName= props.doctorName
    // const setDoctorName= props.setDoctorName

    const [doctorName, setDoctorName] = useState([])  

    
    useEffect(()=>{
      fetch('/doctors')
      .then((res)=>res.json())
      .then((data)=>{
        setDoctorName(data)
      })
    }, [])
   
    const [postDoctorDetails, setPostDetails] = useState({})
    

    function handleSubmit(e){
        e.preventDefault()
        e.target.reset()
      
        fetch("/doctors",{
           method: "POST",
           headers: {"Content-Type": "application/json"},
           body:JSON.stringify(postDoctorDetails)
        })
        .then(resp=>resp.json())
        .then(details=>{
          setDoctorName([
            ...doctorName,
            details
          ])
        })
    
        window.alert("Your data is submitted successfully")
      }
      
      function handleChange(e){
        setPostDetails({
          ...postDoctorDetails,
          [e.target.name]:e.target.value
        })
      }


      // function handleDeleteDoct(deletedDoct) {
      //   setDoctorName((doctorName) =>
      //     doctorName.filter((doct) => doct.id !== deletedDoct.id)
      //   );
      // }


    return (
        <>
        <form onSubmit={handleSubmit} className="field1">
            <label className="field" id='hed'>Doctors' Registration Form</label>
            <input onChange={handleChange} name="registration No." type="number" placeholder="Registration No" className="field"/>
            <input onChange={handleChange} name="title" type="text" placeholder="Title: Prof./Dr./Mr./Mss." className="field"/>
            <input onChange={handleChange} name="name" type="text" placeholder="Enter your name" className="field"/>
            <input onChange={handleChange} name="specialization" type="text" placeholder="Enter your specialization" className="field"/>
            <input onChange={handleChange} name="current institution of practice" type="text" placeholder="Enter your institution/hospital" className="field"/>
            <input onChange={handleChange} name="years of experience" type="number" placeholder="Experience" className="field"/>
            <button type='submit' id='submt'>Submit Data</button>

            {/* <section className="spice-list">
          {doctorName.map((doct) => (
            <InforHolder
              key={doct.id}
              doct={doct}
              onDeleteDoct={handleDeleteDoct}
            />
          ))}
        </section> */}
        </form>
        
        
        </>
    )
}

export default AddDoctor;