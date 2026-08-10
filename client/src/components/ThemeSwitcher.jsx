import { useState, useEffect } from "react";
import '../styles/Theme.css';
import { Flashlight,  FlashlightOff } from 'lucide-react';
import Fromserver from "./Respon";
import ForAdmins from "./Admin";
function ThemeSwitcher() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (
        
        <div id="Theme-css" className={theme}>
            <h1 className="text-5xl font-extrabold m-3  text-center tracking-wide">
  Theme Switcher
</h1>
            <h2>
                {theme === "light" ?
                    <div > <Flashlight className="m-4 w-12 h-12  transition-all duration-300 hover:scale-110 " /></div>
                    : <div> <FlashlightOff className="m-4 w-12 h-12  transition-all duration-300 hover:scale-110" /></div>
}
            </h2 >
    <button onClick={handleTheme} className="bg-gray-500 font-inter p-5 text-1xl md:text-2xl  rounded-full shadow-xl transition-all duration-300 hover:scale-110">
        Switch Theme
    </button>
    <Fromserver />
    <ForAdmins />
        </div >
    );
}

export default ThemeSwitcher;