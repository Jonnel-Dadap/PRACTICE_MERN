import React from "react";
import { useState } from "react";
import Timer from "./Timer";

function SwitchForTimer(){
    const [show,setShow] = useState(true);
    return(
        <>
        
        <h1>====== Start Timer ====== </h1>
        <button onClick={()=>setShow(false)}>Remove Timer</button>
        <button onClick={() =>setShow(true)}>Start Timer</button>
        {show && <Timer />}
        </>
    )

};

export default SwitchForTimer