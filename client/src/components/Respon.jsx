import React, { useEffect, useState } from "react";
import CardApi from "./CardApi"
function Fromserver() {
    const [viewers, setViewers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/viewers/fetch")
            .then((response) => response.json())
            .then((data) => {
                setViewers(data);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
            });
    }, []);
    return (
        <>
            <h1 className="text-lg m-5 font-mono font-bold ">Viewers List</h1>
            <div className="arran">
                {viewers.map((viewer) => (
                    <div className="Cards" key={viewer.id}>
                        <CardApi viewer={viewer} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Fromserver;