import React from "react";

const Student = ({name, course }) =>{
    return(
        <>
        <h2>Name: {name}</h2>
        <p>Course: {course}</p>
        </>
    );
}
export default Student;