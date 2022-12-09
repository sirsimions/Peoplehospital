// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import * as emailjs from "emailjs-com";
 
function EmailContactForm(){

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
};
 
 return (
    <>
        <Patient handleSubmit= {handleSubmit} handleChange= {handleChange} contactData= {contactData} />
    </>
 );
};
 
export default EmailContactForm;
