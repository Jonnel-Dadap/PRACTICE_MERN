import React from "react";
import { useNavigate } from "react-router-dom";
import Test from "../Test";
import UserCard from '../components/UserCard' //child practice
import IncrementAndDecrement from "../components/counter";
import Todo from "../components/Todo";
import '../styles/card.css';

const Practice = () => {
    const Navigate = useNavigate();

    const handleRedirection = () => {
        Navigate('/')
    };
    const users = [
        { username: "Jonnel", age: 20, status: "Admin" },
        { username: "Juan", age: 21, status: "Teacher" },
        { username: "Maria", age: 22, status: "Student" },
        { username: "Baron", age: 23, status: "Admin" }
    ];
    return (
        <>
            <div className="head-text"> <Test /> </div>
            <button onClick={handleRedirection}>Back to home?</button>
            <div className="arran">
                {
                    users.map((user) => (

                        <div className="Cards">
                            <UserCard
                                user={user}
                            />
                        </div>
                    ))
                }
            </div>
            <div> <IncrementAndDecrement /> </div> 
            <div> <Todo /> </div>  
        </>
    );
}

export default Practice;