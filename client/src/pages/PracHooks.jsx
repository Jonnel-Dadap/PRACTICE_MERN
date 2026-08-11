import React from "react";
import { useNavigate } from "react-router-dom";
// import Console from "../components/useEffect";
// import SwitchForTimer from "../components/UIForTimer";
// import ThemeSwitcher from "../components/ThemeSwitcher";
import Console from '../components/useEffect'
import SwitchForTimer from '../components/UIForTimer'
import ThemeSwitcher from '../components/ThemeSwitcher'


function TestHooks() {
    const Navigate = useNavigate();
    const handleRedirection = () => {
        Navigate('/')
    };
    return (
        <>
            < Console />
            <h1>this page is for Practice Hooks</h1>
            <button onClick={handleRedirection}>Back to Home Page</button>
            <div>
                <h1> OUT PUT of Experiment.</h1>
                <SwitchForTimer />
                <ThemeSwitcher />
            </div>
        </>
    )
}
export default TestHooks;