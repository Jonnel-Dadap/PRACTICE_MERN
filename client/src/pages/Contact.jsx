import React from "react";
import { useNavigate } from "react-router-dom";


const Contact = () =>{
    const Navigate = useNavigate();

    const handleRedirection = () =>{
        Navigate(-1);
    };

    return(
        <>
        <h1>Contact Page.</h1>
        <p>Contact us to Bluetooth</p>
        <button onClick={handleRedirection}>back to previos page?</button>
        </>
    );
}

export default Contact;