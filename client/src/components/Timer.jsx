import { useState, useEffect } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        console.log("Timer Started");
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        return () => {
            console.log("Timer Stopped");
            clearInterval(interval);
        }
    }, []);
    return (
        <div>
            <h1>Timer: {seconds}s</h1>
        </div>
    );
}
export default Timer;