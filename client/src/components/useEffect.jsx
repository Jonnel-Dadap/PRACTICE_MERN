
import { useEffect } from "react";

function Console(){
    useEffect(()=>{
        console.log("Test For Hooks")
        console.log(1 + "1");
    },[])
}

export default Console;