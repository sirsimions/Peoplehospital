import React, {useState, useEffect} from 'react'


function InforHolder(props, {id}){


    const array= props.arrayObj
    const onDeleteDoct =props.onDeleteDoct
    const doct =props.doct

    console.log(array)

    const [doctorName, setDoctorName] = useState([])  
    
    useEffect(()=>{
        fetch('/doctors')
        .then((res)=>res.json())
        .then(setDoctorName)
      }, [])
      
    console.log(setDoctorName)


    function handleDeleteDoct(deletedDoct) {
        setDoctorName((doctorName) =>
          doctorName.filter((doct) => doct.id !== deletedDoct.id)
        );
      }
    
      function handleDeleteDoct() {
        fetch(`/doctors/${id}`, {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            onDeleteDoct(doct);
          }
        });
      }
    


      function handleDeleteDoct(deletedDoct) {
        setDoctorName((doctorName) =>
        doctorName.filter((doct) => doct.id !== deletedDoct.id)
        );
      }
    return(
  <>
      
  <tr>
      <td>{array.title}</td>
      <td>{array.name}</td>
      <td>{array.specialization}</td> 
        <button onClick={handleDeleteDoct}>X</button>
  </tr>

</>
  
    )
}

export default InforHolder;