import React from "react";

const UserCard = ({ user }) => {

    return (
        <>
            <h3>{user.username}</h3>
            <p>{user.age}</p>
            <p>{user.status === "Admin" ?
             "Access Admin Dashboard" : 
             user.status === "Student" ?
              "Access Student Dashboard" :
               "Access Teacher Dashboard"}</p>

        </>
    )

}
export default UserCard;      // child