import React from 'react'
import { Route, Routes } from 'react-router-dom'
/* Components */
import Home from './components/Home'
import Todolist from './components/Todolist'
import Practice from './components/Practice'
import Contact from './components/Contact'
import About from './components/About'
import TestHooks from './components/PracHooks'
const App = () => {
  return (
    <div className="app-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/todolist" element={<Todolist />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/practiceHooks" element={<TestHooks />} />
      </Routes>
    </div>
  );
}
export default App
