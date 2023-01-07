import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import Research from './pages/Research';
import Projects from './pages/Projects';
import Login from './login';
import Admin from './Dashboard/Admin';
import Mentor from './Dashboard/Mentor';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/members' element={<Members/>}></Route>
        <Route path='/research' element={<Research/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/mentor' element={<Mentor/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
