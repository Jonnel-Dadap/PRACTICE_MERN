import React from "react";
import { useNavigate } from "react-router-dom";
import Test from "../Test";

const About = () =>{
    const Navigate = useNavigate();

    const handleRedirection = () =>{
        Navigate('/')
    };


    return(
       <>
       <div>
        <h2> WELTOME TO ABOUT</h2>
        <p>ang page na to is ginawa ko para sa pag practice ng handle ng mga redirection page.</p>
       </div>
       <div>
         <button onClick={handleRedirection}>BacK</button>
       </div>
       <div>
        <Test />
       </div>
       
    
       </>
    );
}

export default About;