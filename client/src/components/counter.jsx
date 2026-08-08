import { useState } from "react";



const IncrementAndDecrement = () =>{


const [count, setCount] = useState(0);

 const handleReset = function() {
  setCount(0);
 }

 return(
    <>
     <h1>Current value: {count}</h1>
     <button onClick={() => setCount(count + 1)}>Increment</button>
     <button onClick={() => setCount(count - 1)}>Decrement</button>
     <button onClick={handleReset}>Reset to Zero?</button>
    </>
    
 )
}
export default IncrementAndDecrement;