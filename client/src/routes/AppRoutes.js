import React from "react";
// routes/AppRoutes.jsx

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Todolist from "../pages/Todolist";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Practice from "../pages/Practice";
import TestHooks from "../pages/PracHooks";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/todolist" element={<Todolist />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/practiceHooks" element={<TestHooks />} />
        </Routes>
    );
}

export default AppRoutes;