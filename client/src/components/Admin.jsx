import React, { useEffect, useState } from "react";
import CardForAdmin from "./CardForAdmin";
function ForAdmins() {
    const [admins, setAdmin] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/specialuser/fetch")
            .then((response) => response.json())
            .then((data) => {
                setAdmin(data);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
            });
    }, []);
    return (
        <>
            <h1 className="text-lg m-5 font-mono font-bold ">specialuser List</h1>
            <div className="arran">
                {admins.map((admin) => (
                    <div className="Cards"  >
                        <CardForAdmin admin={admin} key={admin.id} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default ForAdmins;